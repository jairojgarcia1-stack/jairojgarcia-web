"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";
import { MEDIA } from "@/lib/media";
import { trackEvent } from "@/lib/pixel";
import type { HomeContent } from "@/lib/content/types";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(207,168,93,0.16),transparent_60%)]"
      />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="order-2 flex flex-col items-start text-left lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-gold-400"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="max-w-xl text-4xl font-semibold text-cream-50 sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-lg text-lg text-cream-400"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              onClick={() => trackEvent("Schedule", { content_name: hero.secondaryCta.label })}
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-gold-400/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <EditorialPhoto src={MEDIA.heroPortrait} alt="Jairo J. García" priority sizes="(min-width: 1024px) 30vw, 80vw" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-400/10" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
