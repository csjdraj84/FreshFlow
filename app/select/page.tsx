import Link from 'next/link';
import { getItems } from '@/lib/items';
import { getOrder } from '@/app/actions/order';
import SelectionGrid from '@/components/SelectionGrid';
import { Logo } from '@/components/Logo';

export default async function SelectPage({
    searchParams,
}: {
    searchParams: Promise<{ orderId?: string }>
}) {
    // Await searchParams before using properties
    const { orderId } = await searchParams; // In Next.js 15+ searchParams is async prop? 
    // Wait, check Next.js version... it's 16.1.3 (Turbopack).
    // In recent Next.js, searchParams is indeed a promise in some contexts or just props.
    // The user's page.tsx signature was simple.
    // Let's assume standard prop access but be safe.

    const items = await getItems();
    let initialOrder = null;

    if (orderId) {
        const id = parseInt(orderId);
        if (!isNaN(id)) {
            initialOrder = await getOrder(id);
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <Link href="/" className="inline-flex items-center text-gray-500 hover:text-green-600 font-medium transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Home
                        </Link>
                        <Logo className="h-8 w-auto" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                        {initialOrder ? 'Edit' : 'Weekly'} <span className="text-green-600">Grocery List</span>
                    </h1>
                    <p className="text-gray-600 mt-2">Pick items from this list of Groceries</p>
                </header>

                <SelectionGrid initialItems={items} initialOrder={initialOrder} />
            </div>
        </main>
    );
}
