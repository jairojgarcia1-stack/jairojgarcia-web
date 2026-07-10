import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { InitialsAvatar } from "@/components/ui/InitialsAvatar";
import type { HomeContent, Locale } from "@/lib/content/types";

export function Testimonials({
  testimonials,
  locale,
}: {
  testimonials: HomeContent["testimonials"];
  locale: Locale;
}) {
  const watchLabel = locale === "es" ? "Ver testimonio en video ▶" : "Watch video testimonial ▶";

  return (
    <section className="py-28">
      <Container>
        <SectionHeading title={testimonials.heading} align="center" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((testimonial, index) => (
            <AnimatedReveal key={testimonial.id} delay={index * 0.08}>
              <Card className="flex h-full flex-col justify-between">
                <p className="text-lg leading-relaxed text-cream-200">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  {testimonial.photo ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-400/30">
                      <EditorialPhoto
                        src={testimonial.photo}
                        alt={testimonial.name}
                        sizes="48px"
                        fallback={<InitialsAvatar name={testimonial.name} className="absolute inset-0 h-full w-full" />}
                      />
                    </div>
                  ) : (
                    <InitialsAvatar name={testimonial.name} className="h-12 w-12 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-cream-50">{testimonial.name}</p>
                    <p className="text-sm text-cream-400">
                      {testimonial.role}
                      {testimonial.company ? ` · ${testimonial.company}` : ""}
                    </p>
                  </div>
                </div>
                {testimonial.videoUrl ? (
                  <a
                    href={testimonial.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 text-xs font-medium uppercase tracking-wide text-gold-300 hover:text-gold-200"
                  >
                    {watchLabel}
                  </a>
                ) : null}
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
