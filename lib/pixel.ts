declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function pageview(): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, params);
  }
}
