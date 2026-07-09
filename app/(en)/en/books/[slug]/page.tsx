import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookDetailPage } from "@/components/pages/BookDetailPage";
import { site } from "@/lib/content/en/site";
import { books } from "@/lib/content/en/books";
import { buildMetadata } from "@/lib/seo/metadata";
import { bookAlternatePath, staticRoutes, type BookId } from "@/lib/i18n/slug-map";

export const dynamicParams = false;

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};

  return buildMetadata({
    locale: "en",
    title: `${book.title}: ${book.subtitle} — Jairo J. García`,
    description: book.shortDescription,
    keywords: [...book.themes, book.title, "Jairo J. García book"],
    path: `${staticRoutes.books.en}/${book.slug}`,
    alternatePath: bookAlternatePath(book.id as BookId, "es"),
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return <BookDetailPage locale="en" site={site} book={book} />;
}
