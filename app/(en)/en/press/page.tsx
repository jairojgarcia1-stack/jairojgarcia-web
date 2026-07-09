import type { Metadata } from "next";
import { PressPage } from "@/components/pages/PressPage";
import { site } from "@/lib/content/en/site";
import { press } from "@/lib/content/en/press";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Press — Jairo J. García",
  description: press.intro,
  keywords: ["Jairo J. García press", "press kit", "official bio", "media contact"],
  path: staticRoutes.press.en,
  alternatePath: staticRoutes.press.es,
});

export default function Page() {
  return <PressPage locale="en" site={site} press={press} />;
}
