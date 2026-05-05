import Link from "next/link";
import { Check, Minus, Phone, Mail, CalendarDays, TrendingDown, DollarSign, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { OFFICE, SITE_URL } from "@/lib/constants";
import { ValuationForm } from "./_components/ValuationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Home Valuation | Clear Commission Program — Childs Real Estate",
  description:
    "Find out what your Utah home is worth — free, no obligation. The Childs Clear Commission Program offers transparent flat-rate listing fees starting at just 1%. Serving Utah County and the Salt Lake Valley.",
  alternates: { canonical: `${SITE_URL}/clear-commission` },
  robots: { index: true, follow: true },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOUNDATION_INCLUDED = [
  "MLS + full web syndication",
  "Zillow, Realtor.com & Homes.com",
  "Professional photography (25 photos)",
  "Yard sign + electronic lockbox",
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

const WHY_NOW = [
  {
    icon: TrendingDown,
    title: "Keep More of Your Equity",
    body: "Traditional 3% listing fees cost you thousands. Our variable program starts at just 1% — you choose the level of service that fits your situation.",
  },
  {
    icon: DollarSign,
    title: "Know Your Numbers Before You List",
    body: "A free professional valuation shows you exactly what your home is worth in today's market so you can plan your next move with confidence.",
  },
  {
    icon: Shield,
    title: "Easy-Exit — Zero Risk",
    body: "Every package includes our easy-exit listing agreement. If you're not satisfied, you're not locked in. No fine print, no pressure.",
  },
];

const TESTIMONIALS = [
  {
    name: "Becky Childs",
    text: "Ammon and Tasha have been so professional throughout the entire selling process. Quick and timely responses. They never were bugged at my questions and always made me feel like my home was their priority.",
  },
  {
    name: "Doug Smith",
    text: "Ammon's professionalism and extensive knowledge of the real estate market made the entire process smooth and stress-free. He always had answers to my questions and provided clear guidance at every step.",
  },
  {
    name: "Dantzel Piercy",
    text: "We have purchased two homes and sold one with Ammon. He is an experienced professional who always helps us make the best decisions for our family.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClearCommissionPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
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

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5">
            Find Out What Your<br className="hidden sm:block" /> Home Is Worth
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Get a free, professional home valuation — no obligation, no pressure.
            Then choose the listing package that keeps more money in your pocket.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 bg-accent border-2 border-accent rounded-full px-6 py-2.5 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <p className="text-sm font-bold text-primary tracking-wide">
                Variable listing fees — starting at just 1%
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-white/60 text-sm">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span>5.0 · 19 Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Packages ── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              Variable Listing Program
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">
              Choose Your Level of Service
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every package includes full MLS exposure, professional photography, and
              expert negotiation — you decide how much marketing power you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

            {/* Foundation */}
            <div className="bg-background rounded-2xl border border-border/60 p-8 flex flex-col shadow-sm">
              <div className="mb-6 pb-6 border-b border-border/50">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">Listing Fee</p>
                <h3 className="font-heading text-3xl text-foreground mb-3">Foundation</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-accent font-semibold">1%</span>
                  <span className="text-muted-foreground text-sm">listing fee</span>
                </div>
                <p className="text-xs text-muted-foreground italic mt-1">Minimum fee: $5,000</p>
              </div>
              <div className="flex-1 space-y-2.5">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">What&apos;s Included</p>
                <ul className="space-y-2.5">
                  {FOUNDATION_INCLUDED.map((f) => <IncludedItem key={f} text={f} />)}
                </ul>
                <div className="pt-4 border-t border-border/40">
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3">Not Included</p>
                  <ul className="space-y-2.5">
                    {FOUNDATION_NOT_INCLUDED.map((f) => <ExcludedItem key={f} text={f} />)}
                  </ul>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-8 w-full">
                <a href="#valuation">Get Started</a>
              </Button>
            </div>

            {/* Distinction */}
            <div className="bg-primary rounded-2xl border-2 border-primary p-8 flex flex-col relative shadow-xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge variant="accent" className="text-xs font-semibold px-4 py-1 rounded-full shadow">
                  Most Popular
                </Badge>
              </div>
              <div className="mb-6 pb-6 border-b border-white/15">
                <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-1">Listing Fee</p>
                <h3 className="font-heading text-3xl text-white mb-3">Distinction</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-accent font-semibold">1.99%</span>
                  <span className="text-white/60 text-sm">listing fee</span>
                </div>
              </div>
              <div className="flex-1 space-y-2.5">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent/80 mb-3">Everything in Foundation, plus:</p>
                <ul className="space-y-2.5">
                  {DISTINCTION_EXTRAS.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-5 mt-5 border-t border-white/15">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">Not Included</p>
                  <ul className="space-y-2.5">
                    {DISTINCTION_NOT_INCLUDED.map((f) => <ExcludedItem key={f} text={f} light />)}
                  </ul>
                </div>
              </div>
              <Button asChild variant="accent" className="mt-8 w-full">
                <a href="#valuation">Get Started</a>
              </Button>
            </div>

            {/* Prestige */}
            <div className="bg-background rounded-2xl border-2 border-accent/50 p-8 flex flex-col relative shadow-lg">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="text-xs font-semibold px-4 py-1 rounded-full shadow bg-accent/20 text-accent border border-accent/40">
                  White-Glove Service
                </Badge>
              </div>
              <div className="mb-6 pb-6 border-b border-border/50">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1">Listing Fee</p>
                <h3 className="font-heading text-3xl text-foreground mb-3">Prestige</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-5xl text-accent font-semibold">2.49%</span>
                  <span className="text-muted-foreground text-sm">listing fee</span>
                </div>
              </div>
              <div className="flex-1 space-y-2.5">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">Everything in Distinction, plus:</p>
                <ul className="space-y-2.5">
                  {PRESTIGE_EXTRAS.map((f) => <IncludedItem key={f} text={f} />)}
                </ul>
              </div>
              <Button asChild variant="accent" className="mt-8 w-full">
                <a href="#valuation">Get Started</a>
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

      {/* ── Valuation Form + Contact ── */}
      <section id="valuation" className="py-16 md:py-24 bg-muted/30 border-y border-border/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                  Free · No Obligation
                </p>
                <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">
                  Request Your Free Home Valuation
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and we&apos;ll prepare a personalized market analysis
                  of your home and reach out within one business day.
                </p>
              </div>
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <ValuationForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                  Prefer to Talk Now?
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${OFFICE.phone}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/60 hover:border-accent/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call or Text</p>
                      <p className="text-sm font-semibold text-primary">{OFFICE.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${OFFICE.email}`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-border/60 hover:border-accent/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email Us</p>
                      <p className="text-sm font-semibold text-primary">{OFFICE.email}</p>
                    </div>
                  </a>

                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <CalendarDays className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">Schedule a Meeting</p>
                          <p className="text-xs text-muted-foreground">Pick a time that works for you</p>
                        </div>
                      </div>
                      <a
                        href="https://calendar.app.google/pLYzk4KoBHBjjhgG8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-accent text-accent-foreground text-sm font-semibold py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
                      >
                        Book a Time Slot →
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Trust badges */}
              <div className="rounded-xl border border-border/60 p-5 bg-muted/30 space-y-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  Why Homeowners Choose Us
                </p>
                {[
                  "15+ years of Utah real estate experience",
                  "Hundreds of homes sold across Utah County",
                  "Backed by Berkshire Hathaway HomeServices",
                  "Easy-exit listing — no lock-in contracts",
                  "Transparent fees, no surprises at closing",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Now ── */}
      <section className="py-16 md:py-20 bg-background border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
              The Smart Way to Sell
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-primary">
              More Service. Less Commission.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {WHY_NOW.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-muted/30 rounded-2xl border border-border/60 p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-20 bg-muted/30 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-primary">
              What Our Sellers Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, text }) => (
              <div key={name} className="bg-background rounded-2xl border border-border/60 p-6 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                <p className="text-sm font-semibold text-primary">{name}</p>
                <p className="text-xs text-muted-foreground">Google Review</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="relative py-16 md:py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2D1B4E 0%, #3d2866 40%, #C9A96E 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to See What Your Home Is Worth?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            It&apos;s free, fast, and comes with zero obligation. Let&apos;s start with honest numbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8">
              <a href="#valuation">Get My Free Valuation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8">
              <Link href="/packages">View All Packages</Link>
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
