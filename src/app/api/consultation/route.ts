import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { consultationSchema } from "@/lib/schema";
import { brand } from "@/lib/content";

// Node.js runtime (Resend SDK). Route handlers are not cached by default.
export const runtime = "nodejs";

const COACH_EMAIL = process.env.COACH_EMAIL ?? brand.email;
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "BECOME <onboarding@resend.dev>";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.becomefitnessandstrength.com";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function POST(request: NextRequest) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Server-side validation (never trust the client)
  const parsed = consultationSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot — silently accept so bots don't learn, but never email.
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fullName = `${data.firstName} ${data.lastName}`.trim();
  const subject = `New BECOME Consultation Request — ${fullName}`;

  const rows: [string, string][] = [
    ["Name", fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Goal", data.goal],
    ["Experience", data.experience],
    ["Preferred contact", data.preferredContact],
    ["Preferred days", data.preferredDays || "—"],
    ["Preferred times", data.preferredTimes || "—"],
    ["Message", data.message || "—"],
  ];

  const coachHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
      <h2 style="color:#101212">New consultation request</h2>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 0;color:#7a7a7a;width:160px;vertical-align:top">${esc(
                k,
              )}</td><td style="padding:8px 0;color:#101212"><strong>${esc(
                v,
              )}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <p style="color:#7a7a7a;font-size:12px;margin-top:20px">Sent from ${esc(
        SITE_URL,
      )}</p>
    </div>`;

  const clientHtml = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
      <h2 style="color:#101212">Thanks, ${esc(data.firstName)} 👊</h2>
      <p style="color:#333;line-height:1.6">
        We received your consultation request and will reach out to talk through
        your goals and availability.
      </p>
      <p style="color:#333;line-height:1.6">
        <strong>Submitting this form does not confirm a training session.</strong>
        We will contact you to discuss next steps.
      </p>
      <p style="color:#333;line-height:1.6">
        Need us sooner? Call or text <strong>${esc(brand.phone)}</strong>.
      </p>
      <p style="color:#7a7a7a;font-size:13px;margin-top:24px">
        ${esc(brand.fullName)} · ${esc(brand.address.area)} · By appointment only
      </p>
    </div>`;

  // DEMO MODE — no API key: log non-sensitive metadata and succeed.
  if (!process.env.RESEND_API_KEY) {
    console.info("[consultation] demo mode (no RESEND_API_KEY). Metadata:", {
      goal: data.goal,
      experience: data.experience,
      preferredContact: data.preferredContact,
      hasMessage: Boolean(data.message),
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [COACH_EMAIL],
      replyTo: data.email,
      subject,
      html: coachHtml,
    });
    if (error) throw new Error(error.message);

    // Confirmation to the visitor (best-effort; don't fail the request on this)
    await resend.emails
      .send({
        from: FROM_EMAIL,
        to: [data.email],
        subject: "We received your BECOME consultation request",
        html: clientHtml,
      })
      .catch((e) => console.warn("[consultation] confirmation email failed", e));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[consultation] send failed", err);
    return NextResponse.json(
      { error: "We couldn't send your request. Please call or text instead." },
      { status: 502 },
    );
  }
}
