import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BookCover } from "@/components/ui/BookCover";
import type { Book } from "@/lib/content/types";

export function BooksGrid({
  heading,
  intro,
  books,
  basePath,
}: {
  heading: string;
  intro: string;
  books: Book[];
  basePath: string;
}) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title={heading} intro={intro} align="center" />
        <div className="mx-auto mt-14 grid max-w-3xl gap-10 sm:grid-cols-2">
          {books.map((book, index) => (
            <AnimatedReveal key={book.id} delay={index * 0.1}>
              <Link href={`${basePath}/${book.slug}`} className="group block">
                <BookCover title={book.title} subtitle={book.subtitle} />
                <p className="mt-4 font-display text-lg font-semibold text-cream-50 group-hover:text-gold-300">
                  {book.title}
                </p>
                <p className="mt-1 text-sm text-cream-400">{book.year}</p>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
