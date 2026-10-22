import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src/content/case-studies");

interface CaseStudyFrontmatter {
    title: string;
    description: string;
    date: string;
    company: string;
    category?: string;
    sortOrder?: number;
}

type CaseStudyMeta = CaseStudyFrontmatter & { slug: string };

/** A slug is a bare filename, so anything with a path separator or dot is not one. */
const isValidSlug = (slug: string) => /^[a-zA-Z0-9_-]+$/.test(slug);

/**
 * Compiles a single case study.
 * Returns null when the slug is malformed or no such file exists, so callers
 * can render a 404 rather than let an ENOENT surface as a 500.
 */
export const getCaseStudyBySlug = async (slug: string) => {
    const realSlug = slug.replace(/\.mdx$/, "");
    if (!isValidSlug(realSlug)) return null;

    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

    let fileContent: string;
    try {
        fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    } catch {
        return null;
    }

    const { frontmatter, content } = await compileMDX<CaseStudyFrontmatter>({
        source: fileContent,
        options: { parseFrontmatter: true },
    });

    return { meta: { ...frontmatter, slug: realSlug }, content };
};

/**
 * Slugs of every case study on disk.
 * Filtering on the extension matters: readdirSync also returns files like
 * .DS_Store, and feeding one of those to getCaseStudyBySlug used to fail the
 * entire build.
 */
export const getAllCaseStudySlugs = (): string[] =>
    fs
        .readdirSync(rootDirectory)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));

export const getAllCaseStudies = async (): Promise<CaseStudyMeta[]> => {
    const posts: CaseStudyMeta[] = [];

    for (const slug of getAllCaseStudySlugs()) {
        const study = await getCaseStudyBySlug(slug);
        if (study) posts.push(study.meta);
    }

    // Manual ordering via frontmatter `sortOrder` (lower = higher on the page)
    return posts.sort(
        (a, b) => (a.sortOrder ?? Infinity) - (b.sortOrder ?? Infinity)
    );
};
