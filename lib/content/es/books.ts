import type { Book, BooksContent } from "@/lib/content/types";
import { bookSlugs, staticRoutes } from "@/lib/i18n/slug-map";
import { MEDIA } from "@/lib/media";

const AMAZON_LINKS = {
  superhumanos: "https://www.amazon.com/dp/B0H3539JJY",
  "sin-miedo-al-exito": "https://www.amazon.com/dp/B0DXCPDYC6",
};

export const booksContent: BooksContent = {
  heading: "Libros",
  intro:
    "Dos obras escritas para acompañarte del estancamiento a la transformación: desde vencer el miedo a triunfar, hasta descubrir la identidad y el propósito con los que fuiste creado.",
};

export const books: Book[] = [
  {
    id: "superhumanos",
    slug: bookSlugs.superhumanos.es,
    title: "SuperHumanos",
    subtitle: "Fuiste creado en SERIO, no en SERIE",
    year: 2026,
    coverImage: MEDIA.bookCovers.superhumanos,
    trailerVideo: MEDIA.bookTrailers.superhumanos,
    shortDescription:
      "Un libro de desarrollo personal y propósito que guía al lector a descubrir su identidad, romper las limitaciones del miedo y activar el potencial con el que fue creado para vivir una vida de impacto y legado.",
    longDescription: [
      "Vivimos rodeados de mensajes que nos invitan a copiar fórmulas, seguir moldes y encajar en un molde ajeno. SuperHumanos parte de una idea distinta: no fuiste creado en serie, fuiste creado en serio — con una identidad, un propósito y un potencial que nadie más puede replicar.",
      "A lo largo del libro, Jairo J. García desmonta las creencias y los condicionamientos que llevan a tantas personas a vivir muy por debajo de lo que realmente son capaces de ser, y propone un camino práctico para reconectar con la identidad real, soltar el miedo que sabotea el crecimiento y construir una vida con impacto, influencia y legado.",
      "No es un libro de fórmulas rápidas. Es una invitación a mirar hacia adentro con honestidad, para luego actuar hacia afuera con propósito.",
    ],
    themes: ["Identidad", "Propósito", "Potencial humano", "Legado", "Transformación personal"],
    quote: {
      text: "No fuiste creado en serie. Fuiste creado en serio.",
      author: "Jairo J. García",
    },
    links: {
      purchaseLabel: "Comprar",
      purchaseHref: AMAZON_LINKS.superhumanos,
      sampleLabel: "Leer muestra",
      sampleHref: `${staticRoutes.books.es}/${bookSlugs.superhumanos.es}#extracto`,
    },
    faqs: [
      {
        question: "¿De qué trata SuperHumanos?",
        answer:
          "SuperHumanos es un libro de desarrollo personal y propósito que ayuda al lector a descubrir su identidad, romper las limitaciones del miedo y activar el potencial con el que fue creado para vivir una vida de impacto y legado.",
      },
      {
        question: "¿Para quién es este libro?",
        answer:
          "Para cualquier persona que sienta que vive por debajo de su verdadero potencial y quiera reconectar con su identidad y propósito antes de cambiar de estrategia.",
      },
      {
        question: "¿Cuándo se publica SuperHumanos?",
        answer: "SuperHumanos ya está disponible en versión digital (ebook) en Amazon, con lanzamiento completo en 2026.",
      },
    ],
  },
  {
    id: "sin-miedo-al-exito",
    slug: bookSlugs["sin-miedo-al-exito"].es,
    title: "Sin Miedo al Éxito",
    subtitle: "Identifica y vence el miedo que sabotea tu crecimiento",
    year: 2023,
    coverImage: MEDIA.bookCovers["sin-miedo-al-exito"],
    trailerVideo: MEDIA.bookTrailers["sin-miedo-al-exito"],
    shortDescription:
      "Una obra enfocada en ayudar a las personas a identificar y vencer el miedo al éxito, transformar su mentalidad y desarrollar la confianza necesaria para alcanzar una vida de mayor propósito, influencia y resultados.",
    longDescription: [
      "Hablamos mucho del miedo al fracaso, pero rara vez del miedo al éxito: ese temor silencioso a la visibilidad, la responsabilidad y el cambio que trae triunfar. Sin Miedo al Éxito nombra ese miedo y le da un mapa para vencerlo.",
      "Jairo J. García combina reflexión profunda con herramientas prácticas para ayudar al lector a identificar los patrones de autosabotaje que frenan su crecimiento, transformar la mentalidad detrás de esos patrones y construir la confianza necesaria para sostener el éxito una vez que llega.",
      "Es el primer libro de Jairo, y el punto de partida de un mensaje que hoy lleva a escenarios y audiencias en distintos países: el éxito no es el problema. El miedo a merecerlo, sí.",
    ],
    themes: ["Miedo al éxito", "Mentalidad", "Confianza", "Autosabotaje", "Crecimiento personal"],
    quote: {
      text: "El éxito no es el problema. El miedo a merecerlo, sí.",
      author: "Jairo J. García",
    },
    links: {
      purchaseLabel: "Comprar",
      purchaseHref: AMAZON_LINKS["sin-miedo-al-exito"],
      sampleLabel: "Leer muestra",
      sampleHref: `${staticRoutes.books.es}/${bookSlugs["sin-miedo-al-exito"].es}#extracto`,
    },
    faqs: [
      {
        question: "¿De qué trata Sin Miedo al Éxito?",
        answer:
          "Es una obra enfocada en ayudar a las personas a identificar y vencer el miedo al éxito, transformar su mentalidad y desarrollar la confianza necesaria para alcanzar una vida de mayor propósito, influencia y resultados.",
      },
      {
        question: "¿Qué es el miedo al éxito?",
        answer:
          "Es el temor —muchas veces inconsciente— a la visibilidad, la responsabilidad y el cambio que trae triunfar, y que lleva a muchas personas a sabotear su propio crecimiento antes de alcanzarlo.",
      },
      {
        question: "¿Cuándo se publicó Sin Miedo al Éxito?",
        answer: "Sin Miedo al Éxito se publicó en 2023 y fue el primer libro de Jairo J. García.",
      },
    ],
  },
];
