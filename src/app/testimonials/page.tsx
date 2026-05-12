import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { TESTIMONIALS, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials",
  description: `See what Utah homeowners say about working with ${SITE_NAME} — real Google reviews from sellers and buyers across Utah County and the Salt Lake Valley.`,
  openGraph: {
    title: `Client Reviews & Testimonials | ${SITE_NAME}`,
    description: `See what Utah homeowners say about working with ${SITE_NAME}.`,
    url: "/testimonials",
    type: "website",
  },
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: TESTIMONIALS.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
    },
    reviewBody: t.text,
    publisher: { "@type": "Organization", name: "Google" },
  })),
};

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />

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
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent/60" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              {SITE_NAME}
            </span>
            <div className="h-px w-12 bg-accent/60" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Client Reviews
          </h1>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            {TESTIMONIALS.length} five-star Google reviews from Utah homeowners
            who trusted us to sell or find their home.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className="break-inside-avoid bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                {/* Review text */}
                <blockquote className="text-foreground text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                {/* Author */}
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <p className="font-heading font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <GoogleIcon />
                    <span>Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Had a great experience? We&apos;d love to hear from you.
            </p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg font-semibold text-sm bg-accent text-white hover:bg-accent/90 transition-colors"
            >
              <GoogleIcon />
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2D1B4E 0%, #1B3A4B 100%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Ready to become our next success story?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of Utah homeowners who trusted Childs Real Estate to
            sell smarter and for more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sell"
              className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base bg-accent text-white hover:bg-accent/90 transition-colors inline-flex items-center"
            >
              Get a Free Home Valuation
            </Link>
            <Link
              href="/contact"
              className="h-14 px-10 rounded-lg font-semibold tracking-wide text-base bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
