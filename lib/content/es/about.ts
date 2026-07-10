import type { AboutContent } from "@/lib/content/types";
import { trajectoryItems } from "@/lib/content/es/trajectory-items";

export const about: AboutContent = {
  heading: "Sobre mí",
  intro: [
    "Soy autor, conferencista internacional, coach ejecutivo y empresario, especializado en liderazgo, propósito, identidad y transformación personal.",
    "Ayudo a las personas a romper sus límites, vencer el miedo al éxito y desarrollar el potencial con el que fueron creadas para vivir una vida de impacto, influencia y legado.",
    "He fundado y liderado múltiples empresas en Estados Unidos, combinando liderazgo, estrategia y desarrollo humano para ayudar a personas y organizaciones a crecer con propósito.",
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
    heading: "Una trayectoria construida con propósito",
    items: trajectoryItems,
  },
  cta: { label: "Ver mis libros", href: "/libros" },
};
