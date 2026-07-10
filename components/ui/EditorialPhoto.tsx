"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

/**
 * Fills its positioned parent (parent needs `relative` + a size/aspect-ratio).
 * Falls back to an editorial gradient treatment (or a custom `fallback`) if
 * the real asset isn't present yet, so the site never shows a broken image.
 */
export function EditorialPhoto({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fallback?: ReactNode;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    if (fallback) return <>{fallback}</>;
    return (
      <div
        aria-hidden
        className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(207,168,93,0.16),transparent_60%)]" />
        <div className="absolute inset-0 border border-gold-400/20" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
