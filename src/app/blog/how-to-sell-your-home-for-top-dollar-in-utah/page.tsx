import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Sell Your Home for Top Dollar in Utah's 2026 Market",
  description:
    "Pricing, presentation, and negotiation — here's the proven playbook for getting the most money out of your Utah home sale in 2026.",
  openGraph: {
    title: "How to Sell Your Home for Top Dollar in Utah's 2026 Market",
    description:
      "Pricing, presentation, and negotiation — here's the proven playbook for getting the most money out of your Utah home sale in 2026.",
    url: "/blog/how-to-sell-your-home-for-top-dollar-in-utah",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Sell Your Home for Top Dollar in Utah's 2026 Market",
    description:
      "Pricing, presentation, and negotiation — here's the proven playbook for getting the most money out of your Utah home sale in 2026.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "Price It Right From Day One",
    body: "Nothing matters more than your list price. Price too high and buyers scroll past you — or worse, they tour your home, decide it's overpriced, and mentally check out before they even leave. Price too low and you leave money on the table. The sweet spot is a price that's grounded in what comparable homes have actually closed for in the last 60–90 days — not Zillow estimates, not what your neighbor got 18 months ago, and not what you need to net to make your next move work. In Utah's current market, homes priced correctly are going under contract in around 30–34 days. Overpriced homes are sitting two to three times longer and netting less.",
    tip: "The best price isn't the highest price — it's the price that creates competition. A well-priced home that attracts multiple offers will almost always sell for more than an overpriced home that sits.",
  },
  {
    number: "02",
    title: "Handle Deferred Maintenance Before You List",
    body: "Buyers notice everything. That dripping faucet, the cracked outlet cover, the scuff marks on the baseboards — none of these are dealbreakers on their own, but together they send a signal: this home hasn't been well cared for. And once a buyer starts feeling that way, they start negotiating hard on price and inspection items. Spending $1,000–$3,000 on touch-ups, minor repairs, and fresh paint in high-traffic areas before you list can easily return $5,000–$10,000 at closing. Walk your home like a buyer would — or better yet, have your agent do a pre-list walkthrough and give you an honest punch list.",
    tip: "Focus on kitchens, bathrooms, and entry areas first. These are the spaces buyers remember most and the ones that move the needle on perceived value.",
  },
  {
    number: "03",
    title: "Invest in Curb Appeal",
    body: "The first photo in your listing is almost always the front of the home — and buyers decide in under three seconds whether to keep scrolling or click through. A freshly mowed lawn, clean walkway, trimmed hedges, and a painted front door cost very little but make an enormous difference. If the outside looks tired, buyers expect the inside to match. If it looks sharp and well-maintained, they walk in already feeling positive. In Utah's spring and summer market, curb appeal is especially powerful — homes photograph beautifully against the backdrop of the mountains, and a little landscaping goes a long way.",
    tip: "Add a fresh layer of mulch, replace any dead plants, and power wash the driveway and walkway. These are usually half-day projects that dramatically sharpen your home's first impression.",
  },
  {
    number: "04",
    title: "Stage to Sell, Not to Live",
    body: "Staging isn't about making your home look like a magazine — it's about helping buyers see themselves living there. That means decluttering aggressively, removing personal photos and religious items, rearranging furniture to make rooms feel larger, and depersonalizing spaces so buyers can project their own lives onto them. You don't need to hire a professional stager for every home (though it's worth it for higher-end listings), but you do need to think intentionally about what each room is communicating. Homes that are staged well show better, photograph better, and sell faster — often for more money.",
    tip: "Less is always more. If you're unsure whether to remove something, remove it. Buyers buy space and light — don't block either one with unnecessary furniture or clutter.",
  },
  {
    number: "05",
    title: "Don't Compromise on Photography and Marketing",
    body: "The vast majority of buyers start their home search online, and your listing photos are your first — and sometimes only — shot at getting them through the door. Grainy, poorly lit, wide-angle-distorted photos from an agent's phone will cost you showings, and fewer showings mean less competition and less leverage at the negotiating table. Professional real estate photography, a well-written listing description, targeted digital marketing, and strong MLS syndication aren't optional extras — they're the baseline for a well-run sale in 2026. At Childs Real Estate, every listing includes professional photography and a full digital marketing campaign as standard.",
    tip: "Ask to review your listing photos before it goes live. You're selling one of the largest assets of your life — the marketing should reflect that.",
  },
  {
    number: "06",
    title: "Time Your Listing Strategically",
    body: "In Utah, spring is traditionally the strongest selling season — buyer demand peaks between March and June, inventory is still catching up, and competition among buyers drives prices up. But timing isn't just about the season. The day of the week you list matters too: homes that go live Thursday or Friday hit the market right before the weekend, when buyers are actively scheduling tours. Listing Monday or Tuesday means your home sits unvisited for days before the weekend rush. Your agent should also be watching local inventory levels — listing when competition is thin gives you more pricing power.",
    tip: "If you're debating whether to list now or wait, consider this: every week you delay is a week the market can shift. In most cases, listing sooner in a strong season beats waiting for the 'perfect' moment.",
  },
  {
    number: "07",
    title: "Negotiate Beyond Just Price",
    body: "Top dollar isn't only about the sale price — it's about the total terms of the deal. A savvy seller negotiates closing timelines, inspection contingencies, appraisal gaps, earnest money deposits, and what stays with the home. Sometimes a slightly lower offer with a fast close, minimal contingencies, and a large earnest money deposit is worth more than a higher offer with a long inspection period and financing shakiness. An experienced agent will help you evaluate all offers on their full merits — not just the number at the top — and negotiate the deal structure that actually puts the most in your pocket at closing.",
    tip: "Don't automatically take the highest offer. Look at the full picture: financing strength, contingencies, closing timeline, and what the buyer is asking you to leave behind or fix. The best offer is the one most likely to close on the best terms.",
  },
];

export default function TopDollarPost() {
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
              <Calendar className="h-3 w-3" /> April 20, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            How to Sell Your Home for Top Dollar in Utah&apos;s 2026 Market
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Pricing, presentation, and negotiation — here&apos;s the proven playbook
            for getting the most money out of your Utah home sale in 2026.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Selling your home for top dollar isn&apos;t luck — it&apos;s strategy.
              In Utah&apos;s 2026 market, where median days on market have dropped to
              30–34 days and buyers are competing for well-presented homes, sellers
              who do the right things before and during their listing consistently
              walk away with more money than those who don&apos;t.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              The gap between a home that sells at full price in two weeks and one
              that sits for two months and eventually cuts its price isn&apos;t talent
              or timing — it&apos;s preparation, pricing, and execution. Here&apos;s
              exactly what that looks like.
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
            Ready to Sell for More?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Get a Free, No-Obligation Home Valuation
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            We&apos;ll pull the real comps, walk through your home, and give you
            an honest strategy for getting top dollar — backed by data and years
            of experience selling homes across Utah County and the Salt Lake Valley.
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
