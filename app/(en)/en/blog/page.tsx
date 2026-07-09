import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/BlogIndexPage";
import { site } from "@/lib/content/en/site";
import { blogContent } from "@/lib/content/en/blog-meta";
import { blogPosts } from "@/lib/content/en/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Blog — Leadership, Purpose & Identity | Jairo J. García",
  description: blogContent.intro,
  keywords: ["leadership blog", "personal development blog", "fear of success articles", "life purpose blog"],
  path: staticRoutes.blog.en,
  alternatePath: staticRoutes.blog.es,
});

export default function Page() {
  return <BlogIndexPage locale="en" site={site} blogContent={blogContent} posts={blogPosts} />;
}
