import type { SiteContent } from "@/lib/content/types";

export const site: SiteContent = {
  locale: "en",
  tagline: "Author, international speaker, executive coach, and entrepreneur",
  metaDescription:
    "Jairo J. García is an author, international speaker, executive coach, and entrepreneur specializing in leadership, purpose, identity, and personal transformation. Discover his books, speaking topics, and programs for a life of impact and legacy.",
  metaKeywords: [
    "Jairo J. García",
    "purpose-driven leadership",
    "fear of success",
    "personal transformation",
    "executive coach",
    "international speaker",
    "entrepreneur",
    "personal development",
    "SuperHumans book",
    "No Fear of Success book",
  ],
  nav: {
    home: { label: "Home", href: "/en" },
    about: { label: "About", href: "/en/about" },
    books: { label: "Books", href: "/en/books" },
    speaking: { label: "Speaking", href: "/en/speaking" },
    press: { label: "Press", href: "/en/press" },
    blog: { label: "Blog", href: "/en/blog" },
    contact: { label: "Contact", href: "/en#contact" },
  },
  footer: {
    memorableLine: "You weren't born to live a life on repeat. You were made to leave a legacy.",
    rightsLine: "Jairo J. García. All rights reserved.",
    builtLine: "Built to live with purpose.",
  },
};
