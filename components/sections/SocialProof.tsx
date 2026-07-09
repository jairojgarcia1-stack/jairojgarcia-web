import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import type { HomeContent, Locale } from "@/lib/content/types";

export function SocialProof({
  socialProof,
  locale,
}: {
  socialProof: HomeContent["socialProof"];
  locale: Locale;
}) {
  return (
    <section className="py-20">
      <Container>
        <AnimatedReveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gold-400">
            {socialProof.heading}
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3">
            {socialProof.stats.map((stat) => (
              <StatCounter key={stat.id} value={stat.value} label={stat.label} locale={locale} />
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
