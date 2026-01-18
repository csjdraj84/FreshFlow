import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export interface GroceryItem {
    name: string;
    tamilName?: string;
    imageUrl?: string; // Kept for backward compat, mapped from imagePath
    price?: string;
    id?: number;
    quantity?: number;
}

export interface OrderItem {
    id: number;
    orderId: number;
    itemId: number;
    itemName: string;
    quantity: number;
    item?: GroceryItem; // relation
}

export interface Order {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    totalItems: number;
    items?: OrderItem[];
}

export async function getItems(): Promise<GroceryItem[]> {
    try {
        const items = await prisma.item.findMany({
            orderBy: { createdAt: 'desc' }
        });

        return items.map(item => ({
            ...item,
            tamilName: item.tamilName || undefined,
            imageUrl: item.imagePath || undefined // Mapped to local path
        }));
    } catch (error) {
        console.error('Error reading items from DB:', error);
        return [];
    }
}

// Helper to save not needed for DB as we use Actions, 
// but kept signature if needed for scripts, though scripts should use prisma directly.

