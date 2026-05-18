import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PACKAGES = [
  {
    name: "Gold",
    fee: "1%",
    highlights: [
      "HDR interior/exterior photos",
      "Professional market analysis",
      "Supra lock box",
      "Yard sign",
      "Listed on MLS and 500+ websites",
      "24/7 showing service",
      "Professional contract negotiation",
    ],
    footer: [
      "Owner shows unrepresented buyers",
      "If Ammon brings buyer, 1% fee added at closing",
      "Buyer agent fees negotiated with offers",
      "$295 transaction fee due at closing",
    ],
    badge: null,
    featured: false,
  },
  {
    name: "Diamond",
    fee: "1.99%",
    highlights: [
      "Everything in Gold, plus:",
      "Professional drone photos",
      "Dedicated showing agent assigned to your property",
      "Featured open house",
      "Weekly social media ads",
    ],
    footer: [
      "Childs Real Estate shows unrepresented buyers",
      "If Ammon brings buyer, 0.5% fee added at closing",
      "Buyer agent fees negotiated with offers",
      "$295 transaction fee due at closing",
    ],
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Platinum",
    fee: "2.49%",
    highlights: [
      "Everything in Gold & Diamond, plus:",
      "Showcase listing on Zillow ★",
      "Interactive 3D home tour",
      "Virtual staging",
      "Weekly market updates via call, text, or email",
      "Paid social media ads",
      "Multiple open houses",
    ],
    footer: [
      "Childs Real Estate shows unrepresented buyers",
      "If Ammon brings buyer, 0.5% fee added at closing",
      "Buyer agent fees negotiated with offers",
      "$295 transaction fee due at closing",
    ],
    badge: "White-Glove",
    featured: false,
  },
];

export function ListingPackages() {
  return (
    <section id="listing-packages" className="py-20 md:py-28 bg-muted scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Childs Real Estate
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Smart Seller Programs
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the level of service that fits your goals — every program includes
            full MLS exposure, professional photography, and expert negotiation.
          </p>

          {/* Value callout */}
          <div className="mt-8 inline-flex items-center gap-2.5 bg-accent border-2 border-accent rounded-full px-6 py-2.5 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <p className="text-sm font-bold text-primary tracking-wide">
              Seller can cancel anytime!
            </p>
          </div>
        </div>

        {/* Compact 3-tier grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                pkg.featured
                  ? "bg-primary border-2 border-primary shadow-xl"
                  : "bg-background border border-border/60"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge
                    variant={pkg.featured ? "accent" : undefined}
                    className={
                      pkg.featured
                        ? "text-xs font-semibold px-4 py-1 rounded-full shadow"
                        : "text-xs font-semibold px-4 py-1 rounded-full shadow bg-accent/20 text-accent border border-accent/40"
                    }
                  >
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <h3 className={`font-heading text-2xl mb-1 ${pkg.featured ? "text-white" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              <div className="flex items-baseline gap-1 mt-2 mb-1">
                <span className="font-heading text-4xl text-accent font-semibold">{pkg.fee}</span>
                <span className={`text-sm ${pkg.featured ? "text-white/60" : "text-muted-foreground"}`}>
                  listing fee
                </span>
              </div>
              <ul className="space-y-2.5 mt-4 flex-1">
                {pkg.highlights.map((h) => (
                  <li key={h} className={`flex items-start gap-2.5 text-sm ${h.endsWith(':') ? 'font-semibold mt-1' : ''}`}>
                    {!h.endsWith(':') && (
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    )}
                    <span className={pkg.featured ? "text-white/90" : "text-foreground"}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className={`mt-5 pt-4 space-y-1.5 border-t ${pkg.featured ? "border-white/20" : "border-border/60"}`}>
                {pkg.footer.map((note) => (
                  <li key={note} className={`text-xs ${pkg.featured ? "text-white/50" : "text-muted-foreground"} text-center`}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Zillow stat callout */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-accent/30 rounded-xl px-6 py-3">
            <Star className="h-4 w-4 text-accent fill-accent flex-shrink-0" />
            <p className="text-sm font-semibold text-foreground">
              Homes featured on Zillow Showcase sell for 2% more on average
            </p>
          </div>
        </div>

        {/* Link to full details */}
        <div className="mt-8 text-center">
          <Button asChild variant="accent" size="lg" className="group">
            <Link href="/packages">
              See full package details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground">
            Buyer&apos;s agent commission negotiated separately. All fees subject to listing agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
