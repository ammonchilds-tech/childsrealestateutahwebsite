import Link from "next/link";
import { OFFICE, SITE_NAME } from "@/lib/constants";

/**
 * Carrier-required (10DLC / A2P business registration) SMS wording.
 * Follows Follow Up Boss's "Business Registration: Privacy Policy" and
 * "How to Obtain Proper Opt-In Consent on your Website" guidance.
 * Used on /privacy and /terms so the two pages never drift apart.
 */

/** The no-sharing statement carriers look for in the privacy policy. */
export function SmsNoSharingStatement() {
  return (
    <>
      <p className="mb-3 font-medium text-foreground">
        Data will not be sold or shared with third parties for marketing or promotional purposes.
      </p>
      <p className="mb-3">
        We do not sell, rent, or share phone numbers. No mobile information will be shared with
        third parties or affiliates for marketing or promotional purposes. Text messaging
        originator opt-in data and consent are excluded from every category of sharing described
        in this policy and will not be shared with any third party.
      </p>
    </>
  );
}

/** The SMS Terms and Conditions carriers require. */
export function SmsTermsList() {
  return (
    <ol className="list-decimal pl-6 space-y-2.5">
      <li>
        {SITE_NAME} uses SMS to respond to your inquiries about buying or selling a home,
        confirm appointments and showings, send reminders, and notify you of schedule updates
        or important changes to your transaction. We only text you if you opted in, for example
        by checking the text-message consent box on one of our website forms.
      </li>
      <li>
        You can cancel the SMS service at any time. Just text &ldquo;STOP&rdquo;. After you send
        the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that
        you have been unsubscribed. After this, you will no longer receive SMS messages from us.
        If you want to join again, just sign up as you did the first time, and we will start
        sending SMS messages to you again.
      </li>
      <li>
        If you are experiencing issues with the messaging program you can reply with the keyword
        &ldquo;HELP&rdquo; for more assistance, or you can get help directly at{" "}
        <a href={`mailto:${OFFICE.email}`} className="text-accent hover:underline">
          {OFFICE.email}
        </a>{" "}
        or{" "}
        <a href={`tel:${OFFICE.phone}`} className="text-accent hover:underline">
          {OFFICE.phone}
        </a>
        .
      </li>
      <li>Carriers are not liable for delayed or undelivered messages.</li>
      <li>
        As always, message and data rates may apply for any messages sent to you from us and to
        us from you. Message frequency may vary. If you have any questions about your text plan or
        data plan, it is best to contact your wireless provider.
      </li>
      <li>
        If you have any questions regarding privacy, please read our privacy policy:{" "}
        <Link href="/privacy" className="text-accent hover:underline">
          childsrealestateutah.com/privacy
        </Link>
        .
      </li>
    </ol>
  );
}
