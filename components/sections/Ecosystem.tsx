import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MasterclassForm } from "@/components/forms/MasterclassForm";
import type { HomeContent, Locale } from "@/lib/content/types";

const COPY = {
  es: {
    badge: "Gratis",
    title: "Masterclass Gratuita",
    description:
      "Los primeros 3 pasos para romper el patrón de autosabotaje y activar tu potencial — directo a tu correo.",
  },
  en: {
    badge: "Free",
    title: "Free Masterclass",
    description: "The first 3 steps to break the self-sabotage pattern and activate your potential — straight to your inbox.",
  },
} as const;

export function Ecosystem({ ecosystem, locale }: { ecosystem: HomeContent["ecosystem"]; locale: Locale }) {
  const t = COPY[locale];

  return (
    <section className="border-y border-ink-800 bg-ink-900/40 py-28">
      <Container>
        <SectionHeading title={ecosystem.heading} intro={ecosystem.intro} align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ecosystem.items.map((item, index) => (
            <AnimatedReveal key={item.id} delay={index * 0.08}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream-50">{item.title}</h3>
                  <p className="mt-3 text-cream-400">{item.description}</p>
                </div>
                <Button href={item.href} variant="ghost" className="mt-6 justify-start px-0">
                  {item.ctaLabel} →
                </Button>
              </Card>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.24} className="mt-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-gold-400/40 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <Badge>{t.badge}</Badge>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cream-50">{t.title}</h3>
              <p className="mt-2 max-w-md text-cream-400">{t.description}</p>
            </div>
            <MasterclassForm locale={locale} />
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
