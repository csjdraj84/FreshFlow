"use client";

import Image from 'next/image';

interface ItemCardProps {
    name: string;
    tamilName?: string | null;
    imageUrl?: string;
    index?: number;
    selected: boolean;
    onToggle: () => void;
    quantity?: number;
    onIncrement?: (e: React.MouseEvent) => void;
    onDecrement?: (e: React.MouseEvent) => void;
}

export function ItemCard({ name, tamilName, imageUrl, selected, onToggle, index, quantity = 0, onIncrement, onDecrement }: ItemCardProps) {
    return (
        <div
            onClick={onToggle}
            className={`
        relative group cursor-pointer rounded-2xl p-4 transition-all duration-300
        border-2 flex flex-col items-center gap-3
        ${selected
                    ? 'bg-green-50/50 border-green-500 shadow-lg scale-[1.02]'
                    : 'bg-white border-transparent hover:border-gray-200 hover:shadow-md'
                }
      `}
        >
            {index !== undefined && (
                <div className="absolute top-2 left-2 bg-gray-100 text-gray-500 text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full z-10">
                    {index}
                </div>
            )}
            <div className="relative w-32 h-32 mb-2 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-contain mix-blend-multiply p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <span className="text-4xl">🍎</span>
                )}
            </div>

            <div className="text-center w-full">
                {tamilName && (
                    <h3 className="text-lg font-bold text-gray-800 font-tamil mb-1">
                        {tamilName}
                    </h3>
                )}
                <p className="text-sm font-medium text-gray-500 line-clamp-2 leading-tight">
                    {name}
                </p>
            </div>

            <div className={`
        absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
        ${selected ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'}
      `}>
                {selected && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>

            {/* Quantity Controls Compact */}
            {selected && onIncrement && onDecrement && (
                <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 rounded-full flex items-center p-1.5 gap-3 animate-in slide-in-from-bottom-2 duration-200 z-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onDecrement}
                        className="w-8 h-8 flex items-center justify-center bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-full text-gray-600 font-bold transition-colors"
                        title="Decrease"
                    >
                        -
                    </button>
                    <span className="font-bold text-lg text-gray-800 w-6 text-center tabular-nums">{quantity}</span>
                    <button
                        onClick={onIncrement}
                        className="w-8 h-8 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-full text-white font-bold transition-colors shadow-sm"
                        title="Increase"
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}
