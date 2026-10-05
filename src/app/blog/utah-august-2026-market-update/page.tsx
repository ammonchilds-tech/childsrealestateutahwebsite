import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah August 2026 Market Update: Sales Volume Cools as County Prices Diverge",
  description:
    "Utah County closed 195 homes and Salt Lake County closed 278 in the final days of July and first days of August — both down sharply from July's highs. Here's what the pullback in volume and a widening price gap between counties means for buyers and sellers.",
  openGraph: {
    title: "Utah August 2026 Market Update: Sales Volume Cools as County Prices Diverge",
    description:
      "Utah County closed 195 homes and Salt Lake County closed 278 in the final days of July and first days of August — both down sharply from July's highs. Here's what the pullback in volume and a widening price gap between counties means for buyers and sellers.",
    url: "/blog/utah-august-2026-market-update",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah August 2026 Market Update: Sales Volume Cools as County Prices Diverge",
    description:
      "Utah County closed 195 homes and Salt Lake County closed 278 in the final days of July and first days of August — both down sharply from July's highs. Here's what the pullback in volume and a widening price gap between counties means for buyers and sellers.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: What July 31–August 10 Is Telling Us",
    body: "The first full read on late-summer activity shows a clear cooldown from July's record pace. Utah County closed 195 homes in this window at an average sold price of $568K against a $575K list price — a sold-to-list ratio of 98.8%. Salt Lake County closed 278 homes at $727K sold versus $737K listed, a 98.6% ratio. Days on market ticked up in both counties: 62 for Utah County (up from 59) and 55 for Salt Lake County (up from 48). Pricing discipline is still paying off — both counties are closing within about 1% of list — but the pace of the market is visibly shifting toward its fall rhythm.",
    tip: "A sold-to-list ratio holding near 99% even as days on market rise is a good sign: sellers who price correctly aren't losing ground, they're just waiting a little longer for the right buyer.",
  },
  {
    number: "02",
    title: "Sales Volume Pulls Back Sharply From July's Peak",
    body: "Utah County closed 265 homes in the July 9–21 window; it closed 195 in this late-July/early-August window — a 26% drop. Salt Lake County went from 365 closings to 278, a 24% drop. That's a meaningful pullback after both counties posted 2026 highs just a few weeks earlier. Combined with the modest rise in days on market, this is the clearest signal yet that peak summer demand has passed its high point and the market is settling into its typical late-summer pace.",
    tip: "A pullback in volume after a record month isn't a red flag on its own — July was unusually strong, and some reversion toward a more typical pace is normal. Watch the next update to see whether this is a plateau or the start of the fall slowdown.",
  },
  {
    number: "03",
    title: "Utah County Prices Pull Back While Salt Lake County Climbs",
    body: "The two counties moved in opposite directions on price this period. Utah County's average sold price fell from $652K to $568K — a $84K, roughly 13% drop. Salt Lake County's average sold price rose from $683K to $727K — a $44K, roughly 6% increase. With sold-to-list ratios holding steady near 99% in both counties, this looks less like a shift in home values and more like a shift in the mix of homes that closed: Utah County saw more activity at lower price points this period, while Salt Lake County's closings skewed toward higher-priced homes. Worth watching over the next update to see if either trend holds.",
    tip: "Average price swings driven by mix (which homes happen to close) look very different from price swings driven by value. The sold-to-list ratio is the number to watch — as long as it stays tight, sellers are still getting close to full asking price.",
  },
  {
    number: "04",
    title: "Thinking About Selling? Late Summer Buyers Are Still Out There",
    body: "195 and 278 closings in an 11-day window is still a healthy amount of activity — this isn't a market that's gone quiet, it's a market returning to a normal late-summer pace after an unusually hot July. Sellers who list now are still reaching serious, motivated buyers, and the tight sold-to-list ratios mean well-priced homes aren't leaving money on the table. The trade-off is patience: expect a few more days on market than you would have seen a month ago.",
    tip: "If your timeline is flexible, late summer still offers solid buyer traffic with less competition from other sellers than peak June and July brought — sometimes an easier environment to stand out in, not a harder one.",
  },
  {
    number: "05",
    title: "The Smart Seller Program: More Service, Less Commission",
    body: "If you're ready to sell — or getting close — the Smart Seller Program gives you full MLS exposure, professional photography, and expert negotiation at a fraction of traditional commission. The Gold package starts at 1% and covers everything you need to get on the market: HDR photos, professional market analysis, Supra lockbox, yard sign, listing on MLS and 500+ websites, 24/7 showing service, and professional contract negotiation. The Diamond package (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. The Platinum package (2.49%) goes further with a Zillow Showcase listing, an interactive 3D tour, virtual staging, paid social media ads, multiple open houses, and weekly market updates directly from Ammon. Every package includes a cancel-anytime policy — no lock-in, no pressure. Homes featured on Zillow Showcase sell for 2% more on average, which at Utah County's current average sold price of $568K is roughly $11,000 back in your pocket.",
    tip: "Traditional listing commissions often run 2.5–3%. The Smart Seller Program keeps more of your equity in your hands without sacrificing the marketing or negotiation quality that gets homes sold.",
  },
  {
    number: "06",
    title: "What This Means If You're Buying Right Now",
    body: "Rising days on market and falling sales volume are good news if you're on the buying side — 55–62 days on market means less frantic multiple-offer pressure than a month ago, and fewer competing buyers overall. The caution: sold-to-list ratios near 99% mean sellers still aren't giving away much room to negotiate on well-priced, well-presented homes. The homes sitting noticeably past the county average are the ones worth a closer look for negotiating leverage — condition issues or pricing missteps are the usual reasons they're still on the market.",
    tip: "A cooling market rewards patient buyers, but don't confuse 'cooling' with 'soft.' Come pre-approved and ready to move on the right home — the best-priced listings are still going quickly.",
  },
];

export default function AugustMarketUpdatePost() {
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
              <Calendar className="h-3 w-3" /> August 10, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah August 2026 Market Update: Sales Volume Cools as County Prices Diverge
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Utah County closed 195 homes and Salt Lake County closed 278 in
            the final days of July and first days of August — both down
            sharply from July&apos;s highs. Here&apos;s what the pullback in
            volume and a widening price gap between counties means for
            buyers and sellers.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              After a record-setting July, the data from July 31–August 10
              shows the market easing into its late-summer pace. Sales
              volume dropped sharply in both counties, and days on market
              ticked up — the first real signs of a seasonal shift this
              year.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              At the same time, Utah County and Salt Lake County pulled in
              opposite directions on price. Here&apos;s what the numbers say,
              and what it means whether you&apos;re buying or selling.
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
                  { label: "Avg Days on Market", value: "62" },
                  { label: "Number of Sales", value: "195" },
                  { label: "Avg List Price", value: "$575K" },
                  { label: "Avg Sold Price", value: "$568K" },
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
                  { label: "Avg Days on Market", value: "55" },
                  { label: "Number of Sales", value: "278" },
                  { label: "Avg List Price", value: "$737K" },
                  { label: "Avg Sold Price", value: "$727K" },
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
            July 31–August 10, 2026 · Source: WFRMLS
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, July 31–August 10, 2026.
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
