"use client";

import { Badge } from "@tremor/react";

const SKILLS = [
    { name: "SQL", category: "tech" },
    { name: "Power BI (Adv)", category: "tech" },
    { name: "Behavioral Analytics", category: "analytics" },
    { name: "Product Strategy", category: "product" },
    { name: "SaaS Ops", category: "ops" },
    { name: "Figma", category: "design" },
];

const CERTS = [
    "PM School Certification",
    "Google Data Analytics",
];

export default function SkillsCloud() {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
            <div>
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                        <span
                            key={skill.name}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">Certifications</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {CERTS.map((cert) => (
                        <div key={cert} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                            {cert}
                        </div>
                    ))}
                </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-2 uppercase tracking-wider">Education</h3>
                <div className="space-y-3">
                    <div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">MBA, International Business</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400">Delhi School of Economics</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">B.E., Electronics & Communication</div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-400">Thapar Institute of Engineering & Technology</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
