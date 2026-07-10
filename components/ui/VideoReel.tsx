"use client";

import { useState } from "react";

/**
 * Fills its positioned parent. Falls back to an editorial gradient treatment
 * (matching EditorialPhoto) if the real video asset isn't present yet.
 */
export function VideoReel({ src, className = "" }: { src: string; className?: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        aria-hidden
        className={`absolute inset-0 overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(207,168,93,0.14),transparent_65%)]" />
      </div>
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={() => setErrored(true)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
