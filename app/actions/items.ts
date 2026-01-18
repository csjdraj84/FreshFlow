"use server";

import { prisma } from '@/lib/items';
import { revalidatePath } from 'next/cache';

export async function addItem(formData: FormData) {
    const name = formData.get('name') as string;
    const tamilName = formData.get('tamilName') as string;

    if (!name) return;

    try {
        await prisma.item.create({
            data: {
                name,
                tamilName: tamilName || null,
                imagePath: null // No image for manual entry yet
            }
        });
        revalidatePath('/select');
    } catch (e) {
        console.error("Failed to add item:", e);
        return { error: "Failed to add item" };
    }
}
