const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { PrismaClient } = require('@prisma/client');
const urlModule = require('url');

const prisma = new PrismaClient();
const TARGET_NAME = 'BREEZE Liquid Detergent, Fragrance of Comfort, 3.6kg';
const DEST_FILENAME = 'breeze_liquid_detergent_fragrance_of_comfort_3_6kg_fixed.jpg';
const IMAGE_DIR = path.join(__dirname, '../public/images/products');

// Redirect link from search result (Jaya Grocer)
const PRODUCT_PAGE_URL = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFAiipkWstOAXhHQhJCtMM7ZKYh292APT8lKwS2G4-jmygA-UQjzqK9MPctl1w1AdZ64z4XNIF6_uyhutvCH6F7jAuBFoV621FkRO1UkGpZrOkm6i6mbKpPgX9GKN0ZaqZ_xNf1mx0kZg3s6wRt9e5WSogW3INjncwZF9C4t5V6DM2m19fXRvwGsp2J';

function downloadImage(currentUrl, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(IMAGE_DIR, filename);

        const request = https.get(currentUrl, (response) => {
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

async function scrapeAndFix() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        console.log(`Navigating to product page...`);
        await page.goto(PRODUCT_PAGE_URL, { waitUntil: 'networkidle2', timeout: 60000 });

        console.log(`Page loaded: ${page.url()}`);

        // Try to find the main product image. 
        // Generalized selector for ecommerce sites
        const imageUrl = await page.evaluate(() => {
            // Priority 1: Meta og:image
            const metaImg = document.querySelector('meta[property="og:image"]');
            if (metaImg && metaImg.content) return metaImg.content;

            // Priority 2: Common ecommerce image classes
            const mainImg = document.querySelector('.product-image-main img, .gallery-image, #main-image, .pdp-image img');
            if (mainImg && mainImg.src) return mainImg.src;

            // Priority 3: Largest image on screen?
            const images = Array.from(document.images);
            let largestImg = null;
            let maxArea = 0;
            for (const img of images) {
                const area = img.width * img.height;
                if (area > maxArea && img.src.startsWith('http')) {
                    maxArea = area;
                    largestImg = img.src;
                }
            }
            return largestImg;
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
            console.error('No image found on page.');
        }

    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        await browser.close();
        await prisma.$disconnect();
    }
}

scrapeAndFix();
