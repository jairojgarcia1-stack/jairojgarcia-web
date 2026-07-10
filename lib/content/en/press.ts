import type { PressContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const press: PressContent = {
  heading: "Press",
  intro:
    "Resources and contact information for media, producers, and event organizers who want to interview, quote, or feature Jairo J. García.",
  bio: {
    short:
      "Jairo J. García is an author, international speaker, executive coach, and entrepreneur specializing in leadership, purpose, identity, and personal transformation.",
    long: [
      "Jairo J. García is an author, international speaker, executive coach, and entrepreneur specializing in leadership, purpose, identity, and personal transformation. Through his books, talks, and training programs, he helps people break through their limits, overcome the fear of success, and develop the potential they were created for — living a life of impact, influence, and legacy.",
      "He has founded and led multiple companies in the United States, combining leadership, strategy, and human development to help people and organizations grow with purpose.",
      "He is the author of No Fear of Success (2023) and SuperHumans: You Were Made With Purpose, Not Mass-Produced (2026). His work combines personal depth with practical application, and has reached audiences at companies, universities, and international conferences.",
    ],
  },
  kit: [
    {
      id: "bio",
      label: "Official bio",
      description: "Short and extended biography, ready for event programs and press materials.",
    },
    {
      id: "photos",
      label: "High-resolution photos",
      description: "Official image library available for editorial use upon request.",
    },
    {
      id: "topics",
      label: "Speaking topics",
      description: "List of talk topics and descriptions for event programs and interviews.",
    },
  ],
  mentions: [],
  contact: { label: "Press contact", email: CONTACT_EMAIL },
};
