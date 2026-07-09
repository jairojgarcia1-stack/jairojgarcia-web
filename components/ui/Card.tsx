import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-ink-700 bg-ink-900/60 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-gold-400/40 ${className}`}
    >
      {children}
    </div>
  );
}
