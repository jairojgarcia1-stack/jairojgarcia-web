import Link from "next/link";
import { AUTHOR_NAME, SOCIAL_LINKS } from "@/lib/constants";
import type { SiteContent } from "@/lib/content/types";
import { Container } from "@/components/ui/Container";

export function Footer({ site }: { site: SiteContent }) {
  const year = new Date().getFullYear();
  const links = [site.nav.about, site.nav.books, site.nav.speaking, site.nav.press, site.nav.blog];
  const social = [
    { label: "Instagram", href: SOCIAL_LINKS.instagram },
    { label: "YouTube", href: SOCIAL_LINKS.youtube },
    { label: "TikTok", href: SOCIAL_LINKS.tiktok },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  ];

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <Container className="flex flex-col gap-10 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold text-cream-50">{AUTHOR_NAME}</p>
            <p className="mt-3 text-sm text-cream-400">{site.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream-200 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-cream-200 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-cream-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.footer.rightsLine}
          </p>
          <p>{site.footer.builtLine}</p>
        </div>
      </Container>
    </footer>
  );
}
