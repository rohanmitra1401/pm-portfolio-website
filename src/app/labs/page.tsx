import SpotifySetlistWidget from "@/components/labs/SpotifySetlistWidget";

export const metadata = {
    title: "Labs | Rohan Mitra",
    description: "Experimental projects and Vibe Coding.",
};

export default function LabsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Labs</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Where I "Vibe Code" and experiment with new tech.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <SpotifySetlistWidget />

                {/* Placeholder for future side projects */}
                <div className="group relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-200 p-8 text-center hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 transition-colors">
                    <span className="text-sm font-medium text-zinc-500">More experiments loading...</span>
                </div>
            </div>
        </div>
    );
}
