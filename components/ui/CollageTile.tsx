import { EditorialPhoto } from "@/components/ui/EditorialPhoto";

export function CollageTile({
  src,
  alt,
  className = "",
  sizes = "(min-width: 640px) 25vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-ink-700 ${className}`}>
      <EditorialPhoto
        src={src}
        alt={alt}
        sizes={sizes}
        className="transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-400/0 transition-all duration-500 group-hover:ring-gold-400/50"
      />
    </div>
  );
}
