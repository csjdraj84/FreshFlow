const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ORDER_FILE = path.join(__dirname, '../data/current-order.json');
const AMAZON_URL = 'https://www.amazon.sg/alm/storefront?almBrandId=QW1hem9uIEZyZXNo';

async function placeOrder() {
    if (!fs.existsSync(ORDER_FILE)) {
        console.error('No current order file found.');
        return;
    }

    const items = JSON.parse(fs.readFileSync(ORDER_FILE, 'utf8'));
    console.log(`Processing order for ${items.length} items...`);

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });

    const page = await browser.newPage();

    console.log('Navigating to Amazon Fresh SG...');
    await page.goto(AMAZON_URL, { waitUntil: 'networkidle2' });

    if (page.url().includes('signin') || page.url().includes('ap/signin')) {
        console.log('>>> Please log in...');
        try {
            await page.waitForFunction(() => !window.location.href.includes('signin'), { timeout: 300000 });
            console.log('Login detected.');
            await page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => { });
        } catch (e) {
            console.log('Timeout waiting for login. Continuing...');
        }
    }

    for (const item of items) {
        console.log(`Searching for: ${item.name}`);

        const searchInput = await page.$('input#twotabsearchtextbox');
        if (searchInput) {
            // Click and clear
            await searchInput.click({ clickCount: 3 });
            await searchInput.type(item.name);

            // Wait for navigation after Enter
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle2' }),
                page.keyboard.press('Enter'),
            ]).catch(e => console.log('Navigation error/timeout:', e.message));

            try {
                // Wait for results
                await new Promise(r => setTimeout(r, 2000));

                // Find Add to Cart button
                const addToCartBtn = await page.$('button[name="submit.addToCart"]');
                const addToCartInput = await page.$('input[name="submit.addToCart"]');

                const btn = addToCartBtn || addToCartInput;

                if (btn) {
                    await btn.click();
                    console.log(` -> Added to cart`);
                    await new Promise(r => setTimeout(r, 1500)); // Wait for animation
                } else {
                    console.log(` -> "Add to Cart" button not found.`);
                }
            } catch (e) {
                console.error(` -> Error adding item: ${e.message}`);
            }
        }
    }

    console.log('All items processed.');
}

placeOrder();
