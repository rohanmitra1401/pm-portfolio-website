import { CareerGrowthChart, SectorSplitChart } from "@/components/dashboard/ImpactCharts";

export const metadata = {
    title: "Impact Dashboard | Rohan Mitra",
    description: "Visualized career growth and product impact metrics.",
};

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Impact Dashboard</h1>
                <p className="text-zinc-600 dark:text-zinc-400">Visualizing high-scale product impact across verticals.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                    <CareerGrowthChart />
                </div>
                <div>
                    <SectorSplitChart />
                </div>
                {/* Placeholder for future charts */}
                <div className="p-6 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500">
                    More metrics coming soon...
                </div>
            </div>
        </div>
    );
}
