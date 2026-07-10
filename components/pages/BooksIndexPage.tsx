import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BookCover } from "@/components/ui/BookCover";
import { TiltCard } from "@/components/ui/TiltCard";
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
  const moreInfoLabel = locale === "es" ? "Más información" : "More info";

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
        <Container className="flex flex-col gap-20">
          {books.map((book, index) => {
            const detailPath = `${path}/${book.slug}`;
            return (
              <AnimatedReveal key={book.id} delay={index * 0.1}>
                <div className="grid gap-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-start">
                  <TiltCard className="mx-auto w-full max-w-xs sm:mx-0">
                    <Link href={detailPath} className="block">
                      <BookCover title={book.title} subtitle={book.subtitle} coverImage={book.coverImage} />
                    </Link>
                  </TiltCard>
                  <div>
                    <p className="text-sm text-gold-400">{book.year}</p>
                    <h2 className="mt-1 font-display text-2xl font-semibold text-cream-50">{book.title}</h2>
                    <p className="mt-3 text-cream-400">{book.shortDescription}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                      <a
                        href={book.links.purchaseHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gold-300 hover:text-gold-200"
                      >
                        {book.links.purchaseLabel}
                      </a>
                      <Link href={book.links.sampleHref} className="text-cream-300 hover:text-gold-300">
                        {book.links.sampleLabel}
                      </Link>
                      <Link href={detailPath} className="text-cream-300 hover:text-gold-300">
                        {moreInfoLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </Container>
      </section>
    </PageShell>
  );
}
