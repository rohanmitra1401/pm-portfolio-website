"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, Title, Text } from "@tremor/react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    date: string;
    company: string;
    category?: string;
}

interface CaseStudyListProps {
    caseStudies: CaseStudy[];
}

const TABS = ["All", "Consumer", "B2B & Operations"];

export default function CaseStudyList({ caseStudies }: CaseStudyListProps) {
    const [activeTab, setActiveTab] = useState("All");

    const filteredStudies = caseStudies.filter((study) => {
        if (activeTab === "All") return true;
        return study.category === activeTab;
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                                ? "bg-blue-600 text-white"
                                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <motion.div layout className="grid gap-6 md:grid-cols-2">
                <AnimatePresence mode="popLayout">
                    {filteredStudies.map((study) => (
                        <motion.div
                            key={study.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={`/work/${study.slug}`}>
                                <Card
                                    className="h-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                                    decoration="left"
                                    decorationColor={study.category === "B2B & Operations" ? "emerald" : "blue"}
                                >
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <Text>{study.company}</Text>
                                                {study.category && (
                                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                                                        {study.category}
                                                    </span>
                                                )}
                                            </div>
                                            <Title>{study.title}</Title>
                                            <Text className="mt-4">{study.description}</Text>
                                        </div>
                                        <div className="mt-6 flex items-center justify-end">
                                            <Text className={`font-medium ${study.category === "B2B & Operations" ? "text-emerald-600" : "text-blue-500"}`}>
                                                Read Case Study &rarr;
                                            </Text>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredStudies.length === 0 && (
                <div className="text-center py-20">
                    <Text>No case studies found in this category.</Text>
                </div>
            )}
        </div>
    );
}
