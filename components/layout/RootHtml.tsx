import type { ReactNode } from "react";
import { fraunces, inter } from "@/lib/fonts";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/seo/jsonld";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { PixelRouteTracker } from "@/components/analytics/PixelRouteTracker";

export function RootHtml({ lang, children }: { lang: "es" | "en"; children: ReactNode }) {
  return (
    <html lang={lang} className={`${fraunces.variable} ${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col antialiased">
        <MetaPixel />
        <PixelRouteTracker />
        <JsonLd data={personSchema()} />
        {children}
      </body>
    </html>
  );
}
