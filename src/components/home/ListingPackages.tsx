import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PACKAGES = [
  {
    name: "Foundation",
    fee: "1%",
    minFee: "$5,000 minimum",
    highlights: [
      "MLS + full web syndication",
      "Professional photography",
      "Expert negotiation & closing",
    ],
    badge: null,
    featured: false,
  },
  {
    name: "Distinction",
    fee: "1.99%",
    minFee: null,
    highlights: [
      "Everything in Foundation",
      "Staging consultation + social media",
      "Email blast + open house",
    ],
    badge: "Most Popular",
    featured: true,
  },
  {
    name: "Prestige",
    fee: "2.49%",
    minFee: null,
    highlights: [
      "Everything in Distinction",
      "Zillow Showcase + video/Reels",
      "Coming soon campaign + paid ads",
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
            The Childs Clear Commission Program
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            More Service. Less Commission.
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Most agents charge more and deliver less. Our program gives you full-service
            marketing, expert negotiation, and white-glove support — at a flat rate that puts
            more money in your pocket at closing.
          </p>

          {/* Value callout */}
          <div className="mt-8 inline-flex items-center gap-2.5 bg-accent border-2 border-accent rounded-full px-6 py-2.5 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <p className="text-sm font-bold text-primary tracking-wide">
              Transparent, flat-rate listing fees — no surprises at closing
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
              {pkg.minFee && (
                <p className={`text-xs mb-4 ${pkg.featured ? "text-white/50" : "text-muted-foreground"}`}>
                  {pkg.minFee}
                </p>
              )}

              <ul className="space-y-2.5 mt-4 flex-1">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className={pkg.featured ? "text-white/90" : "text-foreground"}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Link to full details */}
        <div className="mt-10 text-center">
          <Button asChild variant="accent" size="lg" className="group">
            <Link href="/sell#listing-packages">
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
