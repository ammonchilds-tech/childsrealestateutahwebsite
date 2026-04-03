import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Phone,
  CreditCard,
  Search,
  FileText,
  ClipboardCheck,
  BadgeCheck,
  KeyRound,
  Map,
  Handshake,
  TrendingDown,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BuyerFAQ } from "@/components/buyers/BuyerFAQ";
import { OFFICE, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buy a Home in Utah",
  description:
    "Work with Utah's most trusted real estate team to find and buy your perfect home. Expert guidance through every step of the buying process.",
  openGraph: {
    title: `Buy a Home in Utah | ${SITE_NAME}`,
    description: "Work with Utah's most trusted real estate team to find and buy your perfect home. Expert guidance through every step of the buying process.",
    url: "/buyers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Buy a Home in Utah | ${SITE_NAME}`,
    description: "Work with Utah's most trusted real estate team to find and buy your perfect home. Expert guidance through every step of the buying process.",
  },
};

const BUYING_STEPS = [
  {
    step: 1,
    title: "Get Pre-Approved",
    description:
      "Connect with a trusted lender to determine your budget and strengthen your offer before you start shopping.",
    icon: CreditCard,
  },
  {
    step: 2,
    title: "Start Your Search",
    description:
      "Tell us what you're looking for and we'll identify the best options — including off-market properties.",
    icon: Search,
  },
  {
    step: 3,
    title: "Make an Offer",
    description:
      "We craft a strategic offer designed to win, with terms that protect your interests.",
    icon: FileText,
  },
  {
    step: 4,
    title: "Home Inspection",
    description:
      "We coordinate a thorough inspection and negotiate repairs or credits on your behalf.",
    icon: ClipboardCheck,
  },
  {
    step: 5,
    title: "Appraisal & Loan",
    description:
      "Your lender orders an appraisal. We guide you through final loan approval with no surprises.",
    icon: BadgeCheck,
  },
  {
    step: 6,
    title: "Close & Get Keys",
    description:
      "Sign the paperwork, complete the transfer, and walk out with the keys to your new home.",
    icon: KeyRound,
  },
];

const BUYER_BENEFITS = [
  {
    icon: Map,
    title: "Deep Local Knowledge",
    description:
      "We know Utah County neighborhoods inside and out — schools, commutes, market trends, and hidden gems.",
  },
  {
    icon: TrendingDown,
    title: "Off-Market Access",
    description:
      "Our network gives you access to properties before they hit the market, so you face less competition.",
  },
  {
    icon: Handshake,
    title: "Expert Negotiation",
    description:
      "We negotiate hard on price, terms, repairs, and closing costs — always fully in your corner.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge Support",
    description:
      "From lender referrals to vendor connections, we support you well beyond the closing table.",
  },
];

const LENDERS = [
  {
    name: "Ryan Harding",
    company: "Work Harding Home Mortgage",
    phone: "801.380.4226",
    email: "ryan@workharding.com",
  },
  {
    name: "Travis Lemmon",
    company: "Creekside Mortgage",
    phone: "801.310.9741",
    email: "travislemmon@gmail.com",
  },
  {
    name: "Lanny Baxter",
    company: "Lanny Baxter – Lender",
    phone: "801.472.8488",
    email: "lannybaxter@gmail.com",
  },
];

export default function BuyersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
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
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Buyers
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            Find Your Dream Home
            <span className="block text-accent mt-2">in Utah</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Utah County&apos;s most trusted team. Local expertise, off-market
            access, and concierge service from search to keys.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="accent"
              size="lg"
              className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base group"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/about">Meet the Team</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 text-white/60">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading text-white font-semibold">
                500+
              </p>
              <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
                Properties Sold
              </p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading text-white font-semibold">
                26+
              </p>
              <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
                Years Experience
              </p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-heading text-white font-semibold">
                200+
              </p>
              <p className="text-xs md:text-sm uppercase tracking-wider mt-1">
                Happy Clients
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Buying Process */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Your Path to Homeownership
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              A clear, guided process from first conversation to keys — no
              surprises, no pressure.
            </p>
          </div>

          {/* Desktop step row */}
          <div className="relative hidden lg:block">
            <div className="absolute top-7 left-[calc(8.33%+28px)] right-[calc(8.33%+28px)] h-px bg-border" />
            <div className="grid grid-cols-6 gap-4">
              {BUYING_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-sm mb-4">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xs text-accent/70 font-medium tracking-wider uppercase mb-1">
                    Step {step.step}
                  </span>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/tablet card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {BUYING_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 p-5 rounded-xl border border-border bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-accent/70 font-medium tracking-wider uppercase mb-0.5">
                    Step {step.step}
                  </p>
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy With Us */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              The Childs Buyer Advantage
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUYER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-8 rounded-xl border border-border/50 bg-white hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preferred Lenders */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Trusted Partners
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Preferred Lenders
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              We&apos;ve partnered with trusted local lenders who offer
              competitive rates and exceptional service. Mention Childs Real
              Estate sent you.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {LENDERS.map((lender) => (
              <div
                key={lender.name}
                className="rounded-xl border border-border bg-white p-8 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-1">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{lender.name}</h3>
                  <p className="text-sm text-accent font-medium">
                    {lender.company}
                  </p>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{lender.phone}</p>
                  <p>{lender.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Calculator CTA */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Calculator className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground font-semibold">
                Estimate Your Monthly Payment
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Use our free mortgage calculator to plan your budget before you
                start your search.
              </p>
            </div>
          </div>
          <Button
            asChild
            variant="accent"
            size="lg"
            className="flex-shrink-0 group"
          >
            <Link href="/mortgage-calculator">
              Open Calculator
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <BuyerFAQ />

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #2D1B4E 0%, #3d2866 40%, #C9A96E 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-white/30" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <div className="h-px w-12 bg-white/30" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Ready to Find
            <span className="block mt-1 text-accent">Your Home?</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let&apos;s start with a no-pressure conversation about what
            you&apos;re looking for. We&apos;ll handle the rest.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-lg group"
            >
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 rounded-lg"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-white/50 text-sm">
            Or call us directly at{" "}
            <a
              href={`tel:${OFFICE.phone}`}
              className="text-white/70 hover:text-white underline underline-offset-4 transition-colors"
            >
              {OFFICE.phone}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
