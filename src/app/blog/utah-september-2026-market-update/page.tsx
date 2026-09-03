import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah September 2026 Market Update: The Fall Slowdown Arrives as County Prices Split Again",
  description:
    "Utah County closed 214 homes and Salt Lake County closed 296 in the back half of August — both down again as the market eases into fall. Days on market pushed past 70 in Utah County, prices climbed there and slipped in Salt Lake County, and sellers are still closing within about 1.6% of list.",
  openGraph: {
    title: "Utah September 2026 Market Update: The Fall Slowdown Arrives as County Prices Split Again",
    description:
      "Utah County closed 214 homes and Salt Lake County closed 296 in the back half of August — both down again as the market eases into fall. Days on market pushed past 70 in Utah County, prices climbed there and slipped in Salt Lake County, and sellers are still closing within about 1.6% of list.",
    url: "/blog/utah-september-2026-market-update",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah September 2026 Market Update: The Fall Slowdown Arrives as County Prices Split Again",
    description:
      "Utah County closed 214 homes and Salt Lake County closed 296 in the back half of August — both down again as the market eases into fall. Days on market pushed past 70 in Utah County, prices climbed there and slipped in Salt Lake County, and sellers are still closing within about 1.6% of list.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: What August 21–September 3 Is Telling Us",
    body: "The transition into fall is now clearly underway. Utah County closed 214 homes in this window at an average sold price of $675,628 against a $686,475 list price — a sold-to-list ratio of 98.4%. Salt Lake County closed 296 homes at $639,781 sold versus $650,462 listed, also a 98.4% ratio. Days on market moved up again in Utah County, from 64 to 72, while Salt Lake County held nearly flat at 57. The headline is that pricing discipline is still holding — both counties are closing within about 1.6% of list — but homes are taking longer to get there, especially south of the point of the mountain.",
    tip: "When days on market rises but the sold-to-list ratio stays put, it means buyers are still paying near full price — they're just taking more time to commit. That's a patience problem for sellers, not a price problem.",
  },
  {
    number: "02",
    title: "Sales Volume Keeps Cooling — Right on Seasonal Schedule",
    body: "Utah County closed 298 homes in the August 7–21 window and 214 in this one, a 28% drop. Salt Lake County went from 374 to 296, a 21% drop. This is the second straight update showing falling volume in both counties, and at this point it's less a surprise than a confirmation: the late-summer market has handed off to the fall market. Buyer activity typically steps down after Labor Day as families settle into the school year, and the 2026 data is following that script closely.",
    tip: "Fewer sales doesn't mean fewer opportunities — it means less competition. Sellers who list into a quieter fall market often face fewer rival listings, and buyers face fewer bidding wars.",
  },
  {
    number: "03",
    title: "Utah County Prices Climb While Salt Lake County Slips",
    body: "For the second update running, the two counties moved in opposite directions on price. Utah County's average sold price rose from about $609K to $675,628 — a jump of roughly $67K, or 11%. Salt Lake County's average sold price eased from about $677K to $639,781 — down roughly $37K, or 5%. With sold-to-list ratios locked at 98.4% in both counties, this is almost certainly a shift in the mix of homes that closed rather than a real move in values: Utah County saw more higher-priced closings this period, Salt Lake County more moderate-priced ones. Two data points in a row is worth noting, but it's still early to call it a trend.",
    tip: "Average-price headlines swing on which homes happen to close in a given two-week window. For what your specific home is worth, a comparative market analysis on recent nearby sales beats any county average.",
  },
  {
    number: "04",
    title: "Utah County Crosses 70 Days on Market — What Sellers Should Do",
    body: "Utah County's average days on market has climbed from 59 in mid-July to 64 in early August to 72 now. That's a real trend, and it changes how sellers should approach a listing this fall. The homes still selling quickly are the ones priced correctly from day one and shown in their best condition — professional photography, decluttered, minor repairs handled before the first showing. Homes that test a high price and plan to 'adjust later' are the ones adding to that 72-day average, and price cuts after three or four weeks on market tend to net less than pricing right at the start.",
    tip: "The first two weeks on market are when your listing gets the most traffic. Pricing to attract offers in that window is worth more than holding out for a number the market has to be talked into.",
  },
  {
    number: "05",
    title: "The Smart Seller Program: More Service, Less Commission",
    body: "If you're getting ready to sell this fall, the Smart Seller Program gives you full MLS exposure, professional photography, and expert negotiation at a fraction of traditional commission. The Gold package starts at 1% and covers everything you need to get on the market: HDR photos, professional market analysis, Supra lockbox, yard sign, listing on MLS and 500+ websites, 24/7 showing service, and professional contract negotiation. The Diamond package (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. The Platinum package (2.49%) goes further with a Zillow Showcase listing, an interactive 3D tour, virtual staging, paid social media ads, multiple open houses, and weekly market updates directly from Ammon. Every package includes a cancel-anytime policy — no lock-in, no pressure. Homes featured on Zillow Showcase sell for 2% more on average, which at Utah County's current average sold price of about $676K is roughly $13,500 back in your pocket.",
    tip: "Traditional listing commissions often run 2.5–3%. The Smart Seller Program keeps more of your equity in your hands without cutting the marketing or negotiation that actually gets homes sold.",
  },
  {
    number: "06",
    title: "What This Means If You're Buying Right Now",
    body: "A slower fall market tilts slightly toward buyers. Utah County at 72 days on market and both counties posting lower volume means less multiple-offer pressure than the June and July peak brought, and more time to do due diligence without losing the house. The caveat: sold-to-list ratios at 98.4% mean sellers still aren't giving away much on well-priced, well-presented homes. Your leverage is on listings that have been sitting past the county average — those are where price reductions and seller concessions are most likely.",
    tip: "Come pre-approved and know your number before you tour. A cooling market gives you room to negotiate, but the sharply priced listings are still moving quickly.",
  },
];

export default function SeptemberMarketUpdatePost() {
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
              <Calendar className="h-3 w-3" /> September 3, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah September 2026 Market Update: The Fall Slowdown Arrives as County Prices Split Again
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Utah County closed 214 homes and Salt Lake County closed 296 in
            the back half of August — both down again as the market eases
            into fall. Days on market pushed past 70 in Utah County, prices
            climbed there and slipped in Salt Lake County, and sellers are
            still closing within about 1.6% of list.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              The August 21–September 3 data confirms what last month&apos;s
              update hinted at: the market has handed off from its
              late-summer pace to its fall pace. Sales volume fell again in
              both counties, and Utah County&apos;s days on market pushed
              past 70 for the first time this year.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              At the same time, Utah County and Salt Lake County again moved
              in opposite directions on price. Here&apos;s what the numbers
              say, and what it means whether you&apos;re buying or selling
              this fall.
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
                  { label: "Avg Days on Market", value: "72" },
                  { label: "Number of Sales", value: "214" },
                  { label: "Avg List Price", value: "$686K" },
                  { label: "Avg Sold Price", value: "$676K" },
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
                  { label: "Avg Days on Market", value: "57" },
                  { label: "Number of Sales", value: "296" },
                  { label: "Avg List Price", value: "$650K" },
                  { label: "Avg Sold Price", value: "$640K" },
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
            August 21–September 3, 2026 · Source: WFRMLS
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, August 21–September 3, 2026.
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
