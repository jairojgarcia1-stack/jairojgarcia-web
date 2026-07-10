import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import type { Locale, StatItem } from "@/lib/content/types";

export function Stats({ stats, locale }: { stats: StatItem[]; locale: Locale }) {
  return (
    <section className="border-y border-ink-800 bg-ink-900/40 py-20">
      <Container>
        <AnimatedReveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCounter key={stat.id} value={stat.value} label={stat.label} locale={locale} />
            ))}
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
