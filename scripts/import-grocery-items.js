
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
    console.log("Importing grocery items to Postgres...");

    const dataPath = path.join(__dirname, '../Order Data/groceryItems.json');
    if (!fs.existsSync(dataPath)) {
        console.error(`Error: File not found at ${dataPath}`);
        process.exit(1);
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const items = JSON.parse(fileContent);

    console.log(`Found ${items.length} items to import.`);

    let successCount = 0;
    let failCount = 0;

    for (const item of items) {
        try {
            // Upsert to avoid duplicates if re-running
            await prisma.item.upsert({
                where: { id: item.id },
                update: {
                    name: item.name,
                    tamilName: item.tamilName,
                    category: item.category,
                    imagePath: item.imagePath, // Keeping path relative (Vercel will serve from public/)
                },
                create: {
                    name: item.name,
                    tamilName: item.tamilName,
                    category: item.category,
                    imagePath: item.imagePath,
                },
            });
            successCount++;
        } catch (e) {
            console.error(`Failed to import item ID ${item.id}: ${e.message}`);
            failCount++;
        }
    }

    console.log(`Import finished. Success: ${successCount}, Failed: ${failCount}`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
