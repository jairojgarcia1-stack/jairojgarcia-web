"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";
import type { SpeakingContent } from "@/lib/content/types";

const inputClasses =
  "w-full rounded-lg border border-ink-700 bg-ink-950 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-400 focus:border-gold-400/60 focus:outline-none";
const labelClasses = "text-xs font-medium uppercase tracking-wide text-cream-400";

export function SpeakingInquiryForm({ form }: { form: SpeakingContent["inquiryForm"] }) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: "",
    company: "",
    eventType: "",
    eventDate: "",
    audienceSize: "",
    message: "",
  });

  function update(field: keyof typeof values) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `${form.heading} — ${values.company || values.name}`;
    const body = [
      `${form.nameLabel}: ${values.name}`,
      `${form.companyLabel}: ${values.company}`,
      `${form.eventTypeLabel}: ${values.eventType}`,
      `${form.eventDateLabel}: ${values.eventDate}`,
      `${form.audienceSizeLabel}: ${values.audienceSize}`,
      "",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-gold-400/30 bg-ink-900/60 p-8">
      <h3 className="font-display text-2xl font-semibold text-cream-50">{form.heading}</h3>
      <p className="mt-2 text-cream-400">{form.intro}</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.nameLabel}</span>
          <input required value={values.name} onChange={update("name")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.companyLabel}</span>
          <input required value={values.company} onChange={update("company")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.eventTypeLabel}</span>
          <input value={values.eventType} onChange={update("eventType")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className={labelClasses}>{form.eventDateLabel}</span>
          <input value={values.eventDate} onChange={update("eventDate")} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
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
            className="inline-flex items-center justify-center rounded-full bg-gold-400 px-6 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-300"
          >
            {form.submitLabel}
          </button>
        </div>
      </form>

      {submitted ? (
        <p className="mt-6 text-sm text-cream-400">
          {form.fallbackText}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-300 hover:text-gold-200">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}
