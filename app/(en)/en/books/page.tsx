import type { Metadata } from "next";
import { BooksIndexPage } from "@/components/pages/BooksIndexPage";
import { site } from "@/lib/content/en/site";
import { booksContent, books } from "@/lib/content/en/books";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Books by Jairo J. García — SuperHumans & No Fear of Success",
  description: booksContent.intro,
  keywords: ["SuperHumans book", "No Fear of Success book", "personal development books", "purpose books"],
  path: staticRoutes.books.en,
  alternatePath: staticRoutes.books.es,
});

export default function Page() {
  return <BooksIndexPage locale="en" site={site} booksContent={booksContent} books={books} />;
}
