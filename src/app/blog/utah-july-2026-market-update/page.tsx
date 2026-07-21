import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah July 2026 Market Update: Sales Volume Hits a 2026 High",
  description:
    "Salt Lake County closed 365 homes and Utah County closed 265 in the first three weeks of July — both 2026 highs. Here's what the surge in sales volume means for buyers and sellers.",
  openGraph: {
    title: "Utah July 2026 Market Update: Sales Volume Hits a 2026 High",
    description:
      "Salt Lake County closed 365 homes and Utah County closed 265 in the first three weeks of July — both 2026 highs. Here's what the surge in sales volume means for buyers and sellers.",
    url: "/blog/utah-july-2026-market-update",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah July 2026 Market Update: Sales Volume Hits a 2026 High",
    description:
      "Salt Lake County closed 365 homes and Utah County closed 265 in the first three weeks of July — both 2026 highs. Here's what the surge in sales volume means for buyers and sellers.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: What July 9–21 Is Telling Us",
    body: "The mid-summer data is in, and it's the strongest volume we've seen all year. Utah County closed 265 homes in this window at an average sold price of $652K against a $661K list price — a sold-to-list ratio of nearly 99%. Salt Lake County closed 365 homes at $683K sold versus $692K listed, an equally tight spread. Days on market held steady at 59 for Utah County and 48 for Salt Lake County. What stands out isn't the pricing — it's the pace. Both counties are closing significantly more transactions than they were in June, a clear sign that peak summer demand is still very much alive.",
    tip: "A sold-to-list ratio near 99% paired with rising sales volume is one of the healthiest combinations a market can show — it means demand is broad, not just concentrated on a handful of underpriced listings.",
  },
  {
    number: "02",
    title: "Sales Volume Is Up Sharply From June — Here's the Scale",
    body: "Utah County closed 199 homes in mid-June; it closed 265 in this three-week July window. Salt Lake County went from 265 closings to 365. That's roughly a one-third increase in transaction volume for both counties, even as days on market barely moved. More homes are changing hands at essentially the same pace as before, which tells you inventory is being absorbed quickly and buyer demand hasn't slowed down for the summer the way it sometimes does by late July.",
    tip: "Rising volume without rising days on market is a sign of a market in balance — not overheating, just busy. It's a good environment to transact in either direction.",
  },
  {
    number: "03",
    title: "Salt Lake County Is Still Moving Faster — and Selling More",
    body: "The 11-day gap between Salt Lake (48 DOM) and Utah County (59 DOM) has held steady for months now, and the $31K gap in average sold price ($683K vs. $652K) reflects the same demand premium we've discussed in past updates. What's new this month is the scale of the volume gap: Salt Lake County is now closing 100 more transactions than Utah County in the same window. For sellers in Salt Lake County, that's about as favorable a combination as this market offers — fast sales, strong prices, and deep buyer demand. For Utah County sellers, the slightly longer timeline still comes with a near-99% sold-to-list ratio, which means pricing discipline is paying off just as well.",
    tip: "If you're comparing counties for a purchase, remember that a faster-moving market rewards buyers who are pre-approved and ready to act the same week a home is listed — not the same month.",
  },
  {
    number: "04",
    title: "Thinking About Selling? The Window Is Still Open, But It's Narrowing",
    body: "You're currently selling into a market with near-record volume, tight sold-to-list spreads, and steady days on market — that's a strong combination. But late July is historically the turning point: the August data usually starts to show the first signs of the seasonal slowdown as buyer traffic thins out heading into fall. Sellers who list in the next few weeks are still catching the tail end of peak season demand. Sellers who wait until September are typically competing against a larger, resetting inventory pool with fewer buyers actively looking.",
    tip: "If you've been on the fence about listing, the next 3–4 weeks are historically the last stretch of true peak-season conditions before the market shifts toward its fall pace.",
  },
  {
    number: "05",
    title: "The Smart Seller Program: More Service, Less Commission",
    body: "If you're ready to sell — or getting close — the Smart Seller Program gives you full MLS exposure, professional photography, and expert negotiation at a fraction of traditional commission. The Gold package starts at 1% and covers everything you need to get on the market: HDR photos, professional market analysis, Supra lockbox, yard sign, listing on MLS and 500+ websites, 24/7 showing service, and professional contract negotiation. The Diamond package (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. The Platinum package (2.49%) goes further with a Zillow Showcase listing, an interactive 3D tour, virtual staging, paid social media ads, multiple open houses, and weekly market updates directly from Ammon. Every package includes a cancel-anytime policy — no lock-in, no pressure. Homes featured on Zillow Showcase sell for 2% more on average, which at Utah County's current average sold price of $652K is roughly $13,000 back in your pocket.",
    tip: "Traditional listing commissions often run 2.5–3%. The Smart Seller Program keeps more of your equity in your hands without sacrificing the marketing or negotiation quality that gets homes sold.",
  },
  {
    number: "06",
    title: "What This Means If You're Buying Right Now",
    body: "The good news for buyers: 48–59 days on market means you're not stuck in a frantic multiple-offer environment on every single listing. The caution: with 265 closings in Utah County and 365 in Salt Lake County in just three weeks, homes that are priced and presented well are still moving fast — this is the busiest stretch of the year for a reason. The homes sitting past the county average are almost always overpriced or have a condition issue. Buyers who are pre-approved, clear on their must-haves, and ready to move quickly are the ones landing homes in this window.",
    tip: "With volume this high, don't assume a slower DOM average means you have unlimited time to decide. The average includes plenty of homes that went under contract in the first week — make sure yours is one of them.",
  },
];

export default function JulyMarketUpdatePost() {
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
              <Calendar className="h-3 w-3" /> July 21, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah July 2026 Market Update: Sales Volume Hits a 2026 High
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Salt Lake County closed 365 homes and Utah County closed 265 in
            the first three weeks of July — both 2026 highs. Here&apos;s what
            the surge in sales volume means for buyers and sellers.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Late July is usually when the market starts to hint at its fall
              pace — but the data from July 9–21 tells a different story this
              year. Both Utah County and Salt Lake County posted their
              strongest sales volume of 2026 so far, with days on market
              barely moving from last month&apos;s pace.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The short version: peak summer demand hasn&apos;t faded yet, and
              well-priced homes are still selling quickly and close to list.
              If you&apos;re weighing a move in either direction, here&apos;s
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
                  { label: "Avg Days on Market", value: "59" },
                  { label: "Number of Sales", value: "265" },
                  { label: "Avg List Price", value: "$661K" },
                  { label: "Avg Sold Price", value: "$652K" },
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
                  { label: "Avg Days on Market", value: "48" },
                  { label: "Number of Sales", value: "365" },
                  { label: "Avg List Price", value: "$692K" },
                  { label: "Avg Sold Price", value: "$683K" },
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
            July 9–21, 2026 · Source: WFRMLS
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, July 9–21, 2026.
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
