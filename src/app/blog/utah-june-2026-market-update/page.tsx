import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah June 2026 Market Update: What the Numbers Mean for Buyers and Sellers",
  description:
    "Salt Lake County homes are selling in 49 days at $688K. Utah County sits at 60 days and $653K. Here's what June's data means if you're thinking about buying or selling.",
  openGraph: {
    title: "Utah June 2026 Market Update: What the Numbers Mean for Buyers and Sellers",
    description:
      "Salt Lake County homes are selling in 49 days at $688K. Utah County sits at 60 days and $653K. Here's what June's data means if you're thinking about buying or selling.",
    url: "/blog/utah-june-2026-market-update",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah June 2026 Market Update: What the Numbers Mean for Buyers and Sellers",
    description:
      "Salt Lake County homes are selling in 49 days at $688K. Utah County sits at 60 days and $653K. Here's what June's data means if you're thinking about buying or selling.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: What June 15–24 Is Telling Us",
    body: "The mid-June data is in for both counties, and the story is consistent: homes are moving, sold prices are tracking closely to list, and the market is rewarding sellers who show up prepared. In Utah County, 199 homes closed with an average sold price of $653K against a list price of $658K — a spread of less than 1%. Salt Lake County closed 265 homes at $688K sold versus $696K listed — similarly tight. Days on market landed at 60 for Utah County and 49 for Salt Lake County. These numbers aren't outliers. They reflect a market that is active, fairly priced, and functioning well for both sides of the transaction.",
    tip: "A sold-to-list ratio above 98% is a healthy sign. It means sellers aren't dramatically overpricing, and buyers aren't getting deep discounts. Right now, both counties are in that range.",
  },
  {
    number: "02",
    title: "Days on Market: What 49 and 60 Days Actually Mean",
    body: "Days on market often gets misread. A 49-day DOM in Salt Lake County doesn't mean a home sat for seven weeks with no interest — it means that from the time it was listed to the time it closed, 49 days passed. That window includes negotiation, inspections, appraisals, and loan processing. In most cases, well-priced homes in Salt Lake are going under contract in the first two to three weeks. The 60-day figure in Utah County follows the same logic. If your home is priced correctly and presented well, you should expect serious buyer activity within the first 10–14 days. After that, the process takes its course.",
    tip: "If a home has been on the market longer than the county average, price is almost always the reason. Buyers have access to the same data you do — and they know when something is overpriced.",
  },
  {
    number: "03",
    title: "Salt Lake County Is Moving Faster — Here's Why It Matters",
    body: "The 11-day gap between Salt Lake (49 DOM) and Utah County (60 DOM) is consistent with historical patterns. Salt Lake County benefits from higher job density, shorter commutes to major employment centers, and more buyer demand concentrated in a smaller geographic area. The $35K gap in average sold price ($688K vs. $653K) reflects that demand premium. For sellers in Salt Lake County, that combination — faster pace, higher prices — is about as favorable as this market gets outside of a full-on bidding war environment. For buyers who need more runway, Utah County offers slightly more time to decide without dramatically sacrificing access to amenities or quality of life.",
    tip: "If your budget is flexible between counties, it's worth running a side-by-side comparison of what $660K buys you in each market right now. The difference in square footage and lot size can be significant.",
  },
  {
    number: "04",
    title: "Thinking About Selling? Here's How to Make the Most of This Window",
    body: "You currently have three things working in your favor: homes are selling within 1% of list price, transaction volume is healthy, and you're inside the peak summer selling window. But this combination doesn't last forever. The late-summer slowdown typically begins to show up in August data, and sellers who miss the June–July window often end up competing with a reset fall inventory. The sellers who win in this environment are the ones who price accurately from day one, present their home well, and have an agent who understands how to negotiate in a market where buyers are informed and have options.",
    tip: "Pricing right the first time isn't conservative — it's strategic. Homes that come out at the right price generate competition. Homes that come out too high train buyers to wait for a reduction.",
  },
  {
    number: "05",
    title: "The Smart Seller Program: More Service, Less Commission",
    body: "If you're ready to sell — or getting close — the Smart Seller Program gives you full MLS exposure, professional photography, and expert negotiation at a fraction of traditional commission. The Gold package starts at 1% and covers everything you need to get on the market: HDR photos, professional market analysis, Supra lockbox, yard sign, listing on MLS and 500+ websites, 24/7 showing service, and professional contract negotiation. The Diamond package (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. The Platinum package (2.49%) goes further with a Zillow Showcase listing, an interactive 3D tour, virtual staging, paid social media ads, multiple open houses, and weekly market updates directly from Ammon. Every package includes a cancel-anytime policy — no lock-in, no pressure. Homes featured on Zillow Showcase sell for 2% more on average, which at Utah County's current average sold price of $653K is roughly $13,000 back in your pocket.",
    tip: "Traditional listing commissions often run 2.5–3%. The Smart Seller Program keeps more of your equity in your hands without sacrificing the marketing or negotiation quality that gets homes sold.",
  },
  {
    number: "06",
    title: "What This Means If You're Buying Right Now",
    body: "The good news for buyers: 49–60 days on market means you're not in a frantic multiple-offer environment on every home. You have time to be deliberate. The caution: that window is shorter than it sounds. With 199 closings in Utah County and 265 in Salt Lake County in just ten days, inventory is moving steadily. The homes that are sitting are the ones that are overpriced or have condition issues. Well-priced, well-presented homes in desirable neighborhoods are still going under contract quickly. Buyers who are pre-approved, clear on their criteria, and working with an agent who knows the local market are the ones winning right now.",
    tip: "Get pre-approved before you start touring. In a market where the right home can go under contract in two weeks, being unprepared on financing means you're already behind the buyers who did their homework.",
  },
];

export default function JuneMarketUpdatePost() {
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
              "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">
              Market Update
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> June 24, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah June 2026 Market Update: What the Numbers Mean for Buyers and Sellers
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Salt Lake County homes are selling in 49 days at $688K. Utah County
            sits at 60 days and $653K. Here&apos;s what the mid-June data means
            — and what to do about it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Mid-June is one of the most telling moments in the Utah real estate
              calendar. The spring rush has settled into a steady summer pace,
              and the data from June 15–24 gives us a clear, unfiltered read on
              where both counties actually stand — not where people hoped they&apos;d
              be, but where transactions are actually closing.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The short version: the market is healthy, prices are stable,
              and homes that are priced and presented correctly are selling. If
              you&apos;re thinking about making a move — in either direction — here&apos;s
              what the numbers say.
            </p>
          </div>
        </div>
      </section>

      {/* Stats callout */}
      <section className="py-10 bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-primary p-6">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                Utah County
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Avg Days on Market", value: "60" },
                  { label: "Number of Sales", value: "199" },
                  { label: "Avg List Price", value: "$658K" },
                  { label: "Avg Sold Price", value: "$653K" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl text-accent font-semibold">
                      {stat.value}
                    </p>
                    <p className="text-white/70 text-xs mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-primary p-6">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-4">
                Salt Lake County
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Avg Days on Market", value: "49" },
                  { label: "Number of Sales", value: "265" },
                  { label: "Avg List Price", value: "$696K" },
                  { label: "Avg Sold Price", value: "$688K" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl text-accent font-semibold">
                      {stat.value}
                    </p>
                    <p className="text-white/70 text-xs mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-xs mt-4">
            June 15–24, 2026 · Source: WFRMLS
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 pt-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {SECTIONS.map((section) => (
              <div key={section.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="font-heading text-accent font-bold text-sm">
                      {section.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.body}
                  </p>
                  <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg px-4 py-3">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-accent">Pro tip: </span>
                      {section.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Smart Seller Package Comparison */}
          <div className="mt-16 rounded-2xl border border-border/60 overflow-hidden">
            <div className="bg-primary px-8 py-6">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">
                Childs Real Estate
              </p>
              <h3 className="font-heading text-2xl text-white">
                Smart Seller Programs at a Glance
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Full MLS exposure, professional photography, expert negotiation — cancel anytime.
              </p>
            </div>
            <div className="divide-y divide-border/50">
              {[
                {
                  name: "Gold",
                  fee: "1%",
                  features: [
                    "HDR interior & exterior photos",
                    "Professional market analysis",
                    "Listed on MLS and 500+ websites",
                    "24/7 showing service",
                    "Professional contract negotiation",
                  ],
                },
                {
                  name: "Diamond",
                  fee: "1.99%",
                  features: [
                    "Everything in Gold, plus:",
                    "Professional drone photos",
                    "Dedicated showing agent",
                    "Featured open house",
                    "Weekly social media ads",
                  ],
                  popular: true,
                },
                {
                  name: "Platinum",
                  fee: "2.49%",
                  features: [
                    "Everything in Gold & Diamond, plus:",
                    "Zillow Showcase listing ★",
                    "Interactive 3D home tour",
                    "Virtual staging",
                    "Paid social media ads & multiple open houses",
                  ],
                },
              ].map((pkg) => (
                <div key={pkg.name} className="px-8 py-6 flex items-start gap-6 bg-background">
                  <div className="flex-shrink-0 w-28">
                    <p className="font-heading text-lg text-foreground">{pkg.name}</p>
                    <p className="font-heading text-3xl text-accent font-semibold">{pkg.fee}</p>
                    <p className="text-muted-foreground text-xs">listing fee</p>
                    {pkg.popular && (
                      <span className="inline-block mt-1 text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-muted/40 px-8 py-4 text-center">
              <Button asChild variant="accent" size="sm" className="gap-2">
                <Link href="/packages">
                  See Full Package Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                $295 transaction fee due at closing. Buyer&apos;s agent commission negotiated separately. Seller can cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Sources
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, June 15–24, 2026.
            </li>
            <li>
              Zillow Research — Zillow Showcase sells for 2% more on average (internal Zillow data, 2025).
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            The Market Is Moving
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Talk About Your Next Move
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re ready to list or just starting to think about it,
            we&apos;ll give you a straight read on what your home is worth and what
            the market looks like for your specific situation — no pressure,
            just data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent" className="gap-2">
              <Link href="/sell">
                Get My Free Home Valuation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/packages">View Smart Seller Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
