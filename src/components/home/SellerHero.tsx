import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SellerHero() {
  return (
    <section className="bg-gold text-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 flex flex-col xl:flex-row xl:items-end gap-6 xl:gap-10">
        <div className="flex-1 min-w-0 xl:pb-20">
          <p className="text-sm font-bold tracking-[0.18em] uppercase mb-5">
            Smart Seller Program
          </p>

          <h1 className="font-display text-[56px] sm:text-7xl lg:text-[104px] leading-[0.95]">
            Full service.
            <br />
            Fraction of
            <br />
            the fee.
          </h1>

          <p className="mt-7 max-w-xl text-lg md:text-xl font-medium">
            Sell your Utah home for as little as 1% — full-service marketing,
            expert negotiation, and white-glove support backed by Simple Choice
            Real Estate.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <Link
              href="/sell"
              className="group inline-flex items-center justify-center gap-2.5 h-14 px-8 bg-ink text-white font-bold hover:bg-ink/85 transition-colors"
            >
              Get Free Home Valuation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#listing-packages"
              className="inline-flex items-center justify-center h-14 px-8 border-2 border-ink font-bold hover:bg-ink hover:text-white transition-colors"
            >
              Compare Packages
            </Link>
          </div>
        </div>

        <div className="flex xl:justify-end" aria-hidden="true">
          <span className="font-display text-[150px] sm:text-[260px] lg:text-[380px] leading-[0.78] tracking-[-0.02em]">
            1%
          </span>
        </div>
      </div>
    </section>
  );
}
