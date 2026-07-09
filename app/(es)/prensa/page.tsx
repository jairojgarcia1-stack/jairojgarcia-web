import type { Metadata } from "next";
import { PressPage } from "@/components/pages/PressPage";
import { site } from "@/lib/content/es/site";
import { press } from "@/lib/content/es/press";
import { buildMetadata } from "@/lib/seo/metadata";
import { staticRoutes } from "@/lib/i18n/slug-map";

export const metadata: Metadata = buildMetadata({
  locale: "es",
  title: "Prensa — Jairo J. García",
  description: press.intro,
  keywords: ["Jairo J. García prensa", "kit de prensa", "biografía oficial", "contacto de medios"],
  path: staticRoutes.press.es,
  alternatePath: staticRoutes.press.en,
});

export default function Page() {
  return <PressPage locale="es" site={site} press={press} />;
}
