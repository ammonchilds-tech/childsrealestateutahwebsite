import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { HOMEPAGE_TESTIMONIALS, GOOGLE_REVIEWS_URL } from "@/lib/constants";
import { RecentlySold } from "./RecentlySold";

/** Homepage proof: real client reviews plus recently closed deals. */
export function ClientProof() {
  return (
    <section className="bg-neutral-100 text-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            What clients
            <br />
            say
          </h2>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-bold border-b-2 border-ink pb-1"
            >
              Read our Google reviews
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/testimonials" className="font-semibold underline underline-offset-4">
              All testimonials
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {HOMEPAGE_TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-white p-7 flex flex-col gap-4">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-neutral-800 leading-relaxed">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-auto text-sm font-bold">
                {t.name} <span className="font-medium text-neutral-500">· Google Review</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <RecentlySold />
        </div>
      </div>
    </section>
  );
}
