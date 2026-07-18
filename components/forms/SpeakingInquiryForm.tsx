"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import { trackEvent } from "@/lib/pixel";
import type { Locale, SpeakingContent } from "@/lib/content/types";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-ink-700 bg-ink-950 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-400 focus:border-gold-400/60 focus:outline-none";
const labelClasses = "text-xs font-medium uppercase tracking-wide text-cream-400";

export function SpeakingInquiryForm({
  form,
  locale,
}: {
  form: SpeakingContent["inquiryForm"];
  locale: Locale;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    eventType: "",
    eventDate: "",
    audienceSize: "",
    message: "",
    website: "", // honeypot — real users never fill this
  });
  const renderedAt = useRef(Date.now());

  function update(field: keyof typeof values) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/speaking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale, renderedAt: renderedAt.current }),
      });
      const data = await response.json();
      if (data.ok) {
        setStatus("success");
        trackEvent("Lead", { content_name: "Solicitud de Conferencia" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold-400/30 bg-ink-900/60 p-8">
        <h3 className="font-display text-2xl font-semibold text-cream-50">{form.heading}</h3>
        <p className="mt-4 text-cream-200">{form.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gold-400/30 bg-ink-900/60 p-8">
      <h3 className="font-display text-2xl font-semibold text-cream-50">{form.heading}</h3>
      <p className="mt-2 text-cream-400">{form.intro}</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          value={values.website}
          onChange={update("website")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.nameLabel}</span>
          <input required value={values.name} onChange={update("name")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.emailLabel}</span>
          <input
            type="email"
            required
            value={values.email}
            onChange={update("email")}
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.phoneLabel}</span>
          <input type="tel" value={values.phone} onChange={update("phone")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.companyLabel}</span>
          <input value={values.company} onChange={update("company")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.cityLabel}</span>
          <input value={values.city} onChange={update("city")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.eventTypeLabel}</span>
          <input value={values.eventType} onChange={update("eventType")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.eventDateLabel}</span>
          <input value={values.eventDate} onChange={update("eventDate")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.audienceSizeLabel}</span>
          <input value={values.audienceSize} onChange={update("audienceSize")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelClasses}>{form.messageLabel}</span>
          <textarea
            required
            rows={4}
            value={values.message}
            onChange={update("message")}
            className={`${inputClasses} resize-none`}
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300 disabled:opacity-60"
          >
            {status === "loading" ? form.submitLoadingLabel : form.submitLabel}
          </button>
        </div>
      </form>

      {status === "error" ? (
        <p className="mt-6 text-sm text-red-400">
          {form.errorMessage}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-300 hover:text-gold-200">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}
