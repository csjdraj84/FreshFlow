const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function deleteItems() {
    try {
        const result = await prisma.item.deleteMany({
            where: {
                name: {
                    contains: 'Ambi Pur Car Mini Clip'
                }
            }
        });

        console.log(`Successfully deleted ${result.count} items matching "Ambi Pur Car Mini Clip"`);
    } catch (e) {
        console.error('Error deleting items:', e);
    } finally {
        await prisma.$disconnect();
    }
}

deleteItems();
