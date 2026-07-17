"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/pixel";

/**
 * Thin client wrapper around Button that fires a Meta Pixel event on click.
 * Exists because Server Components can't pass function props (onClick)
 * directly to Client Components — only serializable data like this
 * component's own string/object props.
 */
export function TrackedButton({
  href,
  children,
  variant,
  className,
  eventName,
  eventParams,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
}) {
  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </Button>
  );
}
