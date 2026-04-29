"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { format, parseISO } from "date-fns";
import type { Publication } from "@/data/publications";

interface PublicationListProps {
    publications: Publication[];
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const },
    },
};

export default function PublicationList({ publications }: PublicationListProps) {
    return (
        <motion.div
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {publications.map((pub) => {
                const hasLink = !!pub.url;

                // Render as <a> when we have a URL, plain <div> otherwise
                const Card = hasLink ? motion.a : motion.div;
                const linkProps = hasLink
                    ? {
                          href: pub.url,
                          target: "_blank" as const,
                          rel: "noopener noreferrer",
                          "aria-label": `Read "${pub.title}" on ${pub.publication}`,
                      }
                    : {};

                return (
                    <Card
                        key={pub.slug}
                        {...linkProps}
                        variants={cardVariants}
                        className={`group relative flex flex-col gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-200 ${
                            hasLink
                                ? "hover:-translate-y-0.5 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900 cursor-pointer"
                                : "cursor-default"
                        }`}
                    >
                        {/* Left accent bar — only on hover when clickable */}
                        {hasLink && (
                            <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        )}

                        {/* Publication source row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                {pub.publicationLogo ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={pub.publicationLogo}
                                        alt={pub.publication}
                                        className="h-4 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                    />
                                ) : null}
                                <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                    {pub.publication}
                                </span>
                            </div>

                            {hasLink ? (
                                <ExternalLink
                                    className="h-4 w-4 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors shrink-0"
                                    aria-hidden="true"
                                />
                            ) : (
                                /* Coming-soon badge for articles without a live URL */
                                <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 shrink-0">
                                    Coming soon
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h2 className={`text-xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug transition-colors ${hasLink ? "group-hover:text-indigo-600 dark:group-hover:text-indigo-400" : ""}`}>
                            {pub.title}
                        </h2>

                        {/* Description */}
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                            {pub.description}
                        </p>

                        {/* Footer: date + tags */}
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <time
                                dateTime={pub.publishedAt}
                                className="text-xs text-zinc-400 dark:text-zinc-500"
                            >
                                {format(parseISO(pub.publishedAt), "MMMM yyyy")}
                            </time>
                            <span className="text-zinc-200 dark:text-zinc-700" aria-hidden="true">·</span>
                            <div className="flex flex-wrap gap-1.5">
                                {pub.tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                );
            })}
        </motion.div>
    );
}
