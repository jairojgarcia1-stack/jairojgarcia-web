import { AUTHOR_NAME } from "@/lib/constants";
import { EditorialPhoto } from "@/components/ui/EditorialPhoto";

export function BookCover({
  title,
  subtitle,
  coverImage,
}: {
  title: string;
  subtitle: string;
  coverImage?: string;
}) {
  const typographicFallback = (
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-xl border border-gold-400/30 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6">
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

  if (!coverImage) {
    return <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">{typographicFallback}</div>;
  }

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-gold-400/30 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.65)]">
      <EditorialPhoto
        src={coverImage}
        alt={`${title}: ${subtitle}`}
        fallback={typographicFallback}
        sizes="(min-width: 1024px) 25vw, 45vw"
      />
    </div>
  );
}
