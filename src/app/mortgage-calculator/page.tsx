import type { Metadata } from "next";
import { MortgageCalculator } from "./_components/MortgageCalculator";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description: `Estimate your monthly mortgage payment with ${SITE_NAME}'s free calculator. Includes principal, interest, taxes, and insurance for Utah home buyers.`,
};

export default function MortgageCalculatorPage() {
  return (
    <>
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
              Plan Ahead
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Mortgage Calculator
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get an instant estimate of your monthly payment — so you can shop
            with confidence and know exactly what fits your budget.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <MortgageCalculator />
    </>
  );
}
