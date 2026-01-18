const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const https = require('https');

const prisma = new PrismaClient();
const IMAGE_URL = 'https://www.kikkoman.com/en/cookbook/assets/img/0023_feature2.jpg';
const TARGET_NAME = 'Round Cabbage 1s (Malaysia) -Chilled';
const FILENAME = 'round_cabbage_1s_malaysia_chilled_manual.jpg';

const IMAGE_DIR = path.join(__dirname, '../public/images/products');

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(IMAGE_DIR, filename);

        const request = https.get(url, (response) => {
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

async function fixImage() {
    try {
        const item = await prisma.item.findFirst({
            where: { name: TARGET_NAME }
        });

        if (!item) {
            console.error('Item not found in database!');
            // Try partial match if exact fails, sometimes names have hidden chars
            const partial = await prisma.item.findFirst({
                where: { name: { contains: 'Round Cabbage' } }
            });
            if (partial) {
                console.log(`Found similar item: ${partial.name}`);
                // Proceed with partial? Let's be safe and just log for now or fail. 
                // Actually, let's use the partial match if found.
                // But let's stick to exact logic first or use the ID from previous context if available.
                // I'll trust the name given by user is correct or close enough. 
                // Let's use the partial match logic inside the script for robustness.

                console.log(`Updating similar item: ${partial.name}`);
                const localPath = await downloadImage(IMAGE_URL, FILENAME);
                await prisma.item.update({
                    where: { id: partial.id },
                    data: { imagePath: localPath }
                });
                console.log(`Database updated successfully. New path: ${localPath}`);
                return;
            }
            return;
        }

        console.log(`Updating image for: ${item.name}`);
        const localPath = await downloadImage(IMAGE_URL, FILENAME);

        await prisma.item.update({
            where: { id: item.id },
            data: { imagePath: localPath }
        });

        console.log(`Database updated successfully. New path: ${localPath}`);
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

fixImage();
