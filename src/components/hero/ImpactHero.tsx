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
                                    Thank you for dropping by. I am a creator in a world of consumers. An observer, free thinker, and a curious soul.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    I love to learn and believe that knowledge should be freely available & accessible to all, and only through diversity we can truly build a better world.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    During leisure, I enjoy listening to the sound of water, attending concerts (I am a fan of Electronic Music) and art events. Conversations about time travel, history, or space excite me.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    In a parallel universe, you might find me either as an archaeologist, sound engineer, travel guide, museum curator, or perhaps running a beach side burger joint, playing rock and roll all day.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    Yet, in the present reality, I am a product manager and I find joy in building consumer apps for a living.
                                </p>
                                <p className="leading-8 text-zinc-600 dark:text-zinc-400">
                                    Oddly enough, I do get emotional over fonts and colours as I have a soft spot for clean and simple design.
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
