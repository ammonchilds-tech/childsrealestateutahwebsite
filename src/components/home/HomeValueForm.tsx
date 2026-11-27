"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { OFFICE } from "@/lib/constants";

type Status = "idle" | "submitting" | "sent" | "error";

const fieldClass =
  "w-full min-h-[52px] bg-white text-ink px-4 border-2 border-ink/15 placeholder:text-neutral-500 focus:outline-none focus:border-ink";

/** Short home-value form for the homepage. Sends to the same inbox as the /sell form. */
export function HomeValueForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: form.get("address"),
          email: form.get("email"),
          phone: form.get("phone") || undefined,
          source: "homepage",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="bg-ink text-white p-8 flex flex-col gap-3">
        <CheckCircle2 className="h-9 w-9 text-gold" aria-hidden="true" />
        <p className="font-display text-3xl leading-tight">Thank you — we&apos;ve got it.</p>
        <p className="text-white/80">
          Ammon or Tasha will prepare your home&apos;s value and reach out within one
          business day. Questions sooner? Call{" "}
          <a href={`tel:${OFFICE.phone}`} className="text-gold underline underline-offset-4">
            {OFFICE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/35 p-6 md:p-7 flex flex-col gap-3.5" aria-label="Get my home value">
      <div>
        <label htmlFor="hv-address" className="block text-sm font-bold mb-1.5">
          Property address <span aria-hidden="true">*</span>
        </label>
        <input
          id="hv-address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="123 Main St, American Fork"
          className={fieldClass}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="hv-email" className="block text-sm font-bold mb-1.5">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="hv-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="hv-phone" className="block text-sm font-bold mb-1.5">
            Phone <span className="font-medium">(optional)</span>
          </label>
          <input
            id="hv-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(801) 555-0123"
            className={fieldClass}
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="bg-ink text-white px-4 py-3 text-sm">
          Something went wrong sending that. Please call or text{" "}
          <a href={`tel:${OFFICE.phone}`} className="text-gold underline">
            {OFFICE.phone}
          </a>{" "}
          and we&apos;ll take care of you.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-1 inline-flex items-center justify-center gap-2.5 min-h-[60px] px-8 bg-ink text-white font-bold text-lg hover:bg-ink/85 disabled:opacity-70 transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Get My Home Value"}
        {status !== "submitting" && (
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        )}
      </button>
      <p className="text-sm font-medium">
        Your address is used only to prepare your valuation. We never sell your information.
      </p>
    </form>
  );
}
