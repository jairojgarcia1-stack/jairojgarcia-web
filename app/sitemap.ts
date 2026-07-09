import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { staticRoutes, bookSlugs, blogSlugs } from "@/lib/i18n/slug-map";
import { blogPosts as esBlogPosts } from "@/lib/content/es/blog";
import { blogPosts as enBlogPosts } from "@/lib/content/en/blog";

function url(path: string) {
  return `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const key of Object.keys(staticRoutes) as (keyof typeof staticRoutes)[]) {
    const pair = staticRoutes[key];
    entries.push({
      url: url(pair.es),
      lastModified: now,
      alternates: { languages: { es: url(pair.es), en: url(pair.en) } },
    });
    entries.push({
      url: url(pair.en),
      lastModified: now,
      alternates: { languages: { es: url(pair.es), en: url(pair.en) } },
    });
  }

  for (const id of Object.keys(bookSlugs) as (keyof typeof bookSlugs)[]) {
    const pair = bookSlugs[id];
    const esPath = `${staticRoutes.books.es}/${pair.es}`;
    const enPath = `${staticRoutes.books.en}/${pair.en}`;
    entries.push({
      url: url(esPath),
      lastModified: now,
      alternates: { languages: { es: url(esPath), en: url(enPath) } },
    });
    entries.push({
      url: url(enPath),
      lastModified: now,
      alternates: { languages: { es: url(esPath), en: url(enPath) } },
    });
  }

  for (const id of Object.keys(blogSlugs) as (keyof typeof blogSlugs)[]) {
    const pair = blogSlugs[id];
    const esPath = `${staticRoutes.blog.es}/${pair.es}`;
    const enPath = `${staticRoutes.blog.en}/${pair.en}`;
    const esPost = esBlogPosts.find((p) => p.id === id);
    const enPost = enBlogPosts.find((p) => p.id === id);

    entries.push({
      url: url(esPath),
      lastModified: esPost ? new Date(esPost.publishDate) : now,
      alternates: { languages: { es: url(esPath), en: url(enPath) } },
    });
    entries.push({
      url: url(enPath),
      lastModified: enPost ? new Date(enPost.publishDate) : now,
      alternates: { languages: { es: url(esPath), en: url(enPath) } },
    });
  }

  return entries;
}
