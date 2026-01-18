const fs = require('fs');
const path = require('path');
const https = require('https');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const DATA_FILE = path.join(__dirname, '../data/items.json');
const IMAGE_DIR = path.join(__dirname, '../public/images/products');

// Ensure image directory exists
if (!fs.existsSync(IMAGE_DIR)) {
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        if (!url || !url.startsWith('http')) {
            resolve(null);
            return;
        }

        const filepath = path.join(IMAGE_DIR, filename);
        if (fs.existsSync(filepath)) {
            resolve(`/images/products/${filename}`);
            return;
        }

        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${filename}`);
                    resolve(`/images/products/${filename}`);
                });
            } else {
                file.close();
                fs.unlinkSync(filepath); // Delete failed file
                console.warn(`Failed to download ${url}: ${response.statusCode}`);
                resolve(null);
            }
        }).on('error', (err) => {
            fs.unlinkSync(filepath);
            console.error(`Error downloading ${url}: ${err.message}`);
            resolve(null);
        });
    });
}

function sanitizeFilename(name) {
    return name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
}

async function migrate() {
    if (!fs.existsSync(DATA_FILE)) {
        console.error('items.json not found!');
        return;
    }

    const items = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    console.log(`Migrating ${items.length} items to database...`);

    for (const item of items) {
        // 1. Download Image
        let localImagePath = null;
        if (item.imageUrl) {
            const filename = sanitizeFilename(item.name);
            localImagePath = await downloadImage(item.imageUrl, filename);
        }

        // 2. Insert into DB
        try {
            await prisma.item.upsert({
                where: { name: item.name },
                update: {
                    tamilName: item.tamilName,
                    imagePath: localImagePath || item.imagePath // Preserve if already set or use new
                },
                create: {
                    name: item.name,
                    tamilName: item.tamilName,
                    imagePath: localImagePath
                }
            });
            // process.stdout.write('.');
        } catch (e) {
            console.error(`\nFailed to upsert ${item.name}: ${e.message}`);
        }
    }

    console.log('\nMigration complete.');
    await prisma.$disconnect();
}

migrate();
