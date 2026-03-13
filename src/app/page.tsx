import Link from "next/link";
import { TrendingUp, Sparkles, Users, Home } from "lucide-react";
import { SellerHero } from "@/components/home/SellerHero";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

const SELLER_BENEFITS = [
  {
    icon: TrendingUp,
    title: "Strategic Pricing",
    description:
      "Data-driven market analysis to price your home for maximum value and a fast, confident sale.",
  },
  {
    icon: Sparkles,
    title: "Professional Marketing",
    description:
      "High-end photography, drone footage, virtual tours, and targeted digital campaigns that get eyes on your home.",
  },
  {
    icon: Users,
    title: "Expert Negotiation",
    description:
      "Proven track record of securing top-dollar offers and favorable terms for our sellers.",
  },
  {
    icon: Home,
    title: "Concierge Service",
    description:
      "From staging consultations to closing day, we handle every detail so you can focus on what's next.",
  },
];

export default function HomePage() {
  return (
    <>
      <SellerHero />

      {/* Why Sell With Us */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Why Sell With Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              The Childs Real Estate Advantage
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              When you list with us, you get a full-service team dedicated to
              getting you the best outcome — not just a sign in the yard.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SELLER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-8 rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all group"
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

          <div className="mt-12 text-center">
            <Link
              href="/sell"
              className="text-accent font-medium text-sm tracking-wide hover:underline underline-offset-4 transition-colors"
            >
              See our full selling process →
            </Link>
          </div>
        </div>
      </section>

      <TeamPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
