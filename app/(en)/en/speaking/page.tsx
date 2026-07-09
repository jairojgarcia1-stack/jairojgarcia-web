import type { Metadata } from "next";
import { SpeakingPage } from "@/components/pages/SpeakingPage";
import { site } from "@/lib/content/en/site";
import { speaking } from "@/lib/content/en/speaking";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Speaking — Book Jairo J. García for Your Event",
  description: speaking.intro,
  keywords: ["leadership speaker", "keynote speaker", "international speaker", "book a speaker"],
  path: staticRoutes.speaking.en,
  alternatePath: staticRoutes.speaking.es,
});

export default function Page() {
  return <SpeakingPage locale="en" site={site} speaking={speaking} />;
}
