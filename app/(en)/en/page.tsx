import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { site } from "@/lib/content/en/site";
import { home } from "@/lib/content/en/home";
import { books } from "@/lib/content/en/books";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";
import { AUTHOR_NAME } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: `${AUTHOR_NAME} — Author, Speaker & Transformation Coach`,
  description: site.metaDescription,
  keywords: site.metaKeywords,
  path: staticRoutes.home.en,
  alternatePath: staticRoutes.home.es,
});

export default function Page() {
  return <HomePage locale="en" site={site} home={home} books={books} />;
}
