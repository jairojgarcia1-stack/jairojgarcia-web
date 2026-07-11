export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://jairojgarcia.com";

export const AUTHOR_NAME = "Jairo J. García";

export const SITE_NAME = {
  es: "Jairo J. García",
  en: "Jairo J. García",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/jairojgarcia",
  youtube: "https://youtube.com/@jairojgarcia",
  tiktok: "https://www.tiktok.com/@jairojgarciaoficial",
  linkedin: "https://linkedin.com/in/jairojgarcia",
  facebook: "https://facebook.com/jairojgarcia",
} as const;

export const CONTACT_EMAIL = "contacto@jairojgarcia.com";
