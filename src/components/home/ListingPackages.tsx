import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FOUNDATION_FEATURES = [
  "MLS listing + full web syndication",
  "Zillow, Realtor.com, Homes.com",
  "Professional photography (25 photos)",
  "Yard sign + electronic lockbox",
  "Seller's net sheet",
  "Expert contract negotiation",
  "Full closing coordination",
  "Easy-exit listing agreement",
];

const DISTINCTION_EXTRAS = [
  "Staging consultation (1 hour)",
  "Social media marketing (Instagram + Facebook)",
  "Email blast to buyer agent network",
  "Property highlights flyer",
  "1 hosted open house",
];

const PRESTIGE_EXTRAS = [
  "Zillow Showcase (premium placement)",
  "Professional video + Instagram Reel",
  "Coming soon pre-launch campaign",
  "Just Listed postcard to neighborhood",
  "2 hosted open houses",
  "Paid social ad boost",
  "Weekly marketing activity report",
  "Priority response & white-glove service",
];

function FeatureRow({ text, included = true }: { text: string; included?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 text-sm">
      {included ? (
        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
      ) : (
        <Minus className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
      )}
      <span className={included ? "text-foreground" : "text-muted-foreground/50"}>
        {text}
      </span>
    </li>
  );
}

export function ListingPackages() {
  return (
    <section
      id="listing-packages"
      className="py-20 md:py-28 bg-muted scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Listing Service Packages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            Choose the Right Package
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Every home is different. Choose the level of marketing and service
            that fits your goals — from essential coverage to our full
            white-glove experience.
          </p>

          {/* Promo callout */}
          <div className="mt-8 inline-flex items-center gap-2.5 bg-accent border-2 border-accent rounded-full px-6 py-2.5 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <p className="text-sm font-bold text-primary tracking-wide">
              Transparent, flat-rate listing fees — no surprises at closing
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* Foundation */}
          <div className="bg-background rounded-2xl border border-border/60 p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
                Listing Fee
              </p>
              <h3 className="font-heading text-2xl text-foreground mb-1">Foundation</h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-heading text-4xl text-accent font-semibold">1%</span>
                <span className="text-muted-foreground text-sm">listing fee</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Minimum fee: $5,000</p>
            </div>

            <ul className="space-y-2.5 flex-1">
              {FOUNDATION_FEATURES.map((f) => (
                <FeatureRow key={f} text={f} />
              ))}
              <li className="pt-2 border-t border-border/50">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Not included
                </p>
                <ul className="space-y-2">
                  {["Staging consultation", "Social media marketing", "Open house", "Video / Reels", "Zillow Showcase"].map((f) => (
                    <FeatureRow key={f} text={f} included={false} />
                  ))}
                </ul>
              </li>
            </ul>

            <Button asChild variant="outline" className="mt-8 w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Distinction */}
          <div className="bg-primary rounded-2xl border-2 border-primary p-8 flex flex-col relative shadow-xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge variant="accent" className="text-xs font-semibold px-4 py-1 rounded-full shadow">
                Most Popular
              </Badge>
            </div>

            <div className="mb-6">
              <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-2">
                Listing Fee
              </p>
              <h3 className="font-heading text-2xl text-white mb-1">Distinction</h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-heading text-4xl text-accent font-semibold">1.99%</span>
                <span className="text-white/60 text-sm">listing fee</span>
              </div>
            </div>

            <p className="text-xs font-medium text-white/50 uppercase tracking-wider mb-3">
              Everything in Foundation, plus:
            </p>
            <ul className="space-y-2.5 flex-1">
              {[...FOUNDATION_FEATURES, ...DISTINCTION_EXTRAS].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <Button asChild variant="accent" className="mt-8 w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Prestige */}
          <div className="bg-background rounded-2xl border-2 border-accent/50 p-8 flex flex-col relative shadow-lg">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge className="text-xs font-semibold px-4 py-1 rounded-full shadow bg-accent/20 text-accent border border-accent/40">
                White-Glove Service
              </Badge>
            </div>

            <div className="mb-6">
              <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-2">
                Listing Fee
              </p>
              <h3 className="font-heading text-2xl text-foreground mb-1">Prestige</h3>
              <div className="flex items-baseline gap-1 mt-3">
                <span className="font-heading text-4xl text-accent font-semibold">2.49%</span>
                <span className="text-muted-foreground text-sm">listing fee</span>
              </div>
            </div>

            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Everything in Distinction, plus:
            </p>
            <ul className="space-y-2.5 flex-1">
              {[...FOUNDATION_FEATURES, ...DISTINCTION_EXTRAS, ...PRESTIGE_EXTRAS].map((f) => (
                <FeatureRow key={f} text={f} />
              ))}
            </ul>

            <Button asChild variant="accent" className="mt-8 w-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-10 mx-auto max-w-2xl border border-border/60 rounded-lg px-6 py-4 bg-background/60">
          <p className="text-center text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground/70">Disclaimer: </span>
            Buyer&apos;s agent commission is negotiated separately and not included in the listing fee.
            Commission rates are negotiable and not set by law. All fees subject to listing agreement terms.
          </p>
        </div>
      </div>
    </section>
  );
}
