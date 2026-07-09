"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Publications", path: "/publications" },
    { name: "Talks", path: "/talks" },
    { name: "Labs", path: "/labs" },
];

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
};

const drawerVariants: Variants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.2, ease: "easeOut" as const },
    },
    exit: {
        opacity: 0,
        y: -8,
        scale: 0.98,
        transition: { duration: 0.15, ease: "easeIn" as const },
    },
};

const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.04, duration: 0.25, ease: "easeOut" as const },
    }),
};

export default function Navbar() {
    const pathname = usePathname() || "/";
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <>
            {/* ─── Desktop Navbar ─── */}
            <div className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center p-4">
                <nav
                    className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/50 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50"
                    aria-label="Main navigation"
                >
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
                                aria-current={isActive ? "page" : undefined}
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

            {/* ─── Mobile Navbar ─── */}
            <div className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-4">
                {/* Site identity on mobile */}
                <Link
                    href="/"
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight"
                    aria-label="Rohan Mitra — Home"
                >
                    Rohan Mitra
                </Link>

                {/* Hamburger button */}
                <button
                    id="mobile-menu-toggle"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 backdrop-blur-md shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {mobileOpen ? (
                            <motion.span
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.15 }}
                            >
                                <X className="h-5 w-5 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.15 }}
                            >
                                <Menu className="h-5 w-5 text-zinc-700 dark:text-zinc-300" aria-hidden="true" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* ─── Mobile Menu Overlay ─── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setMobileOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Menu drawer */}
                        <motion.div
                            key="drawer"
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Navigation menu"
                            className="fixed top-20 left-4 right-4 z-50 md:hidden rounded-2xl border border-zinc-200 bg-white/95 dark:border-zinc-800 dark:bg-zinc-900/95 backdrop-blur-xl shadow-xl overflow-hidden"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <nav className="flex flex-col p-3">
                                {navItems.map((item, i) => {
                                    const isActive = pathname === item.path;
                                    return (
                                        <motion.div
                                            key={item.path}
                                            custom={i}
                                            variants={menuItemVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <Link
                                                href={item.path}
                                                onClick={() => setMobileOpen(false)}
                                                className={cn(
                                                    "flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-colors",
                                                    isActive
                                                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
                                                )}
                                                aria-current={isActive ? "page" : undefined}
                                            >
                                                {isActive && (
                                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" aria-hidden="true" />
                                                )}
                                                <span className={isActive ? "" : "ml-4"}>{item.name}</span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
