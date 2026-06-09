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

  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const sName = escapeHtml(String(name));
  const sEmail = escapeHtml(String(email));
  const sPhone = phone ? escapeHtml(String(phone)) : "";
  const sSubject = subject ? escapeHtml(String(subject)) : "";
  const sMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
      <div style="background:#2D1B4E;padding:24px 32px;border-radius:8px 8px 0 0;">
        <h1 style="color:#C9A96E;margin:0;font-size:22px;">New Contact Form Submission</h1>
        <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:14px;">Submitted via childsrealestateutah.com/contact</p>
      </div>
      <div style="background:#f9f7f4;padding:32px;border-radius:0 0 8px 8px;border:1px solid #e8e0d4;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#2D1B4E;width:140px;">Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sName}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#2D1B4E;">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;"><a href="mailto:${sEmail}" style="color:#C9A96E;">${sEmail}</a></td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#2D1B4E;">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sPhone ? `<a href="tel:${sPhone}" style="color:#C9A96E;">${sPhone}</a>` : "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;font-weight:600;color:#2D1B4E;">Subject</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0d4;">${sSubject || "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;font-weight:600;color:#2D1B4E;vertical-align:top;">Message</td>
            <td style="padding:10px 0;">${sMessage}</td>
          </tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#fff;border:1px solid #e8e0d4;border-radius:6px;font-size:13px;color:#666;">
          Reply directly to this email to reach ${sName} at ${sEmail}.
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
      to: ["ammon@childsrealestateutah.com"],
      reply_to: email,
      subject: `New Contact: ${sSubject || "General Inquiry"} — ${sName}`,
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
