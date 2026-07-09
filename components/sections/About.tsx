import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/lib/content/types";

export function About({ about }: { about: HomeContent["about"] }) {
  return (
    <section className="py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <AnimatedReveal>
          <h2 className="text-3xl font-semibold text-cream-50 sm:text-4xl">{about.heading}</h2>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-cream-400">
                {paragraph}
              </p>
            ))}
            <div>
              <Button href={about.cta.href} variant="secondary" className="mt-2">
                {about.cta.label}
              </Button>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
