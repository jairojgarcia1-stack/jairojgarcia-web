import type { Metadata } from "next";
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Locale } from "@/lib/content/types";

interface BuildMetadataArgs {
  locale: Locale;
  title: string;
  description: string;
  keywords: string[];
  /** Canonical path for this locale, e.g. "/sobre-mi" or "/en/about". */
  path: string;
  /** Equivalent path in the other locale, if one exists. */
  alternatePath?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildMetadata({
  locale,
  title,
  description,
  keywords,
  path,
  alternatePath,
  ogImage,
  type = "website",
  publishedTime,
}: BuildMetadataArgs): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const otherLocale = locale === "es" ? "en" : "es";

  const languages: Record<string, string> = {
    [locale]: canonical,
  };
  if (alternatePath) {
    languages[otherLocale] = `${SITE_URL}${alternatePath}`;
  }
  languages["x-default"] = languages.es ?? canonical;

  return {
    title,
    description,
    keywords,
    authors: [{ name: AUTHOR_NAME }],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME[locale],
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      // When omitted, Next.js falls back to the nearest ancestor
      // opengraph-image.tsx (route-group root) automatically.
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}
