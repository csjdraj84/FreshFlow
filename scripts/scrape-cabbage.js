const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { PrismaClient } = require('@prisma/client');
const urlModule = require('url');

const prisma = new PrismaClient();
const TARGET_NAME = 'Round Cabbage 1s (Malaysia) -Chilled'; // Exact name check
// Or partial if robust:
const TARGET_NAME_PARTIAL = 'Round Cabbage';

const DEST_FILENAME = 'round_cabbage_1s_malaysia_chilled_fixed.jpg';
const IMAGE_DIR = path.join(__dirname, '../public/images/products');

const PRODUCT_PAGE_URL = 'https://www.jayagrocer.com/en/products/round-cabbage-kubis-bulat-mys-1kg'; // Direct guess or search result
// Actually, let's use the search result link if possible or search generic.
// Let's try searching specifically with puppeteer if we don't have a direct URL.
// But I saw Jaya Grocer in search results. Let's use a known clean cabbage image from a reliable source if possible.
// Or scrape Jaya Grocer search.

// Let's try a direct image URL from a search result common for this item.
// Often "https://s3.ap-southeast-1.amazonaws.com/www.fairprice.com.sg/fpol/media/images/product/XL/13009586_LXL1.jpg" is a good bet for FP items.
// Using a generic search to get a URL.

async function scrapeAndFix() {
    const browser = await puppeteer.launch({ headless: false }); // Headless false to see
    const page = await browser.newPage();

    try {
        console.log(`Searching for image...`);
        // Use Google Images again but with better selector logic? Or Bing?
        // Let's try Bing Images, sometimes easier structure.
        // Actually, let's just go to Google Images and pick the first nice cabbage.

        await page.goto(`https://www.google.com/search?q=Round+Cabbage+Malaysia&tbm=isch`, { waitUntil: 'networkidle2' });

        const imageUrl = await page.evaluate(() => {
            const images = Array.from(document.querySelectorAll('img'));
            for (const img of images) {
                if (img.src && img.src.startsWith('http') && img.width > 200) {
                    return img.src;
                }
            }
            return null;
        });

        if (imageUrl) {
            console.log(`Found: ${imageUrl}`);
            const localPath = await downloadImage(imageUrl, DEST_FILENAME);

            // Find item with partial match if exact match fails
            let item = await prisma.item.findFirst({ where: { name: TARGET_NAME } });
            if (!item) {
                console.log(`Exact match not found. Searching for "${TARGET_NAME_PARTIAL}"...`);
                item = await prisma.item.findFirst({ where: { name: { contains: TARGET_NAME_PARTIAL } } });
            }

            if (item) {
                await prisma.item.update({
                    where: { id: item.id },
                    data: { imagePath: localPath }
                });
                console.log(`Updated item: ${item.name}`);
            } else {
                console.error('Item not found in DB');
            }
        } else {
            console.error('No image found');
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
        await prisma.$disconnect();
    }
}

function downloadImage(currentUrl, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(IMAGE_DIR, filename);
        const protocol = currentUrl.startsWith('https') ? https : http;

        const request = protocol.get(currentUrl, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                let location = response.headers.location;
                if (location) {
                    location = new urlModule.URL(location, currentUrl).href;
                    downloadImage(location, filename).then(resolve).catch(reject);
                    return;
                }
            }
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(filepath);
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(`/images/products/${filename}`);
                });
            } else {
                reject(new Error(`Failed: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
            reject(err);
        });
    });
}

scrapeAndFix();
