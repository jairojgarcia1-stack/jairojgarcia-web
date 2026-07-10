import type { SiteContent } from "@/lib/content/types";

export const site: SiteContent = {
  locale: "es",
  tagline: "Autor, conferencista y coach de transformación personal",
  metaDescription:
    "Jairo J. García es autor, conferencista internacional y coach especializado en liderazgo, propósito, identidad y transformación personal. Descubre sus libros, conferencias y programas para vivir una vida de impacto y legado.",
  metaKeywords: [
    "Jairo J. García",
    "liderazgo con propósito",
    "miedo al éxito",
    "transformación personal",
    "coach de identidad",
    "conferencista internacional",
    "desarrollo personal",
    "SuperHumanos libro",
    "Sin Miedo al Éxito libro",
  ],
  nav: {
    home: { label: "Inicio", href: "/" },
    about: { label: "Sobre mí", href: "/sobre-mi" },
    books: { label: "Libros", href: "/libros" },
    speaking: { label: "Conferencias", href: "/conferencias" },
    press: { label: "Prensa", href: "/prensa" },
    blog: { label: "Blog", href: "/blog" },
    contact: { label: "Contacto", href: "/#contacto" },
  },
  footer: {
    memorableLine: "No naciste para vivir una vida en serie. Fuiste creado para dejar un legado.",
    rightsLine: "Jairo J. García. Todos los derechos reservados.",
    builtLine: "Diseñado para vivir con propósito.",
  },
};
