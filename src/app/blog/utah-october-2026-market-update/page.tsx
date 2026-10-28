import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah October 2026 Market Update: Sales Thin Out and Utah County Prices Reset Lower",
  description:
    "Utah County closed just 66 homes and Salt Lake County 137 in mid-to-late October as higher mortgage rates and the fall season thinned out the market. Days on market rose in both counties, Utah County's average sold price fell below Salt Lake County's, and sellers are still closing within about 2% of list.",
  openGraph: {
    title: "Utah October 2026 Market Update: Sales Thin Out and Utah County Prices Reset Lower",
    description:
      "Utah County closed just 66 homes and Salt Lake County 137 in mid-to-late October as higher mortgage rates and the fall season thinned out the market. Days on market rose in both counties, Utah County's average sold price fell below Salt Lake County's, and sellers are still closing within about 2% of list.",
    url: "/blog/utah-october-2026-market-update",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah October 2026 Market Update: Sales Thin Out and Utah County Prices Reset Lower",
    description:
      "Utah County closed just 66 homes and Salt Lake County 137 in mid-to-late October as higher mortgage rates and the fall season thinned out the market. Days on market rose in both counties, Utah County's average sold price fell below Salt Lake County's, and sellers are still closing within about 2% of list.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: What October 15–28 Is Telling Us",
    body: "The fall market has settled in. Utah County closed 66 homes in this window at an average sold price of $572,381 against a $580,959 list price — a sold-to-list ratio of 98.5%. Salt Lake County closed 137 homes at $605,500 sold versus $616,622 listed, a 98.2% ratio. Days on market rose in both counties: Utah County from 72 to 76, and Salt Lake County from 57 to 68. Homes are taking longer to sell and fewer are closing, but the ones that do close are still landing within about 2% of their asking price.",
    tip: "A sold-to-list ratio above 98% in a slow month tells you buyers aren't lowballing well-priced homes. The market is rewarding accurate pricing, not punishing sellers across the board.",
  },
  {
    number: "02",
    title: "Sales Volume Drops Sharply as Rates and the Season Bite",
    body: "Utah County went from 214 closed sales in the August 21–September 3 window to 66 in this one, a drop of about 69%. Salt Lake County went from 296 to 137, down about 54%. Part of that is the normal fall slowdown, which was already showing up in our September update. Part of it is rates: the 30-year fixed average jumped to 7.28% in early October, its highest level since November 2023, and many of the homes closing now went under contract around that time. Buyers who were on the fence at 7% had one more reason to wait.",
    tip: "Fewer closings also means fewer competing listings for buyers to choose from. Sellers who list in a thin market get more attention per showing than in the crowded summer months.",
  },
  {
    number: "03",
    title: "Utah County Prices Reset — and Now Sit Below Salt Lake County",
    body: "Utah County's average sold price fell from $675,628 to $572,381, a drop of about $103K, or 15%. Salt Lake County's eased from $639,781 to $605,500, down about $34K, or 5%. For the first time in this year's updates, Utah County's average sold price is below Salt Lake County's. Read that carefully, though. With only 66 Utah County sales in the window, a handful of higher-priced homes not closing can pull the average down sharply, and sold-to-list ratios barely moved. This looks more like a shift toward moderately priced homes closing than a 15% drop in what any individual home is worth.",
    tip: "Small sample sizes make averages jumpy. If you want to know what your home is worth this fall, ask for a comparative market analysis built on recent sales in your neighborhood, not the county average.",
  },
  {
    number: "04",
    title: "Days on Market Climbs in Both Counties — What Sellers Should Do",
    body: "Utah County's average days on market has now risen in every update since mid-July: 59, then 64, then 72, and now 76. Salt Lake County, which held nearly flat at 57 in early September, jumped to 68. Homes that sell quickly in this market are priced right from the first day, photographed well, and ready to show. Homes that start high and plan to cut later are the ones pushing those averages up. With rates where they are, buyers are calculating monthly payments closely and passing on listings that don't feel like a fair deal.",
    tip: "Consider offering a seller-paid rate buydown instead of a price cut. A few thousand dollars toward the buyer's rate can lower their monthly payment more than an equal price reduction, and it keeps your sale price intact.",
  },
  {
    number: "05",
    title: "The Smart Seller Program: More Service, Less Commission",
    body: "If you're getting ready to sell this fall, the Smart Seller Program gives you full MLS exposure, professional photography, and expert negotiation at a fraction of traditional commission. The Gold package starts at 1% and covers everything you need to get on the market: HDR photos, professional market analysis, Supra lockbox, yard sign, listing on MLS and 500+ websites, 24/7 showing service, and professional contract negotiation. The Diamond package (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. The Platinum package (2.49%) goes further with a Zillow Showcase listing, an interactive 3D tour, virtual staging, paid social media ads, multiple open houses, and weekly market updates directly from Ammon. Every package includes a cancel-anytime policy — no lock-in, no pressure. Homes featured on Zillow Showcase sell for 2% more on average, which at Utah County's current average sold price of about $572K is roughly $11,400 back in your pocket.",
    tip: "The commission you save with the Smart Seller Program can fund a rate buydown for your buyer — a strong selling point when rates are above 7%.",
  },
  {
    number: "06",
    title: "What This Means If You're Buying Right Now",
    body: "This is the most buyer-friendly stretch of 2026 so far. Days on market is up in both counties, fewer buyers are competing, and sellers whose homes have been sitting are more open to concessions. The tradeoff is rates above 7%, which cut into buying power. Buyers who can handle today's payment have more room to negotiate on price, repairs, and closing costs. Listings that have sat past the county averages of 68 to 76 days are where you'll find the most flexibility.",
    tip: "Ask your lender to run your numbers with a seller-paid buydown. Many sellers are open to one this fall, and it can make a home affordable at today's rates.",
  },
];

export default function OctoberMarketUpdatePost() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "#0A0A0A",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #D8AA3F 1px, transparent 1px)",
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
              <Calendar className="h-3 w-3" /> October 28, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah October 2026 Market Update: Sales Thin Out and Utah County Prices Reset Lower
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Utah County closed just 66 homes and Salt Lake County 137 in
            mid-to-late October as higher mortgage rates and the fall season
            thinned out the market. Days on market rose in both counties,
            Utah County&apos;s average sold price fell below Salt Lake
            County&apos;s, and sellers are still closing within about 2% of
            list.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              The October 15–28 data shows a market that has fully shifted
              into its fall pace, with higher mortgage rates adding to the
              usual seasonal slowdown. Sales volume fell sharply in both
              counties, and days on market rose again in Utah County and
              Salt Lake County alike.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Utah County&apos;s average sold price also dropped below Salt
              Lake County&apos;s for the first time in this year&apos;s
              updates. Here&apos;s what the numbers say, and what it means
              whether you&apos;re buying or selling this fall.
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
                  { label: "Avg Days on Market", value: "76" },
                  { label: "Number of Sales", value: "66" },
                  { label: "Avg List Price", value: "$581K" },
                  { label: "Avg Sold Price", value: "$572K" },
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
                  { label: "Avg Days on Market", value: "68" },
                  { label: "Number of Sales", value: "137" },
                  { label: "Avg List Price", value: "$617K" },
                  { label: "Avg Sold Price", value: "$606K" },
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
            October 15–28, 2026 · Source: WFRMLS
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, October 15–28, 2026.
            </li>
            <li>
              Freddie Mac Primary Mortgage Market Survey — 30-year fixed average of 7.28% (October 1, 2026).
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
