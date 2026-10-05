import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, OFFICE } from "@/lib/constants";
import { anton, dmSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: `Utah's Top Listing Agents | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `Utah's Top Listing Agents | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Utah's Top Listing Agents | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};
import { SellerHero } from "@/components/home/SellerHero";
import { MarketStats } from "@/components/home/MarketStats";
import { TeamPreview } from "@/components/home/TeamPreview";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ListingPackages } from "@/components/home/ListingPackages";

const SELLER_BENEFITS = [
  {
    title: "Strategic Pricing",
    description:
      "Data-driven market analysis to price your home for maximum value and a fast, confident sale.",
  },
  {
    title: "Professional Marketing",
    description:
      "High-end photography, drone footage, virtual tours, and targeted digital campaigns that get eyes on your home.",
  },
  {
    title: "Expert Negotiation",
    description:
      "Proven track record of securing top-dollar offers and favorable terms for our sellers.",
  },
  {
    title: "Concierge Service",
    description:
      "From staging consultations to closing day, we handle every detail so you can focus on what's next.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: OFFICE.phone,
  email: OFFICE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "825 E 1180 S Ste 300",
    addressLocality: "American Fork",
    addressRegion: "UT",
    postalCode: "84003",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: OFFICE.lat,
    longitude: OFFICE.lng,
  },
  areaServed: [
    { "@type": "City", "name": "American Fork", "addressRegion": "UT" },
    { "@type": "City", "name": "Provo", "addressRegion": "UT" },
    { "@type": "City", "name": "Orem", "addressRegion": "UT" },
    { "@type": "City", "name": "Lehi", "addressRegion": "UT" },
    { "@type": "City", "name": "Salt Lake City", "addressRegion": "UT" },
    { "@type": "City", "name": "Draper", "addressRegion": "UT" },
    { "@type": "City", "name": "Sandy", "addressRegion": "UT" },
    { "@type": "City", "name": "Saratoga Springs", "addressRegion": "UT" },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Simple Choice Real Estate",
  },
  sameAs: [
    "https://www.facebook.com/childsrealestateutah",
    "https://www.instagram.com/childsrealestateutah",
    SITE_URL,
  ],
};

export default function HomePage() {
  return (
    <div className={`home-gs ${anton.variable} ${dmSans.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <SellerHero />
      <ListingPackages />
      <MarketStats />

      {/* Why Sell With Us */}
      <section className="py-20 md:py-28 bg-white text-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              The Childs
              <br />
              Advantage
            </h2>
            <div className="max-w-xl space-y-3 text-neutral-700">
              <p className="text-lg">
                When you list with us, you get a full-service team dedicated to
                getting you the best outcome — not just a sign in the yard.
              </p>
              <p className="text-base">
                Childs Real Estate specializes in listing representation across Utah. As top listing agents, we focus exclusively on helping homeowners maximize their sale price, minimize days on market, and navigate every step of the selling process with confidence.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SELLER_BENEFITS.map((benefit, i) => (
              <div
                key={benefit.title}
                className="bg-ink text-white p-8 min-h-[260px] flex flex-col gap-4"
              >
                <span className="font-display text-gold text-[44px] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-white/75 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/sell"
              className="group inline-flex items-center gap-2 font-bold border-b-2 border-ink pb-1"
            >
              See our full selling process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* <FeaturedAreas /> archived */}
      <TeamPreview />
      <HomeCTA />
    </div>
  );
}
