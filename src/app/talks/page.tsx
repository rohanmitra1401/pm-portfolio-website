import { getAllTalks } from "@/data/talks";
import TalkList from "@/components/talks/TalkList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Talks",
    description:
        "Conference talks and speaking engagements by Rohan Mitra on product management, AI agents, agentic design, and building consumer products at scale.",
    openGraph: {
        title: "Talks | Rohan Mitra",
        description:
            "Conference talks and speaking engagements by Rohan Mitra on product management, AI agents, and building at scale.",
    },
};

// JSON-LD: ItemList of talks with VideoObject for YouTube content
function TalksJsonLd({ talks }: { talks: ReturnType<typeof getAllTalks> }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Talks & Speaking Engagements by Rohan Mitra",
        description: metadata.description,
        url: "https://rohanmitra.com/talks",
        author: {
            "@type": "Person",
            name: "Rohan Mitra",
            url: "https://rohanmitra.com",
        },
        hasPart: talks.map((talk) =>
            talk.platform === "youtube" && talk.videoId
                ? {
                      "@type": "VideoObject",
                      name: talk.title,
                      description: talk.description,
                      thumbnailUrl: `https://img.youtube.com/vi/${talk.videoId}/mqdefault.jpg`,
                      uploadDate: talk.date,
                      contentUrl: talk.url,
                      duration: talk.duration ? `PT${talk.duration.replace(" min", "M")}` : undefined,
                      author: {
                          "@type": "Person",
                          name: "Rohan Mitra",
                      },
                  }
                : {
                      "@type": "Event",
                      name: talk.title,
                      description: talk.description,
                      startDate: talk.date,
                      url: talk.url,
                      organizer: {
                          "@type": "Organization",
                          name: talk.event,
                      },
                  }
        ),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function TalksPage() {
    const talks = getAllTalks();

    return (
        <>
            <TalksJsonLd talks={talks} />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-3xl font-bold tracking-tight mb-3">Talks</h1>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                            I speak at conferences and institutes about the future of product
                            management — agentic interfaces, AI strategy, and what it means to build
                            consumer products in an era where the interface itself is changing.
                        </p>
                    </div>
                    <TalkList talks={talks} />
                </div>
            </div>
        </>
    );
}
