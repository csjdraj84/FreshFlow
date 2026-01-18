import React from 'react';

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => (
    <svg viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="FreshFlow Logo">
        {/* Abstract Leaf/Flow Icon */}
        <path d="M30 10C30 10 15 15 10 30C5 45 15 50 15 50C15 50 10 40 20 30C30 20 45 20 45 20C45 20 35 25 30 35" fill="#166534" className="text-green-800" />
        <path d="M45 20C45 20 50 10 40 5C30 0 20 10 20 10" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" className="text-green-600" />

        {/* Text Fresh */}
        <text x="55" y="42" fontFamily="sans-serif" fontSize="32" fontWeight="900" fill="#111827" className="text-gray-900">Fresh</text>

        {/* Text Flow */}
        <text x="142" y="42" fontFamily="sans-serif" fontSize="32" fontWeight="900" fill="#16a34a" className="text-green-600">Flow</text>
    </svg>
);

export const LogoIcon = ({ className = "h-8 w-8" }: { className?: string }) => (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="FreshFlow Icon">
        <path d="M30 10C30 10 15 15 10 30C5 45 15 50 15 50C15 50 10 40 20 30C30 20 45 20 45 20C45 20 35 25 30 35" fill="#166534" stroke="currentColor" />
        <path d="M45 20C45 20 50 10 40 5C30 0 20 10 20 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);
