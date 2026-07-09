"use client";

import { motion } from "framer-motion";
import SkillsCloud from "./SkillsCloud";

export default function ImpactHero() {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-8 max-w-4xl mx-auto"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-6">
                                <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-blue-100 dark:border-blue-900 shadow-lg">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/RohanMitra.png"
                                        alt="Rohan Mitra"
                                        className="h-full w-full object-cover object-[center_20%]"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
                                        Rohan Mitra
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium text-zinc-600 dark:text-zinc-400">
                                        <span>Product Manager</span>
                                        <span className="text-zinc-300 dark:text-zinc-700">|</span>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src="/phonepe.svg"
                                                    alt="PhonePe"
                                                    className="h-5 w-auto"
                                                />
                                            </div>
                                            <div className="flex items-center gap-1.5 opacity-90 transition-opacity hover:opacity-100">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src="/airtel.png"
                                                    alt="Airtel"
                                                    className="h-6 w-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 text-lg">
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    I&apos;m a Product Manager with 5+ years across fintech, quick
                                    commerce, app marketplaces, and enterprise SaaS at PhonePe and
                                    Airtel.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    I do my best work at zero-to-one: taking an ambiguous charter,
                                    finding the wedge, and shipping it through messy multi-party
                                    integrations. I currently own PhonePe&apos;s Merchant CRM
                                    charter — building a WhatsApp-based CRM for offline retailers in
                                    direct partnership with Meta, with AI-assisted workflows running
                                    in production.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    What I&apos;ve shipped: install conversion lifted from{" "}
                                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">12.9% to 15.5%</span>{" "}
                                    by killing my own feature, a{" "}
                                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">context-aware</span>{" "}
                                    update system powering{" "}
                                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">25% of all app updates</span>{" "}
                                    on India&apos;s first homegrown app store, order breaches cut{" "}
                                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">11%</span>{" "}
                                    in quick commerce, and{" "}
                                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">3,000 enterprise customers</span>{" "}
                                    migrated off legacy systems.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    MBA, Delhi School of Economics. B.E., Thapar Institute of
                                    Engineering &amp; Technology.
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                                <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                                    Beyond work
                                </h2>
                                <p className="leading-8 text-lg text-zinc-600 dark:text-zinc-400">
                                    I&apos;m an observer, free thinker, and a curious soul. During
                                    leisure I enjoy the sound of water, concerts (electronic music,
                                    mostly), and art events — and conversations about time travel,
                                    history, or space. In a parallel universe you might find me as
                                    an archaeologist, sound engineer, or running a beachside burger
                                    joint playing rock and roll all day.
                                </p>
                                <p className="leading-8 text-lg text-zinc-600 dark:text-zinc-400">
                                    Oddly enough, I do get emotional over fonts and colours — I have
                                    a soft spot for clean and simple design.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/mitrarohan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/20 transition-all hover:bg-blue-100 dark:hover:bg-blue-900/40"
                                aria-label="LinkedIn Profile"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/linkedin.svg"
                                    alt="LinkedIn"
                                    className="h-6 w-6 transition-transform group-hover:scale-110"
                                />
                            </a>
                            <a
                                href="mailto:rmitra1401@gmail.com"
                                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 transition-all hover:bg-red-100 dark:hover:bg-red-900/40"
                                aria-label="Email Me"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/gmail.svg"
                                    alt="Gmail"
                                    className="h-6 w-6 transition-transform group-hover:scale-110"
                                />
                            </a>
                        </div>

                        <div className="pt-8">
                            <SkillsCloud />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
