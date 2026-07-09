import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold-400">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-cream-50 sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-lg text-cream-400">{intro}</p> : null}
      {children}
    </div>
  );
}
