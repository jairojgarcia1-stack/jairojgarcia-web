import type { SpeakingContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const speaking: SpeakingContent = {
  heading: "Conferencias",
  intro:
    "Jairo lleva su mensaje sobre liderazgo, propósito, identidad y miedo al éxito a empresas, universidades, iglesias y conferencias internacionales, combinando storytelling, contenido aplicable y una energía que mueve a la acción.",
  topics: [
    {
      id: "liderazgo-proposito",
      title: "Liderazgo con propósito",
      description:
        "Cómo liderar equipos y organizaciones desde la identidad y el propósito, no desde el miedo o la urgencia.",
    },
    {
      id: "miedo-al-exito",
      title: "Miedo al éxito",
      description:
        "Cómo identificar y vencer el miedo silencioso que sabotea el crecimiento personal y profesional antes de alcanzarlo.",
    },
    {
      id: "identidad-transformacion",
      title: "Identidad y transformación personal",
      description:
        "Un recorrido práctico para reconectar con la identidad real y activar el potencial que suele quedar dormido por el condicionamiento.",
    },
    {
      id: "cultura-legado",
      title: "Cultura organizacional y legado",
      description:
        "Cómo construir culturas de equipo que trasciendan resultados trimestrales y dejen un legado real en las personas.",
    },
  ],
  formats: [
    {
      id: "keynote",
      title: "Conferencia magistral",
      description: "Charla principal para congresos, convenciones y eventos corporativos de gran formato.",
    },
    {
      id: "taller",
      title: "Taller o workshop",
      description: "Sesión interactiva y aplicada para equipos que buscan profundidad además de inspiración.",
    },
    {
      id: "universidad",
      title: "Charla universitaria",
      description: "Formato adaptado para audiencias jóvenes en universidades e instituciones educativas.",
    },
  ],
  audience: [
    "Empresas y equipos de liderazgo",
    "Universidades e instituciones educativas",
    "Iglesias y organizaciones sin fines de lucro",
    "Congresos y conferencias internacionales",
  ],
  cta: {
    label: "Solicitar disponibilidad",
    href: `mailto:${CONTACT_EMAIL}`,
    email: CONTACT_EMAIL,
  },
  faqs: [
    {
      question: "¿Cómo puedo invitar a Jairo J. García a mi evento?",
      answer: `Escríbenos a ${CONTACT_EMAIL} con la fecha, el lugar y el tipo de audiencia de tu evento, y te responderemos con la disponibilidad y los detalles.`,
    },
    {
      question: "¿En qué idiomas ofrece conferencias?",
      answer: "Las conferencias se ofrecen principalmente en español, con disponibilidad de contenido también en inglés.",
    },
    {
      question: "¿Qué formatos de conferencia ofrece?",
      answer:
        "Conferencia magistral (keynote), talleres interactivos y charlas adaptadas para audiencias universitarias, según las necesidades del evento.",
    },
    {
      question: "¿Cuáles son los temas principales de sus conferencias?",
      answer:
        "Liderazgo con propósito, miedo al éxito, identidad y transformación personal, y cultura organizacional y legado.",
    },
  ],
};
