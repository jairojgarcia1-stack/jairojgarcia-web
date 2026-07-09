import type { Book, BooksContent } from "@/lib/content/types";
import { bookSlugs } from "@/lib/i18n/slug-map";

export const booksContent: BooksContent = {
  heading: "Books",
  intro:
    "Two books written to walk you from stagnation to transformation — from overcoming the fear of success to discovering the identity and purpose you were created with.",
};

export const books: Book[] = [
  {
    id: "superhumanos",
    slug: bookSlugs.superhumanos.en,
    title: "SuperHumans",
    subtitle: "You Were Made With Purpose, Not Mass-Produced",
    year: 2026,
    coverImage: "",
    shortDescription:
      "A personal-development book on purpose and identity that guides readers to discover who they are, break free from the limits of fear, and activate the potential they were created with to live a life of impact and legacy.",
    longDescription: [
      "We live surrounded by messages that push us to copy formulas, follow templates, and fit into someone else's mold. SuperHumans starts from a different premise: you weren't mass-produced — you were made with purpose, with an identity, a calling, and a potential no one else can replicate.",
      "Throughout the book, Jairo J. García unpacks the beliefs and conditioning that keep so many people living far below what they're truly capable of, and offers a practical path back to their real identity, free from the fear that sabotages growth, toward a life of impact, influence, and legacy.",
      "This isn't a book of quick formulas. It's an invitation to look inward with honesty, so you can act outward with purpose.",
    ],
    themes: ["Identity", "Purpose", "Human potential", "Legacy", "Personal transformation"],
    quote: {
      text: "You weren't mass-produced. You were made with purpose.",
      author: "Jairo J. García",
    },
    buyLinks: [{ label: "Coming soon", href: "/en#contact" }],
    faqs: [
      {
        question: "What is SuperHumans about?",
        answer:
          "SuperHumans is a personal-development book on purpose that helps readers discover their identity, break free from the limits of fear, and activate the potential they were created with to live a life of impact and legacy.",
      },
      {
        question: "Who is this book for?",
        answer:
          "For anyone who feels they're living below their true potential and wants to reconnect with their identity and purpose before changing their strategy.",
      },
      {
        question: "When is SuperHumans being released?",
        answer: "SuperHumans is releasing in 2026. Reach out to be notified when it launches.",
      },
    ],
  },
  {
    id: "sin-miedo-al-exito",
    slug: bookSlugs["sin-miedo-al-exito"].en,
    title: "No Fear of Success",
    subtitle: "Identify and overcome the fear sabotaging your growth",
    year: 2023,
    coverImage: "",
    shortDescription:
      "A book focused on helping people identify and overcome the fear of success, shift their mindset, and build the confidence needed to reach a life of greater purpose, influence, and results.",
    longDescription: [
      "We talk a lot about the fear of failure, but rarely about the fear of success — that quiet dread of the visibility, responsibility, and change that comes with winning. No Fear of Success names that fear and gives readers a map to overcome it.",
      "Jairo J. García combines deep reflection with practical tools to help readers identify the self-sabotage patterns holding back their growth, shift the mindset behind those patterns, and build the confidence needed to sustain success once it arrives.",
      "It's Jairo's first book, and the starting point of a message that now reaches stages and audiences across different countries: success isn't the problem. Fearing you deserve it is.",
    ],
    themes: ["Fear of success", "Mindset", "Confidence", "Self-sabotage", "Personal growth"],
    quote: {
      text: "Success isn't the problem. Fearing you deserve it is.",
      author: "Jairo J. García",
    },
    buyLinks: [{ label: "Available soon online", href: "/en#contact" }],
    faqs: [
      {
        question: "What is No Fear of Success about?",
        answer:
          "It's a book focused on helping people identify and overcome the fear of success, shift their mindset, and build the confidence needed to reach a life of greater purpose, influence, and results.",
      },
      {
        question: "What is the fear of success?",
        answer:
          "It's the often-unconscious fear of the visibility, responsibility, and change that comes with winning — one that leads many people to sabotage their own growth before they reach it.",
      },
      {
        question: "When was No Fear of Success published?",
        answer: "No Fear of Success was published in 2023 and was Jairo J. García's first book.",
      },
    ],
  },
];
