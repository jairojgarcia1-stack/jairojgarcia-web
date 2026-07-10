export type Locale = "es" | "en";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  locale: Locale;
  tagline: string;
  metaDescription: string;
  metaKeywords: string[];
  nav: {
    home: NavItem;
    about: NavItem;
    books: NavItem;
    speaking: NavItem;
    press: NavItem;
    blog: NavItem;
    contact: NavItem;
  };
  footer: {
    memorableLine: string;
    rightsLine: string;
    builtLine: string;
  };
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface PhilosophyPillar {
  id: string;
  title: string;
  description: string;
}

export interface EcosystemItem {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  photo?: string;
  videoUrl?: string;
}

export interface PressMention {
  id: string;
  outlet: string;
  title: string;
  date: string;
}

export interface PressKitItem {
  id: string;
  label: string;
  description: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  stats: StatItem[];
  about: {
    heading: string;
    paragraphs: string[];
    cta: { label: string; href: string };
  };
  philosophy: {
    heading: string;
    frameworkName: string;
    intro: string;
    pillars: PhilosophyPillar[];
  };
  speaking: {
    heading: string;
    description: string;
    topics: string[];
    cta: { label: string; href: string };
  };
  booksHeading: string;
  booksIntro: string;
  ecosystem: {
    heading: string;
    intro: string;
    items: EcosystemItem[];
  };
  socialProof: {
    heading: string;
    stats: StatItem[];
  };
  testimonials: {
    heading: string;
    items: Testimonial[];
  };
  contact: {
    heading: string;
    description: string;
    email: string;
    buttons: { label: string; href: string }[];
  };
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  intro: string[];
  story: string[];
  values: {
    heading: string;
    items: ValueItem[];
  };
  timeline: {
    heading: string;
    items: TimelineItem[];
  };
  cta: { label: string; href: string };
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  coverImage: string;
  shortDescription: string;
  longDescription: string[];
  themes: string[];
  quote: { text: string; author: string };
  links: {
    purchaseLabel: string;
    purchaseHref: string;
    sampleLabel: string;
    sampleHref: string;
  };
  faqs: FaqItem[];
}

export interface BooksContent {
  heading: string;
  intro: string;
}

export interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
}

export interface SpeakingFormat {
  id: string;
  title: string;
  description: string;
}

export interface SpeakingContent {
  heading: string;
  intro: string;
  topics: SpeakingTopic[];
  formats: SpeakingFormat[];
  audience: string[];
  cta: { label: string; href: string; email: string };
  faqs: FaqItem[];
}

export interface PressContent {
  heading: string;
  intro: string;
  bio: {
    short: string;
    long: string[];
  };
  kit: PressKitItem[];
  mentions: PressMention[];
  contact: { label: string; email: string };
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  publishDate: string;
  readingTime: number;
  excerpt: string;
  sections: BlogSection[];
  faqs: FaqItem[];
}

export interface BlogContent {
  heading: string;
  intro: string;
}
