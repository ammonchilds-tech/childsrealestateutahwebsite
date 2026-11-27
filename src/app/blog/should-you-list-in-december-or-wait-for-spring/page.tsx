import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TITLE = "Should You List in December, or Wait for Spring? A Plain Answer for Utah Sellers";
const DESCRIPTION =
  "December listings face fewer competing homes and more serious buyers. Spring brings more buyers and better curb appeal. Here's how to decide which one fits your home and your timeline.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/should-you-list-in-december-or-wait-for-spring" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog/should-you-list-in-december-or-wait-for-spring",
    type: "article",
    publishedTime: "2026-11-27",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const SECTIONS = [
  {
    number: "01",
    title: "The Short Answer",
    body: "If your home is ready to show and you need to move in the first half of next year, listing in December is usually worth it. If your home needs work, or it really shines with a green yard and long daylight, waiting for spring can make sense — as long as you use the winter to prepare instead of just waiting. The wrong move is listing a home that isn't ready just to beat the calendar, or waiting for spring without a plan.",
    tip: "Decide based on your home and your timeline first, and the season second.",
  },
  {
    number: "02",
    title: "Why December Can Work in Your Favor",
    body: "Far fewer homeowners list during the holidays, so a December listing competes with fewer homes. The buyers who are out looking in December usually have a reason to be — a job move, a lease ending, a growing family — and they tend to be serious. Listing now also lets you go under contract before the spring wave of new listings arrives and starts competing for the same buyers.",
    tip: "Fewer showings in December is normal. What matters is whether the people who do come through are ready to write an offer.",
  },
  {
    number: "03",
    title: "Why Spring Still Has Its Pull",
    body: "Spring generally brings more buyers into the market, and homes with big yards, gardens, or mountain views photograph better once the snow melts. Families who want to move between school years also start shopping in spring. The tradeoff is that more sellers list at the same time, so your home has more competition for those buyers' attention.",
    tip: "If you wait for spring, list early in the season — before your neighbors do — rather than in the middle of the rush.",
  },
  {
    number: "04",
    title: "Showing a Home Over the Holidays",
    body: "A holiday listing takes a little planning. Keep decorations simple so buyers can still see the rooms, keep walks and the driveway clear of snow and ice, and turn on every light for showings since days are short. Block out the few days you truly don't want showings, and be flexible the rest of the time — buyers shopping in December often have limited windows to look.",
    tip: "Use photos that show the home well; if the exterior looks better without snow, ask us whether earlier photos or a twilight shoot make sense.",
  },
  {
    number: "05",
    title: "A Middle Path: Prepare Now, List When Ready",
    body: "If you're leaning toward spring, the winter months are the best time to get ready: get a valuation, decide what's worth fixing, line up a painter or handyman before their spring schedules fill, and declutter. When you list, you're ready on day one instead of scrambling. If you change your mind and want to list sooner, you're already prepared.",
    tip: "Ask for a free home value now even if you're not listing until spring. It's easier to plan repairs when you know what buyers will pay for.",
  },
  {
    number: "06",
    title: "Three Questions to Decide",
    body: "When do you actually need to be moved? How does your home show in winter compared with summer? And what are homes like yours, near you, selling for right now? Your answers to those three questions will point to the right season more reliably than any general rule. We're happy to walk through them with you — no pressure, and no obligation to list.",
    tip: "Not sure how your home compares? A comparative market analysis built on recent sales near you answers the third question.",
  },
];

export default function DecemberOrSpringPost() {
  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #D8AA3F 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">Seller Strategy</span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Calendar className="h-3 w-3" /> <time dateTime="2026-11-27">November 27, 2026</time>
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs">
              <Clock className="h-3 w-3" /> 5 min read
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">{TITLE}</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            December listings face fewer competing homes and more serious buyers. Spring brings more
            buyers and better curb appeal. Here&apos;s how to tell which one fits you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <span className="font-heading text-accent font-bold text-sm">{section.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{section.body}</p>
                <div className="bg-accent/5 border-l-2 border-accent rounded-r-lg px-4 py-3">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    <span className="font-semibold text-accent">Pro tip: </span>
                    {section.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <p className="text-muted-foreground leading-relaxed">
            Want to see how we&apos;d market your home this winter?{" "}
            <Link href="/sell" className="text-accent font-semibold underline underline-offset-4">
              See how we sell homes
            </Link>{" "}
            — or read about selling in{" "}
            <Link href="/areas/american-fork" className="text-accent font-semibold underline underline-offset-4">American Fork</Link>,{" "}
            <Link href="/areas/lehi" className="text-accent font-semibold underline underline-offset-4">Lehi</Link>, and{" "}
            <Link href="/areas/highland" className="text-accent font-semibold underline underline-offset-4">Highland</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">December or spring?</p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Start With What Your Home Is Worth</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Get a free home value and a straight answer on timing for your home — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent" className="gap-2">
              <Link href="/#home-value">
                Get My Home Value <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" className="border border-white/30 bg-white/10 text-white hover:bg-white/20">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
