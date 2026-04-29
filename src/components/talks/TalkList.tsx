"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Play, Clock, Lock } from "lucide-react";
import { format, parseISO } from "date-fns";
import type { Talk } from "@/data/talks";

interface TalkListProps {
    talks: Talk[];
}

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
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

function ThumbnailArea({ talk }: { talk: Talk }) {
    if (talk.platform === "youtube" && talk.videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${talk.videoId}/mqdefault.jpg`;
        return (
            <div className="relative overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 aspect-video w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={thumbnailUrl}
                    alt={`Thumbnail for "${talk.title}"`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110">
                        <Play className="h-5 w-5 text-zinc-900 fill-zinc-900 ml-0.5" aria-hidden="true" />
                    </div>
                </div>
            </div>
        );
    }

    // Fallback for non-YouTube / no video ID
    return (
        <div className="relative overflow-hidden rounded-lg aspect-video w-full bg-gradient-to-br from-amber-900/40 to-zinc-900 dark:from-amber-950/60 dark:to-zinc-950 flex flex-col items-center justify-center gap-2 border border-amber-900/20 dark:border-amber-900/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 border border-amber-500/30">
                <Play className="h-5 w-5 text-amber-400 fill-amber-400 ml-0.5" aria-hidden="true" />
            </div>
            <span className="text-xs text-amber-300/70 font-medium px-4 text-center">
                {talk.event}
            </span>
        </div>
    );
}

/** Icon + label shown in the top-right of each card based on link availability */
function LinkBadge({ talk }: { talk: Talk }) {
    if (talk.requiresLogin) {
        return (
            <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500 shrink-0">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                Login required
            </span>
        );
    }
    if (talk.url) {
        return (
            <ExternalLink
                className="h-4 w-4 shrink-0 text-zinc-300 dark:text-zinc-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors"
                aria-hidden="true"
            />
        );
    }
    // No link available
    return (
        <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 shrink-0">
            Recording soon
        </span>
    );
}

export default function TalkList({ talks }: TalkListProps) {
    return (
        <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {talks.map((talk) => {
                const isClickable = !!talk.url && !talk.requiresLogin;

                const Card = isClickable ? motion.a : motion.div;
                const linkProps = isClickable
                    ? {
                          href: talk.url,
                          target: "_blank" as const,
                          rel: "noopener noreferrer",
                          "aria-label": `Watch "${talk.title}" from ${talk.event}`,
                      }
                    : {};

                return (
                    <Card
                        key={talk.slug}
                        {...linkProps}
                        variants={cardVariants}
                        className={`group flex flex-col sm:flex-row gap-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 transition-all duration-200 overflow-hidden ${
                            isClickable
                                ? "hover:-translate-y-0.5 hover:shadow-md hover:border-amber-200 dark:hover:border-amber-900 cursor-pointer"
                                : "cursor-default"
                        }`}
                    >
                        {/* Thumbnail — full width on mobile, fixed width on desktop */}
                        <div className="sm:w-56 sm:shrink-0">
                            <ThumbnailArea talk={talk} />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-2.5 flex-1 min-w-0">
                            {/* Event name + link badge */}
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors truncate">
                                    {talk.event}
                                </span>
                                <LinkBadge talk={talk} />
                            </div>

                            {/* Title */}
                            <h2 className={`text-lg font-semibold text-zinc-900 dark:text-zinc-100 leading-snug transition-colors ${isClickable ? "group-hover:text-amber-600 dark:group-hover:text-amber-400" : ""}`}>
                                {talk.title}
                            </h2>

                            {/* Description */}
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm flex-1">
                                {talk.description}
                            </p>

                            {/* Footer: date + duration + tags */}
                            <div className="flex flex-wrap items-center gap-3 pt-1">
                                <time
                                    dateTime={talk.date}
                                    className="text-xs text-zinc-400 dark:text-zinc-500"
                                >
                                    {format(parseISO(talk.date), "MMMM yyyy")}
                                </time>
                                {talk.duration && (
                                    <>
                                        <span className="text-zinc-200 dark:text-zinc-700" aria-hidden="true">·</span>
                                        <span className="flex items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500">
                                            <Clock className="h-3 w-3" aria-hidden="true" />
                                            {talk.duration}
                                        </span>
                                    </>
                                )}
                                <span className="text-zinc-200 dark:text-zinc-700" aria-hidden="true">·</span>
                                <div className="flex flex-wrap gap-1.5">
                                    {talk.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </motion.div>
    );
}
