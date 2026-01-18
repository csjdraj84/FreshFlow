const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const TARGET_NAME = 'Round Cabbage 1s (Malaysia) -Chilled';

async function deleteItem() {
    try {
        const result = await prisma.item.deleteMany({
            where: { name: TARGET_NAME }
        });

        if (result.count > 0) {
            console.log(`Successfully deleted item: "${TARGET_NAME}"`);
        } else {
            console.log(`Item not found: "${TARGET_NAME}"`);
        }
    } catch (e) {
        console.error('Error deleting item:', e);
    } finally {
        await prisma.$disconnect();
    }
}

deleteItem();
