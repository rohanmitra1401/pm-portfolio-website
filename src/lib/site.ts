/**
 * Canonical origin for this site, single-sourced.
 *
 * Keep every absolute URL — metadataBase, JSON-LD, sitemap, robots — reading
 * from here. This value lived in four places before and drifted: commit 1db8b5e
 * moved the layout off rohanmitra.com (which belongs to someone else) but
 * missed the JSON-LD on /publications and /talks, so the site spent months
 * attributing its own pages to a domain it does not control.
 */
export const SITE_URL = "https://rohanmitrapm-portfolio.vercel.app";

/** Absolute URL for a site-relative path, e.g. absoluteUrl("/talks"). */
export const absoluteUrl = (path: string): string =>
    new URL(path, SITE_URL).toString();
