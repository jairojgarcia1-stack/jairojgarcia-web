import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { MEDIA } from "@/lib/media";
import type { HomeContent } from "@/lib/content/types";

export function About({ about }: { about: HomeContent["about"] }) {
  return (
    <section className="py-28">
      <Container>
        <AnimatedReveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-700 sm:aspect-[3/2] lg:aspect-[2/1]">
            <EditorialPhoto src={MEDIA.aboutPortrait} alt="Jairo J. García" sizes="100vw" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent lg:bg-gradient-to-r lg:from-ink-950 lg:via-ink-950/70 lg:to-transparent"
            />
          </div>
          <div className="mt-8 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center">
            <div className="lg:max-w-md lg:px-12">
              <h2 className="text-3xl font-semibold text-cream-50 sm:text-4xl">{about.heading}</h2>
              <div className="mt-5 flex flex-col gap-4">
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
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
