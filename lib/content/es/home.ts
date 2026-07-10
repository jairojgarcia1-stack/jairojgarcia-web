import type { HomeContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";
import { bookSlugs, staticRoutes } from "@/lib/i18n/slug-map";
import { trajectoryItems } from "@/lib/content/es/trajectory-items";

export const home: HomeContent = {
  hero: {
    eyebrow: "Autor · Conferencista Internacional · Coach Ejecutivo · Empresario",
    headline: "Fuiste creado en serio, no en serie.",
    subheadline:
      "No estás leyendo esto por accidente. Algo en ti sabe que hay una versión tuya —más valiente, más clara, más libre— que todavía no has decidido vivir. Esto es el principio de encontrarla.",
    primaryCta: { label: "Conoce mis libros", href: "/libros" },
    secondaryCta: { label: "Invítame a tu evento", href: "/conferencias" },
  },
  stats: [
    { id: "stat-eventos", value: "+500", label: "Escenarios que fueron el inicio de algo más grande" },
    { id: "stat-paises", value: "+15", label: "Países donde el mensaje ya cruzó fronteras" },
    { id: "stat-personas", value: "+100,000", label: "Personas que decidieron transformar su vida" },
    { id: "stat-libros", value: "2", label: "Libros escritos para romper el molde" },
  ],
  action: {
    heading: "En acción",
    intro:
      "Escenarios, conversaciones y momentos reales de un mensaje que ya está transformando vidas.",
    videoAlt: "Jairo J. García hablando en vivo frente a una audiencia",
    shots: [
      { id: "action-1", alt: "Audiencia atenta durante una conferencia de Jairo J. García" },
      { id: "action-2", alt: "Jairo J. García hablando con micrófono frente al público" },
      { id: "action-3", alt: "Jairo J. García gesticulando con energía durante una charla" },
      { id: "action-4", alt: "Asistente haciendo una pregunta durante una sesión en vivo" },
      { id: "action-5", alt: "Jairo J. García conversando con otro speaker en un panel" },
      { id: "action-6", alt: "Jairo J. García firmando ejemplares de su libro" },
      { id: "action-7", alt: "Jairo J. García junto a asistentes que sostienen su libro" },
    ],
  },
  about: {
    heading: "Sobre Jairo",
    paragraphs: [
      "Jairo J. García es autor, conferencista internacional y coach de transformación personal. Su trabajo parte de una idea simple pero incómoda: la mayoría de las personas vive muy por debajo del potencial con el que fue creada — no por falta de capacidad, sino por miedo, condicionamiento y una identidad prestada.",
      "A través de sus libros, conferencias y programas de coaching, ayuda a las personas a nombrar ese miedo, reconectar con su propósito y construir una vida de impacto real.",
    ],
    cta: { label: "Conoce mi historia completa", href: "/sobre-mi" },
  },
  purpose: {
    text: "Mi propósito nació el día que entendí algo que cambió todo: la mayoría de las personas vive muy por debajo del potencial con el que fue creada. No por falta de talento, sino porque en algún punto del camino aprendieron a conformarse, a esconderse, a posponer la vida que realmente querían vivir. Decidí dedicar mi vida a cambiar eso — a ayudar a las personas a recordar quiénes son, a vencer el miedo que las detiene y a construir algo que trascienda. Cada libro, cada conferencia y cada sesión de coaching nace de esa misma convicción: fuiste creado en serio, no en serie.",
  },
  philosophy: {
    heading: "Filosofía",
    frameworkName: "El Código SuperHumano",
    intro: "Cuatro principios que sostienen cada libro, cada conferencia y cada decisión.",
    pillars: [
      {
        id: "identidad",
        title: "Identidad antes que estrategia",
        description:
          "Ninguna técnica sostiene a alguien que no sabe quién es. La transformación duradera empieza por reconectar con tu identidad real, no con la que otros diseñaron para ti.",
      },
      {
        id: "proposito",
        title: "Propósito como brújula",
        description:
          "El propósito no es una frase inspiradora: es el criterio que te permite decidir qué perseguir y qué soltar. Sin él, el éxito se vuelve ruido.",
      },
      {
        id: "valentia",
        title: "Valentía para actuar con miedo",
        description:
          "El miedo no desaparece antes de actuar — desaparece después. La valentía no es la ausencia de miedo: es decidir moverte con él, sobre todo cuando lo que está en juego es visibilidad, responsabilidad y cambio.",
      },
      {
        id: "legado",
        title: "Vivir para dejar legado",
        description:
          "El objetivo no es solo alcanzar metas, sino convertirte en alguien cuya vida deje huella en las personas que te rodean.",
      },
    ],
  },
  trajectory: {
    heading: "Una trayectoria construida con propósito",
    intro: "Los hitos que marcaron el camino hasta hoy.",
    items: trajectoryItems,
  },
  speaking: {
    heading: "Conferencias que transforman",
    description:
      "Jairo lleva su mensaje a empresas, universidades, iglesias y conferencias internacionales, combinando storytelling, contenido aplicable y una energía que mueve a la acción.",
    topics: [
      "Liderazgo con propósito",
      "Miedo al éxito",
      "Identidad y transformación personal",
      "Cultura organizacional y legado",
    ],
    cta: { label: "Ver temas y disponibilidad", href: "/conferencias" },
  },
  booksHeading: "Libros",
  booksIntro: "Dos obras diseñadas para acompañarte del estancamiento a la transformación.",
  ecosystem: {
    heading: "Ecosistema Jairo J. García",
    intro:
      "Más allá de los libros y el escenario, un conjunto de experiencias para acompañarte en tu proceso.",
    items: [
      {
        id: "coaching-1a1",
        title: "Coaching 1:1",
        description:
          "Acompañamiento personalizado para líderes y emprendedores que buscan claridad de propósito y ruptura de límites internos.",
        ctaLabel: "Conocer más",
        href: "#contacto",
      },
      {
        id: "comunidad",
        title: "Comunidad SuperHumanos",
        description:
          "Un espacio de crecimiento continuo para quienes deciden vivir con intención, disciplina y propósito.",
        ctaLabel: "Unirme",
        href: "#contacto",
      },
      {
        id: "formacion-equipos",
        title: "Formación para equipos",
        description:
          "Programas a la medida para empresas que quieren desarrollar liderazgo real dentro de su cultura organizacional.",
        ctaLabel: "Solicitar información",
        href: "#contacto",
      },
    ],
  },
  socialProof: {
    heading: "Organizaciones que han confiado en este mensaje",
    stats: [
      { id: "empresas", value: "+50", label: "Empresas y organizaciones" },
      { id: "universidades", value: "+20", label: "Universidades e instituciones educativas" },
      { id: "medios", value: "+10", label: "Apariciones en medios y podcasts" },
    ],
  },
  testimonials: {
    heading: "Lo que dicen quienes han vivido la transformación",
    items: [
      {
        id: "t1",
        name: "Andrea M.",
        role: "Directora de Recursos Humanos",
        company: "Sector tecnología",
        quote:
          "El mensaje de Jairo nos ayudó a repensar el liderazgo desde adentro hacia afuera. El impacto en nuestro equipo fue inmediato.",
      },
      {
        id: "t2",
        name: "Carlos R.",
        role: "Emprendedor",
        quote:
          "Sin Miedo al Éxito me dio el lenguaje para nombrar algo que llevaba años saboteando en silencio.",
      },
      {
        id: "t3",
        name: "Daniela P.",
        role: "Asistente a conferencia",
        quote:
          "Salí de la charla de Jairo con una claridad de propósito que no había sentido en años.",
      },
    ],
  },
  contact: {
    heading: "¿Estás listo para activar la versión para la que fuiste creado?",
    description:
      "No hace falta que tengas todo resuelto. Solo el siguiente paso — y ese empieza aquí.",
    email: CONTACT_EMAIL,
    buttons: [
      { label: "Invítame a tu evento", href: staticRoutes.speaking.es },
      {
        label: "Quiero Coaching",
        href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Quiero información sobre coaching 1:1")}`,
      },
      {
        label: "Conoce SuperHumanos",
        href: `${staticRoutes.books.es}/${bookSlugs.superhumanos.es}`,
      },
    ],
  },
};
