import type { Locale } from "@/lib/content/types";

type LocalePair = { es: string; en: string };

/**
 * Single source of truth for es<->en path equivalence. Consumed by hreflang
 * alternates (lib/seo/metadata.ts) and the nav language switcher.
 */
export const staticRoutes = {
  home: { es: "/", en: "/en" },
  about: { es: "/sobre-mi", en: "/en/about" },
  books: { es: "/libros", en: "/en/books" },
  speaking: { es: "/conferencias", en: "/en/speaking" },
  press: { es: "/prensa", en: "/en/press" },
  blog: { es: "/blog", en: "/en/blog" },
} satisfies Record<string, LocalePair>;

export type StaticRouteKey = keyof typeof staticRoutes;

export const bookSlugs = {
  superhumanos: {
    es: "superhumanos-fuiste-creado-en-serio-no-en-serie",
    en: "superhumans-made-with-purpose-not-mass-produced",
  },
  "sin-miedo-al-exito": {
    es: "sin-miedo-al-exito",
    en: "no-fear-of-success",
  },
} satisfies Record<string, LocalePair>;

export type BookId = keyof typeof bookSlugs;

export const blogSlugs = {
  "blog-01": {
    es: "liderazgo-autentico-liderar-desde-el-proposito",
    en: "authentic-leadership-lead-from-purpose",
  },
  "blog-02": {
    es: "como-descubrir-tu-proposito-de-vida",
    en: "discover-your-life-purpose",
  },
  "blog-03": {
    es: "identidad-vs-imagen",
    en: "identity-vs-image",
  },
  "blog-04": {
    es: "miedo-al-exito",
    en: "fear-of-success",
  },
  "blog-05": {
    es: "transformacion-personal-real",
    en: "real-personal-transformation",
  },
  "blog-06": {
    es: "habitos-que-desbloquean-tu-potencial",
    en: "habits-that-unlock-your-potential",
  },
  "blog-07": {
    es: "disciplina-sin-motivacion",
    en: "discipline-without-motivation",
  },
  "blog-08": {
    es: "mentalidad-de-crecimiento-creencias-limitantes",
    en: "growth-mindset-rewire-limiting-beliefs",
  },
  "blog-09": {
    es: "vivir-para-dejar-legado",
    en: "living-for-legacy",
  },
  "blog-10": {
    es: "influencia-genuina-liderar-sin-titulo",
    en: "genuine-influence-lead-without-a-title",
  },
  "blog-11": {
    es: "resiliencia-convierte-la-adversidad-en-combustible",
    en: "resilience-turn-adversity-into-fuel",
  },
  "blog-12": {
    es: "autoconocimiento-primera-disciplina-del-lider",
    en: "self-awareness-first-discipline-of-leaders",
  },
  "blog-13": {
    es: "que-es-el-coaching-de-transformacion",
    en: "what-is-transformational-coaching",
  },
  "blog-14": {
    es: "hablar-en-publico-sin-miedo",
    en: "public-speaking-without-fear",
  },
  "blog-15": {
    es: "como-salir-del-estancamiento",
    en: "break-free-from-stagnation",
  },
  "blog-16": {
    es: "disena-tu-vision-de-vida",
    en: "design-your-life-vision",
  },
} satisfies Record<string, LocalePair>;

export type BlogId = keyof typeof blogSlugs;

export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function staticRouteAlternate(key: StaticRouteKey, target: Locale): string {
  return staticRoutes[key][target];
}

export function bookAlternatePath(id: BookId, target: Locale): string {
  const base = target === "es" ? staticRoutes.books.es : staticRoutes.books.en;
  return `${base}/${bookSlugs[id][target]}`;
}

export function blogAlternatePath(id: BlogId, target: Locale): string {
  const base = target === "es" ? staticRoutes.blog.es : staticRoutes.blog.en;
  return `${base}/${blogSlugs[id][target]}`;
}

/**
 * Client-safe lookup used by the nav language switcher: given the current
 * pathname, finds the equivalent page in the other locale. Falls back to
 * that locale's homepage when no explicit mapping exists (e.g. unmapped
 * slugs) rather than guessing.
 */
export function resolveAlternatePath(pathname: string): string {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  for (const key of Object.keys(staticRoutes) as StaticRouteKey[]) {
    const pair = staticRoutes[key];
    if (path === pair.es) return pair.en;
    if (path === pair.en) return pair.es;
  }

  if (path.startsWith(`${staticRoutes.books.es}/`) || path.startsWith(`${staticRoutes.books.en}/`)) {
    const slug = path.split("/").pop() ?? "";
    for (const id of Object.keys(bookSlugs) as BookId[]) {
      const pair = bookSlugs[id];
      if (pair.es === slug) return `${staticRoutes.books.en}/${pair.en}`;
      if (pair.en === slug) return `${staticRoutes.books.es}/${pair.es}`;
    }
  }

  if (path.startsWith(`${staticRoutes.blog.es}/`) || path.startsWith(`${staticRoutes.blog.en}/`)) {
    const slug = path.split("/").pop() ?? "";
    for (const id of Object.keys(blogSlugs) as BlogId[]) {
      const pair = blogSlugs[id];
      if (pair.es === slug) return `${staticRoutes.blog.en}/${pair.en}`;
      if (pair.en === slug) return `${staticRoutes.blog.es}/${pair.es}`;
    }
  }

  return path.startsWith("/en") ? staticRoutes.home.es : staticRoutes.home.en;
}
