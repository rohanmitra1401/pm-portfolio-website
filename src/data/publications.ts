export interface Publication {
    /** URL-safe identifier */
    slug: string;
    /** Full article title */
    title: string;
    /** 1-2 sentence excerpt shown on the card */
    description: string;
    /** ISO date string, e.g. "2025-09-17" */
    publishedAt: string;
    /** Publication platform name */
    publication: string;
    /** Optional path to platform logo in /public/logos/ */
    publicationLogo?: string;
    /**
     * External URL to the full article.
     * Omit (or leave undefined) if the article is not yet live online —
     * the card will render without a link in that case.
     */
    url?: string;
    /** Topic tags */
    tags: string[];
    /** If true, this item appears in the home page Thought Leadership section */
    featured: boolean;
    /** Manual sort order — lower number appears higher on the page */
    sortOrder: number;
}

/**
 * All published articles by Rohan Mitra.
 * Control display order via `sortOrder` (most impactful pieces first).
 */
export const publications: Publication[] = [
    {
        slug: "two-sided-brain-b2b-b2c-product-management",
        title: "The Two-Sided Brain: Lessons from Switching Between B2B and B2C Product Management",
        description:
            "Moving between B2B and B2C isn't just a job change — it rewires how you think about users, metrics, and success. Here's what the context-switch taught me about the craft of product management.",
        publishedAt: "2025-09-17",
        publication: "Institute of Product Leadership",
        publicationLogo: "/logos/ipl.png",
        url: "https://www.productleadership.com/blog/b2b-vs-b2c-product-management-lessons/",
        tags: ["Product Management", "B2B", "B2C", "Career"],
        featured: true,
        sortOrder: 1,
    },
    {
        slug: "from-people-to-product-non-traditional-background",
        title: "From People to Product: How a Non-Traditional Background is a Superpower in PM",
        description:
            "The PM role rewards diverse thinking — empathy, systems intuition, and pattern recognition across domains. Coming from outside the standard tech pipeline turns out to be a feature, not a bug.",
        publishedAt: "2026-01-28",
        publication: "Institute of Product Leadership",
        publicationLogo: "/logos/ipl.png",
        url: "https://www.productleadership.com/blog/non-traditional-background-product-management/",
        tags: ["Product Management", "Career", "Non-Traditional"],
        featured: true,
        sortOrder: 2,
    },
    {
        slug: "tiktokification-of-utility-app-discovery",
        title: "The 'TikTokification' of Utility: How We Reinvented App Discovery with Short-Form Video",
        description:
            "Short-form video isn't just an entertainment format — it's a discovery mechanism. Here's how we applied that insight to reinvent the app discovery experience at scale.",
        publishedAt: "2025-11-13",
        publication: "TechGrid Media",
        url: "https://techgrid.media/opinions/the-tiktok-ification-of-utility-how-we-reinvented-app-discovery-with-short-form-video/",
        tags: ["Consumer Apps", "Product Strategy", "UX"],
        featured: true,
        sortOrder: 3,
    },
    {
        slug: "agentic-ai-rewriting-product-metrics",
        title: "From Engagement to Fulfillment: How Agentic AI Is Rewriting Product Metrics",
        description:
            "As AI agents complete tasks on users' behalf, the metrics we've built entire product strategies around — DAU, session length, clicks — start to break down. What comes next?",
        publishedAt: "2025-10-06",
        publication: "AIAI",
        // url intentionally omitted — not yet live online
        tags: ["AI Agents", "Product Strategy", "Metrics"],
        featured: true,
        sortOrder: 4,
    },
];

/** Returns only featured publications, sorted by `sortOrder`. */
export const getFeaturedPublications = (): Publication[] =>
    publications.filter((p) => p.featured).sort((a, b) => a.sortOrder - b.sortOrder);

/** Returns all publications sorted by `sortOrder`. */
export const getAllPublications = (): Publication[] =>
    [...publications].sort((a, b) => a.sortOrder - b.sortOrder);
