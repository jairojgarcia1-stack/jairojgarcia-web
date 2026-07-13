import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { VideoReel } from "@/components/ui/VideoReel";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { StatCounter } from "@/components/ui/StatCounter";
import { SpeakingInquiryForm } from "@/components/forms/SpeakingInquiryForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import { MEDIA } from "@/lib/media";
import type { Locale, SiteContent, SpeakingContent } from "@/lib/content/types";

export function SpeakingPage({
  locale,
  site,
  speaking,
}: {
  locale: Locale;
  site: SiteContent;
  speaking: SpeakingContent;
}) {
  const path = staticRoutes.speaking[locale];
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.speaking.label, path },
  ];

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: speaking.heading, description: speaking.intro, locale }),
          breadcrumbSchema(breadcrumbItems),
          faqPageSchema(speaking.faqs),
        ]}
      />
      <Container className="pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>

      <section className="relative flex h-[65vh] min-h-[440px] items-end overflow-hidden">
        <VideoReel src={MEDIA.speakingReel} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent"
        />
        <Container className="relative pb-14">
          <AnimatedReveal>
            <h1 className="max-w-2xl text-4xl font-semibold text-cream-50 sm:text-5xl">{speaking.heading}</h1>
            <p className="mt-4 max-w-2xl text-lg text-cream-200">{speaking.intro}</p>
            <Button href="#solicitar" className="mt-8">
              {speaking.cta.label}
            </Button>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="border-b border-ink-800 bg-ink-900/40 py-14">
        <Container className="grid gap-10 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
          <AnimatedReveal>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-gold-400/25">
              <EditorialPhoto
                src={MEDIA.actionShots[0]}
                alt={
                  locale === "es"
                    ? "Jairo J. García frente a un auditorio lleno de cientos de asistentes"
                    : "Jairo J. García in front of a packed auditorium of hundreds of attendees"
                }
                sizes="(min-width: 640px) 25vw, 80vw"
              />
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {speaking.trustStats.map((stat) => (
                <StatCounter key={stat.id} value={stat.value} label={stat.label} locale={locale} />
              ))}
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading title={locale === "es" ? "Temas" : "Topics"} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {speaking.topics.map((topic, index) => (
              <AnimatedReveal key={topic.id} delay={index * 0.08}>
                <Card className="h-full">
                  <h3 className="font-display text-xl font-semibold text-cream-50">{topic.title}</h3>
                  <p className="mt-3 text-cream-400">{topic.description}</p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-20">
        <Container>
          <SectionHeading title={locale === "es" ? "Formatos" : "Formats"} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {speaking.formats.map((format, index) => (
              <AnimatedReveal key={format.id} delay={index * 0.08}>
                <Card className="h-full">
                  <h3 className="font-display text-lg font-semibold text-cream-50">{format.title}</h3>
                  <p className="mt-3 text-cream-400">{format.description}</p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-20">
        <Container>
          <SectionHeading title={locale === "es" ? "Audiencias" : "Audiences"} />
          <div className="mt-8 flex flex-wrap gap-3">
            {speaking.audience.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Container>
      </section>

      <section id="solicitar" className="scroll-mt-24 border-t border-ink-800 py-20">
        <Container className="max-w-2xl">
          <SpeakingInquiryForm form={speaking.inquiryForm} />
          <p className="mt-6 text-center text-sm text-cream-400">
            <Link href={staticRoutes.press[locale]} className="text-gold-300 hover:text-gold-200">
              {speaking.pressKitLabel}
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-20">
        <Container>
          <SectionHeading title={speaking.programsHeading} intro={speaking.programsIntro} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
            {speaking.programs.map((program, index) => (
              <AnimatedReveal key={program.id} delay={index * 0.08}>
                <div className="rounded-xl border border-ink-800 p-5">
                  <h3 className="font-display text-base font-semibold text-cream-50">{program.title}</h3>
                  <p className="mt-2 text-sm text-cream-400">{program.description}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-800 py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-cream-50">
            {locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {speaking.faqs.map((faq) => (
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
