import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/lib/content/types";

export function Speaking({ speaking }: { speaking: HomeContent["speaking"] }) {
  return (
    <section className="border-y border-ink-800 bg-ink-900/40 py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <AnimatedReveal>
          <SectionHeading title={speaking.heading} intro={speaking.description} />
          <Button href={speaking.cta.href} className="mt-8">
            {speaking.cta.label}
          </Button>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {speaking.topics.map((topic) => (
              <Badge key={topic}>{topic}</Badge>
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
