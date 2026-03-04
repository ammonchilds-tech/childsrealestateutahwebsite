import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  DollarSign,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Calculator,
  Home,
  Users,
  BarChart3,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Investment Properties 101 | ${SITE_NAME}`,
  description:
    "A plain-English guide to buying investment properties in Utah — how to analyze deals, calculate returns, choose the right property type, and build long-term wealth.",
};

const STEPS = [
  {
    number: "01",
    title: "Understand Why Real Estate Is a Great Investment",
    body: "Real estate builds wealth in four ways at once — and that's what makes it so powerful compared to other investments. First, your tenant's rent pays down your mortgage (called principal paydown). Second, the property likely goes up in value over time (appreciation). Third, you collect monthly cash flow if rent exceeds your expenses. Fourth, you get tax advantages like depreciation deductions. Utah has one of the strongest long-term real estate markets in the country, driven by job growth, population growth, and limited land.",
    tip: "You don't need to be rich to start. Many investors buy their first property with 20–25% down and use rental income to cover the mortgage.",
  },
  {
    number: "02",
    title: "Choose Your Investment Strategy",
    body: "There are several ways to invest in real estate. Long-term rentals (buy and hold) are the most common — you rent to tenants on 12-month leases and collect steady monthly income. Short-term rentals (like Airbnb) can generate higher income but require more management. Fix-and-flip involves buying distressed homes, renovating them, and selling for profit. House hacking means living in one unit of a multi-unit property and renting out the others. Each strategy has different risk levels, time requirements, and profit potential.",
    tip: "Most first-time investors start with a long-term single-family rental — it's the simplest to manage and easiest to finance.",
  },
  {
    number: "03",
    title: "Learn the Key Numbers",
    body: "Before buying any investment property, you need to run the numbers. The most important metrics are: Gross Rent Multiplier (GRM) — purchase price divided by annual rent. A GRM under 12 is generally good. Cap Rate — annual net operating income divided by purchase price. A 5–8% cap rate is typical in Utah. Cash-on-Cash Return — annual cash flow divided by total cash invested. Aim for at least 6–8%. Monthly Cash Flow — rent minus mortgage, taxes, insurance, vacancy, repairs, and property management. This is what goes in your pocket.",
    tip: "A property that 'breaks even' on paper still builds wealth through principal paydown and appreciation. Positive cash flow is the goal, but even neutral cash flow can be a good long-term investment in a growing market.",
  },
  {
    number: "04",
    title: "Find the Right Market and Neighborhood",
    body: "Not all neighborhoods make equally good investments. Look for areas with low vacancy rates, strong job growth, good schools, and rising rents. In Utah County, cities like Lehi, Provo, and American Fork have strong rental demand driven by BYU, UVU, and the tech industry. In Salt Lake County, areas near the University of Utah, downtown Salt Lake, and the south valley tech corridor (Draper, Sandy) have consistently high demand. Avoid neighborhoods with high crime, declining population, or a large number of vacant properties.",
    tip: "Drive the neighborhood at different times of day. Talk to neighbors. Check vacancy rates on sites like Zillow or Rentometer to see what comparable units rent for.",
  },
  {
    number: "05",
    title: "Analyze the Property",
    body: "Once you find a property you like, do a deep financial analysis before making an offer. Start with the gross rent — what can you realistically charge per month? Then subtract vacancy (plan for 5–8% of annual rent), repairs and maintenance (budget 1% of home value per year), property management (8–10% of rent if you hire a manager), property taxes, and insurance. What's left after the mortgage payment is your monthly cash flow. Also look at the condition of the roof, HVAC, plumbing, and electrical — major repairs can wipe out years of profit.",
    tip: "Use the 1% Rule as a quick filter: if the monthly rent is at least 1% of the purchase price, the property may be worth analyzing further. (e.g., a $300K home should rent for at least $3,000/month.)",
  },
  {
    number: "06",
    title: "Get Financing in Place",
    body: "Investment property loans are different from primary residence loans. You'll typically need 20–25% down, and your interest rate will be 0.5–1% higher than a standard mortgage. You'll need a good credit score (ideally 720+) and sufficient cash reserves. Some investors use conventional financing, while others use DSCR loans (Debt Service Coverage Ratio loans), which qualify based on the rental income rather than your personal income — helpful if you're self-employed. Get pre-approved before making offers so you can move quickly.",
    tip: "Talk to a lender who specializes in investment properties. They'll know which loan products make the most sense for your situation.",
  },
  {
    number: "07",
    title: "Make an Offer and Do Your Due Diligence",
    body: "When you find a deal that pencils out, make an offer. Include an inspection contingency so you can back out if the property has major hidden issues. During the due diligence period (usually 10–14 days), hire a licensed inspector, review any existing leases if tenants are in place, verify the actual rent rolls, and get repair cost estimates for anything the inspector flags. If the numbers still work after all this, move forward. If not, negotiate a price reduction or walk away.",
    tip: "Never skip the inspection on an investment property. Issues like foundation problems, old electrical panels, or roof damage can turn a good deal into a money pit.",
  },
  {
    number: "08",
    title: "Close, Set Up, and Manage",
    body: "After closing, get the property rent-ready. If it needs work, complete repairs before your first tenant moves in. Screen tenants carefully — run credit checks, background checks, and verify income (aim for tenants earning 3x the monthly rent). Use a proper lease agreement that complies with Utah landlord-tenant law. Decide early whether you'll self-manage or hire a property management company (typically 8–10% of monthly rent). Set aside a cash reserve of 3–6 months of expenses for vacancies and unexpected repairs.",
    tip: "Utah is a landlord-friendly state with clear eviction laws and reasonable regulations. Familiarize yourself with the Utah Fit Premises Act and Utah Code Title 57 before your first tenant moves in.",
  },
  {
    number: "09",
    title: "Grow Your Portfolio",
    body: "Once your first property is stabilized and generating income, you can start thinking about your next one. Many investors use a BRRRR strategy: Buy a distressed property, Rehab it, Rent it out, Refinance to pull out equity, and Repeat. Others simply save cash flow and down payment funds for their next acquisition. Over time, as mortgages are paid down and values increase, you build substantial equity — which can be tapped via cash-out refinance or a 1031 exchange to buy larger properties tax-deferred.",
    tip: "Think long-term. Many of Utah's most successful real estate investors started with one small rental and grew over 10–20 years into a portfolio worth millions.",
  },
];

const PROPERTY_TYPES = [
  {
    type: "Single-Family Home",
    icon: Home,
    pros: ["Easiest to finance", "Easiest to manage", "Largest pool of potential tenants", "Easiest to sell"],
    cons: ["100% vacant when empty", "Lower income per dollar invested than multi-unit"],
    bestFor: "First-time investors",
  },
  {
    type: "Small Multi-Family (2–4 units)",
    icon: Building2,
    pros: ["Multiple income streams", "Still qualifies for residential financing", "House hacking opportunity", "Better cash flow per dollar"],
    cons: ["More complex management", "Higher purchase price", "Harder to find in some markets"],
    bestFor: "Investors wanting more cash flow",
  },
  {
    type: "Short-Term Rental (Airbnb)",
    icon: Users,
    pros: ["Potentially higher income", "Flexibility to use personally", "Furnished — less tenant wear"],
    cons: ["Higher management intensity", "Income can be inconsistent", "HOA and city restrictions", "More frequent turnover"],
    bestFor: "Hands-on investors in tourist or university markets",
  },
  {
    type: "Fix and Flip",
    icon: TrendingUp,
    pros: ["Large lump-sum profit potential", "Shorter timeline (3–6 months)", "No ongoing management"],
    cons: ["High risk if renovation costs exceed budget", "Requires construction knowledge", "All profit taxed as ordinary income", "Requires strong market timing"],
    bestFor: "Experienced investors with renovation knowledge",
  },
];

const KEY_FORMULAS = [
  {
    name: "Monthly Cash Flow",
    formula: "Gross Rent − Vacancy − Expenses − Mortgage Payment",
    example: "$2,400 rent − $120 vacancy − $400 expenses − $1,600 mortgage = $280/month",
  },
  {
    name: "Cap Rate",
    formula: "(Annual Net Operating Income ÷ Purchase Price) × 100",
    example: "($18,000 NOI ÷ $300,000 price) × 100 = 6% cap rate",
  },
  {
    name: "Cash-on-Cash Return",
    formula: "(Annual Cash Flow ÷ Total Cash Invested) × 100",
    example: "($3,360 annual flow ÷ $75,000 down payment) × 100 = 4.5%",
  },
  {
    name: "Gross Rent Multiplier",
    formula: "Purchase Price ÷ Annual Gross Rent",
    example: "$300,000 ÷ $28,800 annual rent = GRM of 10.4",
  },
  {
    name: "The 1% Rule",
    formula: "Monthly Rent ≥ 1% of Purchase Price",
    example: "$300,000 home → needs at least $3,000/month rent to pass the 1% rule",
  },
  {
    name: "50% Rule (Quick Estimate)",
    formula: "Assume ~50% of gross rent covers expenses (excluding mortgage)",
    example: "$2,400 rent × 50% = $1,200 for expenses → $1,200 left for mortgage and profit",
  },
];

const MISTAKES = [
  {
    mistake: "Underestimating expenses",
    detail: "New investors often forget to budget for vacancy, repairs, property management, and capital expenditures (roof, HVAC, water heater). A realistic expense ratio is 35–50% of gross rent.",
  },
  {
    mistake: "Buying with emotion instead of math",
    detail: "A beautiful home in a great neighborhood doesn't automatically make a great investment. Run the numbers first. If they don't work, move on.",
  },
  {
    mistake: "Skipping tenant screening",
    detail: "A bad tenant can cost you thousands in unpaid rent, legal fees, and property damage. Always run credit, background, and income checks — no exceptions.",
  },
  {
    mistake: "Not having a cash reserve",
    detail: "Every property will have unexpected expenses. Without 3–6 months of reserves, one bad month can wipe out a year of profits.",
  },
  {
    mistake: "Over-leveraging too quickly",
    detail: "Growing fast is tempting, but buying too many properties too quickly can leave you cash-poor. Build a solid foundation with your first property before expanding.",
  },
];

export default function InvestmentPropertiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
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
              Investing
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
            <Building2 className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Investment Properties 101
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A plain-English guide to buying your first investment property in Utah
            — from analyzing deals to building long-term wealth.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Intro callout */}
        <section className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Lightbulb className="h-6 w-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Why Utah Real Estate?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utah consistently ranks among the top states for real estate investment. Strong job growth
                (especially in tech), a young and growing population, in-migration from expensive coastal cities,
                and limited developable land all point to continued demand. Utah County and Salt Lake County
                have seen steady appreciation for over two decades — making them excellent long-term holds
                for investors at any level.
              </p>
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            Step-by-Step: How to Buy Your First Investment Property
          </h2>
          <p className="text-muted-foreground mb-10">
            Follow these 9 steps in order — each one builds on the last.
          </p>
          <div className="space-y-10">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-semibold text-sm">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{step.body}</p>
                  <div className="flex items-start gap-2 bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                    <Lightbulb className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Formulas */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            The Numbers You Need to Know
          </h2>
          <p className="text-muted-foreground mb-8">
            Every successful investor understands these formulas. Don&apos;t worry — they&apos;re simpler than they look.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {KEY_FORMULAS.map((item) => (
              <div key={item.name} className="bg-white border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="h-5 w-5 text-accent" />
                  <h3 className="font-heading text-base font-semibold text-foreground">{item.name}</h3>
                </div>
                <p className="text-sm font-medium text-primary mb-2">{item.formula}</p>
                <p className="text-xs text-muted-foreground leading-relaxed bg-muted/40 rounded-lg px-3 py-2">
                  Example: {item.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Property Types */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            Which Type of Property Is Right for You?
          </h2>
          <p className="text-muted-foreground mb-8">
            Each investment strategy has different trade-offs. Here&apos;s a simple breakdown.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PROPERTY_TYPES.map((pt) => (
              <div key={pt.type} className="bg-white border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <pt.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{pt.type}</h3>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-1">Pros</p>
                    <ul className="space-y-1">
                      {pt.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-amber-600 uppercase tracking-wider mb-1">Cons</p>
                    <ul className="space-y-1">
                      {pt.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-accent font-medium">Best for: {pt.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground font-semibold mb-2">
            5 Mistakes New Investors Make
          </h2>
          <p className="text-muted-foreground mb-8">
            Learn from others so you don&apos;t have to learn the hard way.
          </p>
          <div className="space-y-4">
            {MISTAKES.map((item, i) => (
              <div key={item.mistake} className="bg-white border border-border rounded-xl p-6 shadow-sm flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.mistake}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tax Advantages */}
        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                Tax Advantages of Real Estate
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <span className="font-medium text-foreground">Depreciation:</span> The IRS lets you deduct the cost of a residential building over 27.5 years, even as the property appreciates in value. This creates a "paper loss" that can offset your rental income and reduce your tax bill.
                </p>
                <p>
                  <span className="font-medium text-foreground">Mortgage Interest Deduction:</span> Interest paid on your investment property loan is fully deductible against rental income.
                </p>
                <p>
                  <span className="font-medium text-foreground">1031 Exchange:</span> When you sell an investment property, you can defer capital gains taxes by rolling the proceeds into another "like-kind" property. This lets your investment grow tax-deferred, potentially for decades.
                </p>
                <p>
                  <span className="font-medium text-foreground">Operating Expense Deductions:</span> Property taxes, insurance, repairs, property management fees, and even mileage driven for rental-related activities are all deductible.
                </p>
                <p className="text-xs italic">
                  Note: Tax laws are complex and individual situations vary. Always consult a CPA or tax professional who specializes in real estate before making tax decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick checklist */}
        <section className="bg-muted/40 rounded-2xl p-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
            Before You Buy — Investor Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Define your investment strategy (buy & hold, flip, STR, etc.)",
              "Run cash flow analysis on every deal before offering",
              "Get pre-approved for an investment property loan",
              "Research rental rates in the target neighborhood",
              "Budget for vacancy (5–8%), repairs (1% of value/year), and management",
              "Build a 3–6 month cash reserve before closing",
              "Hire a licensed inspector — never skip due diligence",
              "Screen tenants with credit, background, and income verification",
              "Use a Utah-compliant lease agreement",
              "Consult a CPA about depreciation and tax strategy",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to Find Your First <span className="text-accent">Investment Property?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We work with investors across Utah County and Salt Lake County every day.
            Whether you&apos;re buying your first rental or adding to your portfolio, we
            can help you find the right property and run the numbers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Talk to an Agent</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
              <Link href="/resources">
                More Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
