import type { PressContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const press: PressContent = {
  heading: "Prensa",
  intro:
    "Recursos e información de contacto para medios, productores y organizadores de eventos que deseen entrevistar, citar o presentar a Jairo J. García.",
  bio: {
    short:
      "Jairo J. García es autor, conferencista internacional, coach ejecutivo y empresario, especializado en liderazgo, propósito, identidad y transformación personal.",
    long: [
      "Jairo J. García es autor, conferencista internacional, coach ejecutivo y empresario, especializado en liderazgo, propósito, identidad y transformación personal. A través de sus libros, conferencias y programas de formación, ayuda a las personas a romper sus límites, vencer el miedo al éxito y desarrollar el potencial con el que fueron creadas para vivir una vida de impacto, influencia y legado.",
      "Ha fundado y liderado múltiples empresas en Estados Unidos, combinando liderazgo, estrategia y desarrollo humano para ayudar a personas y organizaciones a crecer con propósito.",
      "Es autor de Sin Miedo al Éxito (2023) y SuperHumanos: Fuiste creado en SERIO, no en SERIE (2026). Su trabajo combina profundidad personal con aplicación práctica, y ha llevado su mensaje a audiencias en empresas, universidades y conferencias internacionales.",
    ],
  },
  kit: [
    {
      id: "bio",
      label: "Biografía oficial",
      description: "Biografía corta y extendida, lista para usar en programas de eventos y notas de prensa.",
    },
    {
      id: "fotos",
      label: "Fotografías en alta resolución",
      description: "Banco de imágenes oficiales para uso editorial. Disponible bajo solicitud.",
    },
    {
      id: "temas",
      label: "Temas de conferencia",
      description: "Listado de temas y descripciones para programas de eventos y entrevistas.",
    },
  ],
  mentions: [],
  contact: { label: "Contacto de prensa", email: CONTACT_EMAIL },
};
