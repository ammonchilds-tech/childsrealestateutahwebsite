import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah May 2026 Market Update: Sales Volume Is Surging — Here's What That Means for You",
  description:
    "Utah County sales jumped from 95 to 152. Salt Lake County went from 130 to 206. With prices climbing and volume surging, the summer market is here — and it's moving fast.",
  openGraph: {
    title: "Utah May 2026 Market Update: Sales Volume Is Surging — Here's What That Means for You",
    description:
      "Utah County sales jumped from 95 to 152. Salt Lake County went from 130 to 206. With prices climbing and volume surging, the summer market is here — and it's moving fast.",
    url: "/blog/utah-may-2026-market-update-sales-volume-surges",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah May 2026 Market Update: Sales Volume Is Surging — Here's What That Means for You",
    description:
      "Utah County sales jumped from 95 to 152. Salt Lake County went from 130 to 206. With prices climbing and volume surging, the summer market is here — and it's moving fast.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: A Snapshot of Where We Are",
    body: "The week of May 18, 2026 data is in, and both counties are telling the same story: more homes are selling, and they're selling for more money. In Utah County, 152 homes closed this week with an average sold price of $661K — up significantly from recent periods. Salt Lake County closed 206 homes at an average of $709K. Days on market sit at 61 and 47 respectively, with sold prices tracking within 1.5% of list price in both counties. That last number matters: sellers are getting close to what they're asking, which means the market is pricing correctly and buyers are meeting it.",
    tip: "When sold prices track tightly to list price, it's a sign of a healthy, well-calibrated market — not a bidding war, not a buyer's fire sale. Sellers who price right are winning.",
  },
  {
    number: "02",
    title: "The Volume Surge: Why 60% More Homes Are Selling",
    body: "The most striking number in this week's data isn't price — it's volume. Utah County sales jumped roughly 60% compared to earlier this year. Salt Lake County is up a similar amount. This kind of acceleration in transaction volume heading into late May is a classic signal of the summer market kicking into gear. Buyers who were sitting on the fence through winter and early spring are making decisions. Inventory is moving. The pipeline is clearing. For sellers, more transactions in the market means more comparable sales data — which supports stronger pricing and faster closings.",
    tip: "Higher volume doesn't always mean a seller's market — but when prices are also rising, it does. Right now, both are moving in the same direction. That's a seller's window.",
  },
  {
    number: "03",
    title: "Prices Are Up — Meaningfully",
    body: "Average list prices are up sharply in both counties compared to earlier data this year. Utah County's average list price is now $671K, with a sold price of $661K. Salt Lake County averages $716K listed and $709K sold. These aren't rounding errors — these are meaningful increases that reflect real demand. Part of this is seasonal: spring and early summer have always been peak listing season in Utah, and higher-priced homes tend to transact more during this window. But part of it is also structural. Utah's population continues to grow, supply remains constrained, and buyers are still active despite rate headwinds.",
    tip: "Sellers who listed in the spring at aggressive prices are now finding buyers. If you've been waiting for the right moment to list, the data suggests that moment is now.",
  },
  {
    number: "04",
    title: "What This Means If You're Thinking About Selling",
    body: "You have three things working in your favor right now: rising prices, surging transaction volume, and sold prices tracking closely to list. That combination doesn't come around every month. Homes that are priced correctly and presented well are moving at 61 days in Utah County and 47 days in Salt Lake — fast enough to close before summer ends, slow enough that buyers aren't panicking. If you've been holding off on listing because you weren't sure the market was there, the May data says it is.",
    tip: "The next 6–8 weeks are historically the strongest selling window of the year in Utah. Getting your home on market in late May or early June positions you to close before the late-summer slowdown.",
  },
  {
    number: "05",
    title: "What This Means If You're Thinking About Buying",
    body: "Volume is up, which means inventory is moving — and moving fast. If you're a buyer, sitting on the sidelines waiting for prices to drop is a risky strategy when you see 152 closings in Utah County and 206 in Salt Lake in a single week. More buyers are actively competing for the same homes. At 47 days on market in Salt Lake County, the best homes aren't lasting two months. The buyers who are winning right now are the ones who are pre-approved, clear on their criteria, and ready to move when the right home comes up.",
    tip: "Get pre-approved before you start touring. In a market moving this fast, showing up without financing lined up means you're already behind the buyers who did the work ahead of time.",
  },
  {
    number: "06",
    title: "The County Comparison: Two Markets, One Direction",
    body: "Utah County and Salt Lake County are performing differently in terms of price and pace, but both are trending the same direction: up. Salt Lake is faster (47 DOM vs. 61) and pricier ($709K sold vs. $661K), which reflects the density, demand, and job concentration closer to the city core. Utah County offers relatively more value per square foot and slightly longer decision timelines — useful for buyers who need a little more runway. But make no mistake: both markets are active, both are absorbing inventory, and both are rewarding sellers who show up prepared.",
    tip: "If you're flexible on county, it's worth doing a side-by-side comparison of what your budget gets you in each market right now. The $48K gap in average sold price can translate to meaningfully more home in Utah County.",
  },
];

export default function MayMarketUpdatePost() {
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
              <Calendar className="h-3 w-3" /> May 21, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah&apos;s May 2026 Market Update: Sales Volume Is Surging — Here&apos;s What That Means for You
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Utah County sales jumped from 95 to 152. Salt Lake County went from
            130 to 206. With prices climbing and volume surging, the summer
            market is here — and it&apos;s moving fast.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Every few weeks, the market sends a clear signal. Sometimes it&apos;s
              prices softening. Sometimes it&apos;s inventory piling up. Right now, in
              both Utah County and Salt Lake County, the signal is unambiguous:
              the market is accelerating. Transaction volume is up sharply,
              prices have climbed meaningfully, and homes are moving at a pace
              that rewards decisiveness on both sides of the transaction.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Whether you&apos;re thinking about selling, actively shopping, or just
              trying to understand what the market is doing, this week&apos;s data
              gives us a clear picture. Here&apos;s what the numbers say — and what
              they mean for you.
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
                  { label: "Avg Days on Market", value: "61" },
                  { label: "Number of Sales", value: "152" },
                  { label: "Avg List Price", value: "$671K" },
                  { label: "Avg Sold Price", value: "$661K" },
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
                  { label: "Avg Days on Market", value: "47" },
                  { label: "Number of Sales", value: "206" },
                  { label: "Avg List Price", value: "$716K" },
                  { label: "Avg Sold Price", value: "$709K" },
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
            Week of May 18, 2026 · Source: WFRMLS
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, week of May 18, 2026.
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
              <Link href="/contact">Schedule a Consultation</Link>
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
