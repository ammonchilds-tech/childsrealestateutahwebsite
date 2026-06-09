import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Selling in Summer vs. Waiting Until Fall: What Utah's June Data Says",
  description:
    "Utah County has 185 sales and Salt Lake County 284 — summer 2026 is already here. Here's what the data says about whether to list now or wait until fall.",
  openGraph: {
    title: "Selling in Summer vs. Waiting Until Fall: What Utah's June Data Says",
    description:
      "Utah County has 185 sales and Salt Lake County 284 — summer 2026 is already here. Here's what the data says about whether to list now or wait until fall.",
    url: "/blog/selling-in-summer-vs-waiting-until-fall-utah-2026",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selling in Summer vs. Waiting Until Fall: What Utah's June Data Says",
    description:
      "Utah County has 185 sales and Salt Lake County 284 — summer 2026 is already here. Here's what the data says about whether to list now or wait until fall.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Summer Window Is Already Open",
    body: "Summer selling season in Utah doesn't start in July — it's already here. The first nine days of June 2026 produced 185 closed sales in Utah County and 284 in Salt Lake County. Sold prices are tracking within 1% of list price in both markets. Days on market sit at 61 in Utah County and 41 in Salt Lake. These are peak-season numbers. The buyers who were getting pre-approved in April are now actively touring and writing offers. If you're waiting for summer to \"start\" before listing, you've already missed the opening.",
    tip: "The first 60 days of summer — June and early July — consistently produce the highest volume and strongest pricing in Utah. Listing in late July or August means competing for a shrinking pool of buyers.",
  },
  {
    number: "02",
    title: "What Happens to the Market in Fall",
    body: "Fall isn't a bad time to sell — but it's a different market. Historically in Utah, transaction volume starts contracting in August and declines meaningfully through October. Days on market stretch. Buyers who didn't find something over the summer either pause their search or become more selective going into the holidays. The buyers who are active in September and October tend to be more motivated — job relocations, lease expirations, life changes — but there are fewer of them. That means you may still sell, but you'll likely spend more time on market and have less leverage on price.",
    tip: "Fall listings in Utah average 15–25% more days on market than comparable spring and summer listings. More time on market typically means more price reductions — and a lower final sold price.",
  },
  {
    number: "03",
    title: "The Case for Listing Now",
    body: "Right now, both counties are showing strong sold-to-list ratios — meaning buyers are paying close to asking price. In Utah County, the average sold price of $652K is 99.1% of the average list price of $658K. In Salt Lake County, $655K sold versus $658K listed is 99.5%. These ratios compress in the fall as inventory sits longer and sellers make concessions. If your home is priced correctly and shows well, listing in June means entering a market where buyers outnumber available homes and are actively competing — not a market where your listing is one of many sitting into the holidays.",
    tip: "A home that sells in June at 99% of list price typically nets more than the same home sold in October at 96% of list — even if the October list price is higher. Net proceeds, not list price, is what matters.",
  },
  {
    number: "04",
    title: "The Case for Waiting Until Fall",
    body: "There are legitimate reasons to wait. If your home needs work — paint, flooring, landscaping, staging — rushing to list before it's ready can hurt you more than a seasonal delay. A home that sits because it showed poorly is harder to recover than one that enters the market in September in excellent condition. Similarly, if your personal timeline doesn't line up with June or July — a school year ending, a job transition, a family situation — forcing a summer listing creates stress that can affect negotiations. The market is one factor. Your readiness is another.",
    tip: "If your home needs 4–6 weeks of prep work, don't rush it. A well-prepared fall listing in a slower market often outperforms a rushed summer listing. Condition and pricing still matter more than timing alone.",
  },
  {
    number: "05",
    title: "What the Data Actually Recommends",
    body: "Looking at June 2026 data across both counties: prices are strong, volume is high, and sold-to-list ratios are tight. All three of those indicators favor sellers. The fall will bring lower volume, longer days on market, and more negotiating leverage for buyers. If you're ready — or close to ready — the data makes a clear case for listing now rather than waiting. If you're not ready, use the summer to prepare so you can enter a fall market in the best possible position. The worst outcome is a rushed listing that undersells, regardless of the season.",
    tip: "Run the math on your specific home before deciding. The right answer depends on your equity, your timeline, and what comparable homes near you are actually selling for right now — not just what the averages say.",
  },
  {
    number: "06",
    title: "One More Thing: Interest Rates Favor Action",
    body: "Rates have been elevated for long enough that most buyers have adjusted their expectations and purchasing strategy. The buyers in the market right now aren't waiting for rates to drop — they're buying because they need to, and they've found ways to make the numbers work. If rates do drop in Q3 or Q4, a new wave of buyers will enter the market — but so will a new wave of sellers who've been waiting. More supply could absorb that demand surge and keep prices flat. The buyers who are active today are real, qualified, and ready. That's worth more than a hypothetical rate drop six months from now.",
    tip: "Don't try to time interest rates. Sellers who waited for a rate-drop-fueled buyer surge in 2023 and 2024 mostly sat on the sidelines while others sold. The buyers in the market today are the market.",
  },
];

export default function SummerVsFallPost() {
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
              Seller Strategy
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> June 9, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Selling in Summer vs. Waiting Until Fall: What Utah&apos;s June Data Says
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Utah County closed 185 homes in the first nine days of June. Salt
            Lake County closed 284. Summer is already here — and the data makes
            a strong case for sellers who are ready to move.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Every seller faces the same question at some point: is now the
              right time, or should I wait? It&apos;s a reasonable question. The
              answer, like most things in real estate, depends on the data —
              and on your specific situation.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              We&apos;re now nine days into June 2026, and the numbers from both
              Utah County and Salt Lake County give us a clear read on where
              the summer market stands and what typically happens when sellers
              decide to wait until fall. Here&apos;s what the data shows — and what
              it means for the decision in front of you.
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
                  { label: "Number of Sales", value: "185" },
                  { label: "Avg List Price", value: "$658K" },
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
                  { label: "Avg Days on Market", value: "41" },
                  { label: "Number of Sales", value: "284" },
                  { label: "Avg List Price", value: "$658K" },
                  { label: "Avg Sold Price", value: "$655K" },
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
            June 1–9, 2026 · Source: WFRMLS
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, June 1–9, 2026.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Ready to Find Out What Your Home Is Worth?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Talk About Your Timeline
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We&apos;ll walk you through what comparable homes near you are actually
            selling for right now, and help you decide whether summer or fall
            makes more sense for your situation — no pressure, just a straight
            answer.
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
