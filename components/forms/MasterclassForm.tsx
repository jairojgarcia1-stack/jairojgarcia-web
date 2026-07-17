"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/content/types";
import { trackEvent } from "@/lib/pixel";

type Status = "idle" | "loading" | "success" | "error";

const COPY = {
  es: {
    placeholder: "Tu correo electrónico",
    submit: "Quiero acceder",
    loading: "Enviando…",
    success: "Listo. Revisa tu correo para confirmar tu acceso.",
    error: "Algo salió mal. Intenta de nuevo en un momento.",
  },
  en: {
    placeholder: "Your email address",
    submit: "I want access",
    loading: "Sending…",
    success: "Done. Check your inbox to confirm your access.",
    error: "Something went wrong. Please try again in a moment.",
  },
} as const;

export function MasterclassForm({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const t = COPY[locale];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setStatus(data.ok ? "success" : "error");
      if (data.ok) {
        trackEvent("Lead", { content_name: "Masterclass Gratuita" });
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-sm text-gold-300">{t.success}</p>;
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.placeholder}
          className="w-full flex-1 rounded-full border border-ink-700 bg-ink-950 px-5 py-3 text-sm text-cream-50 placeholder:text-cream-400 focus:border-gold-400/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300 disabled:opacity-60"
        >
          {status === "loading" ? t.loading : t.submit}
        </button>
      </form>
      {status === "error" ? <p className="text-sm text-red-400">{t.error}</p> : null}
    </div>
  );
}
