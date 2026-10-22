import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Case studies are read from disk at build time, so the set is fixed per
// deploy: prerender all of them and 404 anything else without touching the
// filesystem at request time.
export const dynamicParams = false;

export function generateStaticParams() {
    return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const study = await getCaseStudyBySlug(params.slug);
    if (!study) return {};

    return { title: `${study.meta.title} | Rohan Mitra` };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
    const study = await getCaseStudyBySlug(params.slug);
    if (!study) notFound();

    const { meta, content } = study;

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <Link
                href="/work"
                className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
            </Link>

            <article className="prose prose-zinc dark:prose-invert lg:prose-lg">
                <h1 className="mb-2">{meta.title}</h1>
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-8">
                    <span>{meta.company}</span>
                    <span>&bull;</span>
                    <span>{meta.date}</span>
                </div>

                {content}
            </article>
        </div>
    );
}
