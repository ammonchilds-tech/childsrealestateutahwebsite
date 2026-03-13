import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export function SellerHero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
        }}
      />

      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle gold accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Small decorative label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-accent/60" />
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
            {SITE_NAME}
          </span>
          <div className="h-px w-12 bg-accent/60" />
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
          Get Top Dollar for
          <span className="block text-accent mt-2">Your Utah Home</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Expert marketing, strategic pricing, and proven negotiation — backed
          by Berkshire Hathaway HomeServices to sell your home for more.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="accent"
            size="lg"
            className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base group"
          >
            <Link href="/sell">
              Get Free Home Valuation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base bg-white/10 text-white border border-white/20 hover:bg-white/20"
          >
            <Link href="/sell#process">How We Sell</Link>
          </Button>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
