import { NextRequest, NextResponse } from "next/server";
import { escapeHtml } from "@/lib/sanitize";

// In-memory rate limiter: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { name, phone, email, address, timeline, notes, source, smsConsent } = await req.json();

  // Every form needs an address plus at least one way to reach the person.
  // The /sell and /clear-commission forms also send name + phone; the short
  // homepage form sends address + email (phone optional).
  if (!address || (!phone && !email)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const sourceLabels: Record<string, string> = {
    homepage: "childsrealestateutah.com (homepage home-value form)",
    sell: "childsrealestateutah.com/sell",
    "clear-commission": "childsrealestateutah.com/clear-commission",
  };
  const sSource = sourceLabels[source] ?? "childsrealestateutah.com";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const timelineLabels: Record<string, string> = {
    asap: "As soon as possible",
    "1-3months": "1 – 3 months",
    "3-6months": "3 – 6 months",
    "6plus": "6+ months / Just exploring",
  };

  const sName = name ? escapeHtml(String(name)) : "";
  const sPhone = phone ? escapeHtml(String(phone)) : "";
  const sEmail = email ? escapeHtml(String(email)) : "";
  const sAddress = escapeHtml(String(address));
  const sNotes = notes ? escapeHtml(String(notes)) : "";
  // timeline is validated against a whitelist, but escape for safety
  const sTimeline = timelineLabels[timeline] ?? "Not specified";

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0A0A0A;">
      <div style="background:#0A0A0A;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h1 style="color:#D8AA3F;margin:0;font-size:22px;">New Home Valuation Request</h1>
        <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:14px;">Submitted via ${sSource}</p>
      </div>
      <div style="background:#f9f7f4;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e8e0d4;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#0A0A0A;width:140px;">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sName || "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#0A0A0A;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sPhone ? `<a href="tel:${sPhone}" style="color:#D8AA3F;">${sPhone}</a>` : "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#0A0A0A;">Text consent</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${smsConsent === true ? "Yes — opted in to texts" : "No — do not text"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#0A0A0A;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sEmail ? `<a href="mailto:${sEmail}" style="color:#D8AA3F;">${sEmail}</a>` : "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#0A0A0A;">Property Address</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sAddress}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#0A0A0A;">Timeline</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sTimeline}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;font-weight:600;color:#0A0A0A;vertical-align:top;">Notes</td>
            <td style="padding:10px 0;">${sNotes || "—"}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#fff;border:1px solid #e8e0d4;border-radius:6px;font-size:13px;color:#666;">
          ${sEmail ? `Reply directly to this email to reach ${sName || "them"} at ${sEmail}.` : `No email given — call ${sName || "them"} at ${sPhone}.`}
        </div>
      </div>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Childs Real Estate <noreply@childsrealestateutah.com>",
      to: ["ammonchilds@gmail.com", "tashalchilds@gmail.com"],
      reply_to: email || undefined,
      subject: `New Home Valuation Request — ${sName || sAddress}`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Resend API error:", res.status, body);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
