import type { HomeContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const home: HomeContent = {
  hero: {
    eyebrow: "Autor · Conferencista · Coach de Transformación",
    headline: "Fuiste creado en serio, no en serie.",
    subheadline:
      "Jairo J. García ayuda a líderes, emprendedores y equipos a vencer el miedo al éxito, activar su propósito y construir una vida de impacto real.",
    primaryCta: { label: "Conoce mis libros", href: "/libros" },
    secondaryCta: { label: "Invítame a tu evento", href: "/conferencias" },
  },
  stats: [
    { id: "stat-eventos", value: "+500", label: "Conferencias y eventos" },
    { id: "stat-paises", value: "+15", label: "Países alcanzados" },
    { id: "stat-personas", value: "+100,000", label: "Personas impactadas" },
    { id: "stat-libros", value: "2", label: "Libros publicados" },
  ],
  about: {
    heading: "Sobre Jairo",
    paragraphs: [
      "Jairo J. García es autor, conferencista internacional y coach especializado en liderazgo, propósito, identidad y transformación personal. A través de sus libros, conferencias y programas de formación, ayuda a las personas a romper sus límites, vencer el miedo al éxito y desarrollar el potencial con el que fueron creadas para vivir una vida de impacto, influencia y legado.",
      "Su trabajo parte de una convicción simple: cada persona fue diseñada con un propósito único, y la mayoría vive muy por debajo de su verdadero potencial — no por falta de capacidad, sino por miedo, condicionamiento y una identidad prestada. Jairo combina profundidad personal con aplicación práctica para cerrar esa brecha.",
    ],
    cta: { label: "Conoce mi historia completa", href: "/sobre-mi" },
  },
  philosophy: {
    heading: "Filosofía",
    intro: "Todo lo que enseño se sostiene sobre cuatro convicciones.",
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
        id: "miedo",
        title: "El miedo al éxito es real",
        description:
          "Muchas personas no le temen a fracasar — le temen a lo que implica triunfar: visibilidad, responsabilidad, cambio. Nombrarlo es el primer paso para vencerlo.",
      },
      {
        id: "legado",
        title: "Vivir para dejar legado",
        description:
          "El objetivo no es solo alcanzar metas, sino convertirte en alguien cuya vida deje huella en las personas que te rodean.",
      },
    ],
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
    heading: "Hablemos",
    description:
      "¿Quieres invitar a Jairo a tu evento, empresa o medio de comunicación? Escríbenos y te responderemos pronto.",
    email: CONTACT_EMAIL,
    cta: { label: "Enviar mensaje", href: `mailto:${CONTACT_EMAIL}` },
  },
};
