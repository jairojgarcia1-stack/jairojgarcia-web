import type { ReactNode } from "react";
import type { SiteContent } from "@/lib/content/types";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PageShell({ site, children }: { site: SiteContent; children: ReactNode }) {
  return (
    <>
      <Navbar site={site} />
      <main className="flex-1">{children}</main>
      <Footer site={site} />
    </>
  );
}
