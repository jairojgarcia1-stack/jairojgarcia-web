import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { site } from "@/lib/content/es/site";
import { about } from "@/lib/content/es/about";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "es",
  title: "Sobre mí — Jairo J. García",
  description: about.intro[0],
  keywords: ["Jairo J. García biografía", "coach de transformación personal", "conferencista internacional"],
  path: staticRoutes.about.es,
  alternatePath: staticRoutes.about.en,
});

export default function Page() {
  return <AboutPage locale="es" site={site} about={about} />;
}
