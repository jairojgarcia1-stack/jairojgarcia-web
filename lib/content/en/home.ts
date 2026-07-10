import type { HomeContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";
import { bookSlugs, staticRoutes } from "@/lib/i18n/slug-map";
import { trajectoryItems } from "@/lib/content/en/trajectory-items";

export const home: HomeContent = {
  hero: {
    eyebrow: "Author · International Speaker · Executive Coach · Entrepreneur",
    headline: "You were made with purpose, not mass-produced.",
    subheadline:
      "You're not reading this by accident. Something in you already knows there's a version of yourself —braver, clearer, freer— that you haven't decided to live yet. This is where finding it begins.",
    primaryCta: { label: "Explore my books", href: "/en/books" },
    secondaryCta: { label: "Book me for your event", href: "/en/speaking" },
  },
  stats: [
    { id: "stat-events", value: "500+", label: "Stages where transformation began" },
    { id: "stat-countries", value: "15+", label: "Countries the message has crossed into" },
    { id: "stat-people", value: "100,000+", label: "People who decided to transform their lives" },
    { id: "stat-books", value: "2", label: "Books written to break the mold" },
  ],
  action: {
    heading: "In Action",
    intro: "Stages, conversations, and real moments from a message that's already transforming lives.",
    videoAlt: "Jairo J. García speaking live to an audience",
    shots: [
      { id: "action-1", alt: "Audience listening closely during a talk by Jairo J. García" },
      { id: "action-2", alt: "Jairo J. García speaking into a microphone in front of the audience" },
      { id: "action-3", alt: "Jairo J. García gesturing energetically while speaking" },
      { id: "action-4", alt: "An attendee asking a question during a live session" },
      { id: "action-5", alt: "Jairo J. García in conversation with another speaker on a panel" },
      { id: "action-6", alt: "Jairo J. García signing copies of his book" },
      { id: "action-7", alt: "Jairo J. García with attendees holding his book" },
    ],
  },
  about: {
    heading: "About Jairo",
    paragraphs: [
      "Jairo J. García is an author, international speaker, and personal transformation coach. His work starts from a simple but uncomfortable idea: most people live far below the potential they were created with — not for lack of ability, but because of fear, conditioning, and a borrowed identity.",
      "Through his books, talks, and coaching programs, he helps people name that fear, reconnect with their purpose, and build a life of real impact.",
    ],
    cta: { label: "Read my full story", href: "/en/about" },
  },
  purpose: {
    text: "My purpose was born the day I understood something that changed everything: most people live far below the potential they were created with. Not for lack of talent, but because somewhere along the way they learned to settle, to hide, to postpone the life they actually wanted to live. I decided to dedicate my life to changing that — to help people remember who they are, overcome the fear that holds them back, and build something that outlasts them. Every book, every talk, and every coaching session is born from that same conviction: you were made with purpose, not mass-produced.",
  },
  philosophy: {
    heading: "Philosophy",
    frameworkName: "The SuperHuman Code",
    intro: "Four principles behind every book, every talk, and every decision.",
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
        id: "courage",
        title: "Courage to act with fear",
        description:
          "Fear doesn't disappear before you act — it disappears after. Courage isn't the absence of fear: it's deciding to move with it, especially when what's at stake is visibility, responsibility, and change.",
      },
      {
        id: "legacy",
        title: "Living for legacy",
        description:
          "The goal isn't just hitting targets — it's becoming someone whose life leaves a mark on the people around them.",
      },
    ],
  },
  trajectory: {
    heading: "A journey built with purpose",
    intro: "The milestones that shaped the path to today.",
    items: trajectoryItems,
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
    heading: "What audiences say after hearing him",
    items: [
      {
        id: "t1",
        name: "Andrea M.",
        role: "HR Director",
        company: "Tech industry",
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
    heading: "Ready to activate the version of you that you were made for?",
    description: "You don't need to have it all figured out. Just the next step — and it starts here.",
    email: CONTACT_EMAIL,
    buttons: [
      { label: "Book me for your event", href: staticRoutes.speaking.en },
      {
        label: "I want coaching",
        href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("I'd like information about 1:1 coaching")}`,
      },
      {
        label: "Discover SuperHumans",
        href: `${staticRoutes.books.en}/${bookSlugs.superhumanos.en}`,
      },
    ],
  },
};
