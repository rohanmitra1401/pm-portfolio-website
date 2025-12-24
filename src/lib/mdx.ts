import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src/content/case-studies");

export const getCaseStudyBySlug = async (slug: string) => {
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    const { frontmatter, content } = await compileMDX<{
        title: string;
        description: string;
        date: string;
        company: string;
        category?: string;
    }>({
        source: fileContent,
        options: { parseFrontmatter: true },
    });

    return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllCaseStudies = async () => {
    const files = fs.readdirSync(rootDirectory);

    let posts = [];

    for (const file of files) {
        const { meta } = await getCaseStudyBySlug(file);
        posts.push(meta);
    }

    return posts;
};
