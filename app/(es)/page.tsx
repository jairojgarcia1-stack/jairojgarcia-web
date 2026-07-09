import type { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { site } from "@/lib/content/es/site";
import { home } from "@/lib/content/es/home";
import { books } from "@/lib/content/es/books";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";
import { AUTHOR_NAME } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  locale: "es",
  title: `${AUTHOR_NAME} — Autor, Conferencista y Coach de Transformación`,
  description: site.metaDescription,
  keywords: site.metaKeywords,
  path: staticRoutes.home.es,
  alternatePath: staticRoutes.home.en,
});

export default function Page() {
  return <HomePage locale="es" site={site} home={home} books={books} />;
}
