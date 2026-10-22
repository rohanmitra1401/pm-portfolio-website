import type { MetadataRoute } from "next";
import { getAllCaseStudySlugs } from "@/lib/mdx";
import { absoluteUrl } from "@/lib/site";

const STATIC_ROUTES = ["/", "/work", "/publications", "/talks", "/labs"];

export default function sitemap(): MetadataRoute.Sitemap {
    const caseStudies = getAllCaseStudySlugs().map((slug) => `/work/${slug}`);

    // `lastModified` is deliberately omitted: in a fresh CI clone every file
    // carries the checkout time, so emitting it would just assert that the
    // whole site changed on every deploy.
    return [...STATIC_ROUTES, ...caseStudies].map((path) => ({
        url: absoluteUrl(path),
    }));
}
