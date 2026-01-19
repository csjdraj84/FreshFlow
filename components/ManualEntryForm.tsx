"use client";

import { useState } from 'react';
import { addItem } from '@/app/actions/items';
import { Spinner } from '@/components/ui/Spinner';

export function ManualEntryForm({ onClose }: { onClose: () => void }) {
    const [loading, setLoading] = useState(false);
    const [imageBase64, setImageBase64] = useState('');
    const [processingImage, setProcessingImage] = useState(false);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setProcessingImage(true);
        try {
            // Resize and convert to Base64
            const base64 = await resizeImage(file);
            setImageBase64(base64);
        } catch (err) {
            console.error("Image processing error:", err);
            alert("Failed to process image. Please try another one.");
        } finally {
            setProcessingImage(false);
        }
    };

    // Helper to resize image
    const resizeImage = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 600;
                    const MAX_HEIGHT = 600;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/jpeg', 0.7)); // Compress to JPEG 70%
                };
                img.onerror = reject;
            };
            reader.onerror = reject;
        });
    };

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        const result = await addItem(formData);
        setLoading(false);

        if (result?.error) {
            alert(`Error: ${result.error}`);
            return;
        }

        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4">Add New Item</h3>
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Name (English)</label>
                        <input
                            name="name"
                            required
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none"
                            placeholder="e.g., Bananas"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tamil Name (Optional)</label>
                        <input
                            name="tamilName"
                            className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-3 py-2 text-gray-900 focus:border-green-500 focus:outline-none"
                            placeholder="e.g., வாழைப்பழம்"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Item Image (Optional)</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-green-50 file:text-green-700
                                hover:file:bg-green-100"
                        />
                        {/* Hidden input to store base64 string */}
                        <input type="hidden" name="imageBase64" value={imageBase64} />
                    </div>

                    <div className="flex gap-3 justify-end mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading || processingImage}
                            className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                        >
                            {(loading || processingImage) && <Spinner size="sm" className="text-white" />}
                            {loading ? 'Adding...' : processingImage ? 'Processing...' : 'Add Item'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
