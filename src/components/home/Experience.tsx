"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EXPERIENCE } from "@/data/experience";

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

export default function Experience() {
    return (
        <motion.section
            className="border-t border-zinc-100 dark:border-zinc-800/60"
            aria-labelledby="experience-heading"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className="container mx-auto px-4 py-16 sm:py-20">
                {/* Section header */}
                <div className="mb-10">
                    <h2
                        id="experience-heading"
                        className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
                    >
                        Experience
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Five-plus years of product ownership — from enterprise SaaS at
                        Airtel to consumer scale and zero-to-one charters at PhonePe.
                    </p>
                </div>

                <div className="flex flex-col gap-10">
                    {EXPERIENCE.map((company) => (
                        <div key={company.name}>
                            {/* Company header */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className={company.logoClassName}
                                />
                                <div className="flex flex-wrap items-center gap-x-2 text-sm text-zinc-500 dark:text-zinc-400">
                                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                                        {company.period}
                                    </span>
                                    <span aria-hidden="true">·</span>
                                    <span>{company.location}</span>
                                </div>
                            </div>

                            {/* Role timeline */}
                            <motion.ol
                                className="mt-5 flex flex-col"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {company.roles.map((role, index) => {
                                    const isLast = index === company.roles.length - 1;
                                    return (
                                        <motion.li
                                            key={role.title}
                                            variants={itemVariants}
                                            className="flex gap-4"
                                        >
                                            {/* Timeline rail */}
                                            <div
                                                className="flex flex-col items-center"
                                                aria-hidden="true"
                                            >
                                                <span
                                                    className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                                                        role.current
                                                            ? "bg-blue-600 ring-4 ring-blue-600/15 dark:bg-blue-500 dark:ring-blue-500/20"
                                                            : "border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900"
                                                    }`}
                                                />
                                                {!isLast && (
                                                    <span className="mt-1.5 w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                                                )}
                                            </div>

                                            {/* Role content */}
                                            <div className={isLast ? "" : "pb-7"}>
                                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                    <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                                        {role.title}
                                                    </h3>
                                                    {role.current && (
                                                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-zinc-500 dark:text-zinc-400">
                                                    {role.org && (
                                                        <>
                                                            <span>{role.org}</span>
                                                            <span aria-hidden="true">·</span>
                                                        </>
                                                    )}
                                                    <span>{role.period}</span>
                                                </div>

                                                <p className="mt-2 max-w-3xl leading-7 text-zinc-600 dark:text-zinc-400">
                                                    {role.description}
                                                </p>

                                                {role.caseStudySlug && (
                                                    <Link
                                                        href={`/work/${role.caseStudySlug}`}
                                                        className="group mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                                        aria-label={`Read the case study for ${role.title}`}
                                                    >
                                                        Read the case study
                                                        <ArrowRight
                                                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                                                            aria-hidden="true"
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        </motion.li>
                                    );
                                })}
                            </motion.ol>
                        </div>
                    ))}
                </div>

                {/* Footer link to full work */}
                <div className="mt-10 border-t border-zinc-100 pt-6 dark:border-zinc-800/60">
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        aria-label="View all case studies"
                    >
                        View all case studies
                        <ArrowRight
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
