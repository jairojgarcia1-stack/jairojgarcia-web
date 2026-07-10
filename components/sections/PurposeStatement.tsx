import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import type { HomeContent } from "@/lib/content/types";

export function PurposeStatement({ purpose }: { purpose: HomeContent["purpose"] }) {
  return (
    <section className="border-y border-ink-800 bg-ink-900/40 py-24">
      <Container className="flex justify-center">
        <AnimatedReveal className="max-w-2xl text-center">
          <div aria-hidden className="mx-auto mb-8 h-px w-16 bg-gold-400/60" />
          <p className="font-display text-2xl italic leading-relaxed text-cream-100 sm:text-3xl">
            {purpose.text}
          </p>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
