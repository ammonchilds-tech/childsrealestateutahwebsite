import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Halfway Through 2026: What Utah's Housing Market Has Actually Done (and What's Next)",
  description:
    "From a slow winter to a June peak to an early-July pullback — here's what six months of Utah County and Salt Lake County data actually shows, and what it means for the second half of 2026.",
  openGraph: {
    title: "Halfway Through 2026: What Utah's Housing Market Has Actually Done (and What's Next)",
    description:
      "From a slow winter to a June peak to an early-July pullback — here's what six months of Utah County and Salt Lake County data actually shows, and what it means for the second half of 2026.",
    url: "/blog/utah-2026-midyear-market-review",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halfway Through 2026: What Utah's Housing Market Has Actually Done (and What's Next)",
    description:
      "From a slow winter to a June peak to an early-July pullback — here's what six months of Utah County and Salt Lake County data actually shows, and what it means for the second half of 2026.",
  },
};

const TIMELINE = [
  {
    period: "Early 2026",
    label: "The Baseline",
    stats: "Prices +2.3% YoY · Median $558K · 16.8% of homes sold above list",
    note: "A cooler start. Fewer bidding wars than the year before, and a market still finding its footing after a slow winter.",
  },
  {
    period: "Week of May 18",
    label: "The Surge",
    stats: "Utah Co. 152 sales (+60%) · Salt Lake Co. 206 sales · DOM 61 / 47",
    note: "Buyers who'd been sitting on the fence all winter started writing offers. Volume jumped roughly 60% in both counties almost overnight.",
  },
  {
    period: "June 15–24",
    label: "The Peak",
    stats: "Utah Co. 199 sales · Salt Lake Co. 265 sales · Sold-to-list 99%+",
    note: "The high-water mark for the year so far. More homes changed hands in this window than in any other stretch of 2026.",
  },
  {
    period: "July 1–8",
    label: "The Pullback",
    stats: "Utah Co. 127 sales (−36%) · Salt Lake Co. 187 sales (−29%) · DOM ticking up",
    note: "Volume dropped sharply in the first week of July, and days on market rose in both counties for the first time all summer.",
  },
];

const SECTIONS = [
  {
    number: "01",
    title: "The Peak Came Earlier Than Most People Expected",
    body: "Conventional wisdom says the Utah housing market peaks in July or August, right in the middle of summer. That's not what 2026 has done. Transaction volume actually crested in mid-to-late June — 199 closings in Utah County and 265 in Salt Lake County — and then fell off noticeably in the first week of July, down to 127 and 187 respectively. That's a 36% drop in Utah County and a 29% drop in Salt Lake County in a matter of two weeks. Buyers who were going to move this summer largely already have. The pipeline that built up over the winter has cleared, and what's left is a smaller, more selective pool of buyers moving into the back half of the season.",
    tip: "If you were planning to list 'once summer really gets going,' the data suggests that window already happened in June. Waiting for a second wave of demand this summer is a riskier bet than it looks.",
  },
  {
    number: "02",
    title: "Why Utah County's Average Price Jumped $100K in Two Weeks",
    body: "Here's the number that looks the most dramatic: Utah County's average sold price jumped from $653K (June 15–24) to $755K (July 1–8) — over $100K in two weeks, even as the number of sales fell by more than a third. That's not broad market appreciation. When sales volume drops sharply and the average price simultaneously spikes, the most likely explanation is a shift in which homes are closing, not a shift in what any individual home is worth. With fewer transactions, higher-end sales carry more weight in the average. A handful of luxury closings can move a small sample a lot more than they'd move a sample of 200. Salt Lake County, where volume also fell but less dramatically, saw its average sold price move much less ($688K to $677K) — consistent with a market cooling normally rather than being skewed by mix.",
    tip: "Don't read a single week's average price as 'the market went up 15%.' Look at sold-to-list ratio and days on market alongside price — they tell you whether the shift is demand-driven or just a smaller, different sample of homes.",
  },
  {
    number: "03",
    title: "What Actually Held Steady All Year: Pricing Discipline",
    body: "The most underrated storyline of H1 2026 isn't the volume swings — it's how consistently sold prices have tracked to list prices. Back in June, both counties were closing homes within 1–1.5% of asking. Even now, with volume down and days on market ticking up, neither county has fallen into the kind of two-speed dynamic some national markets are seeing, where a third of listings need a price cut and buyers routinely negotiate well below asking. Utah's market has stayed disciplined: sellers who price accurately are still getting close to full value, and buyers aren't finding widespread desperation. That's a meaningfully healthier position than a lot of headlines about a 'cooling market' would suggest.",
    tip: "A market can slow down in volume without becoming a buyer's market on price. Those are two different signals — don't assume one means the other.",
  },
  {
    number: "04",
    title: "Days on Market Is the Number to Watch Into Q3",
    body: "Both counties saw their fastest days-on-market figures of the year in early-to-mid June — 41 days in Salt Lake County during the first week of the month, 60 in Utah County shortly after. Since then, DOM has crept upward in both counties: Salt Lake is now at 57, Utah County at 63. On its own, a few extra days isn't alarming. But it's the clearest early signal that the seller's-market conditions from June are softening. If DOM keeps climbing through July and August — which is the normal seasonal pattern — homes that aren't priced sharply from day one will start sitting long enough to trigger the price-reduction spiral that's much harder to recover from once buyers notice.",
    tip: "Track DOM more closely than price over the next 60 days. It moves first, and it's the best early warning that a market is shifting from seller-favorable to neutral.",
  },
  {
    number: "05",
    title: "If You're Selling: The Case for Not Waiting Until Fall",
    body: "Every seasonal pattern in Utah's market points to fall listings taking longer and netting less than summer ones — and this year's early pullback in volume makes that gap more important, not less. Fewer active buyers means less competition for your listing, which means correct pricing and strong presentation matter more right now than they did in May, when almost anything sold quickly. The upside: sold-to-list ratios are still healthy, which means well-prepared sellers are not leaving money on the table by listing in July instead of next spring. The sellers who will struggle in H2 are the ones who list high hoping to catch a 'second summer surge' that the data doesn't currently support.",
    tip: "An accurately priced home that goes under contract in the first two weeks of July will almost always net more than the same home listed in September competing against a larger fall inventory reset.",
  },
  {
    number: "06",
    title: "The Smart Seller Program: Built for a Market That's Getting More Selective",
    body: "As buyer volume normalizes off its June peak, the sellers who stand out are the ones with better marketing, not just a sign in the yard. The Smart Seller Program is built for exactly this moment. The Gold package (1%) covers HDR photography, a professional market analysis, MLS and 500+ website syndication, 24/7 showing service, and expert negotiation. Diamond (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social ads — the extra visibility that matters more when fewer buyers are actively looking. Platinum (2.49%) goes furthest with a Zillow Showcase listing, a 3D tour, virtual staging, and multiple open houses. Every tier can be canceled anytime, so there's no risk in getting started before the fall slowdown sets in.",
    tip: "Homes on Zillow Showcase sell for 2% more on average. In a market where the easy multiple-offer conditions of June have already passed, that extra visibility is doing more work than it was two months ago.",
  },
];

export default function MidYearReviewPost() {
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
              Year in Review
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> July 8, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Halfway Through 2026: What Utah&apos;s Housing Market Has Actually Done
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            A slow winter, a June peak, and an early-July pullback. Here&apos;s
            what six months of real closing data says about where the market
            actually stands — and where it&apos;s headed next.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              We&apos;re now past the halfway point of 2026, which means we have
              enough real closing data to stop guessing and start looking at
              what actually happened — not what the headlines predicted in
              January, and not what any one week&apos;s numbers might suggest in
              isolation.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The short version: the market moved faster and peaked earlier
              than the usual summer script, and it&apos;s already showing signs
              of cooling. That matters whether you&apos;re thinking about
              listing, buying, or just trying to understand what your home is
              worth right now.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            H1 2026 at a Glance
          </p>
          <div className="space-y-4">
            {TIMELINE.map((stop, i) => (
              <div
                key={stop.period}
                className="rounded-2xl bg-primary p-6 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 sm:w-36">
                  <span className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent font-heading text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-white font-heading text-sm font-semibold">
                    {stop.period}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">
                    {stop.label}
                  </p>
                  <p className="text-white/90 text-sm font-medium mb-1">
                    {stop.stats}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {stop.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs mt-4">
            Source: WFRMLS, Utah County &amp; Salt Lake County closed sales, January–July 2026
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County closed sales data, January–July 2026.
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
            The Second Half Starts Now
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Talk About Your Next Move
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re weighing listing now versus waiting for spring,
            or just want a clear read on what your home is worth today, we&apos;ll
            give you a straight answer based on real data — no pressure, no guesswork.
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
