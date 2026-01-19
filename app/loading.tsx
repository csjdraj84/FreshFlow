import { Spinner } from "@/components/ui/Spinner";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <Spinner size="lg" />
                <p className="text-gray-500 font-medium animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
