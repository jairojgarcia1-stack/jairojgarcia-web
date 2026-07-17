"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/pixel";

/** Plain-anchor equivalent of TrackedButton, for text-style links. */
export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventParams,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </a>
  );
}
