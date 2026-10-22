import Link from "next/link";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <div className="container mx-auto flex flex-col items-center px-4 py-24 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                404
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Page not found
            </h1>
            <p className="mt-3 max-w-md leading-relaxed text-zinc-600 dark:text-zinc-400">
                That page doesn&apos;t exist — it may have moved, or the link may be
                out of date.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <Link
                    href="/"
                    className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    Back home
                </Link>
                <Link
                    href="/work"
                    className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    Selected work
                </Link>
            </div>
        </div>
    );
}
