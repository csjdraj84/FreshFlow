"use server";

import { prisma } from '@/lib/items';
import { revalidatePath } from 'next/cache';

import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function addItem(formData: FormData) {
    const name = formData.get('name') as string;
    const tamilName = formData.get('tamilName') as string;
    const image = formData.get('image') as File;
    const imageBase64 = formData.get('imageBase64') as string;

    if (!name) return;

    let imagePath = null;

    if (imageBase64 && imageBase64.startsWith('data:image')) {
        // Use the client-provided Base64 string directly
        imagePath = imageBase64;
    } else if (image && image.size > 0 && image.size < 5000000) { // Limit raw upload to 5MB
        try {
            // ... existing file write logic (mostly for dev) ...
            const bytes = await image.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Create safe filename
            const safeName = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
            const extension = image.name.split('.').pop() || 'jpg';
            const filename = `${safeName}_${Date.now()}.${extension}`;

            // Save to public/images/products
            const uploadDir = join(process.cwd(), 'public', 'images', 'products');
            const filePath = join(uploadDir, filename);

            // Only attempt file write if not in production to avoid errors
            if (process.env.NODE_ENV !== 'production') {
                await writeFile(filePath, buffer);
                imagePath = `/images/products/${filename}`;
            }
        } catch (error) {
            console.error("Error saving image:", error);
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
