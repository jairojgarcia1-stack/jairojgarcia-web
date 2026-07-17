"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { pageview } from "@/lib/pixel";

/**
 * The base Meta Pixel snippet only fires PageView once, on the initial
 * script load. Next.js App Router navigations are client-side and don't
 * reload that script, so this fires PageView again on every subsequent
 * route change (skipping the very first render to avoid double-counting
 * the initial pageview already sent by MetaPixel).
 */
export function PixelRouteTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    pageview();
  }, [pathname]);

  return null;
}
