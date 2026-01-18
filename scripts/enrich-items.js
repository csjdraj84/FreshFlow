const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DATA_FILE = path.join(__dirname, '../data/items.json');
const CONCURRENCY = 3; // Number of simultaneous tabs

async function enrichOne(page, item) {
    let changed = false;

    // 1. Translate if missing or empty
    if (!item.tamilName || item.tamilName.trim() === '') {
        try {
            const text = encodeURIComponent(item.name);
            await page.goto(`https://translate.google.com/?sl=en&tl=ta&text=${text}&op=translate`, { waitUntil: 'domcontentloaded' });
            const resultSelector = 'span[jsname="W297wb"]';

            try {
                await page.waitForSelector(resultSelector, { timeout: 3000 });
                const tamilElement = await page.$(resultSelector);
                if (tamilElement) {
                    item.tamilName = await page.evaluate(el => el.innerText, tamilElement);
                    // console.log(`[Translate] ${item.name} -> ${item.tamilName}`);
                    changed = true;
                }
            } catch {
                // Ignore timeout
            }
        } catch (e) {
            console.error(`Translation failed for ${item.name}: ${e.message}`);
        }
    }

    // 2. Image Search if missing or empty
    if (!item.imageUrl || item.imageUrl.trim() === '') {
        try {
            const query = encodeURIComponent(item.name);
            await page.goto(`https://www.amazon.sg/s?k=${query}`, { waitUntil: 'domcontentloaded' });

            const imgSelector = '.s-image';
            try {
                await page.waitForSelector(imgSelector, { timeout: 3000 });
                const imgElement = await page.$(imgSelector);
                if (imgElement) {
                    item.imageUrl = await page.evaluate(el => el.src, imgElement);
                    console.log(`[Enriched] ${item.name}`); // Log on success
                    changed = true;
                }
            } catch {
                // console.log(`[Image] No image found for ${item.name}`);
            }
        } catch (e) {
            console.error(`Image search failed for ${item.name}: ${e.message}`);
        }
    }
    return changed;
}

async function enrichItems() {
    if (!fs.existsSync(DATA_FILE)) {
        console.error('No items found.');
        return;
    }

    const allItems = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

    // Filter only items that need work
    const workQueue = allItems.filter(i => !i.tamilName || !i.imageUrl || i.tamilName === '' || i.imageUrl === '');

    console.log(`Total items: ${allItems.length}`);
    console.log(`Items needing enrichment: ${workQueue.length}`);

    if (workQueue.length === 0) {
        console.log("All items are already enriched!");
        return;
    }

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });

    let completed = 0;

    // Safety: Save every few seconds or items
    const saveInterval = setInterval(() => {
        fs.writeFileSync(DATA_FILE, JSON.stringify(allItems, null, 2));
        console.log(`...Saved progress (${completed}/${workQueue.length})`);
    }, 5000);

    // Worker function
    const worker = async (id) => {
        const page = await browser.newPage();
        // Block images/fonts to speed up? Maybe not images since we need to extract src, 
        // but often the src is in the HTML. However, let's keep it simple.

        while (workQueue.length > 0) {
            const item = workQueue.shift(); // Take one
            if (!item) break;

            try {
                await enrichOne(page, item);
                completed++;
            } catch (e) {
                console.error(`Worker ${id} error on ${item.name}: ${e.message}`);
            }
        }
        await page.close();
    };

    // Start workers
    const workers = [];
    for (let i = 0; i < CONCURRENCY; i++) {
        workers.push(worker(i));
    }

    await Promise.all(workers);

    clearInterval(saveInterval);
    fs.writeFileSync(DATA_FILE, JSON.stringify(allItems, null, 2));
    console.log('Enrichment complete.');
    await browser.close();
}

enrichItems();
