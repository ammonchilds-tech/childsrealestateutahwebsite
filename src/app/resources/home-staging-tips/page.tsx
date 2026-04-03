import type { Metadata } from "next";
import Link from "next/link";
import {
  Paintbrush,
  CheckCircle2,
  ArrowRight,
  Star,
  PackageCheck,
  Sparkles,
  Home,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Home Staging Tips | ${SITE_NAME}`,
  description:
    "How to stage your home to sell faster and for more money. Practical tips on decluttering, furniture, lighting, and curb appeal — from the Childs Real Estate team.",
  openGraph: {
    title: `Home Staging Tips | ${SITE_NAME}`,
    description: "How to stage your home to sell faster and for more money. Practical tips on decluttering, furniture, lighting, and curb appeal — from the Childs Real Estate team.",
    url: "/resources/home-staging-tips",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Home Staging Tips | ${SITE_NAME}`,
    description: "How to stage your home to sell faster and for more money. Practical tips on decluttering, furniture, lighting, and curb appeal — from the Childs Real Estate team.",
  },
};

const TIPS = [
  {
    number: "01",
    title: "Walk Through With a Buyer's Eyes",
    body: "Before you do anything else, walk through your home as if you're seeing it for the very first time. Start from the curb and work your way through every room. Take notes — or better yet, take photos. The camera is brutally honest and will reveal clutter, dated finishes, and maintenance issues that your eyes have long since stopped seeing.",
    tip: "Ask a friend or family member to do the walkthrough with you and give honest feedback. A fresh set of eyes is invaluable.",
  },
  {
    number: "02",
    title: "Declutter Every Room — Ruthlessly",
    body: "Remove at least 30–50% of items from every single room. Clear countertops, bookshelves, mantels, and tabletops. Pack away personal collections, knick-knacks, and anything that makes the space feel busy. The goal is to make rooms feel open, airy, and spacious — not like a showroom, but like a clean slate buyers can project their lives onto.",
    tip: "Pack as if you're already moving. Every box you fill now is one less box to deal with after the sale.",
  },
  {
    number: "03",
    title: "Depersonalize the Space",
    body: "Remove family photos, children's artwork on the fridge, personalized signs, religious items, and anything that ties the home to your specific identity. This isn't about erasing your personality — it's about helping buyers picture themselves living there. When a home feels too much like someone else's, buyers stay emotionally detached.",
    tip: "Store personal items with intention. When you put them back in your new home, you'll appreciate them even more.",
  },
  {
    number: "04",
    title: "Edit Your Furniture for Flow",
    body: "Too much furniture makes even large rooms feel small. Remove pieces that block natural pathways, crowd seating areas, or make the room feel heavy. Extra chairs, large ottomans, oversized sectionals in small spaces, and duplicate accent tables should go into storage. Every room should have a clear, easy-to-follow traffic flow.",
    tip: "Furniture placement should guide buyers naturally through the home, not force them to squeeze past things.",
  },
  {
    number: "05",
    title: "Deep Clean Every Corner",
    body: "A spotless home sends a powerful message: this property has been cared for. Go beyond surface cleaning — scrub grout lines, wipe down baseboards, clean inside cabinets and drawers, degrease the oven, and wash windows inside and out. Don't overlook ceiling fans, light fixture globes, and window tracks. Consider hiring professional cleaners — it's one of the best investments you can make.",
    tip: "Buyers will open every cabinet and closet. Clean them too.",
  },
  {
    number: "06",
    title: "Eliminate Every Odor",
    body: "Odors are one of the fastest ways to kill a sale. Pet smells, cooking odors, mustiness, and cigarette smoke are immediate deal-breakers for many buyers. Clean all upholstered furniture and carpets, wash curtains, ventilate rooms daily, and repaint if needed. On showing days, opt for subtle scents — a candle gently burning or fresh flowers — not overwhelming plug-in air fresheners, which buyers often associate with covering something up.",
    tip: "If you can't smell it yourself, ask someone who doesn't live there. You may have gone nose-blind to odors in your own home.",
  },
  {
    number: "07",
    title: "Fix the Small Things",
    body: "Sticky doors, dripping faucets, loose cabinet hardware, cracked outlet covers, burned-out bulbs, and scuffed walls are all small issues that add up to a big impression. Each one signals to buyers that maintenance has been deferred — and makes them wonder what else might be lurking. Spend a weekend with a tool kit and a fresh can of touch-up paint addressing every minor issue.",
    tip: "Make a list as you walk through and check items off. Buyers will do the same during their showing.",
  },
  {
    number: "08",
    title: "Stage the Living Room for Connection",
    body: "The living room is where buyers emotionally connect with a home. Arrange furniture to create a natural conversation grouping — not just chairs lined up facing a TV. Add a neutral area rug to anchor the seating area. Bring in throw pillows and a light throw blanket in warm, coordinated tones. Clean or replace window treatments to maximize natural light.",
    tip: "If your sofa or chairs are dated or worn, consider renting or borrowing neutral-toned pieces for the listing photos.",
  },
  {
    number: "09",
    title: "Make the Kitchen Feel Bigger",
    body: "Clear every countertop down to one or two intentional items — a clean coffee maker, a bowl of fresh fruit, a single plant. Store the toaster, knife block, mail pile, and appliance clutter. Clean appliances until they gleam. If your hardware is dated, swapping cabinet pulls and drawer handles is an inexpensive update with a high visual return.",
    tip: "Buyers spend more time scrutinizing kitchens than any other room. Every detail counts.",
  },
  {
    number: "10",
    title: "Create a Spa-Like Primary Bathroom",
    body: "The primary bathroom sells homes. Remove all personal toiletries from the vanity and shower — store them in a caddy under the sink for daily use. Add fresh white towels folded neatly, a small plant or simple decor, and a clean bath mat. Scrub the grout, polish the mirror, and remove any buildup from faucets and fixtures. A bathroom that looks and smells clean and fresh feels like a luxury.",
    tip: "White towels are the standard in hotel staging for a reason — they signal cleanliness and calm.",
  },
  {
    number: "11",
    title: "Set the Primary Bedroom for Rest",
    body: "Layer your bed with clean, neutral bedding — a crisp duvet and coordinated pillows go a long way. Remove extra furniture that crowds the room. Make sure there is balanced lighting on both sides of the bed. Closets are always opened during showings — organize them thoughtfully and keep them only 50–60% full to signal ample storage.",
    tip: "Buyers visualize themselves waking up in your bedroom. Make it feel calm, spacious, and hotel-like.",
  },
  {
    number: "12",
    title: "Give Every Room a Clear Purpose",
    body: "Every room in your home needs a defined purpose — bedroom, home office, playroom, guest room. A room used as a storage catch-all leaves buyers confused about square footage and functionality. Even a small room staged as a reading nook or home office helps buyers see value they can use.",
    tip: "If a room has no clear use, stage it as a guest bedroom. It's the most universally appealing option.",
  },
  {
    number: "13",
    title: "Maximize Light Throughout",
    body: "Bright homes feel bigger, cleaner, and more welcoming. Open all blinds and curtains before every showing. Clean windows let in dramatically more light than dirty ones. Replace dim bulbs with bright, warm-toned LED bulbs and make sure all fixtures are working. Add floor or table lamps to any dark corners — no room should have a shadow.",
    tip: "Replace all bulbs with the same color temperature (2700K–3000K) for consistent, warm lighting throughout the home.",
  },
  {
    number: "14",
    title: "Invest in Your Curb Appeal",
    body: "Buyers form their first impression within 7 seconds of arriving at your home — before they step inside. Mow and edge the lawn, trim overgrown shrubs, pull weeds, and add fresh mulch. Power wash the driveway, sidewalks, and front porch. If the front door looks worn, paint it or replace it. Add a new doormat and potted plants flanking the entrance. Update house numbers if they're outdated or hard to read.",
    tip: "Buyers who are disappointed by the exterior will walk in looking for problems. A strong curb appeal creates optimism that carries through the entire showing.",
  },
  {
    number: "15",
    title: "Add Simple, Intentional Finishing Touches",
    body: "The final layer of staging is about emotion. A bowl of fresh lemons on the kitchen counter, flowers on the dining table, neatly stacked design books on the coffee table, a cozy throw on the reading chair. These are small, inexpensive details that photograph beautifully and make buyers feel the home is cared for, curated, and move-in ready. Less is more — choose a few impactful touches rather than decorating every surface.",
    tip: "Stage for the photos first. Great listing photos attract more showings, and more showings lead to stronger offers.",
  },
];

const PHASES = [
  { icon: PackageCheck, label: "Declutter & Depersonalize", count: "Steps 1–4" },
  { icon: Sparkles, label: "Clean & Repair", count: "Steps 5–7" },
  { icon: Home, label: "Room-by-Room Staging", count: "Steps 8–13" },
  { icon: Sun, label: "Curb Appeal & Finishing", count: "Steps 14–15" },
];

export default function HomeStagingTipsPage() {
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
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              Sellers
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            15 Home Staging Tips to<br className="hidden sm:block" /> Sell Faster &amp; for More
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical, room-by-room staging strategies that help buyers fall in love with your home — and pay for it.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/50 text-sm">
            <span className="flex items-center gap-1.5">
              <Paintbrush className="h-4 w-4" />
              Sellers Guide
            </span>
            <span>·</span>
            <span>7 min read</span>
            <span>·</span>
            <span>15 tips</span>
          </div>
        </div>
      </section>

      {/* Phase Overview */}
      <section className="py-14 border-b border-border/40 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PHASES.map((phase) => (
              <div key={phase.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <phase.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="font-heading font-semibold text-primary text-sm mb-0.5">{phase.label}</p>
                <p className="text-xs text-muted-foreground">{phase.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips List */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {TIPS.map((tip, index) => (
              <div key={tip.number} className="relative flex gap-6 group">
                {/* Number + connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <span className="font-heading text-sm font-bold text-accent">{tip.number}</span>
                  </div>
                  {index < TIPS.length - 1 && (
                    <div className="w-px flex-1 bg-border/50 mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1">
                  <h2 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {tip.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{tip.body}</p>
                  {tip.tip && (
                    <div className="flex gap-3 bg-accent/5 border border-accent/15 rounded-xl p-4">
                      <Star className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        <span className="font-semibold text-accent">Pro Tip: </span>
                        {tip.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick reference checklist */}
          <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              Quick Reference Checklist
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {TIPS.map((tip) => (
                <div key={tip.number} className="flex items-start gap-2 py-1.5 border-b border-border/30">
                  <span className="text-accent font-mono text-xs font-semibold mt-0.5 w-6 shrink-0">{tip.number}</span>
                  <span className="text-sm text-foreground/80">{tip.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to <span className="text-accent">List Your Home?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Our team can walk through your home and give you a personalized staging and pricing strategy — at no cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get a Free Home Valuation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
            >
              <Link href="/resources">
                Back to Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
