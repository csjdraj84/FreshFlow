import Link from 'next/link';
import { getOrders } from '@/app/actions/order';
import OrderHistory from '@/components/OrderHistory';
import { Logo } from '@/components/Logo';

// Force dynamic rendering to ensure fresh data on every request
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const orders = await getOrders();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <Logo className="h-10 md:h-12 w-auto max-w-full" />
            </div>
            <p className="text-gray-600">Order Your Amazon Fresh Groceries</p>
          </div>

          <div className="space-y-6">
            <Link
              href="/select"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-center"
            >
              Create New Order
            </Link>

            <OrderHistory orders={orders} />
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-xs">
          Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </main>
  );
}
