import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-gold-300">
      {children}
    </span>
  );
}
