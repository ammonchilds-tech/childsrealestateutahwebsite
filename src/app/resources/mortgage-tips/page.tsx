import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  DollarSign,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  CreditCard,
  Home,
  Percent,
  Calculator,
  ClipboardCheck,
  Users,
  RefreshCw,
  TrendingDown,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mortgage Tips & Options | Utah Home Financing Guide",
  description: `Understand your mortgage options, interest rates, down payment strategies, and how to secure the best financing for your Utah home purchase. ${SITE_NAME}`,
};

const TOC_ITEMS = [
  { step: 1, title: "Mortgage Basics", description: "What a mortgage is and how it works" },
  { step: 2, title: "Loan Types", description: "Conventional, FHA, VA, USDA & Jumbo" },
  { step: 3, title: "Fixed vs. Adjustable", description: "Choosing the right rate structure" },
  { step: 4, title: "What Affects Your Rate", description: "Factors lenders use to set your rate" },
  { step: 5, title: "Down Payment Strategies", description: "How much to put down and why" },
  { step: 6, title: "Getting Pre-Approved", description: "Documents and steps to get approved" },
  { step: 7, title: "Closing Costs", description: "What you'll owe beyond the down payment" },
  { step: 8, title: "Tips to Save Money", description: "Smart moves to get the best deal" },
];

const LOAN_TYPES = [
  {
    name: "Conventional",
    minDown: "3–5%",
    minCredit: "620+",
    pmi: "If <20% down",
    bestFor: "Good credit, stable income",
    description: "Most common loan. No government backing. Best rates for strong borrowers.",
    tag: "Most Common",
  },
  {
    name: "FHA",
    minDown: "3.5%",
    minCredit: "580+",
    pmi: "Required (MIP)",
    bestFor: "First-time buyers, lower credit",
    description: "Government-backed. Easier to qualify. MIP required for life of loan in most cases.",
    tag: "First-Time Friendly",
  },
  {
    name: "VA",
    minDown: "0%",
    minCredit: "No minimum",
    pmi: "None",
    bestFor: "Veterans, active military",
    description: "Best terms available. $0 down, no PMI, competitive rates. Use it if you qualify.",
    tag: "Best for Veterans",
  },
  {
    name: "USDA",
    minDown: "0%",
    minCredit: "640+",
    pmi: "Guarantee fee",
    bestFor: "Rural/suburban Utah areas",
    description: "$0 down for eligible rural areas. Income limits apply. Check USDA maps for eligibility.",
    tag: "Rural Areas",
  },
  {
    name: "Jumbo",
    minDown: "10–20%",
    minCredit: "700+",
    pmi: "Varies",
    bestFor: "Luxury homes >$766K",
    description: "For homes above conforming loan limits. Stricter requirements, larger reserves needed.",
    tag: "Luxury Homes",
  },
  {
    name: "Utah Housing",
    minDown: "0% w/ DPA",
    minCredit: "620+",
    pmi: "Varies",
    bestFor: "UT buyers needing DPA",
    description: "UHC FirstHome/HomeAgain programs with down payment assistance. Pair with FHA or conventional.",
    tag: "Utah Specific",
  },
];

const RATE_FACTORS = [
  {
    factor: "Credit Score",
    impact: "High Impact",
    impactWidth: "100%",
    detail: "The single biggest factor. A score of 760+ gets the best rates. Going from 620 to 740 can save 0.5–1.5% on your rate.",
    icon: CreditCard,
  },
  {
    factor: "Down Payment",
    impact: "High Impact",
    impactWidth: "100%",
    detail: "More down = less lender risk = lower rate. Putting 20% down eliminates PMI and often qualifies for better pricing.",
    icon: DollarSign,
  },
  {
    factor: "Loan Term",
    impact: "Medium Impact",
    impactWidth: "60%",
    detail: "15-year loans have lower rates than 30-year. Higher monthly payments but significant long-term savings.",
    icon: Calculator,
  },
  {
    factor: "Loan Type",
    impact: "Medium Impact",
    impactWidth: "60%",
    detail: "Conventional often has the lowest rates for strong borrowers. VA loans are excellent. FHA and jumbo can vary.",
    icon: FileText,
  },
  {
    factor: "Debt-to-Income (DTI)",
    impact: "Medium Impact",
    impactWidth: "60%",
    detail: "Lenders want total debts below 43–50% of gross income. Lower DTI = better rate and easier approval.",
    icon: Percent,
  },
  {
    factor: "Market Conditions",
    impact: "Outside Your Control",
    impactWidth: "25%",
    detail: "Rates move daily based on the Fed, inflation, and bond markets. You can't control this, but you can time your rate lock.",
    icon: TrendingDown,
  },
];

const DOWN_PAYMENT_OPTIONS = [
  {
    amount: "0%",
    loan: "VA or USDA",
    on500k: "$0",
    pros: "No cash required. No PMI on VA.",
    cons: "Must meet eligibility requirements.",
    highlight: false,
  },
  {
    amount: "3–3.5%",
    loan: "Conventional or FHA",
    on500k: "$15K–$17.5K",
    pros: "Lowest barrier to entry.",
    cons: "Requires PMI/MIP. Higher monthly payment.",
    highlight: false,
  },
  {
    amount: "10%",
    loan: "Conventional",
    on500k: "$50,000",
    pros: "Reduced PMI. Stronger offer.",
    cons: "Larger savings required upfront.",
    highlight: false,
  },
  {
    amount: "20%",
    loan: "Conventional",
    on500k: "$100,000",
    pros: "No PMI. Best rates. Immediate equity.",
    cons: "Significant cash required.",
    highlight: true,
  },
];

const PRE_APPROVAL_DOCS = [
  { doc: "Government-Issued ID", detail: "Driver's license or passport" },
  { doc: "Last 2 Years of Tax Returns", detail: "W-2s and federal returns" },
  { doc: "Last 30 Days of Pay Stubs", detail: "From all jobs" },
  { doc: "Last 2 Months of Bank Statements", detail: "All checking and savings accounts" },
  { doc: "Investment & Retirement Accounts", detail: "For asset verification" },
  { doc: "Current Employer Contact Info", detail: "For employment verification" },
  { doc: "Gift Letter (if applicable)", detail: "If any of your down payment is a gift" },
  { doc: "Self-Employment Docs", detail: "2 years of business returns if self-employed" },
];

const CLOSING_COSTS = [
  { item: "Loan Origination Fee", range: "0.5–1% of loan", note: "Lender fee to process your loan", barWidth: "55%" },
  { item: "Title Insurance", range: "$1,000–$2,500", note: "Protects you and the lender", barWidth: "35%" },
  { item: "Title & Escrow Fees", range: "$800–$1,500", note: "Closing services from title company", barWidth: "25%" },
  { item: "Appraisal", range: "$500–$800", note: "Required by lender to confirm value", barWidth: "15%" },
  { item: "Homeowner's Insurance", range: "$800–$1,500/yr", note: "First year often paid at closing", barWidth: "20%" },
  { item: "Property Taxes (Prorated)", range: "Varies", note: "Your share of the current tax period", barWidth: "30%" },
  { item: "Prepaid Interest", range: "Varies", note: "Interest from closing to month end", barWidth: "12%" },
  { item: "Recording Fees", range: "$100–$200", note: "County fee to record the deed", barWidth: "5%" },
];

const RATE_COMPARISON = [
  { rate: "5.5%", monthly: "$2,839", total30: "$1,022,040", totalInterest: "$522,040" },
  { rate: "6.5%", monthly: "$3,160", total30: "$1,137,600", totalInterest: "$637,600" },
  { rate: "7.5%", monthly: "$3,497", total30: "$1,258,920", totalInterest: "$758,920" },
];

const MONEY_TIPS = [
  {
    title: "Shop at Least 3 Lenders",
    description: "Rate differences between lenders can add up to tens of thousands. Get quotes from a bank, credit union, and a mortgage broker. Compare APR, not just rate.",
    icon: Users,
  },
  {
    title: "Lock Your Rate at the Right Time",
    description: "Once under contract, ask about a rate lock. Locks last 30–60 days. If rates are rising, lock early. Ask about a float-down option if they're falling.",
    icon: ShieldCheck,
  },
  {
    title: "Pay Down Debt Before Applying",
    description: "Paying off credit cards and installment loans lowers your DTI and can boost your credit score — both directly improve your rate.",
    icon: CreditCard,
  },
  {
    title: "Don't Open New Credit",
    description: "Avoid applying for credit cards, car loans, or any debt while house hunting. New inquiries and accounts can lower your score and affect approval.",
    icon: AlertTriangle,
  },
  {
    title: "Consider Buying Down Your Rate",
    description: "Paying points upfront (1 point = 1% of loan) permanently lowers your rate. If you stay 7+ years, this can save significantly. Ask your lender to run the math.",
    icon: TrendingDown,
  },
  {
    title: "Refinance When Rates Drop",
    description: "If rates fall 0.75–1%+ after you close, refinancing may make sense. Rule of thumb: recoup closing costs in under 2–3 years.",
    icon: RefreshCw,
  },
];

function SectionLabel({ n, label }: { n: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-5">
      <span className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center font-bold leading-none text-[10px]">
        {n}
      </span>
      {label}
    </span>
  );
}

export default function MortgageTipsPage() {
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
            <span className="text-primary font-medium">Mortgage Tips & Options</span>
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
              Finance
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Mortgage Tips & Options
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Everything you need to understand your financing options, get the
            best rate, and walk into closing with confidence.
          </p>
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { value: "6", label: "Loan Types Compared" },
              { value: "8", label: "Money-Saving Tips" },
              { value: "8 min", label: "Read Time" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-lg px-3 py-3 border border-white/10">
                <div className="font-heading text-xl font-semibold text-accent">{s.value}</div>
                <div className="text-white/60 text-[11px] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 md:py-16 bg-muted border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="flex-shrink-0">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Contents</div>
              <div className="font-heading text-lg font-semibold text-primary">Jump to a Section</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1">
              {TOC_ITEMS.map((item) => (
                <a
                  key={item.step}
                  href={`#section-${item.step}`}
                  className="flex items-center gap-2 group p-2 rounded-lg hover:bg-background transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  <span className="text-xs font-medium text-primary group-hover:text-accent transition-colors leading-tight">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — Mortgage Basics */}
      <section id="section-1" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={1} label="Mortgage Basics" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">
            How a Mortgage <span className="text-accent">Works</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A mortgage is a loan you use to buy a home. The home itself
                serves as collateral — meaning if you stop making payments, the lender
                can take the property back.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every payment covers two things: <strong className="text-primary">principal</strong> (paying
                down your balance) and <strong className="text-primary">interest</strong> (the lender&apos;s fee).
                Early in the loan, most of your payment goes to interest. Over time, more goes toward
                principal — this is called amortization.
              </p>

              <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  <span className="font-heading text-sm font-semibold text-primary">Plain English</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Think of your mortgage payment like rent — except part of it builds equity in your home.
                  After 30 years, you own it outright. After 30 years of renting, you own nothing.
                </p>
              </div>
            </div>

            <Card className="border-t-4 border-t-accent border-border/50">
              <CardContent className="p-8">
                <h3 className="font-heading text-lg font-semibold text-primary mb-5">Key Terms</h3>
                <div className="space-y-3">
                  {[
                    { term: "Principal", def: "The amount you borrowed." },
                    { term: "Interest Rate", def: "Annual cost of borrowing, as a percentage." },
                    { term: "APR", def: "Rate + fees combined. Use this to compare lenders." },
                    { term: "Amortization", def: "How payments split between principal and interest over time." },
                    { term: "Equity", def: "Home value minus what you owe. Grows as you pay down." },
                    { term: "PMI", def: "Insurance required if you put less than 20% down." },
                    { term: "Escrow", def: "Account your lender manages to pay taxes and insurance." },
                  ].map((item) => (
                    <div key={item.term} className="flex gap-2 border-b border-border/40 pb-2 last:border-0 last:pb-0">
                      <span className="text-sm font-semibold text-accent w-28 flex-shrink-0">{item.term}</span>
                      <span className="text-sm text-muted-foreground">{item.def}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 — Loan Types: Comparison Table */}
      <section id="section-2" className="py-20 md:py-28 bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={2} label="Loan Types" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">
            Loan Types <span className="text-accent">Compared</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Side-by-side comparison of every major loan type available to Utah buyers.
          </p>

          {/* Comparison Table */}
          <Card className="border-border/50 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left px-5 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-36 bg-muted/50">
                      Attribute
                    </th>
                    {LOAN_TYPES.map((loan) => (
                      <th key={loan.name} className="text-left px-4 py-4 bg-muted/50">
                        <div className="text-sm font-semibold text-primary">{loan.name}</div>
                        <Badge variant="accent" className="text-[9px] uppercase tracking-wider mt-1">
                          {loan.tag}
                        </Badge>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/40">
                    <td className="px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30">
                      Min. Down
                    </td>
                    {LOAN_TYPES.map((loan) => (
                      <td key={loan.name} className="px-4 py-3 text-sm font-semibold text-accent">
                        {loan.minDown}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/40 bg-background/50">
                    <td className="px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30">
                      Min. Credit
                    </td>
                    {LOAN_TYPES.map((loan) => (
                      <td key={loan.name} className="px-4 py-3 text-sm text-primary">
                        {loan.minCredit}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30">
                      PMI / MIP
                    </td>
                    {LOAN_TYPES.map((loan) => (
                      <td key={loan.name} className={`px-4 py-3 text-sm ${loan.pmi === "None" ? "text-green-600 font-semibold" : "text-muted-foreground"}`}>
                        {loan.pmi}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border/40 bg-background/50">
                    <td className="px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30">
                      Best For
                    </td>
                    {LOAN_TYPES.map((loan) => (
                      <td key={loan.name} className="px-4 py-3 text-xs text-muted-foreground">
                        {loan.bestFor}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-muted/30">
                      Key Note
                    </td>
                    {LOAN_TYPES.map((loan) => (
                      <td key={loan.name} className="px-4 py-3 text-xs text-muted-foreground leading-relaxed">
                        {loan.description}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <p className="text-xs text-muted-foreground">
            * Credit score minimums vary by lender. Your specific situation may qualify for better or different terms.
          </p>
        </div>
      </section>

      {/* Section 3 — Fixed vs. Adjustable */}
      <section id="section-3" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={3} label="Rate Structure" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">
            Fixed vs. <span className="text-accent">Adjustable Rate</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {/* Fixed Rate */}
            <Card className="border-t-4 border-t-accent border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary">Fixed-Rate</h3>
                    <p className="text-xs text-accent font-medium">Most popular choice</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Your interest rate stays the same for the entire term — 15 or 30 years.
                  Principal + interest payment never changes.
                </p>
                <div className="space-y-2 mb-5">
                  {[
                    "Payment never changes — easy to budget",
                    "Protected if rates rise in the future",
                    "30-year = lower monthly; 15-year = less total interest",
                    "Best for buyers staying 7+ years",
                  ].map((pro) => (
                    <div key={pro} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                  <strong className="text-primary">Verdict:</strong> For most Utah buyers staying long-term, the 30-year fixed is the safest and most flexible.
                </div>
              </CardContent>
            </Card>

            {/* Adjustable Rate */}
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <ArrowUpDown className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-primary">Adjustable-Rate (ARM)</h3>
                    <p className="text-xs text-muted-foreground font-medium">Use with caution</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Fixed rate for an initial period (e.g., 5 or 7 years), then adjusts
                  annually based on market indexes. Initial rates are usually lower.
                </p>
                <div className="space-y-2 mb-5">
                  {[
                    "Lower initial rate saves money short-term",
                    "Good if you plan to sell or refi before adjustments",
                    "Rate can rise significantly after fixed period",
                    "Less predictability for long-term budgeting",
                  ].map((point) => (
                    <div key={point} className="flex gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                  <strong className="text-primary">Verdict:</strong> Only makes sense if you&apos;re certain you&apos;ll sell or refi before the fixed period ends.
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rate impact table */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary mb-4">
              Rate Impact on a $500K Loan (30-Year Fixed)
            </h3>
            <Card className="border-border/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted border-b border-border/50">
                      <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Rate</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Monthly P&I</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Total Paid</th>
                      <th className="text-left px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Total Interest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RATE_COMPARISON.map((row, i) => (
                      <tr key={row.rate} className={`border-b border-border/50 last:border-0 ${i === 1 ? "bg-accent/5" : ""}`}>
                        <td className="px-6 py-4 text-sm font-semibold text-accent">{row.rate}</td>
                        <td className="px-6 py-4 text-sm text-primary font-medium">{row.monthly}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.total30}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.totalInterest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <p className="text-xs text-muted-foreground mt-2">* P&I only. Excludes taxes, insurance, and PMI. Illustrative purposes.</p>
          </div>
        </div>
      </section>

      {/* Section 4 — What Affects Your Rate */}
      <section id="section-4" className="py-20 md:py-28 bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={4} label="Rate Factors" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            What Affects Your <span className="text-accent">Rate</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Lenders calculate your rate based on risk. Here&apos;s what moves the needle — and how much.
          </p>

          {/* Financial stat callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { value: "0.5%", label: "Rate drop saves ~$150/mo on a $500K loan" },
              { value: "760+", label: "Credit score threshold for the best available rates" },
              { value: "20%", label: "Down payment that eliminates PMI entirely" },
            ].map((stat) => (
              <div key={stat.value} className="bg-background rounded-xl p-5 border border-border/50 text-center shadow-sm">
                <div className="font-heading text-4xl font-semibold text-accent mb-2">{stat.value}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Visual impact bars */}
          <Card className="border-border/50">
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {RATE_FACTORS.map((factor) => (
                  <div key={factor.factor} className="grid md:grid-cols-[1fr_180px] gap-4 items-center px-6 py-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <factor.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-primary mb-0.5">{factor.factor}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{factor.detail}</p>
                      </div>
                    </div>
                    <div>
                      <div className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 ${
                        factor.impact === "High Impact" ? "text-accent" :
                        factor.impact === "Medium Impact" ? "text-muted-foreground" :
                        "text-muted-foreground/50"
                      }`}>
                        {factor.impact}
                      </div>
                      <div className="h-2 rounded-full bg-border/50 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            factor.impact === "High Impact" ? "bg-accent" :
                            factor.impact === "Medium Impact" ? "bg-accent/50" :
                            "bg-muted-foreground/30"
                          }`}
                          style={{ width: factor.impactWidth }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5 — Down Payment Strategies */}
      <section id="section-5" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={5} label="Down Payment" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Down Payment <span className="text-accent">Strategies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            How much you put down affects your rate, monthly payment, and PMI. Here&apos;s the full picture.
          </p>

          {/* Horizontal spectrum */}
          <div className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-border/50 mb-8">
            {DOWN_PAYMENT_OPTIONS.map((option, i) => (
              <div
                key={option.amount}
                className={`flex-1 p-6 relative border-b md:border-b-0 md:border-r border-border/50 last:border-0 ${
                  option.highlight ? "bg-accent/5 border-t-4 md:border-t-0 md:border-l-4 border-accent" : "bg-background"
                }`}
              >
                {option.highlight && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="accent" className="text-[9px] uppercase tracking-wider">Sweet Spot</Badge>
                  </div>
                )}
                <div className="font-heading text-3xl font-semibold text-accent mb-1">{option.amount}</div>
                <div className="text-xs text-muted-foreground mb-1">{option.loan}</div>
                <div className="text-sm font-semibold text-primary mb-4">On $500K: <span className="text-accent">{option.on500k}</span></div>
                <div className="space-y-2">
                  <div className="flex gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{option.pros}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{option.cons}</span>
                  </div>
                </div>
                {/* Progression indicator */}
                <div className="mt-5 flex items-center gap-1">
                  {DOWN_PAYMENT_OPTIONS.map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 flex-1 rounded-full ${j <= i ? "bg-accent" : "bg-border"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-5 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              <span className="font-heading text-sm font-semibold text-primary">Utah Housing Down Payment Assistance</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utah Housing Corporation (UHC) offers DPA grants and second loans to cover 3.5–6% of the purchase
              price. Available to first-time and some repeat buyers. Ask your lender if you qualify.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Getting Pre-Approved */}
      <section id="section-6" className="py-20 md:py-28 bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={6} label="Pre-Approval" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">
            Getting <span className="text-accent">Pre-Approved</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pre-approval is a lender&apos;s written commitment to loan you a specific amount, based on a full
                review of your finances. It&apos;s different from pre-qualification, which is just a rough estimate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In Utah&apos;s competitive market, sellers expect a pre-approval letter with every offer. Without one,
                your offer may not even be considered.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pre-approval typically takes 1–3 business days. It&apos;s free and is one of the most important early steps.
              </p>

              <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span className="font-heading text-sm font-semibold text-amber-800">Pre-Approval ≠ Pre-Qualification</span>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Pre-qualification is a quick self-reported estimate — it holds little weight with sellers.
                  Pre-approval involves a full credit pull and document review. Always get a full pre-approval before making offers.
                </p>
              </div>
            </div>

            <Card className="border-t-4 border-t-accent border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardCheck className="h-6 w-6 text-accent" />
                  <h3 className="font-heading text-xl font-semibold text-primary">Documents You&apos;ll Need</h3>
                </div>
                <div className="space-y-4">
                  {PRE_APPROVAL_DOCS.map((item) => (
                    <div key={item.doc} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-primary">{item.doc}</div>
                        <div className="text-xs text-muted-foreground">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7 — Closing Costs */}
      <section id="section-7" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={7} label="Closing Costs" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Closing <span className="text-accent">Costs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Budget 2–3% of the loan amount for closing costs. On a $500K purchase, that&apos;s typically $8K–$15K+.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {CLOSING_COSTS.map((cost) => (
                    <div key={cost.item} className="px-5 py-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="text-sm font-medium text-primary">{cost.item}</div>
                          <div className="text-xs text-muted-foreground">{cost.note}</div>
                        </div>
                        <div className="text-sm font-semibold text-accent whitespace-nowrap">{cost.range}</div>
                      </div>
                      {/* Visual bar */}
                      <div className="h-1 rounded-full bg-border/40 overflow-hidden">
                        <div className="h-full rounded-full bg-accent/40" style={{ width: cost.barWidth }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-accent/5 px-5 py-4 border-t border-border/50 flex justify-between items-center">
                  <span className="font-heading text-base font-semibold text-primary">Estimated Total</span>
                  <span className="font-heading text-xl font-semibold text-accent">$8,000–$15,000+</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-5">
              <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  <span className="font-heading text-sm font-semibold text-primary">Ask for Seller Concessions</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In some market conditions, you can negotiate for the seller to cover some or all of your closing costs.
                  Your agent can advise when this makes sense.
                </p>
              </div>
              <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  <span className="font-heading text-sm font-semibold text-primary">Lender Credits</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Some lenders offer credits (slightly higher rate) to reduce your upfront cash. Useful if you&apos;re short on cash to close.
                </p>
              </div>
              <div className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  <span className="font-heading text-sm font-semibold text-primary">Review the Loan Estimate</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Within 3 days of applying, your lender must provide a Loan Estimate. Review it carefully and compare it across lenders — some fees are negotiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Tips to Save Money */}
      <section id="section-8" className="py-20 md:py-28 bg-muted scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel n={8} label="Money-Saving Tips" />
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">
            Tips to <span className="text-accent">Save Money</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Small moves can save you tens of thousands over the life of your loan.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MONEY_TIPS.map((tip) => (
              <Card
                key={tip.title}
                className="border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group bg-background"
              >
                <CardContent className="p-7">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <tip.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Have Mortgage Questions?{" "}
            <span className="text-accent">We&apos;re Here to Help.</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We work with trusted Utah lenders and can connect you with someone
            who&apos;ll find the right loan for your situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/resources/home-buying-guide">Read the Buying Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
