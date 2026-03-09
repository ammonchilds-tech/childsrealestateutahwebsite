"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { DollarSign, Percent, Calendar, TrendingDown, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OFFICE } from "@/lib/constants";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function parseInput(value: string) {
  return parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
}

const LOAN_TERMS = [10, 15, 20, 30] as const;

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPct, setDownPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.75);
  const [loanTerm, setLoanTerm] = useState<10 | 15 | 20 | 30>(30);

  // Raw string states so inputs feel natural
  const [homePriceInput, setHomePriceInput] = useState("500,000");
  const [downPctInput, setDownPctInput] = useState("20");
  const [rateInput, setRateInput] = useState("6.75");

  const downPayment = (homePrice * downPct) / 100;
  const loanAmount = homePrice - downPayment;

  const results = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyPI = 0;
    if (monthlyRate > 0 && principal > 0) {
      monthlyPI =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else if (principal > 0) {
      monthlyPI = principal / numPayments;
    }

    // Utah estimates
    const monthlyTax = (homePrice * 0.006) / 12;
    const monthlyInsurance = (homePrice * 0.005) / 12;
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;
    const totalPaid = monthlyPI * numPayments;
    const totalInterest = totalPaid - principal;

    return { monthlyPI, monthlyTax, monthlyInsurance, totalMonthly, totalPaid, totalInterest, principal };
  }, [homePrice, downPct, interestRate, loanTerm, loanAmount]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

      {/* How it works */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">How to use this calculator</span>
          <div className="h-px w-8 bg-accent/60" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl text-primary mb-6">
          Three easy steps to your estimate
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              num: "1",
              title: "Enter the home price",
              desc: "Type in the price of the home you're interested in, or drag the slider. Not sure? Try a round number to start.",
            },
            {
              num: "2",
              title: "Set your down payment",
              desc: "Choose what percentage you plan to put down. 20% avoids private mortgage insurance (PMI). Even 3–5% is a great start.",
            },
            {
              num: "3",
              title: "Adjust rate & term",
              desc: "Enter today's interest rate (we've pre-filled a current estimate) and pick how many years you'd like to pay off your loan.",
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="text-accent font-semibold text-sm">{step.num}</span>
              </div>
              <div>
                <p className="font-semibold text-primary mb-1">{step.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calculator card */}
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_340px]">

          {/* Inputs */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border space-y-8">

            {/* Home Price */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-accent" />
                Home Price
              </label>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-muted-foreground text-sm w-4">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={homePriceInput}
                  onChange={(e) => {
                    setHomePriceInput(e.target.value);
                    const val = parseInput(e.target.value);
                    if (val > 0) setHomePrice(val);
                  }}
                  onBlur={() => setHomePriceInput(formatNumber(homePrice))}
                  className="flex-1 border border-border rounded-lg px-4 py-2.5 text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                />
              </div>
              <input
                type="range"
                min={100000}
                max={3000000}
                step={10000}
                value={homePrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setHomePrice(val);
                  setHomePriceInput(formatNumber(val));
                }}
                className="w-full accent-[#C9A96E]"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$100K</span><span>$3M</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Percent className="h-4 w-4 text-accent" />
                Down Payment
              </label>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="text"
                  inputMode="decimal"
                  value={downPctInput}
                  onChange={(e) => {
                    setDownPctInput(e.target.value);
                    const val = parseFloat(e.target.value) || 0;
                    if (val >= 0 && val <= 100) setDownPct(val);
                  }}
                  onBlur={() => setDownPctInput(String(downPct))}
                  className="w-24 border border-border rounded-lg px-4 py-2.5 text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                />
                <span className="text-muted-foreground text-sm">%</span>
                <span className="text-muted-foreground text-sm ml-auto">
                  = <span className="font-medium text-primary">{formatCurrency(downPayment)}</span>
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={50}
                step={0.5}
                value={downPct}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDownPct(val);
                  setDownPctInput(String(val));
                }}
                className="w-full accent-[#C9A96E]"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>3%</span><span>50%</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-accent" />
                Interest Rate
              </label>
              <div className="flex items-center gap-3 mb-3">
                <input
                  type="text"
                  inputMode="decimal"
                  value={rateInput}
                  onChange={(e) => {
                    setRateInput(e.target.value);
                    const val = parseFloat(e.target.value) || 0;
                    if (val > 0 && val < 20) setInterestRate(val);
                  }}
                  onBlur={() => setRateInput(interestRate.toFixed(2))}
                  className="w-28 border border-border rounded-lg px-4 py-2.5 text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                />
                <span className="text-muted-foreground text-sm">% / year</span>
              </div>
              <input
                type="range"
                min={2}
                max={12}
                step={0.05}
                value={interestRate}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setInterestRate(val);
                  setRateInput(val.toFixed(2));
                }}
                className="w-full accent-[#C9A96E]"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>2%</span><span>12%</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                Loan Term
              </label>
              <div className="flex gap-2 flex-wrap">
                {LOAN_TERMS.map((term) => (
                  <button
                    key={term}
                    onClick={() => setLoanTerm(term)}
                    className={`flex-1 min-w-[60px] py-2.5 rounded-lg text-sm font-medium border transition-all ${
                      loanTerm === term
                        ? "bg-primary text-white border-primary"
                        : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {term} yr
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className="p-8 md:p-10 flex flex-col"
            style={{ background: "linear-gradient(160deg, #2D1B4E 0%, #1B3A4B 100%)" }}
          >
            <p className="text-white/60 text-xs font-medium tracking-[0.15em] uppercase mb-2">
              Your Estimate
            </p>
            <p className="font-heading text-4xl md:text-5xl text-white font-bold mb-1">
              {formatCurrency(results.totalMonthly)}
            </p>
            <p className="text-white/50 text-sm mb-8">per month (estimated)</p>

            <div className="space-y-3 flex-1">
              {[
                { label: "Principal & Interest", value: formatCurrency(results.monthlyPI), highlight: true },
                { label: "Property Tax (est.)", value: formatCurrency(results.monthlyTax), note: "≈ 0.6% / yr" },
                { label: "Home Insurance (est.)", value: formatCurrency(results.monthlyInsurance), note: "≈ 0.5% / yr" },
              ].map((row) => (
                <div key={row.label} className={`flex justify-between items-center py-2.5 border-b border-white/10 ${row.highlight ? "" : ""}`}>
                  <div>
                    <span className="text-white/80 text-sm">{row.label}</span>
                    {row.note && <span className="ml-2 text-white/35 text-xs">{row.note}</span>}
                  </div>
                  <span className={`font-semibold text-sm ${row.highlight ? "text-accent" : "text-white/70"}`}>{row.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-white/40">
              <div className="flex justify-between">
                <span>Loan amount</span>
                <span className="text-white/60">{formatCurrency(results.principal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total interest paid</span>
                <span className="text-white/60">{formatCurrency(results.totalInterest)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total cost of loan</span>
                <span className="text-white/60">{formatCurrency(results.totalPaid)}</span>
              </div>
            </div>

            <p className="mt-6 text-white/30 text-[10px] leading-relaxed">
              Estimates only. Tax and insurance figures are averages for Utah. Contact a lender for exact rates.
            </p>
          </div>
        </div>
      </div>

      {/* Tip callout */}
      <div className="mt-8 rounded-xl bg-accent/8 border border-accent/20 px-6 py-5">
        <p className="text-sm text-primary/80 leading-relaxed">
          <span className="font-semibold text-primary">Good to know:</span> A 20% down payment eliminates PMI (Private Mortgage Insurance), which typically adds $50–$200/month.
          If your down payment is less than 20%, add an estimated PMI amount to your monthly total above.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #3d2866 40%, #C9A96E 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 px-8 py-12 md:py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-3">
            Ready to make it real?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
            This calculator gives you a solid starting point — but every situation is unique.
            Reach out and we'll connect you with a trusted lender and walk you through the full picture, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 group"
            >
              <Link href="/contact">
                Talk to Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/properties">Browse Homes</Link>
            </Button>
          </div>
          <p className="mt-6 text-white/40 text-sm">
            Or call us at{" "}
            <a href={`tel:${OFFICE.phone}`} className="text-white/60 hover:text-white underline underline-offset-4 transition-colors">
              {OFFICE.phone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
