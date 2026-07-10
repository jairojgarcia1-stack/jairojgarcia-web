import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import type { HomeContent } from "@/lib/content/types";

export function Trajectory({ trajectory }: { trajectory: HomeContent["trajectory"] }) {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading title={trajectory.heading} intro={trajectory.intro} align="center" />

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden sm:flex sm:items-start sm:justify-between">
          <div aria-hidden className="absolute left-0 right-0 top-[5px] h-px bg-ink-700" />
          {trajectory.items.map((item, index) => (
            <AnimatedReveal
              key={item.id}
              delay={Math.min(index * 0.06, 0.3)}
              className="relative z-10 flex flex-1 flex-col items-center px-2 text-center"
            >
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-gold-400" />
              <span className="mt-5 h-4 text-xs font-medium uppercase tracking-wide text-gold-400">
                {item.year}
              </span>
              <span className="mt-1 max-w-[9rem] font-display text-sm font-semibold leading-snug text-cream-50">
                {item.title}
              </span>
            </AnimatedReveal>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-14 flex flex-col gap-8 border-l border-ink-700 pl-8 sm:hidden">
          {trajectory.items.map((item, index) => (
            <AnimatedReveal key={item.id} delay={Math.min(index * 0.06, 0.3)} className="relative">
              <span aria-hidden className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-gold-400" />
              {item.year ? (
                <p className="text-xs font-medium uppercase tracking-wide text-gold-400">{item.year}</p>
              ) : null}
              <p className="mt-1 font-display text-base font-semibold text-cream-50">{item.title}</p>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
