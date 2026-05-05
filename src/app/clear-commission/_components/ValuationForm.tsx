"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-primary mb-2">
          Request Received!
        </h3>
        <p className="text-muted-foreground max-w-sm mx-auto">
          We&apos;ll reach out within one business day to schedule your free, no-obligation home valuation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="val-name" className="block text-sm font-medium text-primary mb-1.5">
            Full Name *
          </label>
          <Input id="val-name" placeholder="John Smith" required />
        </div>
        <div>
          <label htmlFor="val-phone" className="block text-sm font-medium text-primary mb-1.5">
            Phone *
          </label>
          <Input id="val-phone" type="tel" placeholder="(801) 555-0123" required />
        </div>
      </div>

      <div>
        <label htmlFor="val-email" className="block text-sm font-medium text-primary mb-1.5">
          Email
        </label>
        <Input id="val-email" type="email" placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="val-address" className="block text-sm font-medium text-primary mb-1.5">
          Property Address *
        </label>
        <Input id="val-address" placeholder="123 Main St, American Fork, UT" required />
      </div>

      <div>
        <label htmlFor="val-timeline" className="block text-sm font-medium text-primary mb-1.5">
          Selling Timeline
        </label>
        <select
          id="val-timeline"
          className="flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <option value="">Select a timeline</option>
          <option value="asap">As soon as possible</option>
          <option value="1-3months">1 – 3 months</option>
          <option value="3-6months">3 – 6 months</option>
          <option value="6plus">6+ months / Just exploring</option>
        </select>
      </div>

      <div>
        <label htmlFor="val-notes" className="block text-sm font-medium text-primary mb-1.5">
          Anything else we should know?
        </label>
        <textarea
          id="val-notes"
          rows={3}
          placeholder="Updates, upgrades, special circumstances..."
          className="flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 resize-none"
        />
      </div>

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Request My Free Valuation
          </span>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        No obligation. No pressure. Just honest numbers.
      </p>
    </form>
  );
}
