import type { HomeContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const home: HomeContent = {
  hero: {
    eyebrow: "Author · Speaker · Transformation Coach",
    headline: "You were made with purpose, not mass-produced.",
    subheadline:
      "Jairo J. García helps leaders, entrepreneurs, and teams overcome the fear of success, activate their purpose, and build a life of real impact.",
    primaryCta: { label: "Explore my books", href: "/en/books" },
    secondaryCta: { label: "Book me for your event", href: "/en/speaking" },
  },
  stats: [
    { id: "stat-events", value: "500+", label: "Talks and events" },
    { id: "stat-countries", value: "15+", label: "Countries reached" },
    { id: "stat-people", value: "100,000+", label: "People impacted" },
    { id: "stat-books", value: "2", label: "Published books" },
  ],
  about: {
    heading: "About Jairo",
    paragraphs: [
      "Jairo J. García is an author, international speaker, and coach specializing in leadership, purpose, identity, and personal transformation. Through his books, talks, and training programs, he helps people break through their limits, overcome the fear of success, and develop the potential they were created for — living a life of impact, influence, and legacy.",
      "His work rests on a simple conviction: every person was designed with a unique purpose, and most live far below their true potential — not for lack of ability, but because of fear, conditioning, and a borrowed identity. Jairo combines personal depth with practical application to help his audiences close that gap.",
    ],
    cta: { label: "Read my full story", href: "/en/about" },
  },
  philosophy: {
    heading: "Philosophy",
    intro: "Everything I teach rests on four convictions.",
    pillars: [
      {
        id: "identity",
        title: "Identity before strategy",
        description:
          "No technique can sustain someone who doesn't know who they are. Lasting transformation starts with reconnecting to your real identity, not the one others designed for you.",
      },
      {
        id: "purpose",
        title: "Purpose as your compass",
        description:
          "Purpose isn't an inspirational phrase — it's the filter that lets you decide what to pursue and what to let go of. Without it, success becomes noise.",
      },
      {
        id: "fear",
        title: "The fear of success is real",
        description:
          "Many people don't fear failing — they fear what winning demands: visibility, responsibility, change. Naming it is the first step to overcoming it.",
      },
      {
        id: "legacy",
        title: "Living for legacy",
        description:
          "The goal isn't just hitting targets — it's becoming someone whose life leaves a mark on the people around them.",
      },
    ],
  },
  speaking: {
    heading: "Talks that transform",
    description:
      "Jairo brings his message to companies, universities, churches, and international conferences, combining storytelling, applicable content, and an energy that moves audiences to action.",
    topics: [
      "Purpose-driven leadership",
      "Fear of success",
      "Identity and personal transformation",
      "Organizational culture and legacy",
    ],
    cta: { label: "See topics and availability", href: "/en/speaking" },
  },
  booksHeading: "Books",
  booksIntro: "Two books designed to walk you from stagnation to transformation.",
  ecosystem: {
    heading: "The Jairo J. García Ecosystem",
    intro: "Beyond the books and the stage, a set of experiences to walk alongside you in your process.",
    items: [
      {
        id: "coaching-1a1",
        title: "1:1 Coaching",
        description:
          "Personalized guidance for leaders and entrepreneurs seeking clarity of purpose and freedom from internal limits.",
        ctaLabel: "Learn more",
        href: "#contact",
      },
      {
        id: "community",
        title: "SuperHumans Community",
        description: "An ongoing growth space for those who choose to live with intention, discipline, and purpose.",
        ctaLabel: "Join",
        href: "#contact",
      },
      {
        id: "team-training",
        title: "Team Training",
        description:
          "Custom programs for companies that want to develop real leadership inside their organizational culture.",
        ctaLabel: "Request information",
        href: "#contact",
      },
    ],
  },
  socialProof: {
    heading: "Organizations that have trusted this message",
    stats: [
      { id: "companies", value: "50+", label: "Companies and organizations" },
      { id: "universities", value: "20+", label: "Universities and educational institutions" },
      { id: "media", value: "10+", label: "Media and podcast appearances" },
    ],
  },
  testimonials: {
    heading: "What people say after the transformation",
    items: [
      {
        id: "t1",
        name: "Andrea M.",
        role: "HR Director",
        quote:
          "Jairo's message helped us rethink leadership from the inside out. The impact on our team was immediate.",
      },
      {
        id: "t2",
        name: "Carlos R.",
        role: "Entrepreneur",
        quote: "No Fear of Success gave me the language to name something I'd been sabotaging in silence for years.",
      },
      {
        id: "t3",
        name: "Daniela P.",
        role: "Conference attendee",
        quote: "I left Jairo's talk with a clarity of purpose I hadn't felt in years.",
      },
    ],
  },
  contact: {
    heading: "Let's talk",
    description:
      "Want to invite Jairo to your event, company, or media outlet? Reach out and we'll get back to you soon.",
    email: CONTACT_EMAIL,
    cta: { label: "Send a message", href: `mailto:${CONTACT_EMAIL}` },
  },
};
