import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import type { HomeContent } from "@/lib/content/types";

export function Testimonials({ testimonials }: { testimonials: HomeContent["testimonials"] }) {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title={testimonials.heading} align="center" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((testimonial, index) => (
            <AnimatedReveal key={testimonial.id} delay={index * 0.08}>
              <Card className="flex h-full flex-col justify-between">
                <p className="text-lg leading-relaxed text-cream-200">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-medium text-cream-50">{testimonial.name}</p>
                  <p className="text-sm text-cream-400">{testimonial.role}</p>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
