import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Timing the Market vs. Time in the Market — Why Waiting Is Costing You More Than You Think",
  description:
    "Buyers and sellers who keep waiting for the 'perfect moment' are quietly losing money every month. Here's the data on why time in the market almost always beats trying to time it.",
  openGraph: {
    title: "Timing the Market vs. Time in the Market — Why Waiting Is Costing You More Than You Think",
    description:
      "Buyers and sellers who keep waiting for the 'perfect moment' are quietly losing money every month. Here's the data on why time in the market almost always beats trying to time it.",
    url: "/blog/timing-the-market-vs-time-in-the-market",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timing the Market vs. Time in the Market — Why Waiting Is Costing You More Than You Think",
    description:
      "Buyers and sellers who keep waiting for the 'perfect moment' are quietly losing money every month. Here's the data on why time in the market almost always beats trying to time it.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "What 'Timing the Market' Actually Requires",
    body: "To successfully time the real estate market, you'd need to do two things perfectly: correctly predict the exact bottom of the market, and then act at that precise moment — without hesitation. Miss either one and the strategy falls apart. The problem is that the bottom is never visible until you're already past it. By the time data confirms prices have bottomed and rates have dropped, buyers who were 'waiting for the right moment' are now competing with everyone else who was also waiting. The window of advantage evaporates almost instantly. Nobel Prize-winning economist Robert Shiller, who created the Case-Shiller Home Price Index, has noted that real estate prices are notoriously difficult to predict in the short term — even for professionals who study nothing else.",
    tip: "The irony of waiting for the 'perfect time' is that when that moment finally looks clear in the rearview mirror, it's already gone. The buyers who win are the ones who move when they're ready, not when the market is.",
  },
  {
    number: "02",
    title: "The Real Cost of Waiting — in Dollars",
    body: "Here's a number worth sitting with: the median home price in Utah as of early 2026 is approximately $558,100, and Utah home values have appreciated at roughly 5–7% annually over the past decade according to Federal Reserve FRED housing data. At a conservative 4% appreciation, a $558,000 home gains about $22,320 in value in a single year. If you're waiting 12 months for conditions to feel 'safer,' that's $22,320 in equity you didn't build — plus 12 more months of rent paid into someone else's investment. That's not a neutral pause. That's a measurable, real loss.",
    tip: "Run the math on your own situation. Take the home you want to buy, multiply its price by 4%, and ask yourself: is the cost of waiting — in unbuilt equity and ongoing rent — worth whatever you're waiting for?",
  },
  {
    number: "03",
    title: "Every Month of Rent Is a Month of Someone Else's Equity",
    body: "Rent is not dead money in the emotional sense — you get housing in exchange for it. But from a wealth-building perspective, it builds zero equity. A Harvard Joint Center for Housing Studies analysis consistently shows that homeowners have dramatically higher net worth than renters at virtually every income level — not because homeowners are smarter or wealthier to start with, but because the act of paying a mortgage forces equity accumulation month after month. The Federal Reserve's Survey of Consumer Finances found that the median net worth of a homeowner is roughly 40 times that of a renter. Forty times. The difference isn't income — it's the compounding effect of being in the market.",
    tip: "Every mortgage payment is part rent, part savings. Every rent payment is 100% spent. The longer you rent while waiting, the wider that gap becomes.",
  },
  {
    number: "04",
    title: "Marry the House. Date the Rate.",
    body: "One of the most common reasons buyers are waiting right now is interest rates. It's understandable — rates today are meaningfully higher than the historic lows of 2020–2021. But here's what that logic misses: you can refinance a mortgage. You cannot go back and buy the same house at the same price. When rates eventually come down — and the Federal Reserve has signaled a gradual easing path — buyers who already own will refinance and enjoy lower payments. Buyers who waited will find themselves competing for homes that have continued appreciating, at a higher price, against more competition. The house you want today at today's price may not exist at that price in 18 months, regardless of what rates do.",
    tip: "Run the numbers with a lender on what a 1% rate drop would do to your payment via refinance. Then ask: is waiting for that drop worth the appreciation you'd miss in the meantime?",
  },
  {
    number: "05",
    title: "Utah's Long-Term Track Record Makes Waiting Even More Expensive Here",
    body: "National appreciation averages are one thing. Utah is another. According to the National Association of Realtors, Utah has ranked among the top states for home price appreciation and housing market strength for much of the past decade. Utah's population has grown by over 18% since 2010 — one of the fastest rates in the country — driven by job growth, in-migration from high-cost coastal markets, and a young demographic base. The Wasatch Front in particular has persistent housing demand that shows no signs of structural reversal. Salt Lake City was named by NAR as one of the top housing markets to watch in 2026. Waiting for Utah prices to 'come back down' means waiting for the economic and demographic conditions driving them to reverse — and there's little evidence that's coming.",
    tip: "Local market conditions matter more than national headlines. Utah's fundamentals — jobs, population growth, and limited land — are different from markets that have seen real price corrections. Don't let national news make your local decisions.",
  },
  {
    number: "06",
    title: "For Sellers Who Are Waiting: The Trade-Off Is a Wash (and Then Some)",
    body: "Sellers sometimes hold off listing because they're hoping prices climb further. But here's the thing most people don't account for: if you sell at a higher price later, you're also buying your next home at a higher price later. The trade-off between your sale price and your purchase price often nets out to very little — while you've spent additional months carrying costs, taxes, insurance, and maintenance on a home you're planning to leave. The real financial win for sellers isn't in waiting for a market peak. It's in selling in a market with enough buyers to generate competition on your listing. Right now, correctly priced homes are still moving. That's the window.",
    tip: "If you're planning to buy and sell in the same market, price movement affects both sides of your transaction roughly equally. What matters more is execution: pricing right, staging well, and negotiating effectively.",
  },
  {
    number: "07",
    title: "Time in the Market — The Data Is Not Subtle",
    body: "The S&P/Case-Shiller U.S. National Home Price Index, which tracks repeat-sale prices of single-family homes across the country, shows that U.S. home prices have risen in every 10-year period since the index began. Yes, there were dips — 2008 was brutal for many markets. But buyers who held through the correction recovered, and then some. Buyers who sold at the bottom locked in losses. The same principle that applies to stock market investing — that time in the market beats timing the market — applies to real estate with arguably even more reliability, because real estate has the additional advantage of leverage, rental income potential, and the fact that you live in it while it appreciates.",
    tip: "Look up what a home worth $400,000 in your area was worth 10 years ago. Then ask yourself what the home you're hesitating on will be worth in 10 years if you buy it now.",
  },
];

const SOURCES = [
  {
    label: "S&P CoreLogic Case-Shiller U.S. National Home Price Index",
    note: "Long-term U.S. home price appreciation data and market cycle history.",
    url: "https://www.spglobal.com/spdji/en/indices/indicators/sp-corelogic-case-shiller-us-national-home-price-nsa-index/",
  },
  {
    label: "Federal Reserve Bank of St. Louis (FRED) — All-Transactions House Price Index",
    note: "Utah and national home price appreciation by quarter.",
    url: "https://fred.stlouisfed.org/series/UTSTHPI",
  },
  {
    label: "National Association of Realtors — Utah Market Data & Top Markets to Watch 2026",
    note: "State-level home price data, days on market, and market rankings.",
    url: "https://www.nar.realtor/research-and-statistics",
  },
  {
    label: "Harvard Joint Center for Housing Studies — The State of the Nation's Housing",
    note: "Homeowner vs. renter net worth comparisons and long-term wealth building analysis.",
    url: "https://www.jchs.harvard.edu/state-nations-housing",
  },
  {
    label: "Federal Reserve Survey of Consumer Finances",
    note: "Median net worth of homeowners vs. renters across income levels.",
    url: "https://www.federalreserve.gov/publications/files/scf23.pdf",
  },
  {
    label: "U.S. Census Bureau — Utah State Population Estimates",
    note: "Utah population growth rate and demographic trends.",
    url: "https://www.census.gov/quickfacts/UT",
  },
];

export default function TimingTheMarketPost() {
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
              Buyers &amp; Sellers
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> May 11, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Timing the Market vs. Time in the Market
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Buyers and sellers who keep waiting for the &ldquo;perfect moment&rdquo; are quietly
            losing money every month. Here&apos;s the data on why time in the market
            almost always beats trying to time it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              &ldquo;We&apos;re just waiting to see what happens with rates.&rdquo; &ldquo;We want to hold off
              until the market cools down a little more.&rdquo; &ldquo;We&apos;ll list once prices go back
              up.&rdquo; If you&apos;ve said any version of these sentences in the last year, you&apos;re not
              alone — but you may be costing yourself more than you realize.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The idea of timing the real estate market is appealing. Buy at the bottom, sell at
              the peak, and maximize your return. The problem is that it almost never works —
              not because people aren&apos;t smart enough, but because the market doesn&apos;t
              telegraph its turning points until they&apos;ve already turned. The investors and
              homeowners who consistently build wealth in real estate aren&apos;t the ones who
              time it perfectly. They&apos;re the ones who simply stay in it.
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

      {/* Sources */}
      <section className="py-14 bg-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Sources</h3>
          <ol className="space-y-4">
            {SOURCES.map((source, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="flex-shrink-0 font-semibold text-accent">{i + 1}.</span>
                <span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {source.label}
                  </a>
                  {" — "}
                  {source.note}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Stop Waiting. Start Building.
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Figure Out Your Next Move
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying or selling, we&apos;ll run the real numbers for your
            specific situation — no pressure, no fluff. Just honest data so you can
            make the move that&apos;s right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent" className="gap-2">
              <Link href="/contact">
                Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/sell">Get a Free Home Valuation</Link>
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
