const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { PrismaClient } = require('@prisma/client');
const urlModule = require('url');

const prisma = new PrismaClient();
const TARGET_NAME = 'BREEZE Liquid Detergent, Fragrance of Comfort, 3.6kg';
const DEST_FILENAME = 'breeze_liquid_detergent_fragrance_of_comfort_3_6kg_fixed.jpg';
const IMAGE_DIR = path.join(__dirname, '../public/images/products');

function downloadImage(currentUrl, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(IMAGE_DIR, filename);

        const request = https.get(currentUrl, (response) => {
            // Handle Redirects
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
                    console.log(`Downloaded image to ${filepath}`);
                    resolve(`/images/products/${filename}`);
                });
            } else {
                reject(new Error(`Failed to download: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
            reject(err);
        });
    });
}

async function findAndFixImage() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        const query = encodeURIComponent('BREEZE Liquid Detergent Fragrance of Comfort 3.6kg');
        await page.goto(`https://www.google.com/search?q=${query}&tbm=isch`, { waitUntil: 'networkidle2' });

        // Wait for images to load
        await page.waitForSelector('img');

        // Get the first few image URLs that are NOT base64 if possible, or just click the first one?
        // Google Images structure is complex. Let's just try to find an 'img' with 'http' src that looks decent.
        // Or specific selector for result images.

        const imageUrl = await page.evaluate(() => {
            // Select standard result images
            const images = Array.from(document.querySelectorAll('div[jsname="dTDiAc"] img'));
            // Try to find one with a src that starts with http
            for (const img of images) {
                if (img.src && img.src.startsWith('http')) {
                    return img.src;
                }
            }
            return null;
        });

        if (imageUrl) {
            console.log(`Found image URL: ${imageUrl}`);

            const item = await prisma.item.findFirst({ where: { name: TARGET_NAME } });
            if (item) {
                const localPath = await downloadImage(imageUrl, DEST_FILENAME);
                await prisma.item.update({
                    where: { id: item.id },
                    data: { imagePath: localPath }
                });
                console.log('Database updated.');
            } else {
                console.error('Item not found in DB');
            }
        } else {
            console.error('No image found');
        }

    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        await browser.close();
        await prisma.$disconnect();
    }
}

findAndFixImage();
