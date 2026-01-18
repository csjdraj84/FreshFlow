"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import type { Order } from '@/lib/items';

interface OrderHistoryProps {
    orders: Order[];
}

export default function OrderHistory({ orders }: OrderHistoryProps) {
    const router = useRouter();
    const [sort, setSort] = useState<'date' | 'items'>('date');
    const [filter, setFilter] = useState('');
    const [expandedOrderIds, setExpandedOrderIds] = useState<Set<number>>(new Set());

    const toggleExpand = (orderId: number) => {
        const next = new Set(expandedOrderIds);
        if (next.has(orderId)) {
            next.delete(orderId);
        } else {
            next.add(orderId);
        }
        setExpandedOrderIds(next);
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(new Date(date));
    };

    const filteredOrders = orders
        .filter(o =>
            o.id.toString().includes(filter) ||
            formatDate(o.createdAt).toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === 'date') {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            } else {
                return b.totalItems - a.totalItems;
            }
        });

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex gap-4 flex-wrap items-center justify-between bg-gray-50/50">
                <h3 className="text-lg font-bold text-gray-700">Order History</h3>

                <div className="flex gap-2 flex-1 max-w-sm">
                    <input
                        type="text"
                        placeholder="Filter ID or Date..."
                        className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <select
                        className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={sort}
                        onChange={(e) => setSort(e.target.value as 'date' | 'items')}
                    >
                        <option value="date">Date</option>
                        <option value="items">Items</option>
                    </select>
                </div>
            </div>

            <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                        <tr>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100 w-16">
                                {/* Expand Toggle */}
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                                Order ID
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                                Created
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                                Total Items
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                                Updated
                            </th>
                            <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-gray-50 text-gray-500 border-gray-100">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center p-8 text-gray-400 italic">No orders found.</td>
                            </tr>
                        ) : (
                            filteredOrders.map((order) => {
                                const isExpanded = expandedOrderIds.has(order.id);

                                return (
                                    <React.Fragment key={order.id}>
                                        <tr className="hover:bg-gray-50/50 transition-colors border-b last:border-0 border-gray-100 cursor-pointer" onClick={() => toggleExpand(order.id)}>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                                                <svg className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left font-bold text-gray-700">
                                                #{order.id}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-600">
                                                {formatDate(order.createdAt)}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full font-bold text-xs">
                                                    {order.totalItems} items
                                                </span>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-gray-600">
                                                {formatDate(order.updatedAt)}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" onClick={(e) => e.stopPropagation()}>
                                                <div className="flex gap-2 items-center">
                                                    <button
                                                        onClick={() => router.push(`/select?orderId=${order.id}`)}
                                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 px-3 rounded-lg text-xs transition-all hover:scale-105 shadow-md flex items-center gap-1.5"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={async () => {
                                                            if (confirm(`⚠️ Delete order #${order.id}?\n\nThis will permanently delete this order and all its items. This action cannot be undone.`)) {
                                                                const { deleteOrder } = await import('@/app/actions/order');
                                                                const result = await deleteOrder(order.id);
                                                                if (result.success) {
                                                                    window.location.reload();
                                                                } else {
                                                                    alert('Failed to delete order. Please try again.');
                                                                }
                                                            }
                                                        }}
                                                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded-lg text-xs transition-all hover:scale-105 shadow-md flex items-center gap-1.5"
                                                        title="Delete this order permanently"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {isExpanded && (
                                            <tr className="bg-gray-50/30">
                                                <td colSpan={6} className="p-4 border-b border-gray-100">
                                                    <div className="bg-white rounded-xl p-4 shadow-inner border border-gray-100">
                                                        <h4 className="font-semibold text-gray-700 mb-3 text-sm">Order Contents</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                            {order.items?.map((item) => (
                                                                <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
                                                                    <div className="w-10 h-10 bg-white rounded-md border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                                                                        {item.item?.imageUrl ? (
                                                                            <Image
                                                                                src={item.item.imageUrl}
                                                                                alt={item.itemName}
                                                                                width={40}
                                                                                height={40}
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                        ) : (
                                                                            <span className="text-xl">📦</span>
                                                                        )}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className="text-sm font-medium text-gray-800 truncate" title={item.itemName}>{item.itemName}</p>
                                                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
