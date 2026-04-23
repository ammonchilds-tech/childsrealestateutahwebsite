import Link from "next/link";
import { TrendingUp, Sparkles, Users, Home, Star } from "lucide-react";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, OFFICE } from "@/lib/constants";
import { SellerHero } from "@/components/home/SellerHero";
import { MarketStats } from "@/components/home/MarketStats";
import { PromoBanner } from "@/components/home/PromoBanner";
import { SellingProcessPreview } from "@/components/home/SellingProcessPreview";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ListingPackages } from "@/components/home/ListingPackages";

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
    streetAddress: "825 E 1180 S 300",
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
    name: "Berkshire Hathaway HomeServices Elite Real Estate",
  },
  sameAs: [
    "https://www.facebook.com/childsrealestateutah",
    "https://www.instagram.com/childsrealestateutah",
    SITE_URL,
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <PromoBanner />
      <SellerHero />
      <MarketStats />

      {/* Featured Testimonial */}
      <section className="py-14 bg-muted/50 border-y border-border/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed italic">
            &ldquo;Ammon and Tasha are amazing people. They are always willing to answer questions,
            explain options, and offer honest advice. Their experience and local knowledge set
            them apart from other real estate agents.&rdquo;
          </blockquote>
          <p className="mt-5 text-sm text-muted-foreground">
            — Jeff Brady &nbsp;·&nbsp;{" "}
            <span className="inline-flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 inline" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google Review
            </span>
          </p>
        </div>
      </section>

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

      <ListingPackages />
      <SellingProcessPreview />
      {/* <FeaturedAreas /> archived */}
      <TeamPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
