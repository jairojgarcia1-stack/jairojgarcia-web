import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import type { AboutContent, Locale, SiteContent } from "@/lib/content/types";

export function AboutPage({
  locale,
  site,
  about,
}: {
  locale: Locale;
  site: SiteContent;
  about: AboutContent;
}) {
  const path = staticRoutes.about[locale];
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.about.label, path },
  ];

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: about.heading, description: about.intro[0], locale }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Container className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>

      <section className="pb-16">
        <Container className="max-w-3xl">
          <AnimatedReveal>
            <h1 className="text-4xl font-semibold text-cream-50 sm:text-5xl">{about.heading}</h1>
            <div className="mt-6 flex flex-col gap-4">
              {about.intro.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-cream-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-16">
        <Container className="max-w-3xl">
          <AnimatedReveal>
            <div className="flex flex-col gap-6">
              {about.story.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-cream-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-20">
        <Container>
          <SectionHeading title={about.values.heading} align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {about.values.items.map((value, index) => (
              <AnimatedReveal key={value.id} delay={index * 0.08}>
                <Card className="h-full">
                  <h3 className="font-display text-xl font-semibold text-cream-50">{value.title}</h3>
                  <p className="mt-3 text-cream-400">{value.description}</p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={about.timeline.heading} />
          <div className="mt-12 flex flex-col gap-8 border-l border-ink-700 pl-8">
            {about.timeline.items.map((item, index) => (
              <AnimatedReveal key={item.id} delay={index * 0.08} className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gold-400" />
                <p className="text-sm font-medium uppercase tracking-wide text-gold-400">{item.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-cream-50">{item.title}</h3>
                <p className="mt-2 text-cream-400">{item.description}</p>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-16">
        <Container className="flex justify-center">
          <Button href={about.cta.href}>{about.cta.label}</Button>
        </Container>
      </section>
    </PageShell>
  );
}
