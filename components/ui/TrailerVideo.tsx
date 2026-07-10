"use client";

import { useState } from "react";

export function TrailerVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster?: string;
  label: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) return null;

  return (
    <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-gold-400/25">
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
        onError={() => setErrored(true)}
        className="aspect-[9/16] w-full bg-ink-900 object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
