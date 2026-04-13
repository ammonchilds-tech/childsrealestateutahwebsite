import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Two-Speed Market: Why Pricing Your Home Right Has Never Mattered More",
  description:
    "Well-priced homes are selling in 63 days. Overpriced homes are sitting for 121. That 58-day gap is costing sellers thousands — here's how to make sure you're on the right side of it.",
  openGraph: {
    title: "The Two-Speed Market: Why Pricing Your Home Right Has Never Mattered More",
    description:
      "Well-priced homes are selling in 63 days. Overpriced homes are sitting for 121. That 58-day gap is costing sellers thousands — here's how to make sure you're on the right side of it.",
    url: "/blog/the-two-speed-market-why-pricing-your-home-right-has-never-mattered-more",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Two-Speed Market: Why Pricing Your Home Right Has Never Mattered More",
    description:
      "Well-priced homes are selling in 63 days. Overpriced homes are sitting for 121. That 58-day gap is costing sellers thousands — here's how to make sure you're on the right side of it.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The 58-Day Gap Nobody Is Talking About",
    body: "Here's what the data actually says right now: well-priced homes across the country are selling in an average of 63 days. Overpriced homes? 121 days. That's a 58-day difference — and it's not just a number. Every extra week a home sits on the market costs you money in carrying costs, price reductions, and negotiating leverage. Nationally, about one in three listings has already had a price cut, and sellers are increasingly accepting offers below asking. The market has two lanes, and which one you're in is almost entirely determined by how you price.",
    tip: "Days on market is the first thing a buyer's agent checks. A home that's been sitting raises an immediate question: 'What's wrong with it?' Price right and you never have to answer that question.",
  },
  {
    number: "02",
    title: "What 'Overpriced' Actually Looks Like",
    body: "Overpricing doesn't always mean listing at an outrageous number. More often, it's just 5–8% above where the market actually is. That's enough to push your home out of the search brackets serious buyers are using, enough to make buyers who do see it feel like they're starting a negotiation at a disadvantage, and enough to cause it to sit while correctly priced competitors sell around it. The irony is that sellers who overprice often end up netting less than if they had priced it right from day one — because they eventually reduce anyway, but now with accumulated days on market working against them.",
    tip: "A home that launches at the right price and receives multiple offers will almost always sell for more than a home that starts too high and chases the market down with reductions.",
  },
  {
    number: "03",
    title: "Why Days on Market Is the Silent Deal Killer",
    body: "Buyers and their agents are trained to look at days on market (DOM) as a signal. A home at 14 days feels fresh and desirable — buyers feel urgency. A home at 60 days feels like a problem. Buyers start to wonder: did it fail inspection? Is there something wrong structurally? Did previous buyers walk away? Even if the answer to all of those is no, the perception is already there. And perception in real estate is reality. A high DOM makes buyers more aggressive in their offers and gives them psychological leverage they wouldn't have had if the home had sold in the first two weeks.",
    tip: "The first 7–14 days on market are your golden window. More buyers tour new listings than any other. Price right, show beautifully, and capitalize on that initial momentum.",
  },
  {
    number: "04",
    title: "The Price Reduction Trap",
    body: "Here's what typically happens when a home is overpriced: it sits for 3–4 weeks with few showings and no offers. The seller gets anxious and agrees to a price reduction. The reduction brings a small wave of new attention — but now the home has 30+ days on market attached to it, and buyers use that to negotiate harder. Sometimes sellers reduce again. By the time the home sells, they've often netted less than they would have at the correct list price on day one — plus they've carried the home for an extra month or two. The price reduction trap is real, and avoiding it starts with honest pricing upfront.",
    tip: "In today's market, more than 34% of active listings have already cut their price. Don't become a statistic. A great agent will show you the data and help you price to win, not to wish.",
  },
  {
    number: "05",
    title: "What's Happening in Utah Specifically",
    body: "While national markets are softening — with some Sun Belt cities seeing year-over-year price drops of 6–9% — Utah is holding considerably stronger. Home prices in Utah are up 2.3% year-over-year as of early 2026, with a median sale price of $558,100. Salt Lake City was named one of the top housing markets to watch in 2026 by the National Association of Realtors. But even here, the two-speed dynamic is very real: only 16.8% of Utah homes sold above their list price last month — down from 19.1% a year ago. The days of any price working are over. Strategy and precision matter.",
    tip: "Utah's relative strength compared to national markets is an advantage for sellers — but only if you price to reflect current local comps, not last year's peak. Your agent should be pulling data from the last 60–90 days, not 6 months ago.",
  },
  {
    number: "06",
    title: "How to Price Your Home Right From Day One",
    body: "Correct pricing starts with a thorough comparative market analysis (CMA) — not a Zestimate, not what your neighbor sold for 14 months ago, and not what you need to net to make the numbers work. It means looking at what genuinely comparable homes (similar size, condition, location, and features) have actually closed for in the last 60–90 days, adjusting for meaningful differences, and landing on a price that will attract buyers rather than repel them. A great CMA also considers active competition — what buyers will see when they tour your home alongside others — and positions your listing to win that comparison.",
    tip: "We provide every seller with a detailed, honest CMA before they list. Our goal isn't to tell you what you want to hear — it's to give you the data you need to make a smart decision.",
  },
  {
    number: "07",
    title: "The Role Your Agent Plays in All of This",
    body: "Pricing is where the quality of your agent matters most. An agent who tells you what you want to hear to win the listing will almost always cost you money in the end. The best agents are honest about where the market is, back their recommendations with data, and have the experience to know when to hold firm and when to adjust. At Childs Real Estate, we specialize in helping Utah County and Salt Lake Valley sellers position their homes correctly — not just to list them, but to sell them for the best possible price, on the best possible terms, in the least amount of time.",
    tip: "Ask any agent you're considering to show you their average list-to-sale price ratio and their average days on market. Those two numbers tell you everything about how well they price homes.",
  },
];

export default function TwoSpeedMarketPost() {
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
              Sellers
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> April 13, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            The Two-Speed Market: Why Pricing Your Home Right Has Never Mattered More
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Well-priced homes are selling in 63 days. Overpriced homes are sitting
            for 121. That 58-day gap is costing sellers thousands — here&apos;s how
            to make sure you&apos;re on the right side of it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              The 2026 housing market isn&apos;t slow — it&apos;s split. Across Utah County,
              the Salt Lake Valley, and the country at large, there are two very
              different experiences happening at the same time: homes that are priced
              correctly are selling quickly, often with multiple offers, while homes
              that are priced too high are sitting on the market for months, quietly
              hemorrhaging value with every passing week.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              This is what real estate professionals are calling the &quot;two-speed
              market&quot; — and understanding which side of it you&apos;re on (or want to be
              on) is the most important thing any seller can know right now. The good
              news is that being in the fast lane isn&apos;t complicated. It just requires
              honest, data-driven pricing from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-20 bg-background">
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

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Ready to Price It Right?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Get a Free, No-Obligation Market Analysis
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We&apos;ll pull the real comps, walk your home, and give you an honest
            price recommendation backed by data — so you can list with confidence
            and sell in the fast lane.
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
