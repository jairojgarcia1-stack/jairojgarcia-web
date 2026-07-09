import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BookCover } from "@/components/ui/BookCover";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import type { Book, BooksContent, Locale, SiteContent } from "@/lib/content/types";

export function BooksIndexPage({
  locale,
  site,
  booksContent,
  books,
}: {
  locale: Locale;
  site: SiteContent;
  booksContent: BooksContent;
  books: Book[];
}) {
  const path = staticRoutes.books[locale];
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.books.label, path },
  ];

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: booksContent.heading, description: booksContent.intro, locale }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Container className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-semibold text-cream-50 sm:text-5xl">{booksContent.heading}</h1>
        <p className="mt-4 max-w-2xl text-lg text-cream-400">{booksContent.intro}</p>
      </Container>

      <section className="py-16">
        <Container className="grid gap-16 sm:grid-cols-2">
          {books.map((book, index) => (
            <AnimatedReveal key={book.id} delay={index * 0.1}>
              <Link href={`${path}/${book.slug}`} className="group grid gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
                <BookCover title={book.title} subtitle={book.subtitle} />
                <div>
                  <p className="text-sm text-gold-400">{book.year}</p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-cream-50 group-hover:text-gold-300">
                    {book.title}
                  </h2>
                  <p className="mt-3 text-cream-400">{book.shortDescription}</p>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}
