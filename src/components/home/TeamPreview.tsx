import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/constants";

export function TeamPreview() {
  return (
    <section className="bg-ink text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-16 md:items-center">
        {/* Photo with gold name tag */}
        <div className="relative md:w-[44%] shrink-0">
          <Image
            src="/images/team/ammon-tasha-standing.jpg"
            alt="Ammon and Tasha Childs"
            width={1201}
            height={1800}
            className="w-full h-[520px] md:h-[640px] object-cover object-[50%_15%]"
          />
          <div className="absolute left-0 bottom-0 bg-gold text-ink px-6 py-4 font-display text-2xl md:text-[28px] leading-tight">
            Ammon &amp; Tasha Childs
          </div>
        </div>

        {/* Copy */}
        <div className="flex-1 min-w-0 flex flex-col gap-7">
          <h2 className="font-display text-5xl md:text-6xl leading-[0.98]">
            Two agents.
            <br />
            One goal:
            <br />
            <span className="text-gold">your top dollar.</span>
          </h2>
          <p className="text-white/80 text-lg">
            Broker/Owner Ammon brings 15+ years of Utah market expertise.
            Co-owner Tasha brings a designer&apos;s eye and relentless attention to
            detail. Together, they work every listing side by side.
          </p>

          <figure className="bg-[#1A1712] border-t-4 border-gold p-6">
            <blockquote className="text-lg italic">
              &ldquo;Ammon and Tasha are amazing people. They are always willing to
              answer questions, explain options, and offer honest advice. Their
              experience and local knowledge set them apart from other real estate
              agents.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm font-bold text-gold">
              Jeff Brady · Google Review
            </figcaption>
          </figure>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3">
            {TEAM.map((member) => (
              <a
                key={member.name}
                href={`tel:${member.phone}`}
                className="inline-flex items-center gap-2 text-white/85 hover:text-gold transition-colors"
                aria-label={`Call ${member.name}`}
              >
                <Phone className="h-4 w-4 text-gold" />
                <span className="font-semibold">{member.name.split(" ")[0]}</span>
                {member.phone}
              </a>
            ))}
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 self-start font-bold border-b-2 border-gold pb-1"
          >
            Learn more about us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
