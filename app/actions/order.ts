"use server";

import fs from 'fs';
import path from 'path';
import { GroceryItem, prisma } from '@/lib/items';
import { revalidatePath } from 'next/cache';

const ORDER_FILE = path.join(process.cwd(), 'data/current-order.json');

// Type for the transformed order returned by getOrder
export interface OrderWithGroceryItems {
    id: number;
    totalItems: number;
    createdAt: Date;
    updatedAt: Date;
    items: GroceryItem[];
}

export async function saveOrder(items: GroceryItem[], orderId?: number) {
    try {
        // 1. Save to JSON (Legacy support) - fail silently on Vercel (Read-only FS)
        try {
            if (process.env.NODE_ENV !== 'production') {
                fs.writeFileSync(ORDER_FILE, JSON.stringify(items, null, 2));
            }
        } catch (fileError) {
            console.warn("Could not write local order file (expected on Vercel):", fileError);
        }

        // 2. Save to Database
        if (items.length > 0) {
            if (orderId) {
                // UPDATE existing order
                await prisma.$transaction(async (tx) => {
                    // Update total items
                    await tx.order.update({
                        where: { id: orderId },
                        data: { totalItems: items.reduce((sum, i) => sum + (i.quantity || 1), 0) }
                    });

                    // Delete existing items
                    await tx.orderItem.deleteMany({
                        where: { orderId: orderId }
                    });

                    // Re-create items
                    for (const item of items) {
                        await tx.orderItem.create({
                            data: {
                                orderId: orderId,
                                itemId: item.id!,
                                itemName: item.name,
                                quantity: item.quantity || 1
                            }
                        });
                    }
                });
            } else {
                // CREATE new order
                await prisma.order.create({
                    data: {
                        totalItems: items.reduce((sum, i) => sum + (i.quantity || 1), 0),
                        items: {
                            create: items.map(item => ({
                                itemId: item.id!,
                                itemName: item.name,
                                quantity: item.quantity || 1
                            }))
                        }
                    }
                });
            }
        }

        revalidatePath('/');
        return { success: true };
    } catch (e) {
        console.error("Failed to save order:", e);
        return { success: false, error: 'Failed to save' };
    }
}

export async function deleteOrder(orderId: number) {
    try {
        // Delete OrderItems first, then Order (to satisfy foreign key constraint)
        await prisma.$transaction(async (tx) => {
            await tx.orderItem.deleteMany({
                where: { orderId: orderId }
            });
            await tx.order.delete({
                where: { id: orderId }
            });
        });

        revalidatePath('/');
        return { success: true };
    } catch (e) {
        console.error("Failed to delete order:", e);
        return { success: false, error: 'Failed to delete' };
    }
}

export async function getOrders() {
    try {
        const orders = await prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                items: {
                    include: {
                        item: true
                    }
                }
            }
        });

        // Map Prisma result to Order interface (handling nulls and field mapping)
        return orders.map(order => ({
            ...order,
            items: order.items.map(oi => ({
                id: oi.id,
                orderId: oi.orderId,
                itemId: oi.itemId,
                itemName: oi.itemName,
                quantity: oi.quantity,
                item: oi.item ? {
                    name: oi.item.name,
                    id: oi.item.id,
                    tamilName: oi.item.tamilName || undefined,
                    imageUrl: oi.item.imagePath || undefined,
                    createdAt: oi.item.createdAt
                } : undefined
            }))
        }));
    } catch (e) {
        console.error("Failed to fetch orders:", e);
        return [];
    }
}

export async function getOrder(id: number): Promise<OrderWithGroceryItems | null> {
    try {
        const order = await prisma.order.findUnique({
            where: { id },
            include: { items: { include: { item: true } } }
        });

        if (!order) return null;

        return {
            id: order.id,
            totalItems: order.totalItems,
            createdAt: order.createdAt,
            updatedAt: order.updatedAt,
            items: order.items.map((oi) => ({
                id: oi.item.id,
                name: oi.item.name,
                tamilName: oi.item.tamilName || undefined,
                imageUrl: oi.item.imagePath || undefined,
                quantity: oi.quantity
            }))
        };
    } catch (e) {
        console.error("Failed to fetch order:", e);
        return null;
    }
}
