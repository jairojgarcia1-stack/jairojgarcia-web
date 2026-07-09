import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { site } from "@/lib/content/en/site";
import { blogPosts } from "@/lib/content/en/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { blogAlternatePath, staticRoutes, type BlogId } from "@/lib/i18n/slug-map";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    locale: "en",
    title: `${post.title} — Jairo J. García`,
    description: post.description,
    keywords: post.keywords,
    path: `${staticRoutes.blog.en}/${post.slug}`,
    alternatePath: blogAlternatePath(post.id as BlogId, "es"),
    type: "article",
    publishedTime: post.publishDate,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogPostPage locale="en" site={site} post={post} />;
}
