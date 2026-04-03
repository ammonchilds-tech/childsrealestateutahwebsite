import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Mountain,
  School,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Neighborhood Guide: Utah County | ${SITE_NAME}`,
  description:
    "An in-depth look at the top cities and communities in Utah County — Highland, Alpine, American Fork, Lehi, and more. Find the right fit for your family.",
  openGraph: {
    title: `Neighborhood Guide: Utah County | ${SITE_NAME}`,
    description: "An in-depth look at the top cities and communities in Utah County — Highland, Alpine, American Fork, Lehi, and more. Find the right fit for your family.",
    url: "/resources/neighborhood-guide",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Neighborhood Guide: Utah County | ${SITE_NAME}`,
    description: "An in-depth look at the top cities and communities in Utah County — Highland, Alpine, American Fork, Lehi, and more. Find the right fit for your family.",
  },
};

const NEIGHBORHOODS = [
  {
    number: "01",
    title: "Highland",
    tagline: "Luxury living with mountain backdrop",
    body: "Highland is one of Utah County's most sought-after communities, known for large lots, custom-built homes, and stunning views of both Mount Timpanogos and Utah Lake. The city has a quiet, rural feel while still being minutes from shopping and major employers. Homes here tend to be on the higher end of the market, with many properties sitting on half-acre to acre-plus lots. Highland is a top choice for buyers who want space, privacy, and prestige.",
    tip: "Highland consistently has some of the highest resale values in Utah County. Buying here is both a lifestyle and a long-term investment.",
    highlights: ["Large lots & custom homes", "Top-rated Alpine School District", "Low density, private feel", "Close to Thanksgiving Point"],
  },
  {
    number: "02",
    title: "Alpine",
    tagline: "Exclusive mountain community with character",
    body: "Nestled at the base of the Wasatch Range, Alpine offers an unmatched combination of natural beauty and tight-knit community. The city strictly limits commercial development, which keeps it feeling peaceful and residential. Many homes back to open space, trails, or mountain terrain. Alpine is a destination for buyers who want a truly private, nature-connected lifestyle without sacrificing proximity to the rest of the valley.",
    tip: "Alpine has some of the strictest zoning in Utah County — which is exactly why property values remain strong. Limited supply keeps demand high.",
    highlights: ["Trail access & open space", "Limited commercial development", "Strong community identity", "Premium home values"],
  },
  {
    number: "03",
    title: "American Fork",
    tagline: "Family-friendly hub with everything you need",
    body: "American Fork sits at the heart of Utah County and offers an ideal blend of affordability, convenience, and community. The downtown is growing with new restaurants and shops, while established neighborhoods offer a range of home styles from starter homes to executive properties. American Fork Canyon — one of Utah's most stunning outdoor destinations — is literally in the backyard, offering hiking, camping, and Timpanogos Cave National Monument.",
    tip: "American Fork is one of the best value plays in Utah County. It offers the lifestyle of neighboring Highland and Alpine at a lower entry point.",
    highlights: ["Diverse price range", "American Fork Canyon access", "Thriving downtown", "Strong resale demand"],
  },
  {
    number: "04",
    title: "Cedar Hills",
    tagline: "Charming, elevated community with trail access",
    body: "Cedar Hills is a small, walkable city with a strong neighborhood identity. Tucked between Pleasant Grove and Highland, it offers quick access to both the Murdock Canal Trail and the Jordan River Parkway — making it a favorite among outdoor enthusiasts. Homes are primarily single-family with well-kept yards, and the community hosts regular events that keep neighbors connected. It's a wonderful choice for families who want a smaller-town feel close to the bigger cities.",
    tip: "Cedar Hills is often overlooked but consistently punches above its weight in livability, safety, and community engagement.",
    highlights: ["Murdock Canal Trail access", "Tight-knit community", "Walkable neighborhoods", "Competitive pricing"],
  },
  {
    number: "05",
    title: "Lehi",
    tagline: "The fastest-growing city in Utah County",
    body: "Lehi has transformed from a small farming town into one of the most dynamic cities in the state. Home to dozens of major tech companies — including Adobe, Ancestry, Xactware, and many others — Lehi's 'Silicon Slopes' corridor has driven massive population and economic growth. New construction is plentiful, with master-planned communities offering modern homes, amenities, and easy freeway access. Buyers choosing Lehi are betting on continued growth — and the data supports it.",
    tip: "Lehi has one of the strongest job markets in the state. If you work in tech, buying in Lehi may mean a 5-minute commute instead of 45.",
    highlights: ["Silicon Slopes tech hub", "Abundance of new construction", "Strong appreciation history", "Costco, Thanksgiving Point, top dining"],
  },
  {
    number: "06",
    title: "Pleasant Grove",
    tagline: "Classic Utah County living with small-town roots",
    body: "Pleasant Grove — affectionately called 'PG' by locals — is one of Utah County's most established communities. With tree-lined streets, a charming downtown district, and a strong sense of history, it offers a classic suburban lifestyle at accessible price points. The city sits at the foot of Mount Timpanogos and has excellent freeway access in all directions. It's a great option for buyers who want an established neighborhood with a proven track record.",
    tip: "Pleasant Grove's older neighborhoods often have larger lots than newer developments — a hidden advantage for buyers who value outdoor space.",
    highlights: ["Established neighborhoods", "Access to I-15", "Historic downtown area", "Competitive price points"],
  },
  {
    number: "07",
    title: "Saratoga Springs",
    tagline: "Lakeside living with room to grow",
    body: "Saratoga Springs sits along the western shore of Utah Lake and has experienced explosive growth over the past decade. Newer master-planned communities offer modern floor plans, community pools, parks, and amenities at price points that are often more accessible than the east bench cities. The city has a young demographic and a growing commercial base. For buyers who prioritize new construction and community amenities, Saratoga Springs is a compelling choice.",
    tip: "Saratoga Springs offers some of the best price-per-square-foot values in Utah County. For buyers who want more home for the money, it's worth a close look.",
    highlights: ["Utah Lake access", "New construction abundance", "Community amenities & pools", "Value-oriented pricing"],
  },
  {
    number: "08",
    title: "Eagle Mountain",
    tagline: "Wide open spaces at the edge of the valley",
    body: "Eagle Mountain is the westernmost city in Utah County and one of the fastest-growing in the state. It offers large lots, newer homes, and some of the most affordable price points in the region. The wide, open landscape and big skies appeal to buyers who want breathing room. While it's more removed from commercial centers, continued growth is bringing more retail and services closer to home. For buyers willing to trade a bit of commute for a lot of value, Eagle Mountain delivers.",
    tip: "Eagle Mountain is where first-time buyers often get their best opportunity to enter the market. The entry price point is significantly lower than eastern Utah County cities.",
    highlights: ["Lowest price points in Utah County", "Large lots & newer builds", "Fast-growing community", "Great for first-time buyers"],
  },
  {
    number: "09",
    title: "Lindon",
    tagline: "Quietly well-positioned in the heart of the county",
    body: "Lindon is one of Utah County's best-kept secrets. Tucked between American Fork and Orem along the I-15 corridor, it offers an excellent central location without the traffic and density of its larger neighbors. The city is primarily residential with well-kept neighborhoods, good schools, and quick freeway access in every direction. Lindon's proximity to the tech corridor and major employment centers makes it an especially smart choice for commuters.",
    tip: "Lindon consistently delivers strong value — you get the location advantages of Orem and American Fork at a price point that often surprises buyers.",
    highlights: ["Central Utah County location", "Quick I-15 access", "Quiet residential feel", "Alpine School District"],
  },
  {
    number: "10",
    title: "Orem",
    tagline: "Utah County's commercial hub with diverse options",
    body: "Orem is one of the most dynamic cities in Utah County, home to Utah Valley University, a thriving commercial corridor along State Street, and housing options that range from affordable condos to upscale east bench properties with panoramic mountain views. East Orem — particularly above 800 East — offers some of the most desirable hillside lots in the county. Orem's combination of size, amenities, and accessibility makes it a strong choice for families, young professionals, and investors alike.",
    tip: "East Orem is often undervalued relative to the views and lot sizes it offers. It's worth exploring if you want more home for your budget without leaving a central location.",
    highlights: ["Diverse price range", "Utah Valley University", "Strong rental investment market", "Easy access to dining & retail"],
  },
  {
    number: "11",
    title: "Provo",
    tagline: "County seat with a thriving downtown and BYU energy",
    body: "Provo is the cultural and economic center of Utah County. Home to Brigham Young University, a revitalized downtown packed with restaurants and arts, and a booming startup scene, Provo attracts a young, educated, and ambitious population. The Riverbottoms neighborhood along the Provo River is particularly desirable, with executive-level homes backing to one of Utah's finest fly fishing rivers. Downtown Provo continues to see significant reinvestment, making now an excellent time to buy in the city core.",
    tip: "Provo has one of the strongest rental markets in the state thanks to BYU. If you're an investor, a well-located property here can generate consistent income year-round.",
    highlights: ["Brigham Young University", "Revitalized downtown district", "Provo River & trail access", "Strong rental demand"],
  },
  {
    number: "12",
    title: "Springville",
    tagline: "Art City living at the southern end of the valley",
    body: "Springville — proudly known as 'Art City' — has a strong cultural identity rooted in the arts, a charming historic downtown, and some of the most competitive home prices in Utah County. The east bench offers newer construction with stunning views of Utah Lake and the surrounding mountains. Springville's proximity to both Provo and Spanish Fork Canyon gives residents easy access to employment centers and world-class outdoor recreation. It's a community that consistently surprises buyers with its quality of life.",
    tip: "Springville's east bench developments offer newer builds and mountain views at prices significantly lower than comparable homes in northern Utah County.",
    highlights: ["Affordable entry price points", "Spanish Fork Canyon access", "Strong arts & culture community", "Easy Provo commute"],
  },
  {
    number: "13",
    title: "Spanish Fork",
    tagline: "Small-town warmth with room to breathe",
    body: "Spanish Fork sits at the confluence of the main valley and Spanish Fork Canyon — one of Utah's most scenic drives — giving residents unmatched access to outdoor recreation including Hobble Creek Canyon, Diamond Fork Hot Springs, and Strawberry Reservoir. The city has a friendly, small-town atmosphere and is growing rapidly as buyers seek more space and value south of Provo. Newer subdivisions offer modern floor plans at prices that stretch budgets further than comparable homes to the north.",
    tip: "Spanish Fork is ideal for outdoor enthusiasts. If your weekends involve canyons, fishing, and off-road trails, you'll have some of Utah's best within 20 minutes of your front door.",
    highlights: ["Hobble Creek Canyon access", "Affordable & growing community", "Modern new construction", "Strong community events"],
  },
  {
    number: "14",
    title: "Payson",
    tagline: "Gateway to Mount Nebo with small-town character",
    body: "Payson sits at the southern gateway of Utah County, anchored by a charming historic downtown and framed by Mount Nebo — the highest peak in the Wasatch Range. The city has seen a meaningful uptick in growth and new development, attracting buyers who want affordability, space, and a genuine small-town lifestyle without sacrificing access to the broader valley. New master-planned communities are bringing modern amenities to a city that has long been one of Utah County's most underappreciated gems.",
    tip: "Payson buyers often get significantly more square footage and lot size per dollar than anywhere else in Utah County. It's one of the best value plays for buyers who aren't tied to a specific north-county location.",
    highlights: ["Mount Nebo & outdoor access", "Historic downtown Payson", "New construction at great value", "Growing commercial base"],
  },
  {
    number: "15",
    title: "Santaquin",
    tagline: "Peaceful living at the edge of the valley",
    body: "Santaquin is the southernmost city in Utah County and one of the most tranquil. Wide open vistas, newer subdivisions, and some of the county's most affordable home prices make it an appealing destination for buyers who want to maximize space and escape density without sacrificing a Utah County address. The community has a tight-knit, rural feel and a pace of life that many buyers are actively seeking. With continued I-15 improvements, Santaquin is more connected to the rest of the valley than its distance might suggest.",
    tip: "Santaquin is where buyers who've been priced out elsewhere often find their first home — or their dream home. The value per square foot is exceptional, and the lifestyle is hard to beat.",
    highlights: ["Most affordable prices in Utah County", "Rural & open feel", "Newer subdivisions with large lots", "Easy I-15 access south"],
  },
];

const SECTIONS = [
  { icon: Mountain, label: "Highland to Cedar Hills", count: "Cities 1–4" },
  { icon: TrendingUp, label: "Lehi to Eagle Mountain", count: "Cities 5–8" },
  { icon: School, label: "Lindon to Springville", count: "Cities 9–12" },
  { icon: Users, label: "Spanish Fork to Santaquin", count: "Cities 13–15" },
];

export default function NeighborhoodGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Market
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Neighborhood Guide:<br className="hidden sm:block" /> Utah County
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A city-by-city breakdown to help you find the community that fits your lifestyle, budget, and goals.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Market Guide
            </span>
            <span>·</span>
            <span>15 min read</span>
            <span>·</span>
            <span>15 communities</span>
          </div>
        </div>
      </section>

      {/* Section Overview */}
      <section className="py-14 border-b border-border/40 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SECTIONS.map((section) => (
              <div key={section.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <section.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="font-heading font-semibold text-primary text-sm mb-0.5">{section.label}</p>
                <p className="text-xs text-muted-foreground">{section.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood List */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {NEIGHBORHOODS.map((hood, index) => (
              <div key={hood.number} className="relative flex gap-6 group">
                {/* Number + connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <span className="font-heading text-sm font-bold text-accent">{hood.number}</span>
                  </div>
                  {index < NEIGHBORHOODS.length - 1 && (
                    <div className="w-px flex-1 bg-border/50 mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <h2 className="font-heading text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                    {hood.title}
                  </h2>
                  <p className="text-accent text-sm font-medium mb-3">{hood.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{hood.body}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
                    {hood.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Pro tip */}
                  <div className="flex gap-3 bg-accent/5 border border-accent/15 rounded-xl p-4">
                    <Star className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-accent">Local Insight: </span>
                      {hood.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Reference */}
          <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              At a Glance: Utah County Communities
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {NEIGHBORHOODS.map((hood) => (
                <div key={hood.number} className="flex items-start gap-2 py-1.5 border-b border-border/30">
                  <span className="text-accent font-mono text-xs font-semibold mt-0.5 w-6 shrink-0">{hood.number}</span>
                  <div>
                    <span className="text-sm text-foreground/80 font-medium">{hood.title}</span>
                    <span className="text-xs text-muted-foreground ml-2">— {hood.tagline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Not Sure Which City is <span className="text-accent">Right for You?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We know every neighborhood in Utah County. Let us help you narrow it down based on your budget, lifestyle, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/resources">
                Back to Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
