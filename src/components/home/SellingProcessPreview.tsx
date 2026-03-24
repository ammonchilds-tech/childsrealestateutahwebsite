import Link from "next/link";
import {
  MessageSquare,
  BarChart3,
  Camera,
  Megaphone,
  ClipboardCheck,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  { step: 1, title: "Consultation", icon: MessageSquare },
  { step: 2, title: "Market Analysis", icon: BarChart3 },
  { step: 3, title: "Staging & Photos", icon: Camera },
  { step: 4, title: "Listing & Marketing", icon: Megaphone },
  { step: 5, title: "Showings & Offers", icon: ClipboardCheck },
  { step: 6, title: "Closing", icon: Handshake },
];

export function SellingProcessPreview() {
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
            From Listed to Sold
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-accent rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven, transparent process designed to get you the best outcome
            — every time.
          </p>
        </div>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-7 left-[calc(8.33%+28px)] right-[calc(8.33%+28px)] h-px bg-border" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-sm mb-4">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-xs text-accent/70 font-medium tracking-wider uppercase mb-1">
                  Step {step.step}
                </span>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/sell">
              See the Full Process
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
