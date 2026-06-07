export interface Talk {
    /** URL-safe identifier */
    slug: string;
    /** Talk title */
    title: string;
    /** 1-2 sentence summary shown on the card */
    description: string;
    /** ISO date string, e.g. "2026-02-19" */
    date: string;
    /** Conference or institute name */
    event: string;
    /** Optional path to event logo in /public/logos/ */
    eventLogo?: string;
    /**
     * Link to the recording or event page.
     * Omit if no recording is available yet — the card will render without a link.
     */
    url?: string;
    /**
     * If true, the recording link requires a login to access.
     * Renders a lock icon + "Login required" badge instead of a standard external link.
     */
    requiresLogin?: boolean;
    /** Determines thumbnail/card strategy */
    platform: "youtube" | "other";
    /**
     * YouTube video ID (the `v=` portion of the URL).
     * Used to auto-generate thumbnails via YouTube's image API.
     * Required when platform === "youtube".
     */
    videoId?: string;
    /** Human-readable duration, e.g. "25 min" */
    duration?: string;
    /** Topic tags */
    tags: string[];
    /** If true, this item appears in the home page Thought Leadership section */
    featured: boolean;
    /** Manual sort order — lower number appears higher on the page */
    sortOrder: number;
}

/**
 * All conference talks and speaking engagements by Rohan Mitra.
 * Control display order via `sortOrder` (most impactful talks first).
 *
 * For YouTube talks: set platform: "youtube" and provide videoId.
 * Thumbnails auto-generate from: https://img.youtube.com/vi/{videoId}/mqdefault.jpg
 */
export const talks: Talk[] = [
    {
        slug: "ai-agents-conf-2026-agentic-layer",
        title: "The Agentic Layer: Building Parallel Experiences for the Post-GUI Economy",
        description:
            "A deep dive into the Dual-Path Architecture framework, Agentic Experience (AX), and how product teams should rethink interfaces as AI agents begin to act autonomously on users' behalf.",
        date: "2026-02-19",
        event: "AI Agents Conference 2026",
        url: "https://www.youtube.com/watch?v=hvgt5aPs2UY",
        platform: "youtube",
        videoId: "hvgt5aPs2UY",
        tags: ["AI Agents", "Product Strategy", "Agentic Design"],
        featured: true,
        sortOrder: 1,
    },
    {
        slug: "ai-agents-conf-2025-empathetic-agents",
        title: "Designing Empathetic, Resource-Aware AI Agents for the Next Billion Users",
        description:
            "How do you build AI agents for users with low bandwidth, older devices, and limited digital literacy? A framework for designing AI that serves the next billion — not just the first.",
        date: "2025-11-14",
        event: "AI Agents Conference 2025",
        url: "https://www.youtube.com/watch?v=Sw8R0kLAqzA",
        platform: "youtube",
        videoId: "Sw8R0kLAqzA",
        tags: ["AI Agents", "Emerging Markets", "Accessibility"],
        featured: true,
        sortOrder: 2,
    },
    {
        slug: "ipl-masterclass-non-traditional-pm-2026",
        title: "Masterclass: From People to Product — How a Non-Traditional Background is a Superpower in PM",
        description:
            "A masterclass at the Institute of Product Leadership exploring how diverse career histories create stronger product managers and how to leverage what makes you different.",
        date: "2026-04-27",
        event: "Institute of Product Leadership",
        eventLogo: "/logos/ipl.png",
        url: "https://www.youtube.com/watch?v=7nDKsKxKfPo",
        platform: "youtube",
        videoId: "7nDKsKxKfPo",
        tags: ["Product Management", "Career", "Masterclass"],
        featured: true,
        sortOrder: 3,
    },
    {
        slug: "conf42-ai-product-spec-2026",
        title: "The AI Product Spec: A Hands-On Tutorial for Defining and Scoping Recommendation Systems",
        description:
            "A practical walkthrough of how to write a product spec for a recommendation system — covering data inputs, ranking logic, business constraints, and how to measure success.",
        date: "2026-01-28",
        event: "Conf42",
        url: "https://www.youtube.com/watch?v=gmtRjqJbQkE",
        platform: "youtube",
        videoId: "gmtRjqJbQkE",
        tags: ["AI", "Product Spec", "Recommendation Systems"],
        featured: false,
        sortOrder: 4,
    },
    {
        slug: "dsc-europe-ai-product-spec-2025",
        title: "The AI Product Spec: A Hands-On Tutorial for Defining and Scoping Recommendation Systems",
        description:
            "A practical walkthrough of how to write a product spec for a recommendation system — covering data inputs, ranking logic, business constraints, and how to measure success.",
        date: "2025-11-18",
        event: "DSC Europe",
        platform: "other",
        // url intentionally omitted — no public recording link available
        tags: ["AI", "Product Spec", "Recommendation Systems"],
        featured: false,
        sortOrder: 5,
    },
    {
        slug: "warsaw-it-days-ai-product-spec-2025",
        title: "The AI Product Spec: A Hands-On Tutorial for Defining and Scoping Recommendation Systems",
        description:
            "A practical walkthrough of how to write a product spec for a recommendation system — covering data inputs, ranking logic, business constraints, and how to measure success.",
        date: "2025-09-05",
        event: "Warsaw IT Days",
        platform: "other",
        requiresLogin: true,
        tags: ["AI", "Product Spec", "Recommendation Systems"],
        featured: false,
        sortOrder: 6,
    },
    {
        slug: "ipl-antigravity-masterclass-2026",
        title: "Building with AI Agents: A Google Antigravity Masterclass",
        description:
            "A masterclass at the Institute of Product Leadership on how product managers can work effectively with AI agent frameworks — defining tasks, managing context, and designing for agentic workflows.",
        date: "2026-07-17",
        event: "Institute of Product Leadership",
        eventLogo: "/logos/ipl.png",
        platform: "other",
        // url intentionally omitted — upcoming session, no recording yet
        tags: ["AI Agents", "Product Management", "Masterclass"],
        featured: false,
        sortOrder: 7,
    },
];

/** Returns only featured talks, sorted by `sortOrder`. */
export const getFeaturedTalks = (): Talk[] =>
    talks.filter((t) => t.featured).sort((a, b) => a.sortOrder - b.sortOrder);

/** Returns all talks sorted by `sortOrder`. */
export const getAllTalks = (): Talk[] =>
    [...talks].sort((a, b) => a.sortOrder - b.sortOrder);
