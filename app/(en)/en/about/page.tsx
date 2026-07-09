import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { site } from "@/lib/content/en/site";
import { about } from "@/lib/content/en/about";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "About Me — Jairo J. García",
  description: about.intro[0],
  keywords: ["Jairo J. García biography", "personal transformation coach", "international speaker"],
  path: staticRoutes.about.en,
  alternatePath: staticRoutes.about.es,
});

export default function Page() {
  return <AboutPage locale="en" site={site} about={about} />;
}
