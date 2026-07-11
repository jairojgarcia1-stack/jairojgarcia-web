export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://jairojgarcia.com";

export const AUTHOR_NAME = "Jairo J. García";

export const SITE_NAME = {
  es: "Jairo J. García",
  en: "Jairo J. García",
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/jairojgarcia/",
  youtube: "https://www.youtube.com/channel/UCqE1iXANmz5zLgvpYkRukWQ",
  tiktok: "https://www.tiktok.com/@jairojgarciaoficial",
  linkedin: "https://www.linkedin.com/in/jairo-j-garc%C3%ADa-8927395a/",
  facebook: "https://www.facebook.com/jairojgarciaofficial",
} as const;

export const CONTACT_EMAIL = "contacto@jairojgarcia.com";
