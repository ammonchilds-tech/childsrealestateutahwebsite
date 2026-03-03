import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Users,
  Search,
  FileText,
  ShieldCheck,
  Key,
  Home,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Zap,
  FileCheck,
  Wrench,
  Heart,
  FolderOpen,
  BarChart3,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Buying Guide | Complete Utah Home Buying Process",
  description: `A comprehensive walkthrough of the home buying process in Utah — from pre-approval to closing day. Everything first-time and experienced buyers need to know. ${SITE_NAME}`,
};

const TOC_ITEMS = [
  { step: 1, title: "Assess Your Readiness", description: "Know where you stand financially and personally" },
  { step: 2, title: "Financial Preparation", description: "Credit, down payment, and mortgage options" },
  { step: 3, title: "Assemble Your Team", description: "The professionals who guide your purchase" },
  { step: 4, title: "Finding Your Home", description: "Searching smart and narrowing your options" },
  { step: 5, title: "Making an Offer", description: "Strategy, negotiation, and Utah contracts" },
  { step: 6, title: "Due Diligence", description: "Inspections, appraisals, and protecting yourself" },
  { step: 7, title: "Closing Day", description: "What to expect and bring to the table" },
  { step: 8, title: "After You Move In", description: "Essential tasks for your first weeks at home" },
];

const READINESS_STATS = [
  { value: "70%", label: "Utah Homeownership Rate", icon: Home },
  { value: "$540K", label: "Median Home Price (Utah County)", icon: DollarSign },
  { value: "45", label: "Avg. Days to Close", icon: Clock },
  { value: "6 mo.", label: "Recommended Savings Cushion", icon: ShieldCheck },
];

const TEAM_MEMBERS = [
  {
    title: "Real Estate Agent",
    description: "Your advocate and negotiator. An experienced local agent knows the Utah market, writes competitive offers, and protects your interests from first showing to closing.",
    icon: Users,
  },
  {
    title: "Mortgage Lender",
    description: "Get pre-approved early. A good lender explains your options — conventional, FHA, VA, USDA — and locks in the best rate for your situation.",
    icon: DollarSign,
  },
  {
    title: "Home Inspector",
    description: "Your eyes on the property's true condition. They check structure, roof, plumbing, electrical, HVAC, and flag issues that could cost thousands later.",
    icon: Search,
  },
  {
    title: "Title & Escrow",
    description: "They ensure the property has a clean title, handle the transfer of funds, and manage the closing paperwork so everything is legally sound.",
    icon: FileText,
  },
];

const OFFER_STEPS = [
  {
    step: 1,
    title: "Determine Your Price",
    description: "Analyze comparable sales (comps) with your agent. Consider days on market, seller motivation, and whether you're in a competitive situation. In Utah's market, data-driven pricing wins.",
    icon: BarChart3,
  },
  {
    step: 2,
    title: "Write the Offer",
    description: "Utah uses the REPC (Real Estate Purchase Contract). Your agent drafts the offer including price, earnest money (typically $1K–$3K in Utah), contingencies, and your preferred closing date.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Negotiate Terms",
    description: "The seller may counter on price, closing date, or inclusions. Your agent handles back-and-forth negotiations, keeping your priorities front and center while finding common ground.",
    icon: Users,
  },
  {
    step: 4,
    title: "Offer Accepted",
    description: "Once both parties sign, you're under contract! The earnest money is deposited, and the clock starts on your due diligence period — typically 14 days in Utah.",
    icon: CheckCircle2,
  },
];

const DD_CHECKLIST = [
  { item: "Due Diligence Period", detail: "You have 14 days (standard in Utah) to conduct all inspections and back out if needed." },
  { item: "Home Inspection", detail: "A licensed inspector examines the home's structure, systems, and safety. Budget $400–$600." },
  { item: "Radon Testing", detail: "Utah has elevated radon levels in many areas. Testing costs $150–$200 and is highly recommended." },
  { item: "Appraisal", detail: "Your lender orders an appraisal to confirm the home's value supports the loan amount." },
  { item: "Title Search", detail: "The title company researches property records to ensure no liens, disputes, or ownership issues." },
];

const CLOSING_CHECKLIST = [
  "Final walkthrough of the property (same day or day before)",
  "Review the Closing Disclosure (received 3 days before closing)",
  "Bring government-issued photo ID",
  "Bring a cashier's check or wire transfer for closing costs",
  "Sign all closing documents (plan for 1–2 hours)",
  "Receive your keys — congratulations, you're a homeowner!",
];

const AFTER_MOVE_ITEMS = [
  { title: "Change Locks", description: "Re-key or replace all exterior locks for security.", icon: Lock },
  { title: "Set Up Utilities", description: "Transfer electric, gas, water, internet, and trash services.", icon: Zap },
  { title: "Homestead Exemption", description: "File with Utah County to reduce your property tax burden.", icon: FileCheck },
  { title: "Maintenance Schedule", description: "Create a seasonal checklist for HVAC, gutters, and landscaping.", icon: Wrench },
  { title: "Meet Your Neighbors", description: "Building community relationships makes a house feel like home.", icon: Heart },
  { title: "Organize Records", description: "Store closing docs, warranties, and home improvement receipts safely.", icon: FolderOpen },
];

const UTAH_STATS = [
  { value: "3.2%", label: "Population Growth (2020–2024)" },
  { value: "#1", label: "Best State Economy (Forbes)" },
  { value: "92%", label: "Homeowner Satisfaction Rate" },
  { value: "5.4%", label: "Avg. Annual Appreciation" },
];

export default function HomeBuyingGuidePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources" className="hover:text-accent transition-colors">
              Resources
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary font-medium">Home Buying Guide</span>
          </nav>
        </div>
      </div>

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
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Buyers
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Your Complete Home Buying Guide
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Everything you need to buy a home in Utah with confidence — from
            assessing your readiness to getting the keys on closing day.
          </p>
          <Badge className="bg-white/10 text-white/80 border border-white/20 text-sm px-4 py-1">
            12 min read
          </Badge>
        </div>
      </section>

      {/* Journey Timeline TOC */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-primary mb-3">
              Your Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Eight steps from financial prep to closing day. Click any step to jump ahead.
            </p>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block relative mb-4">
            <div className="absolute top-5 left-[6%] right-[6%] h-px bg-border" />
            <div className="grid grid-cols-8 gap-1">
              {TOC_ITEMS.map((item) => (
                <a
                  key={item.step}
                  href={`#step-${item.step}`}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-10 h-10 rounded-full border-2 border-border bg-background group-hover:border-accent group-hover:bg-accent transition-all duration-200 flex items-center justify-center mb-3 shadow-sm">
                    <span className="font-heading text-sm font-semibold text-muted-foreground group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-primary group-hover:text-accent transition-colors leading-tight px-1">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile 2-column list */}
          <div className="lg:hidden grid grid-cols-2 gap-3">
            {TOC_ITEMS.map((item) => (
              <a
                key={item.step}
                href={`#step-${item.step}`}
                className="flex items-center gap-3 group p-3 rounded-lg hover:bg-accent/5 transition-colors"
              >
                <div className="w-9 h-9 rounded-full border-2 border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent transition-all">
                  <span className="text-xs font-semibold text-muted-foreground group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1 — Assess Your Readiness */}
      <section id="step-1" className="py-20 md:py-28 bg-gradient-to-br from-accent/[0.06] via-background to-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-8">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              01
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 1
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Assess Your <span className="text-accent">Readiness</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-lg italic text-muted-foreground leading-relaxed mb-5 border-l-2 border-accent/30 pl-4">
                Before you start browsing listings, take an honest look at where you stand financially and personally.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Buying a home is one of the biggest financial decisions
                you&apos;ll make, and preparation is the difference between a smooth
                process and a stressful one.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ask yourself: Is your income stable? Do you have savings beyond
                the down payment for emergencies? Are you planning to stay in the
                area for at least 3–5 years? Is your debt manageable?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Utah&apos;s housing market moves fast, especially along the Wasatch
                Front. Being financially and emotionally prepared means you can act
                with confidence when the right home comes along.
              </p>

              {/* Pull-quote */}
              <div className="relative py-6 text-center border-t border-b border-accent/20 my-2">
                <div className="font-heading text-7xl text-accent/15 leading-none select-none -mb-5" aria-hidden="true">&ldquo;</div>
                <p className="relative text-base md:text-lg italic text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Get pre-approved before you start house hunting. It tells you
                  exactly what you can afford — and shows sellers you mean business.
                </p>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mt-5">
                  — Childs Real Estate
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {READINESS_STATS.map((stat) => (
                <Card key={stat.label} className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="font-heading text-2xl font-semibold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 — Financial Preparation */}
      <section id="step-2" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-8">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              02
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 2
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Financial <span className="text-accent">Preparation</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Credit Scores by Loan Type
              </h3>
              <div className="space-y-3 mb-8">
                {[
                  { type: "Conventional", score: "620+" },
                  { type: "FHA", score: "580+ (3.5% down)" },
                  { type: "VA", score: "No minimum (varies by lender)" },
                  { type: "USDA", score: "640+ (rural Utah areas)" },
                ].map((loan) => (
                  <div key={loan.type} className="flex items-center justify-between border-b border-border/50 pb-3">
                    <span className="text-sm font-medium text-primary">{loan.type}</span>
                    <span className="text-sm text-muted-foreground">{loan.score}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Down Payment Ranges
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conventional loans typically require 5–20% down. FHA loans start at
                3.5%. VA and USDA loans may offer 0% down for eligible buyers. A larger
                down payment lowers your monthly payment and eliminates PMI.
              </p>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Utah Housing Programs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The Utah Housing Corporation (UHC) offers the FirstHome Loan with down
                payment assistance for first-time buyers. USDA loans are available in many
                rural Utah counties. Your lender can help you determine which programs
                you qualify for.
              </p>
            </div>

            <div>
              <Card className="border-accent/30 border-t-4 border-t-accent">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                    Monthly Cost Breakdown
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Estimated for a $500K home in Utah County
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "Principal & Interest", amount: "$2,650", note: "30-yr fixed at 6.5%" },
                      { label: "Property Tax", amount: "$275", note: "~0.66% rate in Utah County" },
                      { label: "Homeowner's Insurance", amount: "$120", note: "Standard coverage" },
                      { label: "PMI (if < 20% down)", amount: "$150", note: "Removed at 20% equity" },
                      { label: "HOA (if applicable)", amount: "$50–$300", note: "Varies by community" },
                    ].map((cost) => (
                      <div key={cost.label} className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-medium text-primary">{cost.label}</div>
                          <div className="text-xs text-muted-foreground">{cost.note}</div>
                        </div>
                        <div className="text-sm font-semibold text-accent whitespace-nowrap">
                          {cost.amount}
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-border pt-4 flex items-center justify-between">
                      <span className="font-heading text-base font-semibold text-primary">
                        Est. Total Monthly
                      </span>
                      <span className="font-heading text-xl font-semibold text-accent">
                        $3,245–$3,495
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 — Assemble Your Team */}
      <section id="step-3" className="py-20 md:py-28 bg-gradient-to-br from-accent/[0.06] via-background to-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-6">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              03
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 3
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Assemble Your <span className="text-accent">Team</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Buying a home is a team effort. Surround yourself with experienced
            professionals who know the Utah market and will protect your interests.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {TEAM_MEMBERS.map((member) => (
              <Card
                key={member.title}
                className="text-center border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <member.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {member.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Callout */}
          <div className="bg-white rounded-xl border border-accent/20 p-8 text-center">
            <h3 className="font-heading text-xl font-semibold text-primary mb-2">
              Need an Experienced Utah Agent?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-lg mx-auto">
              We&apos;d love to guide you through every step of the buying process.
              Reach out for a no-pressure consultation.
            </p>
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Step 4 — Finding Your Home */}
      <section id="step-4" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-8">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              04
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 4
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Finding Your <span className="text-accent">Home</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-lg italic text-muted-foreground leading-relaxed mb-6 border-l-2 border-accent/30 pl-4">
                The search is one of the most exciting parts. But having the right strategy will save you time, heartache, and money.
              </p>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Define Your Must-Haves
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Separate your must-haves from nice-to-haves. Consider bedrooms, bathrooms,
                garage space, yard size, school districts, and commute times. In Utah,
                proximity to outdoor recreation, ski resorts, and family is often a priority.
              </p>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Utah Neighborhoods to Explore
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From the family-friendly suburbs of Lehi and Highland to the urban energy of
                downtown Salt Lake City, Utah offers diverse neighborhoods. Consider emerging
                areas like Saratoga Springs and Eagle Mountain for more home per dollar.
              </p>

              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Online + Agent Search
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Start online to get a feel for pricing and inventory, then partner with your
                agent for access to coming-soon listings, off-market opportunities, and
                professional insights that algorithms can&apos;t provide.
              </p>
            </div>

            <div>
              <div
                className="rounded-xl p-10 flex flex-col items-center justify-center text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-xl text-white font-semibold mb-2">
                  Ready to Browse?
                </h3>
                <p className="text-white/70 text-sm mb-6 max-w-xs">
                  Explore current listings in Utah County and the Wasatch Front.
                </p>
                <Button asChild variant="accent" size="lg">
                  <Link href="/properties">Browse Listings</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5 — Making an Offer */}
      <section id="step-5" className="py-20 md:py-28 bg-gradient-to-br from-accent/[0.06] via-background to-background scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden mb-6">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              05
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 5
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Making an <span className="text-accent">Offer</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Found the one? Here&apos;s how the offer process works in Utah, from
            pricing strategy to getting your offer accepted.
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {OFFER_STEPS.map((step) => (
                <div key={step.step} className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-sm">
                      <span className="font-heading text-lg md:text-xl font-semibold text-accent">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-1 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="h-5 w-5 text-accent flex-shrink-0" />
                        <h3 className="font-heading text-lg font-semibold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 6 — Due Diligence & Inspections */}
      <section id="step-6" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-8">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              06
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 6
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Due Diligence & <span className="text-accent">Inspections</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Once your offer is accepted, the due diligence period is your chance
                to thoroughly evaluate the property. In Utah, this is typically 14 days
                and is one of the most important phases of the buying process.
              </p>

              <div className="space-y-5">
                {DD_CHECKLIST.map((item) => (
                  <div key={item.item} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-primary">{item.item}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Warning box */}
              <div className="border-l-4 border-red-400 bg-red-50 rounded-r-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span className="font-heading text-sm font-semibold text-red-800">
                    Important Warning
                  </span>
                </div>
                <p className="text-sm text-red-700 leading-relaxed">
                  Never skip the home inspection to save money or speed up the process.
                  A $500 inspection can reveal issues that cost tens of thousands to repair.
                  In Utah, foundation concerns, aging roofs, and radon are common findings
                  that buyers need to know about before closing.
                </p>
              </div>

              {/* Pull-quote */}
              <div className="relative py-6 text-center border-t border-b border-accent/20">
                <div className="font-heading text-7xl text-accent/15 leading-none select-none -mb-5" aria-hidden="true">&ldquo;</div>
                <p className="relative text-base italic text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  Attend the inspection in person. Walk the home with the inspector and
                  learn how your future home&apos;s systems work — it&apos;s invaluable knowledge.
                </p>
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mt-5">
                  — Childs Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 7 — Closing Day */}
      <section id="step-7" className="py-20 md:py-28 bg-gradient-to-br from-accent/[0.06] via-background to-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-8">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              07
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 7
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              Closing <span className="text-accent">Day</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-lg italic text-muted-foreground leading-relaxed mb-6 border-l-2 border-accent/30 pl-4">
                This is the day everything becomes official. Here&apos;s what to expect so nothing catches you off guard.
              </p>
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                What to Expect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Closing day is when ownership officially transfers to you. In Utah,
                closing typically takes place at the title company&apos;s office and
                lasts 1–2 hours. Your agent and the title officer will guide you through
                every document.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You&apos;ll review and sign the deed of trust, promissory note, and
                closing disclosure. The title company handles recording the deed with
                the county, and once everything is signed and funded, you get your keys.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most Utah closings are &quot;dry closings,&quot; meaning funding happens
                the same day or next business day. Your agent will confirm when keys
                can be released.
              </p>
            </div>

            <div>
              <Card className="border-t-4 border-t-accent border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <ClipboardCheck className="h-6 w-6 text-accent" />
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      Closing Day Checklist
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {CLOSING_CHECKLIST.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step 8 — After You Move In */}
      <section id="step-8" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden mb-6">
            <span className="absolute -top-4 right-0 font-heading text-[130px] leading-none text-primary/[0.04] select-none pointer-events-none hidden md:block">
              08
            </span>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Step 8
            </span>
            <h2 className="relative font-heading text-3xl md:text-4xl text-primary">
              After You <span className="text-accent">Move In</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Congratulations! You&apos;re a homeowner. Here are the essential tasks
            to tackle in your first few weeks.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AFTER_MOVE_ITEMS.map((item) => (
              <Card
                key={item.title}
                className="border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Utah Market Insight */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/60" />
              <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                Market Insight
              </span>
              <div className="h-px w-12 bg-accent/60" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">
              Why Buy in <span className="text-accent">Utah</span>?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Utah consistently ranks as one of the best states for homeownership,
              economic growth, and quality of life.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {UTAH_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-semibold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Start Your <span className="text-accent">Home Search</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re a first-time buyer or making your next move,
            we&apos;re here to help you find the perfect home in Utah.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
