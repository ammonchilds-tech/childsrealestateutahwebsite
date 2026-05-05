import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, email, address, timeline, notes } = await req.json();

  if (!name || !phone || !address) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const timelineLabels: Record<string, string> = {
    asap: "As soon as possible",
    "1-3months": "1 – 3 months",
    "3-6months": "3 – 6 months",
    "6plus": "6+ months / Just exploring",
  };

  try {
    await resend.emails.send({
      from: "Childs Real Estate <onboarding@resend.dev>",
      to: ["ammon@childsrealestateutah.com"],
      replyTo: email || undefined,
      subject: `New Home Valuation Request — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a2e;">
          <div style="background: #2D1B4E; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #C9A96E; margin: 0; font-size: 22px;">New Home Valuation Request</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 14px;">Submitted via childsrealestateutah.com/clear-commission</p>
          </div>
          <div style="background: #f9f7f4; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e8e0d4; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; color: #2D1B4E; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; color: #2D1B4E;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">
                  <a href="tel:${phone}" style="color: #C9A96E;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; color: #2D1B4E;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">
                  ${email ? `<a href="mailto:${email}" style="color: #C9A96E;">${email}</a>` : "—"}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; color: #2D1B4E;">Property Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; color: #2D1B4E;">Timeline</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${timelineLabels[timeline] ?? "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #2D1B4E; vertical-align: top;">Notes</td>
                <td style="padding: 10px 0;">${notes || "—"}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fff; border: 1px solid #e8e0d4; border-radius: 6px; font-size: 13px; color: #666;">
              Reply directly to this email to contact ${name}${email ? ` at ${email}` : ""}.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
