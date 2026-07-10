import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { MEDIA } from "@/lib/media";
import type { HomeContent } from "@/lib/content/types";

export function About({ about }: { about: HomeContent["about"] }) {
  return (
    <section className="py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <AnimatedReveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-ink-700">
            <EditorialPhoto src={MEDIA.aboutPortrait} alt="Jairo J. García" sizes="(min-width: 1024px) 35vw, 90vw" />
          </div>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <h2 className="text-3xl font-semibold text-cream-50 sm:text-4xl">{about.heading}</h2>
          <div className="mt-6 flex flex-col gap-5">
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
