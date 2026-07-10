"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/content/types";

export function StatCounter({
  value,
  label,
  locale,
}: {
  value: string;
  label: string;
  locale: Locale;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/[\d,]+/);
    if (!match || match.index === undefined) {
      setDisplay(value);
      setSettled(true);
      return;
    }
    const target = parseInt(match[0].replace(/,/g, ""), 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice(match.index + match[0].length);
    const formatter = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-US");

    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(`${prefix}${formatter.format(Math.round(latest))}${suffix}`);
      },
      onComplete() {
        setSettled(true);
      },
    });

    return () => controls.stop();
  }, [isInView, value, locale]);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span ref={ref} className="font-display text-4xl font-semibold text-gold-400 sm:text-5xl">
        {display}
      </span>
      <motion.span
        aria-hidden
        initial={{ width: 0 }}
        animate={{ width: settled ? 28 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-gold-400/60"
      />
      <span className="max-w-[14rem] text-sm text-cream-400">{label}</span>
    </div>
  );
}
