import type { Metadata } from "next";
import Link from "next/link";
import {
  Leaf,
  Trees,
  Flame,
  ShieldCheck,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

const PDF_URL = "/downloads/fall-home-maintenance-checklist.pdf";

export const metadata: Metadata = {
  title: `Fall Home Maintenance Checklist | ${SITE_NAME}`,
  description:
    "A free, printable fall home maintenance checklist for Utah homeowners — sprinklers, gutters, furnace, weatherstripping, and safety checks before the first cold snap.",
  openGraph: {
    title: `Fall Home Maintenance Checklist | ${SITE_NAME}`,
    description:
      "A free, printable fall home maintenance checklist for Utah homeowners — sprinklers, gutters, furnace, weatherstripping, and safety checks before the first cold snap.",
    url: "/resources/fall-home-checklist",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Fall Home Maintenance Checklist | ${SITE_NAME}`,
    description:
      "A free, printable fall home maintenance checklist for Utah homeowners — sprinklers, gutters, furnace, weatherstripping, and safety checks before the first cold snap.",
  },
};

const CHECKLIST = [
  {
    number: 1,
    title: "Outside & Yard",
    icon: Trees,
    color: "bg-accent",
    items: [
      {
        text: "Blow out the sprinkler system.",
        detail:
          "The big one in Utah — trapped water freezes, expands, and cracks your lines. Do it before the first hard freeze.",
      },
      {
        text: "Disconnect and drain garden hoses.",
        detail: "Then shut off and drain exterior faucets to prevent burst pipes.",
      },
      {
        text: "Clean out the gutters and downspouts.",
        detail: "Clogged gutters cause ice dams and water damage once the snow starts.",
      },
      {
        text: "Trim branches away from the roof and power lines.",
        detail: "Heavy snow snaps overhanging limbs — get ahead of it.",
      },
      {
        text: "Give the lawn its final mow and fertilize.",
        detail: "A fall feeding sets you up for a greener spring.",
      },
    ],
  },
  {
    number: 2,
    title: "Heating & Systems",
    icon: Flame,
    color: "bg-primary",
    items: [
      {
        text: "Service the furnace and replace the filter.",
        detail:
          "A quick tune-up now avoids a no-heat emergency in January — and keeps bills down.",
      },
      {
        text: "Test the thermostat",
        detail: "(and swap batteries if it's the battery kind).",
      },
      {
        text: "Reverse ceiling fans to clockwise.",
        detail: "Pushes warm air back down — a small trick that actually helps.",
      },
      {
        text: "Have the chimney inspected",
        detail: "if you use a wood or gas fireplace.",
      },
    ],
  },
  {
    number: 3,
    title: "Seal & Protect",
    icon: Leaf,
    color: "bg-accent",
    items: [
      {
        text: "Check weatherstripping on doors and windows.",
        detail: "Feel for drafts — sealing leaks is the cheapest way to cut a heating bill.",
      },
      {
        text: "Caulk gaps around window and door frames.",
        detail: "A $5 tube of caulk pays for itself fast.",
      },
      {
        text: "Add or check attic insulation.",
        detail: "Heat escapes through the top of the house first.",
      },
    ],
  },
  {
    number: 4,
    title: "Safety Check",
    icon: ShieldCheck,
    color: "bg-primary",
    items: [
      {
        text: "Test every smoke and carbon monoxide detector.",
        detail:
          "Closed-up homes running the furnace make CO detectors especially important.",
      },
      {
        text: "Refresh or check the emergency kit.",
        detail: "Flashlights, batteries, blankets — winter power outages happen.",
      },
      {
        text: "Stock up on ice melt and locate the snow shovel",
        detail: "before you actually need them at 6am.",
      },
    ],
  },
];

export default function FallHomeChecklistPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
        }}
      >
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
              Homeowner Tips
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
            <Leaf className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Fall Home Maintenance Checklist
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            A few hours this month saves you real money — and headaches —
            when the first Utah cold snap hits. Work through it, and head
            into winter with a home that&apos;s buttoned up tight.
          </p>
          <Button asChild variant="accent" size="lg">
            <a href={PDF_URL} download>
              <Download className="mr-2 h-4 w-4" />
              Download the Printable PDF
            </a>
          </Button>
        </div>
      </section>

      {/* Checklist Sections */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {CHECKLIST.map((section) => (
            <div key={section.title}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 rounded-full ${section.color} flex items-center justify-center shrink-0`}
                >
                  <section.icon className="h-4 w-4 text-white" />
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-foreground font-semibold">
                  {section.title}
                </h2>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-1 h-4 w-4 rounded border-2 border-accent shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">
                        {item.text}
                      </span>{" "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Selling callout */}
          <div className="rounded-xl bg-accent/10 border-l-4 border-accent p-6">
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Thinking of selling in the spring?</span>{" "}
              Every item on this list is also a quiet win for your home&apos;s
              value. A well-maintained home shows better, appraises better,
              and signals to buyers that it&apos;s been cared for. Knock these
              out now, and you&apos;re already ahead when listing season rolls
              around.
            </p>
          </div>

          <div className="text-center pt-4">
            <Button asChild variant="accent" size="lg">
              <a href={PDF_URL} download>
                <Download className="mr-2 h-4 w-4" />
                Download the Printable PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Have Questions About Your <span className="text-accent">Home&apos;s Value?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Ammon and Tasha are always happy to talk through maintenance,
            timing, or what your home could sell for — no pressure, no
            obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="accent" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
              <Link href="/resources">
                More Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
