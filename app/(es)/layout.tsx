import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { RootHtml } from "@/components/layout/RootHtml";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="es">{children}</RootHtml>;
}
