"use client";

import { motion, type Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "@/data/skills";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

export default function Education() {
    return (
        <motion.section
            className="border-t border-zinc-100 dark:border-zinc-800/60"
            aria-labelledby="education-heading"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className="container mx-auto px-4 py-16 sm:py-20">
                {/* Section header */}
                <div className="mb-10">
                    <h2
                        id="education-heading"
                        className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                    >
                        Education
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Where the foundations came from — economics and engineering.
                    </p>
                </div>

                <motion.ul
                    className="grid gap-4 md:grid-cols-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {EDUCATION.map((degree) => (
                        <motion.li
                            key={degree.qualification}
                            variants={itemVariants}
                            className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
                        >
                            <span
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30"
                                aria-hidden="true"
                            >
                                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </span>
                            <div className="min-w-0">
                                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                                    {degree.qualification}
                                </p>
                                <p className="mt-0.5 text-zinc-600 dark:text-zinc-400">
                                    {degree.institution}
                                </p>
                                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                                    {degree.location}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
}
