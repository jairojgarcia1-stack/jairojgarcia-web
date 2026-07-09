import type { Metadata } from "next";
import { SpeakingPage } from "@/components/pages/SpeakingPage";
import { site } from "@/lib/content/es/site";
import { speaking } from "@/lib/content/es/speaking";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "es",
  title: "Conferencias — Contrata a Jairo J. García para tu evento",
  description: speaking.intro,
  keywords: ["conferencista de liderazgo", "conferencista motivacional", "speaker internacional", "contratar conferencista"],
  path: staticRoutes.speaking.es,
  alternatePath: staticRoutes.speaking.en,
});

export default function Page() {
  return <SpeakingPage locale="es" site={site} speaking={speaking} />;
}
