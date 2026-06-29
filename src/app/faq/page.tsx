"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, OFFICE } from "@/lib/constants";

const FAQ_SECTIONS = [
  {
    category: "Selling Your Home",
    faqs: [
      {
        q: "How do I know what my home is worth?",
        a: "We provide a free, no-obligation Comparative Market Analysis (CMA) using recent sales data, active listings, and local market trends. This gives you a realistic price range based on what buyers are actually paying — not just automated estimates. Request yours at childsrealestateutah.com/sell.",
      },
      {
        q: "What does it cost to sell a home with Childs Real Estate?",
        a: "Our commission structure is transparent and competitive. Visit our Clear Commission page for a full breakdown with no hidden fees. We believe you deserve to know exactly what you're paying for before you sign anything.",
      },
      {
        q: "How long will it take to sell my home?",
        a: "Days on market depends on pricing, condition, and current demand. In Utah County, well-priced homes in good condition routinely go under contract within 1–3 weeks. We'll share current market stats for your specific area during your consultation.",
      },
      {
        q: "What should I do to prepare my home before listing?",
        a: "We provide a complimentary staging consultation to identify high-impact improvements. Generally: declutter, deep clean, address any deferred maintenance, and boost curb appeal. Small investments here consistently yield outsized returns at closing.",
      },
      {
        q: "What marketing do you do for my listing?",
        a: "Every listing gets professional photography, drone footage, a virtual tour, MLS syndication, targeted social media campaigns, email marketing to our buyer database, and placement on Simple Choice Real Estate's extensive buyer network. Your home gets seen — not just listed.",
      },
      {
        q: "Do I have to be home during showings?",
        a: "No — we recommend sellers leave during showings. It makes buyers more comfortable and leads to more candid feedback. We use a secure lockbox and coordinate all showing requests through a scheduling platform so you're always notified.",
      },
      {
        q: "What happens after I receive an offer?",
        a: "We review every offer together — not just the price, but contingencies, financing, closing timeline, and terms. We negotiate on your behalf to maximize your net proceeds and protect your interests throughout the transaction.",
      },
      {
        q: "Can I sell my home while buying another at the same time?",
        a: "Yes, and we coordinate this frequently. We'll map out a timeline that aligns your sale and purchase closings to minimize the gap between homes. Bridge loan options are also available through our preferred lenders if needed.",
      },
    ],
  },
  {
    category: "Buying a Home",
    faqs: [
      {
        q: "What's the first step to buying a home in Utah?",
        a: "Get pre-approved for a mortgage before you start touring homes. Pre-approval tells you exactly what you can afford and shows sellers you're a serious buyer — which matters in a competitive market. We can connect you with trusted local lenders who move quickly.",
      },
      {
        q: "How much do I need for a down payment?",
        a: "It depends on your loan type. FHA loans require as little as 3.5% down, conventional loans typically 3–20%, and VA or USDA loans may allow 0% for qualifying buyers. Your lender will walk you through the best option for your situation.",
      },
      {
        q: "Do I pay for my buyer's agent?",
        a: "In most transactions, the seller covers the buyer's agent commission — meaning our services cost you nothing out of pocket. We'll always be transparent about compensation before we start working together.",
      },
      {
        q: "How long does the home buying process take?",
        a: "Finding the right home can take a few weeks to a few months depending on your criteria and market conditions. Once you're under contract, closing typically takes 30–45 days.",
      },
      {
        q: "What additional costs should I expect beyond the purchase price?",
        a: "Closing costs typically run 2–3% of the loan amount and cover title insurance, lender fees, appraisal, and prepaid items like property taxes and homeowner's insurance. We'll give you a detailed estimate early so there are no surprises at closing.",
      },
    ],
  },
  {
    category: "Working With Childs Real Estate",
    faqs: [
      {
        q: "What areas do you serve?",
        a: `We specialize in Utah County and the Salt Lake Valley — including American Fork, Lehi, Highland, Alpine, Cedar Hills, Orem, Provo, Draper, Sandy, Saratoga Springs, and Salt Lake City. Our office is located at ${OFFICE.address}.`,
      },
      {
        q: "Are you a team or individual agents?",
        a: "Ammon and Tasha Childs operate as a husband-and-wife team, backed by a full support staff. You get two experienced perspectives, deep local expertise, and the resources of Simple Choice Real Estate — all with direct access to your agents.",
      },
      {
        q: "What credentials and certifications do you hold?",
        a: "Our team holds multiple designations including ABR® (Accredited Buyer's Representative), ALHS® (Accredited Listing & Home Selling Specialist), CNE® (Certified Negotiation Expert), CVE® (Certified Valuation Expert), CDC® (Certified Divorce Specialist), and SRES® (Senior Real Estate Specialist). These aren't just letters — they represent focused expertise we apply for our clients.",
      },
      {
        q: "What is Simple Choice Real Estate?",
        a: "Simple Choice Real Estate is our brokerage. We give our clients access to a strong buyer network, premium marketing tools, and the personal attention you deserve when buying or selling a home.",
      },
      {
        q: "How do I get started?",
        a: `Call or text us at ${OFFICE.phone}, email us at ${OFFICE.email}, or fill out the contact form at childsrealestateutah.com/contact. We respond quickly and are happy to answer questions before you commit to anything.`,
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_SECTIONS.flatMap((section) =>
    section.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              {SITE_NAME}
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Answers to the questions Utah home sellers and buyers ask us most.
            Don&apos;t see yours? We&apos;re happy to help directly.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.category}>
              <div className="mb-8">
                <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-2">
                  {section.category}
                </p>
                <div className="w-12 h-0.5 bg-accent rounded-full" />
              </div>

              <div className="space-y-3">
                {section.faqs.map((faq, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = open === key;
                  return (
                    <div
                      key={key}
                      className="border border-border rounded-xl overflow-hidden bg-white"
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : key)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-medium text-foreground pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-4 text-sm text-muted-foreground leading-relaxed border-t border-border">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re real people — call, text, or email us directly and we&apos;ll get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${OFFICE.phone}`}
              className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base bg-accent text-white hover:bg-accent/90 transition-colors inline-flex items-center"
            >
              Call {OFFICE.phone}
            </a>
            <Link
              href="/contact"
              className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
