import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import type { HomeContent } from "@/lib/content/types";

export function Philosophy({ philosophy }: { philosophy: HomeContent["philosophy"] }) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow={philosophy.heading} title={philosophy.intro} align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {philosophy.pillars.map((pillar, index) => (
            <AnimatedReveal key={pillar.id} delay={index * 0.08}>
              <Card className="h-full">
                <h3 className="font-display text-xl font-semibold text-cream-50">{pillar.title}</h3>
                <p className="mt-3 text-cream-400">{pillar.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
