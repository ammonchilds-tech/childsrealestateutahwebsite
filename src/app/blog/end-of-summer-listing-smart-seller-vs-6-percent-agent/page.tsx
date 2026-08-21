import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Listing at the End of Summer in Utah — and How the Smart Seller Program Beats a Traditional 6% Agent",
  description:
    "Late August doesn't mean the selling season is over — Utah buyers are still active and closing near asking price. Here's what listing now actually looks like, and how the Smart Seller Program can save you over $11,000 compared to a traditional 6% agent.",
  openGraph: {
    title: "Listing at the End of Summer in Utah — and How the Smart Seller Program Beats a Traditional 6% Agent",
    description:
      "Late August doesn't mean the selling season is over — Utah buyers are still active and closing near asking price. Here's what listing now actually looks like, and how the Smart Seller Program can save you over $11,000 compared to a traditional 6% agent.",
    url: "/blog/end-of-summer-listing-smart-seller-vs-6-percent-agent",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Listing at the End of Summer in Utah — and How the Smart Seller Program Beats a Traditional 6% Agent",
    description:
      "Late August doesn't mean the selling season is over — Utah buyers are still active and closing near asking price. Here's what listing now actually looks like, and how the Smart Seller Program can save you over $11,000 compared to a traditional 6% agent.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "Late August Doesn't Mean the Market Is Closed",
    body: "There's a common assumption that once summer winds down, so does buyer demand. The data doesn't back that up. In the first three weeks of August 2026, Utah County closed 298 homes and Salt Lake County closed 374 — some of the strongest activity we've seen all year. Sold-to-list ratios in both counties are still holding above 98%, meaning buyers are paying close to full asking price for homes that show well and are priced right. Days on market sit at 64 in Utah County and 56 in Salt Lake County — busier than a quiet market, calmer than the spring frenzy. This is not a market that's shutting down for the season.",
    tip: "\"End of summer\" is a calendar label, not a market signal. Look at closings and sold-to-list ratio, not the date on the calendar, to decide whether now is a good time to list.",
  },
  {
    number: "02",
    title: "Who's Actually Buying Right Now",
    body: "The buyer pool in late August looks different than it did in May, but it's not smaller in any way that hurts you. Relocation and job-transfer buyers are often working against a hard start date and can't wait for spring. Families who lost out on offers earlier in the year are still searching and are now more decisive. And every seller who takes their home off the market after Labor Day — which many do — means less competition for the listings that stay active. Fewer competing homes with buyers who are still motivated is, if anything, a better position for a seller than the crowded spring market.",
    tip: "Check active inventory in your neighborhood before you list. If competing listings are dropping off, your home gets more attention from the buyers who are still looking.",
  },
  {
    number: "03",
    title: "The Real Cost of a Traditional 6% Listing",
    body: "Most sellers have heard the number without seeing the math. A traditional full-service listing commonly runs a total of 6% of the sale price, typically split into roughly 3% for the listing agent and 3% for the buyer's agent. On a home selling near Utah County's current average of $609K, that's $36,540 in total commission. In Salt Lake County, where the average sold price is $677K, that's $40,620. That's money that comes directly out of your proceeds at closing, regardless of how much or how little work went into getting your home sold.",
    tip: "Commission rates are negotiable and not set by law — but most sellers never ask what they're actually paying for, or whether there's a better structure available.",
  },
  {
    number: "04",
    title: "How the Smart Seller Program Changes the Math",
    body: "The buyer's agent side of the transaction works the same under the Smart Seller Program as it does with a traditional agent — that commission is negotiated separately and typically still runs around 3%, because you still need to attract buyer's agents to show your home. The difference is on the listing side. Instead of paying roughly 3% to list, the Gold package starts at just 1%, plus a flat $295 transaction fee. On that same $609K Utah County home, that's a listing-side cost of about $6,389 instead of $18,270 — putting roughly $11,900 more in your pocket at closing. On a $677K Salt Lake County home, the Gold package saves you roughly $13,200. Diamond (1.99%) and Platinum (2.49%) packages add more service and still land well below a traditional 3% listing fee.",
    tip: "Ask any traditional agent to itemize their 3%. The Smart Seller Program's savings come from cutting overhead, not from cutting the marketing and negotiation that actually sells your home.",
  },
  {
    number: "05",
    title: "More Service, Not Less",
    body: "A lower listing fee doesn't mean a bare-bones listing. Every Smart Seller package — Gold, Diamond, and Platinum — includes HDR interior and exterior photography, a professional market analysis, a Supra lockbox and yard sign, listing on the MLS and 500+ websites, 24/7 showing service, and professional contract negotiation. Diamond adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. Platinum adds a Zillow Showcase listing, an interactive 3D home tour, virtual staging, paid social ads, and multiple open houses — plus weekly market updates directly from Ammon. Every package can be canceled anytime, with no lock-in and no pressure.",
    tip: "Homes featured on Zillow Showcase (included in Platinum) sell for 2% more on average — on a $609K home, that's about $12,000 in extra sale price on top of the commission savings.",
  },
  {
    number: "06",
    title: "Why Waiting Until Spring Costs You More Than You Think",
    body: "Waiting out the rest of the year feels safe, but it isn't free. Every month you hold onto a home you're planning to sell means another mortgage payment, another round of utilities, insurance, and property taxes — carrying costs that add up fast. Meanwhile, spring is when the most sellers list at once, which means more competition for buyer attention and less pricing leverage than you have right now, while sold-to-list ratios are still tight and buyer demand is holding up. If you're ready, or close to it, the data doesn't support waiting for a market that isn't guaranteed to be better.",
    tip: "Run your own numbers: multiply your monthly carrying costs by however many months you'd wait, then compare that to what you'd actually gain by waiting for a hypothetical stronger spring market. Often, the math favors listing now.",
  },
];

export default function EndOfSummerListingPost() {
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
              <Calendar className="h-3 w-3" /> August 21, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 8 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Listing at the End of Summer in Utah — and How the Smart Seller Program Beats a Traditional 6% Agent
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Late August doesn&apos;t mean the selling season is over — Utah
            buyers are still active and closing near asking price. Here&apos;s
            what listing now actually looks like, and how the Smart Seller
            Program can save you thousands compared to a traditional 6% agent.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              If you&apos;re weighing whether to list your home right now or
              wait until next spring, you&apos;re really asking two separate
              questions: is there still demand out there, and what will it
              actually cost you to sell? Both answers are more in your favor
              than you might think.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Here&apos;s what the current data says about end-of-summer
              demand in Utah, and a real, dollar-for-dollar look at how the
              Smart Seller Program stacks up against a traditional 6% agent.
            </p>
          </div>
        </div>
      </section>

      {/* Commission comparison */}
      <section className="py-10 bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-center text-accent text-xs font-semibold tracking-widest uppercase mb-6">
            Traditional 6% Agent vs. Smart Seller Gold (1%)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-primary p-6">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">
                Utah County
              </p>
              <p className="text-white/60 text-xs mb-4">
                Example home at $609K average sold price
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/80">
                  <span>Traditional 6% total commission</span>
                  <span className="font-semibold">$36,540</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Smart Seller Gold (1% + $295 fee + 3% buyer&apos;s agent)</span>
                  <span className="font-semibold">$24,673</span>
                </div>
                <div className="border-t border-white/20 pt-2 flex justify-between">
                  <span className="text-accent font-semibold">You keep</span>
                  <span className="text-accent font-heading text-lg font-semibold">
                    ~$11,900
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-primary p-6">
              <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-1">
                Salt Lake County
              </p>
              <p className="text-white/60 text-xs mb-4">
                Example home at $677K average sold price
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/80">
                  <span>Traditional 6% total commission</span>
                  <span className="font-semibold">$40,620</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Smart Seller Gold (1% + $295 fee + 3% buyer&apos;s agent)</span>
                  <span className="font-semibold">$27,383</span>
                </div>
                <div className="border-t border-white/20 pt-2 flex justify-between">
                  <span className="text-accent font-semibold">You keep</span>
                  <span className="text-accent font-heading text-lg font-semibold">
                    ~$13,200
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-xs mt-4">
            Illustrative example based on current county average sold prices (Aug 7–21, 2026) and a typical 3% buyer&apos;s agent commission, held constant across both scenarios. Actual commissions and savings vary by transaction.
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
                $295 transaction fee due at closing. Buyer&apos;s agent commission negotiated separately. Commission rates are negotiable and not set by law. Seller can cancel anytime.
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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, August 7–21, 2026.
            </li>
            <li>
              Zillow Research — Zillow Showcase sells for 2% more on average (internal Zillow data, 2025).
            </li>
            <li>
              Commission figures illustrate a common 6% total / 3%-and-3% traditional structure; actual commissions are negotiable and vary by brokerage and agreement.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Still Time to List This Season
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            See What You&apos;d Actually Save
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-pressure home valuation and a side-by-side look at
            what you&apos;d net with the Smart Seller Program versus a
            traditional listing — so you can decide with real numbers, not
            guesswork.
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
