import type { AboutContent } from "@/lib/content/types";

export const about: AboutContent = {
  heading: "About Me",
  intro: [
    "I'm an author, international speaker, and coach specializing in leadership, purpose, identity, and personal transformation.",
    "I help people break through their limits, overcome the fear of success, and develop the potential they were created for — living a life of impact, influence, and legacy.",
  ],
  story: [
    "Everything I teach comes from a conviction that built up over time: most people don't live below their potential because they lack ability, but because of a borrowed identity, a blurry sense of purpose, and a fear that's rarely named out loud — the fear of success.",
    "My work began as an intimate conversation about personal transformation, and today it has grown into books, talks, and training programs that reach audiences across different countries. But the heart of it stays the same: walking alongside each person as they reconnect with who they were created to be, before asking them to change their strategy.",
    "I believe deeply that real transformation doesn't happen on a stage or on the last page of a book — it happens in the daily decisions someone makes when no one else is watching. That's why everything I share, whether from a corporate keynote or a 1:1 coaching program, aims to be applicable, honest, and sustainable over time.",
    "Today I'm still walking the same path I invite others to walk: living with purpose, leading from identity, and building a legacy that outlasts any single achievement.",
  ],
  values: {
    heading: "Values that guide my work",
    items: [
      {
        id: "authenticity",
        title: "Authenticity",
        description: "I teach what I've lived, not what sounds good on a stage.",
      },
      {
        id: "excellence",
        title: "Purposeful excellence",
        description: "Excellence isn't perfection — it's honoring the potential you were created with.",
      },
      {
        id: "service",
        title: "Genuine service",
        description: "Every talk, book, and program exists to serve someone else's real transformation.",
      },
      {
        id: "coherence",
        title: "Coherence",
        description: "What I say on stage is what I try to live off of it.",
      },
    ],
  },
  timeline: {
    heading: "A story still being written",
    items: [
      {
        id: "beginnings",
        year: "Beginnings",
        title: "Where the message began",
        description:
          "I began sharing my message on identity, purpose, and personal transformation across different spaces and audiences.",
      },
      {
        id: "2023",
        year: "2023",
        title: "No Fear of Success is published",
        description:
          "My first book is released, focused on helping people overcome the fear of succeeding and sustain their growth.",
      },
      {
        id: "expansion",
        year: "Expansion",
        title: "Becoming an international speaker",
        description:
          "My message begins reaching audiences across different countries, through talks, media, and training programs.",
      },
      {
        id: "2026",
        year: "2026",
        title: "SuperHumans is published",
        description:
          "My second book is released, an invitation to discover the identity and potential every person was created with.",
      },
    ],
  },
  cta: { label: "See my books", href: "/en/books" },
};
