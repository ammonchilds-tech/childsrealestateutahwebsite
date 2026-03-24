import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const INCLUDES = [
  "Detailed comparative market analysis",
  "Recent sales data for your neighborhood",
  "Current market conditions & buyer demand",
  "Strategic pricing recommendations",
  "Personalized selling timeline",
  "No pressure — just honest expert advice",
];

export function HomeValuationCTA() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden grid lg:grid-cols-2 shadow-xl border border-border/50">
          {/* Left — dark */}
          <div
            className="relative p-10 md:p-14 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 60%, #1B3A4B 100%)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Free Valuation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-white leading-tight mb-4">
                What&apos;s Your
                <br />
                <span className="text-accent">Home Worth?</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
                Get a complimentary, no-obligation market analysis. Our team
                will provide an accurate assessment based on real Utah County
                data.
              </p>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="group w-fit"
              >
                <Link href="/sell">
                  Get Free Valuation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right — light */}
          <div className="p-10 md:p-14 bg-white flex flex-col justify-center">
            <h3 className="font-heading text-xl text-primary mb-6">
              Your valuation includes:
            </h3>
            <ul className="space-y-4">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
