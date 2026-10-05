import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { OFFICE } from "@/lib/constants";

export function HomeCTA() {
  return (
    <section className="bg-gold text-ink py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.92]">
            What&apos;s your
            <br />
            home worth?
          </h2>
          <p className="mt-5 max-w-lg text-lg font-medium">
            Get a free valuation and a personalized selling strategy built for
            the best possible outcome.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 lg:min-w-[340px]">
          <Link
            href="/sell"
            className="group inline-flex items-center justify-center gap-2.5 h-15 min-h-[60px] px-8 bg-ink text-white font-bold text-lg hover:bg-ink/85 transition-colors"
          >
            Get My Free Valuation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://calendar.app.google/pLYzk4KoBHBjjhgG8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 min-h-[60px] px-8 border-2 border-ink font-bold text-lg hover:bg-ink hover:text-white transition-colors"
          >
            <CalendarDays className="h-5 w-5" />
            Schedule a Meeting
          </a>
          <a
            href={`tel:${OFFICE.phone}`}
            className="text-center font-semibold underline underline-offset-4 mt-1"
          >
            Or call {OFFICE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
