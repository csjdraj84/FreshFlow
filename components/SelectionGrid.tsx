"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ItemCard } from '@/components/ui/ItemCard';
import { ManualEntryForm } from '@/components/ManualEntryForm';
import { saveOrder, OrderWithGroceryItems } from '@/app/actions/order';
import type { GroceryItem } from '@/lib/items';

interface SelectionGridProps {
    initialItems: GroceryItem[];
    initialOrder?: OrderWithGroceryItems | null;
}

export default function SelectionGrid({ initialItems, initialOrder }: SelectionGridProps) {
    const router = useRouter();

    // Initialize from order if present
    const [selectedItems, setSelectedItems] = useState<Record<string, number>>(() => {
        if (initialOrder?.items) {
            const initial: Record<string, number> = {};

            initialOrder.items.forEach((orderItem) => {
                // Use 'name' as it is the standard property in GroceryItem
                const itemName = orderItem.name;
                if (itemName && orderItem.quantity) {
                    initial[itemName] = orderItem.quantity;
                }
            });

            return initial;
        }
        return {};
    });
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState<'name' | 'newest'>('name');
    const [filterBy, setFilterBy] = useState<'all' | 'selected'>('all');
    const [showManualForm, setShowManualForm] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const toggleItem = (name: string) => {
        const next = { ...selectedItems };
        if (next[name]) {
            delete next[name];
        } else {
            next[name] = 1;
        }
        setSelectedItems(next);
    };

    const updateQuantity = (name: string, delta: number) => {
        const next = { ...selectedItems };
        const currentQty = next[name] || 0;
        const newQty = currentQty + delta;

        if (newQty <= 0) {
            delete next[name];
        } else {
            next[name] = newQty;
        }
        setSelectedItems(next);
    };

    const handleReview = async () => {
        setIsOrdering(true);
        const itemsToOrder = initialItems
            .filter(i => selectedItems[i.name])
            .map(i => ({ ...i, quantity: selectedItems[i.name] }));

        await saveOrder(itemsToOrder, initialOrder?.id);
        router.push('/');; // Redirect to landing page
        setIsOrdering(false);
    };

    const filteredItems = initialItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
            (item.tamilName && item.tamilName.includes(search));

        const matchesFilter = filterBy === 'all' || (filterBy === 'selected' && !!selectedItems[item.name]);
        return matchesSearch && matchesFilter;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        // Assuming initialItems are already sorted by created desc (default from DB) or reverse it
        // If 'newest', we rely on array order if data came sorted, or sort by id if available
        // Let's assume passed items are Newest First.
        return 0;
    });

    const selectedCount = Object.keys(selectedItems).length;

    return (
        <div className="w-full pb-32">
            {showManualForm && <ManualEntryForm onClose={() => setShowManualForm(false)} />}

            <div className="sticky top-0 bg-white/90 backdrop-blur-md p-4 z-10 shadow-sm rounded-xl mb-6 space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Select Items</h2>
                        <p className="text-gray-500">{selectedCount} items selected</p>
                    </div>
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        disabled={selectedCount === 0 || isOrdering}
                        onClick={handleReview}
                    >
                        {isOrdering ? 'Saving...' : (initialOrder ? 'Update Order' : 'Place Order')}
                    </button>
                </div>

                <div className="flex gap-4 items-center flex-wrap">
                    <div className="relative flex-1 min-w-[200px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                        />
                        <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
                    </div>

                    <div className="flex gap-2">
                        <div className="bg-gray-50 p-1 rounded-xl border border-gray-200 flex">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow text-green-700' : 'text-gray-400 hover:text-gray-600'}`}
                                title="Grid View"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow text-green-700' : 'text-gray-400 hover:text-gray-600'}`}
                                title="List View"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'name' | 'newest')}
                            className="bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="newest">Newest</option>
                            <option value="name">A-Z</option>
                        </select>

                        <div className="bg-gray-50 p-1 rounded-xl border border-gray-200 flex">
                            <button
                                onClick={() => setFilterBy('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterBy === 'all' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setFilterBy('selected')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filterBy === 'selected' ? 'bg-white shadow text-green-700' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Selected
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {filteredItems.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-500 mb-4">No items matched.</p>
                    <button
                        onClick={() => setShowManualForm(true)}
                        className="text-green-600 font-bold hover:underline"
                    >
                        Add it manually?
                    </button>
                </div>
            ) : (
                viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredItems.map((item, index) => (
                            <ItemCard
                                key={item.name}
                                index={index + 1}
                                name={item.name}
                                tamilName={item.tamilName}
                                imageUrl={item.imageUrl}
                                selected={!!selectedItems[item.name]}
                                quantity={selectedItems[item.name] || 0}
                                onToggle={() => toggleItem(item.name)}
                                onIncrement={(e) => { e.stopPropagation(); updateQuantity(item.name, 1); }}
                                onDecrement={(e) => { e.stopPropagation(); updateQuantity(item.name, -1); }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        {filteredItems.map((item) => {
                            const isSelected = !!selectedItems[item.name];
                            const quantity = selectedItems[item.name] || 0;

                            return (
                                <div
                                    key={item.name}
                                    onClick={() => toggleItem(item.name)}
                                    className={`flex items-center gap-4 p-3 rounded-xl border transition-all cursor-pointer ${isSelected
                                        ? 'bg-green-50 border-green-200 shadow-sm'
                                        : 'bg-white border-gray-100 hover:border-green-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                        {item.imageUrl ? (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-xl">📦</div>
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className={`font-bold text-sm truncate ${isSelected ? 'text-green-800' : 'text-gray-800'}`}>
                                            {item.name}
                                        </h3>
                                        {item.tamilName && (
                                            <p className="text-xs text-gray-500 truncate">{item.tamilName}</p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-3 shrink-0" onClick={e => e.stopPropagation()}>
                                        {isSelected ? (
                                            <div className="flex items-center bg-white rounded-lg border border-green-200 shadow-sm overflow-hidden h-8">
                                                <button
                                                    onClick={() => updateQuantity(item.name, -1)}
                                                    className="w-8 h-full flex items-center justify-center hover:bg-green-50 text-green-700 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 h-full flex items-center justify-center font-bold text-green-700 text-sm border-x border-green-100">
                                                    {quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.name, 1)}
                                                    className="w-8 h-full flex items-center justify-center hover:bg-green-50 text-green-700 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-transparent hover:border-green-400">
                                                <div className="w-3 h-3 rounded-full bg-green-500 opacity-0 transition-opacity" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )
            )}

            {/* Floating Action Button for Manual Entry */}
            <button
                onClick={() => setShowManualForm(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-105"
                title="Add new item"
            >
                <span className="text-3xl font-light mb-1">+</span>
            </button>
        </div>
    );
}
