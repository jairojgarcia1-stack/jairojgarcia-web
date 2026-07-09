"use client";

import { animate, useInView } from "framer-motion";
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

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/[\d,]+/);
    if (!match || match.index === undefined) {
      setDisplay(value);
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
    });

    return () => controls.stop();
  }, [isInView, value, locale]);

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span ref={ref} className="font-display text-4xl font-semibold text-gold-400 sm:text-5xl">
        {display}
      </span>
      <span className="text-sm uppercase tracking-wide text-cream-400">{label}</span>
    </div>
  );
}
