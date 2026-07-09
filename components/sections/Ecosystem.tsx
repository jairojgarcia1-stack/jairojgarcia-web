import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/lib/content/types";

export function Ecosystem({ ecosystem }: { ecosystem: HomeContent["ecosystem"] }) {
  return (
    <section className="border-y border-ink-800 bg-ink-900/40 py-24">
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
      </Container>
    </section>
  );
}
