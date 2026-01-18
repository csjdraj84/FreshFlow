const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const ORDER_FILE = path.join(__dirname, '../data/current-order.json');

async function restoreOrder() {
    if (!fs.existsSync(ORDER_FILE)) {
        console.log('No current-order.json found.');
        return;
    }

    const items = JSON.parse(fs.readFileSync(ORDER_FILE, 'utf8'));
    if (items.length === 0) {
        console.log('Order file is empty.');
        return;
    }

    console.log(`Restoring order with ${items.length} items...`);

    try {
        await prisma.order.create({
            data: {
                totalItems: items.reduce((sum, i) => sum + (i.quantity || 1), 0),
                items: {
                    create: items.map(item => ({
                        itemId: item.id,
                        itemName: item.name,
                        quantity: item.quantity || 1
                    }))
                }
            }
        });
        console.log('Order restored successfully.');
    } catch (e) {
        console.error('Failed to restore order:', e.message);
    } finally {
        await prisma.$disconnect();
    }
}

restoreOrder();
