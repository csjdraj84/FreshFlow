"use server";

import { prisma } from '@/lib/items';
import { revalidatePath } from 'next/cache';

import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function addItem(formData: FormData) {
    const name = formData.get('name') as string;
    const tamilName = formData.get('tamilName') as string;
    const image = formData.get('image') as File;

    if (!name) return;

    let imagePath = null;

    if (image && image.size > 0) {
        try {
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Create safe filename
            const safeName = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
            const extension = image.name.split('.').pop() || 'jpg';
            const filename = `${safeName}_${Date.now()}.${extension}`;

            // Save to public/images/products
            const uploadDir = join(process.cwd(), 'public', 'images', 'products');
            const filePath = join(uploadDir, filename);

            await writeFile(filePath, buffer);
            imagePath = `/images/products/${filename}`;
        } catch (error) {
            console.error("Error saving image:", error);
            // Continue creating item without image if upload fails? 
            // Or throw? Let's log and continue for now.
        }
    }

    try {
        await prisma.item.create({
            data: {
                name,
                tamilName: tamilName || null,
                imagePath: imagePath
            }
        });
        revalidatePath('/select');
    } catch (e) {
        console.error("Failed to add item:", e);
        return { error: "Failed to add item" };
    }
}
