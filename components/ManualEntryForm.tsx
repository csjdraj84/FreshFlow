"use client";

import { useState } from 'react';
import { addItem } from '@/app/actions/items';

export function ManualEntryForm({ onClose }: { onClose: () => void }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        await addItem(formData);
        setLoading(false);
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
                            className="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-green-50 file:text-green-700
                                hover:file:bg-green-100"
                        />
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
                            disabled={loading}
                            className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 disabled:opacity-50"
                        >
                            {loading ? 'Adding...' : 'Add Item'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
