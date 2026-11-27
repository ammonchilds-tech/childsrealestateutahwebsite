import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Phone } from "lucide-react";
import { SITE_URL, OFFICE } from "@/lib/constants";
import { CITIES_SERVED, getCity } from "@/lib/cities";
import { getCurrentListings } from "@/lib/listings";
import { HomeCTA } from "@/components/home/HomeCTA";

// Dynamic so "our listings in this city" stays in step with /properties.
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCity((await params).city);
  if (!city) return {};
  const title = `Selling a Home in ${city.name}, Utah`;
  const description = `${city.tagline}. Ammon and Tasha Childs help ${city.name} homeowners sell with full service from 1%.`;
  return {
    title,
    description,
    alternates: { canonical: `/areas/${city.slug}` },
    openGraph: { title, description, url: `/areas/${city.slug}`, type: "website" },
  };
}

export default async function CityPage({ params }: Props) {
  const city = getCity((await params).city);
  if (!city) notFound();

  const listings = getCurrentListings().filter((l) => l.city === city.name);
  const others = CITIES_SERVED.filter((c) => c.slug !== city.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Areas We Serve", item: `${SITE_URL}/areas` },
      { "@type": "ListItem", position: 2, name: city.name, item: `${SITE_URL}/areas/${city.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <Link href="/areas" className="text-gold text-xs font-bold tracking-[0.18em] uppercase hover:underline">
            Areas We Serve
          </Link>
          <h1 className="mt-3 font-display text-6xl md:text-8xl leading-[0.92]">{city.name}, Utah</h1>
          <p className="mt-5 max-w-2xl text-white/75 text-lg md:text-xl">{city.tagline}.</p>
        </div>
      </section>

      <section className="bg-white text-ink py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-5 text-lg leading-relaxed text-neutral-800">
            {city.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <h2 className="pt-4 font-display text-4xl text-ink">Homes in {city.name}</h2>
            <p>{city.homes}</p>
            {city.marketNote && (
              <p className="text-base bg-neutral-100 p-5">
                {city.marketNote.text}{" "}
                <span className="text-sm text-neutral-500">
                  ({city.marketNote.source}, as of {city.marketNote.asOf})
                </span>
              </p>
            )}
          </div>
          <aside className="bg-neutral-100 p-8 self-start">
            <h2 className="font-display text-3xl">Why people move to {city.name}</h2>
            <ul className="mt-5 space-y-3">
              {city.whyPeopleMove.map((reason) => (
                <li key={reason} className="flex gap-3">
                  <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {listings.length > 0 && (
        <section className="bg-neutral-100 text-ink py-14">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-4xl mb-6">Our listings in {city.name}</h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {listings.map((l) => (
                <li key={l.slug} className="bg-white p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold">{l.address}</p>
                    <p className="text-neutral-600 text-sm">
                      {l.city}, UT ·{" "}
                      {l.price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <a
                    href={l.landingPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-ink text-white font-bold px-5 min-h-[48px] hover:bg-ink/85"
                  >
                    View This Home <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-white text-ink py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl mb-8">{city.name} questions, answered</h2>
          <div className="space-y-8">
            {city.faqs.map((f) => (
              <div key={f.q} className="border-t-4 border-gold pt-4">
                <h3 className="text-xl font-bold">{f.q}</h3>
                <p className="mt-2 text-neutral-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-neutral-600">
            More answers on our <Link href="/faq" className="underline underline-offset-4 font-semibold text-ink">FAQ page</Link>.
          </p>
        </div>
      </section>

      {/* Buyer call to action */}
      <section className="bg-ink text-white py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl">Buying in {city.name}?</h2>
            <p className="mt-2 text-white/75 max-w-xl">
              Tell us what you&apos;re looking for and we&apos;ll send you homes that match.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 min-h-[52px] px-7 bg-gold text-ink font-bold hover:bg-gold/90"
            >
              Message Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${OFFICE.phone}`}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 border-2 border-white/40 font-bold hover:bg-white hover:text-ink"
            >
              <Phone className="h-4 w-4" /> Ammon {OFFICE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Seller call to action: the home-value form */}
      <HomeCTA />

      <nav aria-label="Other areas we serve" className="bg-white text-ink py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="text-xs font-bold tracking-[0.18em] uppercase text-neutral-600">Also serving</span>
          {others.map((c) => (
            <Link key={c.slug} href={`/areas/${c.slug}`} className="font-bold underline underline-offset-4 hover:text-gold">
              {c.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
