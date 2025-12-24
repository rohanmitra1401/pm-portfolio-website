import Link from "next/link";
import { getAllCaseStudies } from "@/lib/mdx";
import CaseStudyList from "@/components/work/CaseStudyList";

export const metadata = {
    title: "Work | Rohan Mitra",
    description: "Case studies and product impact.",
};

export default async function WorkPage() {
    const caseStudies = await getAllCaseStudies();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Selected Work</h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Deep dives into complex product challenges and outcomes.
                </p>
            </div>

            <CaseStudyList caseStudies={caseStudies} />
        </div>
    );
}
