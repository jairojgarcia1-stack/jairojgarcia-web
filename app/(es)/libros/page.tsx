import type { Metadata } from "next";
import { BooksIndexPage } from "@/components/pages/BooksIndexPage";
import { site } from "@/lib/content/es/site";
import { booksContent, books } from "@/lib/content/es/books";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "es",
  title: "Libros de Jairo J. García — SuperHumanos y Sin Miedo al Éxito",
  description: booksContent.intro,
  keywords: ["SuperHumanos libro", "Sin Miedo al Éxito libro", "libros de desarrollo personal", "libros de propósito"],
  path: staticRoutes.books.es,
  alternatePath: staticRoutes.books.en,
});

export default function Page() {
  return <BooksIndexPage locale="es" site={site} booksContent={booksContent} books={books} />;
}
