import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Optional (never required) SMS opt-in for any form that collects a phone
 * number. Carriers reject registration if texting consent is required to submit.
 * Read the value with `form.get("smsConsent") === "yes"` / the checkbox's `checked`.
 */
export function SmsConsent({
  id,
  className,
  tone = "light",
}: {
  id: string;
  className?: string;
  /** "light" = dark text on a light background; "gold" = on the gold homepage band. */
  tone?: "light" | "gold";
}) {
  const linkClass = tone === "gold" ? "underline font-semibold" : "text-accent underline";
  return (
    <div className={cn("flex items-start gap-2.5", className)}>
      <input
        id={id}
        name="smsConsent"
        type="checkbox"
        value="yes"
        className="mt-1 h-4 w-4 shrink-0 accent-ink"
      />
      <label
        htmlFor={id}
        className={cn("text-xs leading-relaxed", tone === "gold" ? "text-ink" : "text-muted-foreground")}
      >
        (Optional) I agree to be contacted by {SITE_NAME} (Simple Choice Real Estate) via call,
        email, and text for real estate services. To opt out, you can reply STOP at any time or
        reply HELP for assistance. You can also click the unsubscribe link in the emails. Message
        and data rates may apply. Message frequency may vary.{" "}
        <Link href="/privacy" className={linkClass}>
          Privacy Policy
        </Link>{" "}
        ·{" "}
        <Link href="/terms#sms-terms" className={linkClass}>
          SMS Terms
        </Link>
      </label>
    </div>
  );
}
