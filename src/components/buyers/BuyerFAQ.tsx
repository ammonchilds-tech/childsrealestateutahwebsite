"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What's the first step to buying a home?",
    a: "Getting pre-approved for a mortgage is the most important first step. It tells you exactly how much you can afford and shows sellers you're a serious buyer. We work with several trusted local lenders who can get you pre-approved quickly.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "It depends on your loan type. FHA loans require as little as 3.5% down, while conventional loans typically require 3–20%. Some VA and USDA loans allow 0% down for qualifying buyers. Our preferred lenders can walk you through all your options.",
  },
  {
    q: "How long does the buying process take?",
    a: "From accepted offer to closing, the process typically takes 30–45 days. Finding the right home can take anywhere from a few weeks to a few months depending on your criteria and the market.",
  },
  {
    q: "Do I pay for my buyer's agent?",
    a: "In most cases, the seller pays the buyer's agent commission, meaning our services cost you nothing out of pocket. We're fully in your corner throughout the entire process.",
  },
  {
    q: "What additional costs should I expect beyond the purchase price?",
    a: "Closing costs typically run 2–3% of the loan amount and include title insurance, lender fees, and prepaid items like property taxes and homeowner's insurance. We'll give you a full breakdown upfront so there are no surprises.",
  },
  {
    q: "What's the difference between pre-qualification and pre-approval?",
    a: "Pre-qualification is a quick estimate based on self-reported information. Pre-approval is a verified review of your finances by a lender — it carries much more weight with sellers and is what we recommend before starting your search.",
  },
];

export function BuyerFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Buyer Resources
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Common Questions
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Answers to the questions we hear most from first-time and repeat buyers.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-4 text-sm text-muted-foreground leading-relaxed border-t border-border">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
