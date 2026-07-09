import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/BlogIndexPage";
import { site } from "@/lib/content/es/site";
import { blogContent } from "@/lib/content/es/blog-meta";
import { blogPosts } from "@/lib/content/es/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "es",
  title: "Blog — Liderazgo, propósito e identidad | Jairo J. García",
  description: blogContent.intro,
  keywords: ["blog de liderazgo", "blog de desarrollo personal", "miedo al éxito artículos", "propósito de vida blog"],
  path: staticRoutes.blog.es,
  alternatePath: staticRoutes.blog.en,
});

export default function Page() {
  return <BlogIndexPage locale="es" site={site} blogContent={blogContent} posts={blogPosts} />;
}
