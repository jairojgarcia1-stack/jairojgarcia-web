"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AUTHOR_NAME } from "@/lib/constants";
import type { SiteContent } from "@/lib/content/types";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export function Navbar({ site }: { site: SiteContent }) {
  const [open, setOpen] = useState(false);
  const links = [site.nav.about, site.nav.books, site.nav.speaking, site.nav.press, site.nav.blog];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href={site.nav.home.href} className="font-display text-lg font-semibold text-cream-50">
          {AUTHOR_NAME}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream-200 transition-colors hover:text-gold-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={site.locale} />
          <Link
            href={site.nav.contact.href}
            className="rounded-full bg-gold-400 px-5 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
          >
            {site.nav.contact.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-cream-200 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-px w-4 bg-current" />
            <span className="h-px w-4 bg-current" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink-800 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-cream-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <LanguageSwitcher locale={site.locale} />
                <Link
                  href={site.nav.contact.href}
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-gold-400 px-5 py-2 text-sm font-medium text-ink-950"
                >
                  {site.nav.contact.label}
                </Link>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
