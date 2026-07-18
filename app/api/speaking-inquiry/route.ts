import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/constants";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_TIME_MS = 3000;
const FROM_NOTIFICATIONS = "Solicitudes — Jairo J. García <notificaciones@jairojgarcia.com>";
const FROM_CONFIRMATION = "Jairo J. García <contacto@jairojgarcia.com>";

const CONFIRMATION_COPY = {
  es: {
    subject: "Recibimos tu solicitud",
    greeting: (name: string) => `Hola ${name},`,
    body: "Gracias por tu interés en llevar a Jairo J. García a tu evento. Recibimos tu solicitud y nuestro equipo te contactará pronto con la disponibilidad y los siguientes pasos.",
    recap: "Esto es lo que nos compartiste:",
    signoff: "— Equipo Jairo J. García",
  },
  en: {
    subject: "We received your request",
    greeting: (name: string) => `Hi ${name},`,
    body: "Thank you for your interest in bringing Jairo J. García to your event. We received your request and our team will reach out soon with availability and next steps.",
    recap: "Here's what you shared with us:",
    signoff: "— Jairo J. García Team",
  },
} as const;

type Body = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  city?: unknown;
  eventType?: unknown;
  eventDate?: unknown;
  audienceSize?: unknown;
  message?: unknown;
  locale?: unknown;
  renderedAt?: unknown;
  website?: unknown; // honeypot
};

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function fieldsTable(fields: [string, string][]): string {
  const rows = fields
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#8a8578;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:4px 0;color:#1a1a1a;">${value.replace(/\n/g, "<br/>")}</td></tr>`,
    )
    .join("");
  return `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${rows}</table>`;
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const company = str(body.company);
  const city = str(body.city);
  const eventType = str(body.eventType);
  const eventDate = str(body.eventDate);
  const audienceSize = str(body.audienceSize);
  const message = str(body.message);
  const locale = body.locale === "en" ? "en" : "es";
  const honeypot = str(body.website);
  const renderedAt = typeof body.renderedAt === "number" ? body.renderedAt : 0;

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // Silently "succeed" on suspected bot submissions (honeypot filled, or
  // submitted implausibly fast after the form rendered) without sending
  // any mail — avoids tipping off spam scripts while not paging anyone.
  const isSuspectedBot = honeypot !== "" || (renderedAt > 0 && Date.now() - renderedAt < MIN_FILL_TIME_MS);
  if (isSuspectedBot) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const copy = CONFIRMATION_COPY[locale];

  const internalFields: [string, string][] = [
    ["Nombre", name],
    ["Email", email],
    ["Teléfono", phone],
    ["Empresa", company],
    ["Ciudad", city],
    ["Tipo de evento", eventType],
    ["Fecha", eventDate],
    ["Tamaño de audiencia", audienceSize],
    ["Mensaje", message],
  ];

  const internalResult = await resend.emails.send({
    from: FROM_NOTIFICATIONS,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nueva solicitud de conferencia — ${company || name}`,
    html: fieldsTable(internalFields),
  });

  if (internalResult.error) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  const recapFields: [string, string][] = [
    ["Nombre", name],
    ["Empresa", company],
    ["Ciudad", city],
    ["Tipo de evento", eventType],
    ["Fecha", eventDate],
  ];

  await resend.emails.send({
    from: FROM_CONFIRMATION,
    to: email,
    replyTo: CONTACT_EMAIL,
    subject: copy.subject,
    html: `<p>${copy.greeting(name)}</p><p>${copy.body}</p><p>${copy.recap}</p>${fieldsTable(recapFields)}<p>${copy.signoff}</p>`,
  });

  return NextResponse.json({ ok: true });
}
