import { CalendarDays } from "lucide-react";
import { OFFICE, SCHEDULE_MEETING_URL } from "@/lib/constants";
import { HomeValueForm } from "./HomeValueForm";

export function HomeCTA() {
  return (
    <section id="home-value" className="bg-gold text-ink py-20 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
        <div>
          <h2 className="font-display text-6xl md:text-8xl leading-[0.92]">
            What&apos;s your
            <br />
            home worth?
          </h2>
          <p className="mt-5 max-w-lg text-lg font-medium">
            Get a free valuation and a personalized selling strategy built for
            the best possible outcome. No obligation.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-x-7 gap-y-3">
            <a
              href={SCHEDULE_MEETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold border-b-2 border-ink pb-0.5 self-start"
            >
              <CalendarDays className="h-5 w-5" />
              Schedule a Meeting
            </a>
            <a
              href={`tel:${OFFICE.phone}`}
              className="font-semibold underline underline-offset-4 self-start"
            >
              Or call {OFFICE.phone}
            </a>
          </div>
        </div>

        <HomeValueForm />
      </div>
    </section>
  );
}
