"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ExternalLink, ArrowRight, Play } from "lucide-react";
import { format, parseISO } from "date-fns";
import { getFeaturedPublications } from "@/data/publications";
import { getFeaturedTalks } from "@/data/talks";

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

export default function ThoughtLeadership() {
    const publications = getFeaturedPublications();
    const talks = getFeaturedTalks();

    return (
        <motion.section
            className="border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/30"
            aria-labelledby="thought-leadership-heading"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
        >
            <div className="container mx-auto px-4 py-16 sm:py-20">
                {/* Section header */}
                <div className="mb-10">
                    <h2
                        id="thought-leadership-heading"
                        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2"
                    >
                        Publications & Talks
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        Writing and speaking on product management, AI agents, and building at scale.
                    </p>
                </div>

                {/* Two-column grid */}
                <div className="grid gap-10 md:grid-cols-2">
                    {/* Publications column */}
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                Publications
                            </h3>
                            <Link
                                href="/publications"
                                className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
                                aria-label="View all publications"
                            >
                                View all
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                        </div>

                        <motion.div
                            className="flex flex-col gap-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {publications.map((pub) => {
                                const hasLink = !!pub.url;
                                const PubCard = hasLink ? motion.a : motion.div;
                                const pubLinkProps = hasLink
                                    ? { href: pub.url, target: "_blank" as const, rel: "noopener noreferrer", "aria-label": `Read "${pub.title}" on ${pub.publication}` }
                                    : {};
                                return (
                                    <PubCard
                                        key={pub.slug}
                                        {...pubLinkProps}
                                        variants={itemVariants}
                                        className={`group flex flex-col gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-all duration-200 ${
                                            hasLink ? "hover:border-indigo-200 dark:hover:border-indigo-900 hover:shadow-sm cursor-pointer" : "cursor-default"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-2">
                                            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 transition-colors">
                                                {pub.publication}
                                            </span>
                                            {hasLink ? (
                                                <ExternalLink
                                                    className="h-3.5 w-3.5 shrink-0 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-400 transition-colors mt-0.5"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <span className="text-xs text-zinc-400 dark:text-zinc-500 shrink-0">Coming soon</span>
                                            )}
                                        </div>
                                        <p className={`text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors ${
                                            hasLink ? "group-hover:text-indigo-700 dark:group-hover:text-indigo-300" : ""
                                        }`}>
                                            {pub.title}
                                        </p>
                                        <time
                                            dateTime={pub.publishedAt}
                                            className="text-xs text-zinc-400 dark:text-zinc-500"
                                        >
                                            {format(parseISO(pub.publishedAt), "MMMM yyyy")}
                                        </time>
                                    </PubCard>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Talks column */}
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                Talks
                            </h3>
                            <Link
                                href="/talks"
                                className="flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors group"
                                aria-label="View all talks"
                            >
                                View all
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                        </div>

                        <motion.div
                            className="flex flex-col gap-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {talks.map((talk) => {
                                const isClickable = !!talk.url && !talk.requiresLogin;
                                const TalkCard = isClickable ? motion.a : motion.div;
                                const talkLinkProps = isClickable
                                    ? { href: talk.url, target: "_blank" as const, rel: "noopener noreferrer", "aria-label": `Watch "${talk.title}" from ${talk.event}` }
                                    : {};
                                return (
                                    <TalkCard
                                        key={talk.slug}
                                        {...talkLinkProps}
                                        variants={itemVariants}
                                        className={`group flex gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 transition-all duration-200 ${
                                            isClickable ? "hover:border-amber-200 dark:hover:border-amber-900 hover:shadow-sm cursor-pointer" : "cursor-default"
                                        }`}
                                    >
                                        {/* Mini thumbnail */}
                                        <div className="relative shrink-0 w-20 h-14 rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                            {talk.platform === "youtube" && talk.videoId ? (
                                                <>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={`https://img.youtube.com/vi/${talk.videoId}/mqdefault.jpg`}
                                                        alt=""
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                        loading="lazy"
                                                        aria-hidden="true"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/15 transition-colors">
                                                        <Play className="h-4 w-4 text-white fill-white drop-shadow" aria-hidden="true" />
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-amber-900/30 to-zinc-900">
                                                    <Play className="h-4 w-4 text-amber-400 fill-amber-400" aria-hidden="true" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-1 min-w-0 flex-1">
                                            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-amber-500 transition-colors truncate">
                                                {talk.event}
                                            </span>
                                            <p className={`text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors line-clamp-2 ${
                                                isClickable ? "group-hover:text-amber-700 dark:group-hover:text-amber-300" : ""
                                            }`}>
                                                {talk.title}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                                                <time dateTime={talk.date}>
                                                    {format(parseISO(talk.date), "MMMM yyyy")}
                                                </time>
                                                {talk.duration && (
                                                    <>
                                                        <span aria-hidden="true">·</span>
                                                        <span>{talk.duration}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </TalkCard>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
