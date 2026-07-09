import type { AboutContent } from "@/lib/content/types";

export const about: AboutContent = {
  heading: "Sobre mí",
  intro: [
    "Soy autor, conferencista internacional y coach especializado en liderazgo, propósito, identidad y transformación personal.",
    "Ayudo a las personas a romper sus límites, vencer el miedo al éxito y desarrollar el potencial con el que fueron creadas para vivir una vida de impacto, influencia y legado.",
  ],
  story: [
    "Todo lo que enseño nace de una convicción que se fue construyendo con el tiempo: la mayoría de las personas no viven por debajo de su potencial por falta de capacidad, sino por una identidad prestada, un propósito difuso y un miedo que rara vez se nombra en voz alta — el miedo al éxito.",
    "Mi trabajo comenzó como una conversación íntima sobre transformación personal y hoy se ha convertido en libros, conferencias y programas de formación que llegan a audiencias en distintos países. Pero el corazón sigue siendo el mismo: acompañar a cada persona a reconectar con quién fue creada para ser, antes de pedirle que cambie de estrategia.",
    "Creo profundamente que la transformación real no ocurre en un escenario ni en la última página de un libro, sino en las decisiones diarias que alguien toma cuando nadie más está mirando. Por eso todo lo que comparto — ya sea desde una conferencia corporativa o desde un programa de coaching 1:1 — busca ser aplicable, honesto y sostenible en el tiempo.",
    "Hoy sigo en el mismo camino que invito a recorrer a otros: vivir con propósito, liderar con identidad y construir un legado que trascienda cualquier logro individual.",
  ],
  values: {
    heading: "Valores que guían mi trabajo",
    items: [
      {
        id: "autenticidad",
        title: "Autenticidad",
        description: "Enseño lo que he vivido, no lo que suena bien en un escenario.",
      },
      {
        id: "excelencia",
        title: "Excelencia con propósito",
        description: "La excelencia no es perfección: es honrar el potencial con el que fuiste creado.",
      },
      {
        id: "servicio",
        title: "Servicio genuino",
        description:
          "Cada conferencia, libro y programa existe para servir a la transformación real de otra persona.",
      },
      {
        id: "coherencia",
        title: "Coherencia",
        description: "Lo que digo en el escenario es lo que intento vivir fuera de él.",
      },
    ],
  },
  timeline: {
    heading: "Una trayectoria en construcción",
    items: [
      {
        id: "inicio",
        year: "Inicios",
        title: "El comienzo del mensaje",
        description:
          "Comienzo a compartir mi mensaje sobre identidad, propósito y transformación personal en distintos espacios y audiencias.",
      },
      {
        id: "2023",
        year: "2023",
        title: "Publicación de Sin Miedo al Éxito",
        description:
          "Se publica mi primer libro, enfocado en ayudar a las personas a vencer el miedo a triunfar y sostener su crecimiento.",
      },
      {
        id: "expansion",
        year: "Expansión",
        title: "Conferencista internacional",
        description:
          "Mi mensaje comienza a llegar a audiencias en distintos países, a través de conferencias, medios y programas de formación.",
      },
      {
        id: "2026",
        year: "2026",
        title: "Publicación de SuperHumanos",
        description:
          "Lanzo mi segundo libro, una invitación a descubrir la identidad y el potencial con el que cada persona fue creada.",
      },
    ],
  },
  cta: { label: "Ver mis libros", href: "/libros" },
};
