import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { InAction } from "@/components/sections/InAction";
import { About } from "@/components/sections/About";
import { PurposeStatement } from "@/components/sections/PurposeStatement";
import { Philosophy } from "@/components/sections/Philosophy";
import { Trajectory } from "@/components/sections/Trajectory";
import { Speaking } from "@/components/sections/Speaking";
import { BooksGrid } from "@/components/sections/BooksGrid";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { SocialProof } from "@/components/sections/SocialProof";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteSchema, webPageSchema, siteNavigationSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import type { Book, HomeContent, Locale, SiteContent } from "@/lib/content/types";

export function HomePage({
  locale,
  site,
  home,
  books,
}: {
  locale: Locale;
  site: SiteContent;
  home: HomeContent;
  books: Book[];
}) {
  const path = staticRoutes.home[locale];
  const navItems = [
    { name: site.nav.home.label, path: site.nav.home.href },
    { name: site.nav.about.label, path: site.nav.about.href },
    { name: site.nav.books.label, path: site.nav.books.href },
    { name: site.nav.speaking.label, path: site.nav.speaking.href },
    { name: site.nav.press.label, path: site.nav.press.href },
    { name: site.nav.blog.label, path: site.nav.blog.href },
  ];

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          websiteSchema(locale),
          webPageSchema({ path, title: site.tagline, description: site.metaDescription, locale }),
          siteNavigationSchema(navItems),
        ]}
      />
      <Hero hero={home.hero} />
      <Stats stats={home.stats} locale={locale} />
      <InAction action={home.action} />
      <About about={home.about} />
      <PurposeStatement purpose={home.purpose} />
      <Philosophy philosophy={home.philosophy} />
      <Trajectory trajectory={home.trajectory} />
      <Speaking speaking={home.speaking} />
      <BooksGrid
        heading={home.booksHeading}
        intro={home.booksIntro}
        books={books}
        basePath={staticRoutes.books[locale]}
        moreInfoLabel={locale === "es" ? "Más información" : "More info"}
      />
      <Ecosystem ecosystem={home.ecosystem} locale={locale} />
      <SocialProof socialProof={home.socialProof} locale={locale} />
      <LogosStrip locale={locale} />
      <Testimonials testimonials={home.testimonials} locale={locale} />
      <Contact contact={home.contact} id={locale === "es" ? "contacto" : "contact"} />
    </PageShell>
  );
}
