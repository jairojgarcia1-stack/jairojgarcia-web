import type { SpeakingContent } from "@/lib/content/types";
import { CONTACT_EMAIL } from "@/lib/constants";

export const speaking: SpeakingContent = {
  heading: "Speaking",
  intro:
    "Jairo brings his message on leadership, purpose, identity, and the fear of success to companies, universities, churches, and international conferences, combining storytelling, applicable content, and an energy that moves audiences to action.",
  trustStats: [
    { id: "stat-events", value: "500+", label: "Talks and events" },
    { id: "stat-countries", value: "15+", label: "Countries reached" },
    { id: "stat-people", value: "100,000+", label: "People impacted" },
  ],
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
  ],
  programsHeading: "Coaching Programs",
  programsIntro: "A closer kind of guidance, off the stage.",
  programs: [
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
  inquiryForm: {
    heading: "Request availability",
    intro: "Tell us about your event and we'll get back to you with availability and details.",
    nameLabel: "Name",
    emailLabel: "Email address",
    phoneLabel: "Phone",
    companyLabel: "Company or organization",
    cityLabel: "City",
    eventTypeLabel: "Event type",
    eventDateLabel: "Estimated date",
    audienceSizeLabel: "Audience size",
    messageLabel: "Tell us more about your event",
    submitLabel: "Send request",
    submitLoadingLabel: "Sending…",
    successMessage:
      "Request sent! We've emailed you a confirmation that we received it, and we'll reach out soon with availability and details.",
    errorMessage: "Something went wrong sending your request. Please try again or reach out directly to",
  },
  pressKitLabel: "Need a bio, photos, or video for your team? Download the press kit",
  faqs: [
    {
      question: "How can I book Jairo J. García for my event?",
      answer: `Fill out the form on this page or email ${CONTACT_EMAIL} with your event's date, location, and audience type, and we'll get back to you with availability and details.`,
    },
    {
      question: "What's the process for booking a date?",
      answer:
        "After we receive your request, we set up a short call to understand your event's goals, confirm availability, and finalize logistics and contract details.",
    },
    {
      question: "Does he travel internationally for talks?",
      answer:
        "Yes. Jairo has brought his message to audiences in over 15 countries and travels internationally for conferences, congresses, and corporate events.",
    },
    {
      question: "Is there video available to review before booking?",
      answer:
        "Yes, this page includes real footage of Jairo on stage. For additional material (extended video, high-resolution photos, bio), reach out or visit the press kit.",
    },
    {
      question: "What languages does he speak in?",
      answer: "Talks are primarily delivered in Spanish, with content also available in English.",
    },
    {
      question: "What speaking formats are available?",
      answer:
        "Keynotes, interactive workshops, and talks adapted for university audiences. He also offers 1:1 and group coaching programs separately, outside the speaking format.",
    },
    {
      question: "What are his main speaking topics?",
      answer:
        "Purpose-driven leadership, fear of success, identity and personal transformation, organizational culture and legacy, and conscious love.",
    },
  ],
};
