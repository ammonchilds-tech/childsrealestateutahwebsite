import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Interest Rates Affect Your Buying Power — and How Smart Buyers Win Anyway",
  description:
    "Interest rates change what you can afford, how you compete, and when you should move. Here's what every Utah buyer needs to understand before entering the market.",
  openGraph: {
    title: "How Interest Rates Affect Your Buying Power — and How Smart Buyers Win Anyway",
    description:
      "Interest rates change what you can afford, how you compete, and when you should move. Here's what every Utah buyer needs to understand before entering the market.",
    url: "/blog/how-interest-rates-affect-your-buying-power",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Interest Rates Affect Your Buying Power — and How Smart Buyers Win Anyway",
    description:
      "Interest rates change what you can afford, how you compete, and when you should move. Here's what every Utah buyer needs to understand before entering the market.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Math Is Brutal — and Buyers Need to See It",
    body: "A 1% change in your interest rate affects your monthly payment by roughly $120–$140 for every $100,000 you borrow. On a $500,000 home, that's a $600–$700 swing in your monthly payment from a single point of rate movement. Rates have moved multiple points over the past few years — which means the same buyer with the same income qualifies for dramatically different loan amounts depending on when they're shopping. That's not a small adjustment. It fundamentally reshapes what the market looks like for you.",
    tip: "Run your numbers at multiple rate scenarios before you start touring homes. Knowing your payment at 6.5%, 7%, and 7.5% lets you set a realistic price ceiling instead of falling in love with a home you can't comfortably afford.",
  },
  {
    number: "02",
    title: "Rates Change What You Qualify For — Not Just What You Want",
    body: "Lenders qualify you based on your debt-to-income ratio (DTI), which ties your monthly debt obligations to your gross income. When rates rise, the payment on any given loan amount goes up — and that can push you over the DTI limit a lender will allow. In practical terms: a buyer who qualified for a $550,000 home at 5.5% might only qualify for $475,000 at 7.5%. That's a $75,000 reduction in purchasing power with no change in income, savings, or credit. Rate movement is one of the most significant forces in determining what you can actually buy.",
    tip: "Get pre-approved — not just pre-qualified — before you start shopping. A full underwriting pre-approval locks in your actual qualifying amount and shows sellers you're a serious, ready buyer.",
  },
  {
    number: "03",
    title: "Higher Rates Cool Competition — Which Can Work in Your Favor",
    body: "When rates were at historic lows, the Utah market was explosive: dozens of offers per listing, waived inspections, homes selling $50,000–$100,000 over asking. Higher rates have cooled that fever. Fewer buyers are competing for each home, sellers are more willing to negotiate, and the days of writing unconditional offer letters just to stay in the game are largely behind us. For buyers who can make the payment work, today's market offers something the 2020–2022 market didn't: leverage.",
    tip: "A buyer competing against five offers has a much better outcome than one competing against thirty. Higher rates thinned the competition — that's a real advantage if you're financially positioned to move.",
  },
  {
    number: "04",
    title: "\"Waiting for Rates to Drop\" Is a Strategy With Real Risk",
    body: "The most common thing buyers say right now is: \"We're going to wait until rates come down.\" It's understandable — but it assumes rates will fall meaningfully and that home prices won't move in the meantime. In Utah County and the Salt Lake Valley, home values have proven remarkably resilient even through rate increases. If rates drop a full point and prices rise 5–8% in the same period — which is entirely plausible — you've waited a year, paid rent instead of building equity, and ended up with a higher purchase price. The math doesn't always favor waiting.",
    tip: "The real estate industry phrase is: \"Marry the house, date the rate.\" Buy the right home now, and refinance when rates improve. Your home's appreciation belongs to you regardless of what rates do after closing.",
  },
  {
    number: "05",
    title: "Seller Concessions and Rate Buydowns Change the Equation",
    body: "One of the most underused tools in the current market is the seller-paid rate buydown. Instead of negotiating purely on price, buyers can ask sellers to contribute funds at closing to permanently or temporarily lower the interest rate on their loan. A 2-1 buydown, for example, reduces your rate by 2% in year one and 1% in year two before settling at the full rate in year three — giving you two years of lower payments while your income hopefully grows. Some sellers will take a price reduction; others would rather contribute to closing costs or a buydown. Knowing which levers to pull is the difference between a good deal and a great one.",
    tip: "In a market where sellers have more days on market and more motivation to negotiate, rate buydowns are often achievable. We negotiate these for our buyers regularly — it's part of how we structure offers strategically.",
  },
  {
    number: "06",
    title: "Adjustable-Rate Mortgages Are Worth a Real Conversation",
    body: "ARMs got a bad reputation from the 2008 housing crisis — but today's adjustable-rate products are structurally different and far more regulated. A 7/1 ARM gives you a fixed rate for seven years before it adjusts, typically with caps on how much it can move annually and over the life of the loan. For a buyer who plans to move within five to seven years, an ARM can deliver meaningfully lower monthly payments without meaningful risk. This isn't right for every buyer, but it's a conversation worth having with your lender rather than defaulting to a 30-year fixed without exploring your options.",
    tip: "If your average homeownership period aligns with an ARM's fixed window, you may never see a single adjustment. Ask your lender to run the numbers on a 5/1 and 7/1 ARM alongside the 30-year fixed so you can compare total interest paid over your likely holding period.",
  },
  {
    number: "07",
    title: "Your Strategy Should Change Based on Rate Conditions",
    body: "Buyers in a low-rate environment should stretch their budget: competition is fierce, prices are rising, and locking in a low payment for 30 years is genuinely valuable. Buyers in a high-rate environment should be more conservative on purchase price, negotiate harder on terms, and plan for a refinance. These aren't the same market and they don't call for the same strategy. Working with an agent who understands how rate conditions change negotiation dynamics, offer structure, and the risk/reward calculus of different price points is what separates buyers who get great outcomes from ones who overpay or miss out entirely.",
    tip: "We work with buyers across all rate environments and adjust our strategy accordingly. Before you write a single offer, let's sit down and map out your approach based on your specific numbers and goals.",
  },
];

export default function InterestRatesBuyersPost() {
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
              Buyers
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> April 28, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            How Interest Rates Affect Your Buying Power — and How Smart Buyers Win Anyway
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Interest rates change what you can afford, how you compete, and when
            you should move. Here&apos;s what every Utah buyer needs to understand
            before entering the market.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Interest rates are the single most misunderstood force in real estate.
              Most buyers think about them as a number that makes homes feel more or
              less expensive — but rates do something more fundamental than that. They
              reshape the entire market: who can buy, what they can afford, how sellers
              price, and how aggressively buyers have to compete.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Whether rates are rising, falling, or holding steady, the buyers who
              come out ahead are the ones who understand how rates affect their
              specific position — and adjust their strategy accordingly. Here&apos;s
              what you need to know.
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
            Ready to Buy?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Build Your Buying Strategy
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We&apos;ll walk through your budget, your goals, and current rate conditions
            to build an offer strategy that gets you the right home at the right price
            — regardless of what the market is doing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Link href="/buy">Learn Our Buying Process</Link>
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
