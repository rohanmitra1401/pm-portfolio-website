"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Labs", path: "/labs" },
];

export default function Navbar() {
    const pathname = usePathname() || "/";

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <nav className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/50 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative px-4 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "text-zinc-900 dark:text-zinc-100"
                                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-zinc-800"
                                    style={{ borderRadius: 9999 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
