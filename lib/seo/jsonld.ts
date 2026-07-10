import { AUTHOR_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";
import type { Book, FaqItem, Locale } from "@/lib/content/types";

export type JsonLdObject = Record<string, unknown>;

export function personSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: SITE_URL,
    jobTitle: ["Author", "International Speaker", "Executive Coach", "Entrepreneur"],
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

export function websiteSchema(locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: AUTHOR_NAME,
    inLanguage: locale === "es" ? "es" : "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

export function webPageSchema(args: {
  path: string;
  title: string;
  description: string;
  locale: Locale;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${args.path}#webpage`,
    url: `${SITE_URL}${args.path}`,
    name: args.title,
    description: args.description,
    inLanguage: args.locale === "es" ? "es" : "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function siteNavigationSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: items.map((item) => item.name),
    url: items.map((item) => `${SITE_URL}${item.path}`),
  };
}

export function bookSchema(book: Book, path: string, locale: Locale): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${SITE_URL}${path}#book`,
    name: book.title,
    alternateName: book.subtitle,
    url: `${SITE_URL}${path}`,
    inLanguage: locale === "es" ? "es" : "en",
    datePublished: String(book.year),
    author: { "@id": `${SITE_URL}/#person` },
    description: book.shortDescription,
    keywords: book.themes.join(", "),
  };
}

export function faqPageSchema(faqs: FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(args: {
  path: string;
  title: string;
  description: string;
  publishDate: string;
  locale: Locale;
  keywords: string[];
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${args.path}#article`,
    headline: args.title,
    description: args.description,
    url: `${SITE_URL}${args.path}`,
    inLanguage: args.locale === "es" ? "es" : "en",
    datePublished: args.publishDate,
    dateModified: args.publishDate,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    keywords: args.keywords.join(", "),
  };
}
