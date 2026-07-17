import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BookCover } from "@/components/ui/BookCover";
import { TiltCard } from "@/components/ui/TiltCard";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import type { Book } from "@/lib/content/types";

export function BooksGrid({
  heading,
  intro,
  books,
  basePath,
  moreInfoLabel,
}: {
  heading: string;
  intro: string;
  books: Book[];
  basePath: string;
  moreInfoLabel: string;
}) {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading title={heading} intro={intro} align="center" />
        <div className="mx-auto mt-14 grid max-w-3xl gap-14 sm:grid-cols-2">
          {books.map((book, index) => {
            const detailPath = `${basePath}/${book.slug}`;
            return (
              <AnimatedReveal key={book.id} delay={index * 0.1}>
                <TiltCard>
                  <Link href={detailPath} className="group block">
                    <BookCover title={book.title} subtitle={book.subtitle} coverImage={book.coverImage} />
                  </Link>
                </TiltCard>
                <p className="mt-5 font-display text-lg font-semibold text-cream-50">{book.title}</p>
                <p className="mt-1 text-sm text-cream-400">{book.year}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  <TrackedLink
                    href={book.links.purchaseHref}
                    eventName="InitiateCheckout"
                    eventParams={{ content_name: book.title }}
                    className="font-medium text-gold-300 hover:text-gold-200"
                  >
                    {book.links.purchaseLabel}
                  </TrackedLink>
                  <Link href={book.links.sampleHref} className="text-cream-300 hover:text-gold-300">
                    {book.links.sampleLabel}
                  </Link>
                  <Link href={detailPath} className="text-cream-300 hover:text-gold-300">
                    {moreInfoLabel}
                  </Link>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
