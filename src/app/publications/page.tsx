import { getAllPublications } from "@/data/publications";
import PublicationList from "@/components/publications/PublicationList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Publications",
    description:
        "Published articles on product management, AI agents, consumer app design, and building at scale — by Rohan Mitra. Featured on Mind the Product, the Institute of Product Leadership, and more.",
    openGraph: {
        title: "Publications | Rohan Mitra",
        description:
            "Published articles on product management, AI agents, consumer app design, and building at scale — by Rohan Mitra.",
    },
};

// JSON-LD: ItemList of externally published articles
function PublicationsJsonLd({ publications }: { publications: ReturnType<typeof getAllPublications> }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Publications by Rohan Mitra",
        description: metadata.description,
        url: "https://rohanmitra.com/publications",
        author: {
            "@type": "Person",
            name: "Rohan Mitra",
            url: "https://rohanmitra.com",
        },
        hasPart: publications.map((pub) => ({
            "@type": "Article",
            headline: pub.title,
            description: pub.description,
            datePublished: pub.publishedAt,
            url: pub.url,
            author: {
                "@type": "Person",
                name: "Rohan Mitra",
            },
            publisher: {
                "@type": "Organization",
                name: pub.publication,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function PublicationsPage() {
    const publications = getAllPublications();

    return (
        <>
            <PublicationsJsonLd publications={publications} />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold tracking-tight mb-3">Publications</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                            I write about product strategy, agentic interfaces, and lessons from
                            building consumer apps at scale. Published on platforms I respect — where
                            editorial rigour ensures the ideas are stress-tested before going out.
                        </p>
                    </div>
                    <PublicationList publications={publications} />
                </div>
            </div>
        </>
    );
}
