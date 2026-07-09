"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveAlternatePath } from "@/lib/i18n/slug-map";
import type { Locale } from "@/lib/content/types";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alternatePath = resolveAlternatePath(pathname);
  const targetLocale: Locale = locale === "es" ? "en" : "es";

  return (
    <Link
      href={alternatePath}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000`;
      }}
      className="rounded-full border border-ink-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-cream-200 transition-colors hover:border-gold-400/60 hover:text-gold-300"
    >
      {targetLocale.toUpperCase()}
    </Link>
  );
}
