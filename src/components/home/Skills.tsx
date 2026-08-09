"use client";

import { motion, type Variants } from "framer-motion";
import { SKILLS, CERTIFICATIONS } from "@/data/skills";

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

export default function Skills() {
    return (
        <motion.section
            className="border-t border-zinc-100 dark:border-zinc-800/60"
            aria-labelledby="skills-heading"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className="container mx-auto px-4 py-16 sm:py-20">
                {/* Section header */}
                <div className="mb-10">
                    <h2
                        id="skills-heading"
                        className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                    >
                        Skills
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        The toolkit behind the work.
                    </p>
                </div>

                <motion.div
                    className="grid gap-10 md:grid-cols-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Technical arsenal */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            Technical Arsenal
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {SKILLS.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            Certifications
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {CERTIFICATIONS.map((cert) => (
                                <li
                                    key={cert}
                                    className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                                >
                                    <span
                                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                                        aria-hidden="true"
                                    />
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
