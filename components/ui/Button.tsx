"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-400 text-ink-950 hover:bg-gold-300 shadow-[0_0_0_1px_rgba(207,168,93,0.4)]",
  secondary:
    "border border-gold-400/50 text-cream-50 hover:border-gold-400 hover:text-gold-300",
  ghost: "text-cream-200 hover:text-gold-300",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  const isHttp = href.startsWith("http");
  const isMailto = href.startsWith("mailto:");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

  if (isHttp) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={`${base} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  if (isMailto) {
    return (
      <a href={href} onClick={onClick} className={`${base} ${variantClasses[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}
