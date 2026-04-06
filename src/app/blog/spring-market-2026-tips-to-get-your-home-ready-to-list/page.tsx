import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Spring Market Is Here: Tips & Tricks to Get Your Home Ready to List",
  description:
    "Spring is the most competitive selling season in Utah. Here's what you need to do right now to maximize your home's value and attract serious buyers.",
  openGraph: {
    title: "The Spring Market Is Here: Tips & Tricks to Get Your Home Ready to List",
    description:
      "Spring is the most competitive selling season in Utah. Here's what you need to do right now to maximize your home's value and attract serious buyers.",
    url: "/blog/spring-market-2026-tips-to-get-your-home-ready-to-list",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Spring Market Is Here: Tips & Tricks to Get Your Home Ready to List",
    description:
      "Spring is the most competitive selling season in Utah. Here's what you need to do right now to maximize your home's value and attract serious buyers.",
  },
};

const TIPS = [
  {
    number: "01",
    title: "Start With a Deep Clean — And Mean It",
    body: "Before anything else, your home needs to be spotless. Not just tidy — deeply, thoroughly clean. That means baseboards, window tracks, grout lines, ceiling fans, and inside every cabinet. Buyers open everything, and a clean home signals that it's been well cared for. If cleaning isn't your thing, hire a professional cleaning crew for a top-to-bottom scrub before photos are taken. It's one of the highest-ROI investments you can make.",
    tip: "Pay special attention to kitchens and bathrooms. These rooms sell homes. If they sparkle, buyers will remember your listing.",
  },
  {
    number: "02",
    title: "Tackle Curb Appeal First",
    body: "Spring buyers are driving neighborhoods before they ever schedule a showing. Your home's exterior is your first impression — and in a competitive spring market, first impressions are everything. Mow the lawn, edge the walkway, pull weeds, and add a few flats of seasonal flowers near the entry. Repaint or replace your front door if it looks dated, and make sure your house numbers are visible. A fresh coat of paint on the trim can transform a home's exterior for just a few hundred dollars.",
    tip: "A freshly mulched flower bed and a new doormat do more for perceived value than most people realize. Don't skip the small stuff.",
  },
  {
    number: "03",
    title: "Declutter Every Single Room",
    body: "Buyers need to see the space — not your stuff. Go through every room and remove anything that isn't essential. Clear kitchen counters, empty closets to 50% capacity (buyers always check), and pack away personal photos and collections. The goal is for your home to feel like a model home: clean, open, and easy for buyers to picture themselves living in. Rent a storage unit if you need to. It's worth it.",
    tip: "Less is more, always. When you think you've decluttered enough, do another pass. Buyers psychologically equate clutter with small spaces.",
  },
  {
    number: "04",
    title: "Make the Minor Repairs You've Been Putting Off",
    body: "That dripping faucet, the sticky door, the chipped baseboard, the burnt-out light bulbs — fix them all before your home goes on the market. Buyers and their agents are trained to notice deferred maintenance, and it raises questions about what else might need attention. Walk through your home with a notepad and make a punch list. Most of these repairs cost very little but have a significant impact on how buyers perceive your home's condition.",
    tip: "If a buyer's inspector finds it, the buyer will use it as leverage. Fix it before listing so you control the narrative.",
  },
  {
    number: "05",
    title: "Refresh Paint With Neutral Tones",
    body: "Fresh paint is one of the most affordable and impactful things you can do before listing. If you have rooms painted in bold or unusual colors, now is the time to repaint in light, neutral tones — warm whites, soft greiges, or light grays. Neutral walls photograph better, make rooms feel larger and brighter, and let buyers focus on the space rather than the color. You don't need to repaint your entire home — focus on the rooms that look tired or have strong color.",
    tip: "Sherwin-Williams Accessible Beige, Agreeable Gray, and White Dove are perennial favorites that photograph beautifully and appeal to almost every buyer.",
  },
  {
    number: "06",
    title: "Stage to Sell, Not to Live",
    body: "Staging doesn't mean buying all new furniture — it means arranging what you have (or renting a few key pieces) to showcase the best features of each room. Pull furniture away from walls to create conversation areas. Remove oversized pieces that make rooms feel small. Add a few fresh throw pillows, a bowl of lemons on the kitchen counter, and fresh white towels in the bathrooms. The goal is a home that photographs beautifully and feels warm and welcoming in person.",
    tip: "We offer complimentary staging consultations to our sellers. Our team will walk your home with you and give you a specific action list — no guesswork needed.",
  },
  {
    number: "07",
    title: "Price It Right From the Start",
    body: "In the spring market, correctly priced homes in Utah County and the Salt Lake Valley are still moving quickly and often receiving multiple offers. But overpriced homes are sitting — and a home that sits accumulates days on market, which raises buyer suspicion. The best strategy is to price your home competitively based on real, recent comparable sales. Our team provides a detailed comparative market analysis (CMA) so you can make an informed decision on your list price.",
    tip: "A home priced right will attract more buyers, more showings, and ultimately a better final sale price than one that starts too high and requires reductions.",
  },
  {
    number: "08",
    title: "Invest in Professional Photography",
    body: "Over 95% of buyers start their search online. Your listing photos ARE your first showing. Professionally shot photos — especially with good lighting and wide-angle lenses — will get significantly more clicks, more showings, and more offers than poor-quality images. At Childs Real Estate, every listing includes professional photography, drone footage, and a virtual tour as part of our standard marketing package.",
    tip: "Do your showing prep and cleaning BEFORE the photographer arrives. There are no second chances to make a great first impression in photos.",
  },
];

export default function SpringMarketPost() {
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
              <Calendar className="h-3 w-3" /> April 6, 2026
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            The Spring Market Is Here: Tips & Tricks to Get Your Home Ready to List
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Spring is the most competitive selling season in Utah. Here&apos;s what
            you need to do right now to maximize your home&apos;s value and attract
            serious buyers.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              If you&apos;ve been thinking about selling your home, there&apos;s no better
              time than right now. Spring is historically the strongest selling
              season in Utah County and the Salt Lake Valley — buyers come out of
              winter with renewed urgency, inventory is still lean, and well-prepared
              homes are commanding strong prices.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              But &quot;strong market&quot; doesn&apos;t mean you can skip the prep work.
              The homes that sell fastest and for the most money are the ones that
              show beautifully, are priced correctly, and hit the market with
              professional marketing behind them. Here are the eight most important
              things you can do right now to get your home ready to list.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {TIPS.map((tip) => (
              <div key={tip.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="font-heading text-accent font-bold text-sm">
                      {tip.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {tip.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {tip.body}
                  </p>
                  <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg px-4 py-3">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-accent">Pro tip: </span>
                      {tip.tip}
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
            Ready to List?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Let&apos;s Get Your Home on the Market
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Our team will walk through your home, give you a detailed market
            analysis, and build a custom marketing plan — all at no cost and no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
              <Link href="/sell">Learn Our Selling Process</Link>
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
