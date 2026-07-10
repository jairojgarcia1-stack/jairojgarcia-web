import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { BookCover } from "@/components/ui/BookCover";
import { TiltCard } from "@/components/ui/TiltCard";
import { TrailerVideo } from "@/components/ui/TrailerVideo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { bookSchema, breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import type { Book, Locale, SiteContent } from "@/lib/content/types";

export function BookDetailPage({
  locale,
  site,
  book,
}: {
  locale: Locale;
  site: SiteContent;
  book: Book;
}) {
  const path = `${staticRoutes.books[locale]}/${book.slug}`;
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.books.label, path: staticRoutes.books[locale] },
    { name: book.title, path },
  ];

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: book.title, description: book.shortDescription, locale }),
          breadcrumbSchema(breadcrumbItems),
          bookSchema(book, path, locale),
          faqPageSchema(book.faqs),
        ]}
      />
      <Container className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>

      <section className="pb-16">
        <Container className="grid gap-12 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
          <AnimatedReveal>
            <TiltCard className="mx-auto max-w-xs sm:mx-0">
              <BookCover title={book.title} subtitle={book.subtitle} coverImage={book.coverImage} />
            </TiltCard>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="text-sm font-medium uppercase tracking-wide text-gold-400">{book.year}</p>
            <h1 className="mt-2 text-4xl font-semibold text-cream-50 sm:text-5xl">{book.title}</h1>
            <p className="mt-2 text-xl text-cream-300">{book.subtitle}</p>
            <p className="mt-6 text-lg leading-relaxed text-cream-400">{book.shortDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {book.themes.map((theme) => (
                <Badge key={theme}>{theme}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={book.links.purchaseHref}>{book.links.purchaseLabel}</Button>
              <Button href={book.links.sampleHref} variant="secondary">
                {book.links.sampleLabel}
              </Button>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section id={locale === "es" ? "extracto" : "excerpt"} className="scroll-mt-24 border-t border-ink-800 py-16">
        <Container className="max-w-3xl">
          <AnimatedReveal>
            <blockquote className="border-l-2 border-gold-400 pl-6 font-display text-2xl italic text-cream-100">
              &ldquo;{book.quote.text}&rdquo;
              <footer className="mt-2 text-sm not-italic text-cream-400">— {book.quote.author}</footer>
            </blockquote>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1} className="mt-10 flex flex-col gap-5">
            {book.longDescription.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-cream-400">
                {paragraph}
              </p>
            ))}
          </AnimatedReveal>
        </Container>
      </section>

      {book.trailerVideo ? (
        <section className="border-t border-ink-800 py-16">
          <Container className="flex flex-col items-center">
            <AnimatedReveal className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-cream-50">
                {locale === "es" ? "Ver el tráiler" : "Watch the trailer"}
              </h2>
              <div className="mt-8">
                <TrailerVideo
                  src={book.trailerVideo}
                  poster={book.coverImage}
                  label={`${book.title} — ${locale === "es" ? "tráiler" : "trailer"}`}
                />
              </div>
            </AnimatedReveal>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ink-800 py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-cream-50">
            {locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {book.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-medium text-cream-50">{faq.question}</h3>
                <p className="mt-2 text-cream-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
