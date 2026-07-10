import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { PillarIcon, romanNumeral } from "@/components/ui/PillarIcon";
import type { HomeContent } from "@/lib/content/types";

export function Philosophy({ philosophy }: { philosophy: HomeContent["philosophy"] }) {
  return (
    <section className="py-28">
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">{philosophy.heading}</p>
          <h2 className="font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            {philosophy.frameworkName}
          </h2>
          <p className="mt-4 text-lg text-cream-400">{philosophy.intro}</p>
        </AnimatedReveal>

        <div className="mt-20 flex flex-col divide-y divide-ink-800 border-t border-ink-800 lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:border-t-0">
          {philosophy.pillars.map((pillar, index) => (
            <AnimatedReveal key={pillar.id} delay={index * 0.1} className="py-10 lg:px-8 lg:py-4 first:lg:pl-0">
              <span className="font-display text-sm text-gold-400/70">{romanNumeral(index)}</span>
              <PillarIcon index={index} className="mt-6 h-9 w-9 text-gold-400" />
              <h3 className="mt-6 font-display text-xl font-semibold text-cream-50">{pillar.title}</h3>
              <p className="mt-4 text-cream-400">{pillar.description}</p>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
