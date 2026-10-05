import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE =
  "Mortgage Rates Just Jumped to 7.28% — Here's What It Means for Utah Buyers and Sellers";
const DESCRIPTION =
  "The 30-year fixed rate jumped from 7.03% to 7.28% in a single week, its highest level since November 2023. Here's what that does to monthly payments and buying power in Utah County and Salt Lake County, and how buyers and sellers can respond.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog/mortgage-rates-rise-october-2026-what-it-means",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const RATES = [
  { label: "30-yr fixed · this week", value: "7.28%" },
  { label: "30-yr fixed · last week", value: "7.03%" },
  { label: "30-yr fixed · a year ago", value: "6.34%" },
  { label: "15-yr fixed · this week", value: "6.60%" },
];

const PAYMENTS = [
  { county: "Utah County", price: "$676K avg sold", loan: "$608,400", yearAgo: "$3,782", today: "$4,163", diff: "+$381/mo" },
  { county: "Salt Lake County", price: "$640K avg sold", loan: "$576,000", yearAgo: "$3,580", today: "$3,941", diff: "+$361/mo" },
];

const SECTIONS = [
  {
    number: "01",
    title: "What Happened: The Biggest Weekly Jump in Four Years",
    body: "Freddie Mac's weekly survey released October 1 put the average 30-year fixed rate at 7.28%, up from 7.03% the week before. That 25-basis-point move was the sharpest one-week increase since October 2022, and it pushed rates to their highest level since November 2023. The 15-year fixed rose too, from 6.42% to 6.60%. A year ago, the 30-year averaged 6.34%, almost a full point lower. The main driver is the bond market. Mortgage rates track the 10-year Treasury yield, which was hovering around 5.23% this week. The Federal Reserve doesn't set mortgage rates directly; when Treasury yields climb, mortgage rates follow.",
    tip: "Rates published in the news are national averages. Your actual rate depends on your credit, down payment, loan type, and points, so a quote from your own lender is the only number that matters for your budget.",
  },
  {
    number: "02",
    title: "What It Costs: About $360–$380 More Every Month",
    body: "Here's the math on an average home in each county, assuming 10% down and a 30-year fixed loan. On Utah County's recent average sold price of about $676,000, the loan is $608,400. At last year's 6.34% rate, principal and interest ran about $3,782 a month. At 7.28%, it's about $4,163, or $381 more every month. Salt Lake County's average of about $640,000 works out to a $576,000 loan and roughly $361 more per month. Even last week's single jump, from 7.03% to 7.28%, added about $100 a month to that Utah County payment.",
    tip: "If you were pre-approved a few months ago, your approval was based on an older rate. Ask your lender to re-run your numbers at today's rate before you write an offer, so you don't get surprised during underwriting.",
  },
  {
    number: "03",
    title: "What It Does to Buying Power: Roughly $46,000 Less House",
    body: "Higher rates don't just raise the payment; they shrink what that payment can buy. A monthly payment that covered a $500,000 loan at 6.34% a year ago only covers about $454,000 at 7.28%. Same income, same budget, about $46,000 less house. Lenders qualify buyers based on debt-to-income ratio, so a rate jump can push some buyers out of a price range, or out of the market altogether, until they adjust their plans.",
    tip: "Run your payment at a few different rates (7%, 7.5% and 8%) before you start touring. Knowing your comfortable ceiling keeps you from falling in love with a home that only works if rates fall.",
  },
  {
    number: "04",
    title: "If You're Buying: Higher Rates Bring Less Competition",
    body: "Rising rates thin out the buyer pool, and Utah's market was already slowing into fall. Utah County homes averaged 72 days on market in our latest update. That's real leverage for buyers who can make the payment work. Homes that have been sitting past the county average are where sellers are most open to price reductions, closing-cost help, or paying for a rate buydown. Two tools are worth asking your lender about now: a rate lock, so a further rise doesn't hit you between contract and closing, and a seller-paid buydown, which lowers your rate for the first years of the loan.",
    tip: "Refinancing later is possible if rates come down, but it isn't guaranteed and it costs money. Buy a home whose payment works at today's rate, and treat any future drop as a bonus.",
  },
  {
    number: "05",
    title: "If You're Selling: Make It Easy for Buyers to Say Yes",
    body: "When rates jump, some buyers who were shopping at your price can no longer afford it. That makes pricing right from day one more important than ever. An overpriced listing sits while the buyer pool shrinks around it. A smart alternative to a price cut is offering a concession buyers can put toward a rate buydown. A 2-1 buydown lowers the buyer's rate by 2 points in year one and 1 point in year two. On a $608,400 loan at 7.28%, that's about $792 a month off the payment in year one and $405 a month in year two, at a total cost of roughly $14,400. For many buyers, that solves the payment problem better than a price drop of the same amount.",
    tip: "Advertise the buydown in your listing. \"Seller will contribute toward a rate buydown\" gets the attention of exactly the buyers who are struggling with today's payments.",
  },
  {
    number: "06",
    title: "How the Smart Seller Program Helps You Fund It",
    body: "Traditional listing commissions often run 2.5–3% for the listing side. Our Gold package starts at 1%. On a $676,000 home, the gap between 3% and 1% is about $13,520, which covers nearly the whole cost of the 2-1 buydown in the example above. In other words, the money you save on commission can go toward the concession that gets your home sold in a higher-rate market, instead of coming out of your equity. Every package includes full MLS exposure, professional photography and expert negotiation, and you can cancel anytime.",
    tip: "Ask us to run your net sheet both ways, with a price reduction and with a buydown concession, so you can see which one leaves more money in your pocket.",
  },
];

export default function MortgageRatesRiseOctoberPost() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #D8AA3F 1px, transparent 1px)",
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
              Rates &amp; Financing
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> October 5, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 6 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            {TITLE}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">{DESCRIPTION}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you&apos;ve been watching rates, last week was a jolt. In a single
            week, the average 30-year mortgage rate moved more than it had in
            any week since 2022, and it&apos;s now almost a full point higher than
            this time last year.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mt-4">
            Rate headlines can feel abstract, so we&apos;ve translated this one into
            real Utah numbers: what it does to a monthly payment, how much buying
            power it takes away, and what buyers and sellers can actually do
            about it this fall.
          </p>
        </div>
      </section>

      {/* Rates callout */}
      <section className="py-10 bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl bg-primary p-6 md:p-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-5">
              Freddie Mac weekly average · October 1, 2026
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {RATES.map((rate) => (
                <div key={rate.label}>
                  <p className="font-heading text-3xl text-accent">{rate.value}</p>
                  <p className="text-white/70 text-xs mt-1 leading-tight">{rate.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {PAYMENTS.map((row) => (
              <div key={row.county} className="rounded-2xl border border-border bg-background p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                  {row.county}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {row.price} · {row.loan} loan
                </p>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">At 6.34%</p>
                    <p className="text-xl font-bold text-foreground">{row.yearAgo}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">At 7.28%</p>
                    <p className="text-xl font-bold text-foreground">{row.today}</p>
                  </div>
                  <p className="font-heading text-2xl text-foreground">{row.diff}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs mt-4">
            Monthly principal &amp; interest, 30-year fixed, 10% down. Taxes, insurance and PMI not included.
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
                  <p className="text-muted-foreground leading-relaxed mb-4">{section.body}</p>
                  <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg px-4 py-3">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-foreground">Pro tip: </span>
                      {section.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-14 text-sm text-muted-foreground leading-relaxed">
            This article is general information, not financial or lending advice.
            Rates, payments and buydown costs vary by lender and borrower. Talk
            with a licensed mortgage lender about your specific situation.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Sources
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>Freddie Mac Primary Mortgage Market Survey, released October 1, 2026.</li>
            <li>Fox Business, &ldquo;Mortgage rates rise to 7.28%,&rdquo; October 1, 2026 (10-year Treasury yield).</li>
            <li>
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County average sold prices and days on market, August 21–September 3, 2026.
            </li>
            <li>Payment, buying-power and buydown figures calculated by Childs Real Estate using standard amortization.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Rates Are Moving
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Run Your Numbers
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Whether you&apos;re buying or selling, we&apos;ll show you what today&apos;s
            rates mean for your specific situation, and the strategies that
            still win in this market.
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
              <Link href="/mortgage-calculator">Try the Mortgage Calculator</Link>
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
