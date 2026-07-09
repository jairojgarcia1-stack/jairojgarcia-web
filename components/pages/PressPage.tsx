import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import type { Locale, PressContent, SiteContent } from "@/lib/content/types";

export function PressPage({
  locale,
  site,
  press,
}: {
  locale: Locale;
  site: SiteContent;
  press: PressContent;
}) {
  const path = staticRoutes.press[locale];
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.press.label, path },
  ];

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: press.heading, description: press.intro, locale }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Container className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-semibold text-cream-50 sm:text-5xl">{press.heading}</h1>
        <p className="mt-4 max-w-2xl text-lg text-cream-400">{press.intro}</p>
      </Container>

      <section className="py-16">
        <Container className="max-w-3xl">
          <AnimatedReveal className="flex flex-col gap-4">
            {press.bio.long.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-cream-400">
                {paragraph}
              </p>
            ))}
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-16">
        <Container>
          <SectionHeading title={locale === "es" ? "Kit de prensa" : "Press kit"} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {press.kit.map((item, index) => (
              <AnimatedReveal key={item.id} delay={index * 0.08}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold text-cream-50">{item.label}</h3>
                  <p className="mt-3 text-cream-400">{item.description}</p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      {press.mentions.length > 0 ? (
        <section className="border-t border-ink-800 py-16">
          <Container>
            <SectionHeading title={locale === "es" ? "En los medios" : "In the media"} />
            <div className="mt-10 flex flex-col gap-4">
              {press.mentions.map((mention) => (
                <Card key={mention.id}>
                  <p className="text-sm text-gold-400">{mention.outlet}</p>
                  <p className="mt-1 font-medium text-cream-50">{mention.title}</p>
                  <p className="mt-1 text-sm text-cream-400">{mention.date}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-ink-800 py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-cream-50">{press.contact.label}</h2>
          <a href={`mailto:${press.contact.email}`} className="mt-3 inline-block text-gold-300 hover:text-gold-200">
            {press.contact.email}
          </a>
        </Container>
      </section>
    </PageShell>
  );
}
