import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const datacenter = apiKey.split("-").pop();
  const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_address: email, status: "subscribed" }),
  });

  if (response.ok) {
    return NextResponse.json({ ok: true });
  }

  const data = await response.json().catch(() => null);
  if (data?.title === "Member Exists") {
    return NextResponse.json({ ok: true, alreadySubscribed: true });
  }

  return NextResponse.json({ ok: false, error: "mailchimp_error" }, { status: 502 });
}
