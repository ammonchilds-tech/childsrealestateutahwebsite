import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah November 2026 Market Update: Utah County Sells Near Asking While Salt Lake Buyers Negotiate",
  description:
    "Utah County closed 500 homes in November at an average of $634,905, about 99% of list price. Salt Lake County closed 698 at $639,420, about 97% of list. Days on market held at 78 and 68. Here's what it means for sellers and buyers heading into winter.",
  alternates: { canonical: "/blog/utah-november-2026-market-update" },
  openGraph: {
    title: "Utah November 2026 Market Update: Utah County Sells Near Asking While Salt Lake Buyers Negotiate",
    description:
      "Utah County closed 500 homes in November at an average of $634,905, about 99% of list price. Salt Lake County closed 698 at $639,420, about 97% of list. Days on market held at 78 and 68. Here's what it means for sellers and buyers heading into winter.",
    url: "/blog/utah-november-2026-market-update",
    type: "article",
    publishedTime: "2026-11-27",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah November 2026 Market Update: Utah County Sells Near Asking While Salt Lake Buyers Negotiate",
    description:
      "Utah County closed 500 homes in November at an average of $634,905, about 99% of list price. Salt Lake County closed 698 at $639,420, about 97% of list. Days on market held at 78 and 68. Here's what it means for sellers and buyers heading into winter.",
  },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Numbers: November at a Glance",
    body: "Utah County closed 500 homes in November at an average sold price of $634,905 against an average list price of $639,773, a sold-to-list ratio of about 99.2%. Salt Lake County closed 698 homes at $639,420 sold versus $656,548 listed, about 97.4%. Average days on market came in at 78 in Utah County and 68 in Salt Lake County. One note before comparing to October: our October update covered only a two-week window (October 15–28), while these figures cover November, so the sales counts aren't apples to apples. Days on market and sold-to-list ratios compare fairly; raw sales counts don't.",
    tip: "When you compare months, look at ratios and averages, not sales counts, unless both periods cover the same number of days.",
  },
  {
    number: "02",
    title: "Utah County: Sellers Are Getting Close to Asking",
    body: "Utah County homes sold for about 99.2% of list price in November, up from 98.5% in our October window. On an average home that's a gap of under $5,000 between list and sold price. The average sold price of $634,905 is also well above October's $572,381 — but as we cautioned last month, October's figure came from just 66 sales, and a small sample swings easily. November's 500 sales give a steadier read, and it says well-priced Utah County homes are still holding their value.",
    tip: "A tight sold-to-list ratio rewards sellers who price right from day one. Buyers are paying close to asking for homes that are priced to the market — not for homes that are priced to leave room for negotiation.",
  },
  {
    number: "03",
    title: "Salt Lake County: Buyers Have More Room to Negotiate",
    body: "Salt Lake County tells a different story. Homes sold for about 97.4% of list price in November, down from 98.2% in October, and the average gap between list and sold price was about $17,000. Days on market held at 68, the same as October. Buyers in Salt Lake County have more choices and are using them to negotiate, so sellers there should expect more back-and-forth on price, repairs, and concessions.",
    tip: "If you're selling in Salt Lake County this winter, budget for negotiation up front. A pre-listing inspection can take repair requests off the table before a buyer uses them to push the price down.",
  },
  {
    number: "04",
    title: "Days on Market Stay Long in Both Counties",
    body: "Utah County's average days on market rose slightly, from 76 in October to 78 in November, continuing a climb we've tracked since mid-summer. Salt Lake County held steady at 68. Homes are taking longer to sell than they did earlier in the year, which is normal heading into winter. The homes that sell faster are the ones that look great online, show well in person, and are priced in line with recent sales nearby.",
    tip: "Long averages hide a split market: well-priced homes still go under contract quickly, while overpriced ones sit and pull the average up. Don't let a long county average talk you into starting high.",
  },
  {
    number: "05",
    title: "The Smart Seller Program: Full Service from 1%",
    body: "If you're thinking about listing this winter or early spring, the Smart Seller Program gives you full-service marketing and negotiation for less than a traditional commission. Gold (1%) covers HDR photography, a professional market analysis, MLS and 500+ website syndication, 24/7 showing service, and contract negotiation. Diamond (1.99%) adds drone photography, a dedicated showing agent, a featured open house, and weekly social media ads. Platinum (2.49%) adds a Zillow Showcase listing, an interactive 3D tour, virtual staging, paid social media ads, and multiple open houses. Every package can be canceled anytime.",
    tip: "On a $635,000 home — about Utah County's November average — the difference between a 1% and a 3% listing fee is about $12,700.",
  },
  {
    number: "06",
    title: "What This Means If You're Buying",
    body: "Buyers have the most leverage in Salt Lake County right now, where homes are selling about 2.6% below list on average. In Utah County, the room to negotiate on price is smaller, so focus on terms — closing costs, repairs, or a seller-paid rate buydown — rather than expecting a big price cut. In both counties, homes that have been on the market past the average days on market are where sellers tend to be most flexible.",
    tip: "Ask about days on market before you make an offer. A home sitting past 70 or 80 days is a very different negotiation than one listed last week.",
  },
];

export default function NovemberMarketUpdatePost() {
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
              <Calendar className="h-3 w-3" /> <time dateTime="2026-11-27">November 27, 2026</time>
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 7 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Utah November 2026 Market Update: Utah County Sells Near Asking While Salt Lake Buyers Negotiate
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Utah County closed 500 homes in November at about 99% of list
            price. Salt Lake County closed 698 at about 97% of list. Days on
            market held at 78 and 68 as the market settles into winter.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed">
              November&apos;s numbers show the two counties moving in
              different directions. Utah County sellers are closing very
              close to asking price, while Salt Lake County buyers are
              negotiating more off list.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Days on market stayed long in both counties, which is normal
              heading into winter. Here&apos;s what the numbers say, and what
              it means whether you&apos;re buying or selling.
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
                  { label: "Avg Days on Market", value: "78" },
                  { label: "Number of Sales", value: "500" },
                  { label: "Avg List Price", value: "$640K" },
                  { label: "Avg Sold Price", value: "$635K" },
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
                  { label: "Avg Days on Market", value: "68" },
                  { label: "Number of Sales", value: "698" },
                  { label: "Avg List Price", value: "$657K" },
                  { label: "Avg Sold Price", value: "$639K" },
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
            November 2026 · Source: WFRMLS
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

          <p className="mt-12 text-muted-foreground leading-relaxed">
            Deciding on timing? Read{" "}
            <Link href="/blog/should-you-list-in-december-or-wait-for-spring" className="text-accent font-semibold underline underline-offset-4">
              Should you list in December, or wait for spring?
            </Link>{" "}
            — or see what&apos;s happening in{" "}
            <Link href="/areas/american-fork" className="text-accent font-semibold underline underline-offset-4">American Fork</Link>,{" "}
            <Link href="/areas/lehi" className="text-accent font-semibold underline underline-offset-4">Lehi</Link>, and{" "}
            <Link href="/areas/highland" className="text-accent font-semibold underline underline-offset-4">Highland</Link>.
          </p>

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
              Wasatch Front Regional Multiple Listing Service (WFRMLS) — Utah County &amp; Salt Lake County market data, November 2026.
            </li>
            <li>
              October comparisons: our{" "}
              <Link href="/blog/utah-october-2026-market-update" className="underline">October 2026 market update</Link>{" "}
              (WFRMLS, October 15–28, 2026).
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
              <Link href="/#home-value">
                Get My Home Value <ArrowRight className="h-4 w-4" />
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
