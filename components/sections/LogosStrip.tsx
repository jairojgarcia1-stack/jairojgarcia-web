import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/lib/content/types";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp"]);

function readLogoFiles(): string[] {
  const dir = path.join(process.cwd(), "public", "media", "logos");
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort();
  } catch {
    return [];
  }
}

function labelFromFilename(file: string): string {
  return file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Reads public/media/logos/ at build time. Renders nothing until real logo
 * files are dropped in — ready to activate without a code change.
 */
export function LogosStrip({ locale }: { locale: Locale }) {
  const logos = readLogoFiles();
  if (logos.length === 0) return null;

  return (
    <div className="pb-20">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-cream-400">
          {locale === "es" ? "Empresas y eventos donde ha participado" : "Companies and events he has been part of"}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((file) => (
            <div
              key={file}
              className="relative h-8 w-28 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10 sm:w-32"
            >
              <Image
                src={`/media/logos/${file}`}
                alt={labelFromFilename(file)}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
