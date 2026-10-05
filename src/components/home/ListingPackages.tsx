import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="listing-packages" className="py-20 md:py-28 bg-white text-ink scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Smart Seller
              <br />
              Programs
            </h2>
            <div className="mt-6 inline-flex items-center gap-2.5 bg-gold rounded-full px-5 py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-ink animate-pulse flex-shrink-0" />
              <p className="text-sm font-bold tracking-wide">Seller can cancel anytime!</p>
            </div>
          </div>
          <p className="max-w-md text-lg text-neutral-700">
            Choose the level of service that fits your goals — every program includes
            full MLS exposure, professional photography, and expert negotiation.
          </p>
        </div>

        {/* 3-tier grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "rounded-[20px] p-8 md:p-10 flex flex-col",
                pkg.featured ? "bg-ink text-white" : "bg-white border border-[#E7E4DD]"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">{pkg.name}</h3>
                {pkg.featured ? (
                  <span className="bg-gold text-ink text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {pkg.badge}
                  </span>
                ) : pkg.badge ? (
                  <span className="border border-ink text-ink text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {pkg.badge}
                  </span>
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full bg-gold" aria-hidden="true" />
                )}
              </div>

              <p
                className={cn(
                  "mt-5 text-7xl md:text-[80px] font-extrabold leading-[0.9] tracking-[-0.04em]",
                  pkg.featured && "text-gold"
                )}
              >
                {pkg.fee}
              </p>
              <p className={cn("mt-2 text-sm", pkg.featured ? "text-white/70" : "text-neutral-600")}>
                listing fee
              </p>

              <ul
                className={cn(
                  "mt-6 pt-6 border-t space-y-2.5 flex-1",
                  pkg.featured ? "border-white/20" : "border-[#E7E4DD]"
                )}
              >
                {pkg.highlights.map((h) => (
                  <li
                    key={h}
                    className={cn(
                      "text-[15px]",
                      h.endsWith(":")
                        ? "font-bold"
                        : pkg.featured
                          ? "text-white/85"
                          : "text-neutral-700"
                    )}
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <ul
                className={cn(
                  "mt-6 pt-4 border-t space-y-1.5",
                  pkg.featured ? "border-white/20" : "border-[#E7E4DD]"
                )}
              >
                {pkg.footer.map((note) => (
                  <li
                    key={note}
                    className={cn("text-xs", pkg.featured ? "text-white/60" : "text-neutral-500")}
                  >
                    {note}
                  </li>
                ))}
              </ul>

              <Link
                href="/sell"
                className={cn(
                  "mt-8 inline-flex items-center justify-center h-13 min-h-[52px] rounded-full font-bold transition-colors",
                  pkg.featured
                    ? "bg-gold text-ink hover:bg-gold/90"
                    : "border-2 border-ink hover:bg-ink hover:text-white"
                )}
              >
                Choose {pkg.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Zillow stat + details link */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="inline-flex items-center gap-2.5">
            <Star className="h-4 w-4 text-gold fill-gold flex-shrink-0" />
            <p className="text-sm font-semibold">
              Homes featured on Zillow Showcase sell for 2% more on average
            </p>
          </div>
          <Link
            href="/packages"
            className="group inline-flex items-center gap-2 font-bold border-b-2 border-ink pb-1 self-start"
          >
            See full package details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          Buyer&apos;s agent commission negotiated separately. All fees subject to listing agreement.
        </p>
      </div>
    </section>
  );
}
