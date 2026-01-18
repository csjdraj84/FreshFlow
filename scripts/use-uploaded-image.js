const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();
const UPLOADED_IMAGE_PATH = '/Users/dhanarajjayapalan/.gemini/antigravity/brain/de25e096-2d47-4d18-843e-a3c7aa4679c1/uploaded_image_1768660058287.jpg';
const TARGET_NAME = 'Applied Nutrition Unflavoured Creatine Monohydrate Powder, 250g';
const DEST_FILENAME = 'applied_nutrition_unflavoured_creatine_monohydrate_powder__250g_user.jpg';

const IMAGE_DIR = path.join(__dirname, '../public/images/products');

async function updateImage() {
    try {
        if (!fs.existsSync(UPLOADED_IMAGE_PATH)) {
            console.error('Uploaded file not found at:', UPLOADED_IMAGE_PATH);
            return;
        }

        // Copy file
        const destPath = path.join(IMAGE_DIR, DEST_FILENAME);
        fs.copyFileSync(UPLOADED_IMAGE_PATH, destPath);
        console.log(`Copied image to ${destPath}`);

        const item = await prisma.item.findFirst({
            where: { name: TARGET_NAME }
        });

        if (!item) {
            console.error('Item not found in database!');
            return;
        }

        const localDbPath = `/images/products/${DEST_FILENAME}`;
        await prisma.item.update({
            where: { id: item.id },
            data: { imagePath: localDbPath }
        });

        console.log(`Database updated successfully. New path: ${localDbPath}`);
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

updateImage();
