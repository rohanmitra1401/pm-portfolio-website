export interface Role {
    /** Role title, e.g. "Product Manager — Merchant CRM" */
    title: string;
    /** Business unit or product the role sat under, e.g. "PhonePe Business" */
    org?: string;
    /** Human-readable tenure, e.g. "Jan 2026 – Present" */
    period: string;
    /** 1-2 sentence summary of the charter and headline outcome */
    description: string;
    /** Slug of the matching case study in /src/content/case-studies, if one exists */
    caseStudySlug?: string;
    /** If true, renders a filled marker and a "Current" badge */
    current?: boolean;
}

export interface Company {
    /** Company name as shown in the section header */
    name: string;
    /** Path to the company logo in /public */
    logo: string;
    /** Per-logo height tuning — logos are not visually uniform at the same height */
    logoClassName: string;
    /** Combined tenure across all roles at the company */
    period: string;
    /** City, country */
    location: string;
    /** Roles held, most recent first */
    roles: Role[];
}

/** Employment history, most recent company first. */
export const EXPERIENCE: Company[] = [
    {
        name: "PhonePe",
        logo: "/phonepe.svg",
        logoClassName: "h-5 w-auto",
        period: "Sep 2022 – Present",
        location: "Bengaluru, India",
        roles: [
            {
                title: "Product Manager — Merchant CRM",
                org: "PhonePe Business",
                period: "Jan 2026 – Present",
                current: true,
                description:
                    "Own the zero-to-one Merchant CRM charter: WhatsApp-based digital bills that let offline retailers build a customer base and run repeat-purchase campaigns. Defined the three-party integration across PhonePe, Meta's WhatsApp Business API, and BSP Karix, and shipped AI-assisted workflows to production behind confidence thresholds and human-in-the-loop review.",
                caseStudySlug: "merchant-crm",
            },
            {
                title: "Product Manager — Post-Checkout & Fulfillment",
                org: "Pincode (Quick Commerce)",
                period: "Sep 2025 – Dec 2025",
                description:
                    "Owned the post-checkout and fulfillment roadmap — order state machine, real-time ETA tracking, and automated support workflows. Order breaches down 11%, WISMO queries down 15%, NPS up 8 points.",
                caseStudySlug: "pincode",
            },
            {
                title: "Product Manager — Discovery",
                org: "Indus Appstore",
                period: "Sep 2022 – Sep 2025",
                description:
                    "Owned the consumer storefront on India's first homegrown app store. Repositioned an underperforming video feed as contextual app trailers (install conversion 12.9% → 15.5%), launched Intelligent Updates, and led vernacular-first localization across 12 languages.",
                caseStudySlug: "indus-appstore",
            },
        ],
    },
    {
        name: "Airtel",
        logo: "/airtel.png",
        logoClassName: "h-6 w-auto",
        period: "Sep 2021 – Sep 2022",
        location: "Gurgaon, India",
        roles: [
            {
                title: "Associate Product Manager — B2B SaaS",
                org: "Airtel Business",
                period: "Sep 2021 – Sep 2022",
                description:
                    "Built a B2B SaaS order entry platform for enterprise ops teams, cutting manual logging from 12 hours to 3, and migrated 3,000 enterprise customers off legacy systems to the LEO platform — validation TAT down 80%.",
                caseStudySlug: "airtel-business",
            },
        ],
    },
];
