import type { SpeakingContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const speaking: SpeakingContent = {
  heading: "Speaking",
  intro:
    "Jairo brings his message on leadership, purpose, identity, and the fear of success to companies, universities, churches, and international conferences, combining storytelling, applicable content, and an energy that moves audiences to action.",
  topics: [
    {
      id: "purpose-leadership",
      title: "Purpose-driven leadership",
      description: "How to lead teams and organizations from identity and purpose, not from fear or urgency.",
    },
    {
      id: "fear-of-success",
      title: "Fear of success",
      description:
        "How to identify and overcome the quiet fear that sabotages personal and professional growth before it's reached.",
    },
    {
      id: "identity-transformation",
      title: "Identity and personal transformation",
      description:
        "A practical journey back to your real identity, activating the potential that conditioning tends to put to sleep.",
    },
    {
      id: "culture-legacy",
      title: "Organizational culture and legacy",
      description: "How to build team cultures that outlast quarterly results and leave a real legacy in people.",
    },
    {
      id: "conscious-love",
      title: "Conscious love",
      description:
        "Jairo is the founder coach of the Conscious Love School, a space dedicated to building healthier, more conscious, purpose-driven relationships.",
    },
  ],
  formats: [
    {
      id: "keynote",
      title: "Keynote",
      description: "A main-stage talk for conferences, conventions, and large-format corporate events.",
    },
    {
      id: "workshop",
      title: "Workshop",
      description: "An interactive, hands-on session for teams looking for depth alongside inspiration.",
    },
    {
      id: "university",
      title: "University talk",
      description: "A format adapted for younger audiences at universities and educational institutions.",
    },
    {
      id: "coaching-1a1",
      title: "1:1 Coaching",
      description: "Individual coaching sessions for a deeper, personalized transformation process.",
    },
    {
      id: "coaching-group",
      title: "Group Coaching",
      description: "Group sessions for teams or communities that want to grow together with ongoing guidance.",
    },
  ],
  audience: [
    "Companies and leadership teams",
    "Universities and educational institutions",
    "Churches and nonprofit organizations",
    "International conferences and congresses",
  ],
  cta: {
    label: "Request availability",
    href: `mailto:${CONTACT_EMAIL}`,
    email: CONTACT_EMAIL,
  },
  faqs: [
    {
      question: "How can I book Jairo J. García for my event?",
      answer: `Email ${CONTACT_EMAIL} with your event's date, location, and audience type, and we'll get back to you with availability and details.`,
    },
    {
      question: "What languages does he speak in?",
      answer: "Talks are primarily delivered in Spanish, with content also available in English.",
    },
    {
      question: "What speaking formats are available?",
      answer:
        "Keynotes, interactive workshops, talks adapted for university audiences, and both 1:1 and group coaching sessions, depending on your event's needs.",
    },
    {
      question: "What are his main speaking topics?",
      answer:
        "Purpose-driven leadership, fear of success, identity and personal transformation, organizational culture and legacy, and conscious love.",
    },
  ],
};
