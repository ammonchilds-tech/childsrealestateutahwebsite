import Link from "next/link";
import { Check, Minus, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OFFICE, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listing Service Packages | The Childs Clear Commission Program",
  description:
    "Compare our Foundation, Distinction, and Prestige listing packages. Transparent flat-rate commissions — more service, less cost. Serving Utah County and the Salt Lake Valley.",
  alternates: { canonical: `${SITE_URL}/packages` },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const FOUNDATION_EXPOSURE = [
  "MLS + full web syndication",
  "Zillow, Realtor.com & Homes.com",
  "Professional photography (25 photos)",
  "Yard sign + electronic lockbox",
];

const FOUNDATION_TRANSACTION = [
  "Seller's net sheet",
  "Professional contract negotiations",
  "Full closing coordination",
  "Easy-exit listing agreement",
];

const FOUNDATION_NOT_INCLUDED = [
  "Social media marketing",
  "Open house",
  "Video / Instagram Reel",
  "Zillow Showcase",
];

const DISTINCTION_EXTRAS = [
  "Professional market analysis",
  "Social media marketing (Instagram + Facebook)",
  "Email blast to buyer agent network",
  "Property highlights flyer",
  "1 hosted open house",
  "Easy-exit listing agreement",
];

const DISTINCTION_NOT_INCLUDED = [
  "Video / Instagram Reel",
  "Zillow Showcase",
  "Coming soon pre-launch",
  "Just Listed postcards",
];

const PRESTIGE_EXTRAS = [
  "Zillow Showcase (premium placement)",
  "Professional video + Instagram Reel",
  "Coming soon pre-launch campaign",
  "500+ Just Listed postcards to neighborhood",
  "2 hosted open houses",
  "Paid social ad boost",
  "Weekly marketing activity report",
  "Priority response & white-glove service",
  "Easy-exit listing agreement",
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function IncludedItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function ExcludedItem({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      <Minus className={`h-4 w-4 flex-shrink-0 mt-0.5 ${light ? "text-white/25" : "text-muted-foreground/40"}`} />
      <span className={light ? "text-white/30" : "text-muted-foreground/50"}>{text}</span>
    </li>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${light ? "text-accent/80" : "text-accent"}`}>
      {children}
    </p>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 flex items-center"
        style={{
          background: "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 50%, #1B3A4B 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              The Childs Clear Commission Program
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-4">
            Listing Service Packages
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Choose the level of marketing and service that&apos;s right for your home.
            More service. Less commission.
          </p>
          <div className="inline-flex items-center gap-2.5 bg-accent border-2 border-accent rounded-full px-6 py-2.5 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <p className="text-sm font-bold text-primary tracking-wide">
              Transparent, flat-rate listing fees — no surprises at closing
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Package Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

            {/* ── Foundation ── */}
            <div className="bg-background rounded-2xl border border-border/60 p-8 flex flex-col shadow-sm">
              <div className="mb-6 pb-6 border-b border-border/50">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
                  Listing Fee
                </p>
                <h2 className="font-heading text-3xl text-foreground mb-3">Foundation</h2>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-accent font-semibold">1%</span>
                  <span className="text-muted-foreground text-sm">listing fee</span>
                </div>
                <p className="text-xs text-muted-foreground italic mt-1">Minimum fee: $5,000</p>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <SectionLabel>Listing &amp; Exposure</SectionLabel>
                  <ul className="space-y-2.5">
                    {FOUNDATION_EXPOSURE.map((f) => <IncludedItem key={f} text={f} />)}
                  </ul>
                </div>

                <div>
                  <SectionLabel>Transaction Support</SectionLabel>
                  <ul className="space-y-2.5">
                    {FOUNDATION_TRANSACTION.map((f) => <IncludedItem key={f} text={f} />)}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3">
                    Not Included
                  </p>
                  <ul className="space-y-2.5">
                    {FOUNDATION_NOT_INCLUDED.map((f) => <ExcludedItem key={f} text={f} />)}
                  </ul>
                </div>
              </div>

              <Button asChild variant="outline" className="mt-8 w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* ── Distinction ── */}
            <div className="bg-primary rounded-2xl border-2 border-primary p-8 flex flex-col relative shadow-xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge variant="accent" className="text-xs font-semibold px-4 py-1 rounded-full shadow">
                  Most Popular
                </Badge>
              </div>

              <div className="mb-6 pb-6 border-b border-white/15">
                <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-1">
                  Listing Fee
                </p>
                <h2 className="font-heading text-3xl text-white mb-3">Distinction</h2>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-accent font-semibold">1.99%</span>
                  <span className="text-white/60 text-sm">listing fee</span>
                </div>
              </div>

              <div className="flex-1 space-y-2.5">
                <SectionLabel light>Everything in Foundation, plus:</SectionLabel>
                <ul className="space-y-2.5">
                  {DISTINCTION_EXTRAS.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 mt-5 border-t border-white/15">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
                    Not Included
                  </p>
                  <ul className="space-y-2.5">
                    {DISTINCTION_NOT_INCLUDED.map((f) => <ExcludedItem key={f} text={f} light />)}
                  </ul>
                </div>
              </div>

              <Button asChild variant="accent" className="mt-8 w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* ── Prestige ── */}
            <div className="bg-background rounded-2xl border-2 border-accent/50 p-8 flex flex-col relative shadow-lg">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="text-xs font-semibold px-4 py-1 rounded-full shadow bg-accent/20 text-accent border border-accent/40">
                  White-Glove Service
                </Badge>
              </div>

              <div className="mb-6 pb-6 border-b border-border/50">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">
                  Listing Fee
                </p>
                <h2 className="font-heading text-3xl text-foreground mb-3">Prestige</h2>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-accent font-semibold">2.49%</span>
                  <span className="text-muted-foreground text-sm">listing fee</span>
                </div>
              </div>

              <div className="flex-1 space-y-2.5">
                <SectionLabel>Everything in Distinction, plus:</SectionLabel>
                <ul className="space-y-2.5">
                  {PRESTIGE_EXTRAS.map((f) => <IncludedItem key={f} text={f} />)}
                </ul>
              </div>

              <Button asChild variant="accent" className="mt-8 w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mt-10 max-w-3xl mx-auto border border-border/60 rounded-xl px-6 py-5 bg-muted/40 space-y-2">
            {[
              "Buyer's agent commission is negotiated separately and is not included in the listing fee above.",
              "Foundation package minimum fee: $5,000 regardless of sale price.",
              "Commission rates are negotiable and not set by law.",
              "All fees subject to listing agreement terms.",
            ].map((d) => (
              <p key={d} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-0.5 flex-shrink-0">◆</span>
                {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2D1B4E 0%, #3d2866 40%, #C9A96E 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to List Your Home?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Not sure which package is right for you? We&apos;ll walk you through it —
            no pressure, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 group">
              <Link href="/sell">
                Get Free Home Valuation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8">
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-white/50 text-sm">
            Or call{" "}
            <a href={`tel:${OFFICE.phone}`} className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">
              {OFFICE.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
