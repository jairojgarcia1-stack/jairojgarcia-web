import { AUTHOR_NAME } from "@/lib/constants";

export function BookCover({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-xl border border-gold-400/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(207,168,93,0.18),transparent_55%)]"
      />
      <div className="relative h-8 w-8 rounded-full border border-gold-400/60" />
      <div className="relative">
        <p className="font-display text-2xl font-semibold leading-tight text-cream-50">{title}</p>
        <p className="mt-2 text-sm text-gold-300">{subtitle}</p>
      </div>
      <p className="relative text-xs uppercase tracking-[0.2em] text-cream-400">{AUTHOR_NAME}</p>
    </div>
  );
}
