import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { OFFICE } from "@/lib/constants";
import { getCurrentListings, type Listing } from "@/lib/listings";

// Re-render on each request so a listing with a future go-live date appears on its day.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Current Listings",
  description:
    "Homes currently listed for sale by Ammon and Tasha Childs of Childs Real Estate, Simple Choice Real Estate.",
  alternates: { canonical: "/properties" },
};

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function specs(l: Listing): string[] {
  const out: string[] = [];
  if (l.beds !== undefined) out.push(`${l.beds} bed`);
  if (l.baths !== undefined) out.push(`${l.baths} bath`);
  if (l.sqft !== undefined) out.push(`${l.sqft.toLocaleString("en-US")} sq ft`);
  return out;
}

function ListingCard({ listing }: { listing: Listing }) {
  const details = specs(listing);
  return (
    <article className="bg-white text-ink flex flex-col border border-neutral-200">
      <a
        href={listing.landingPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[4/3] overflow-hidden bg-neutral-100"
        tabIndex={-1}
        aria-hidden="true"
      >
        {/* Photo is served by the listing's Aryeo media page. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={listing.photo}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        <span className="absolute left-0 top-4 bg-gold text-ink px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase">
          {listing.status}
        </span>
      </a>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-display text-4xl leading-none">{usd.format(listing.price)}</p>
        <div>
          <h2 className="text-lg font-bold leading-snug normal-case">{listing.address}</h2>
          <p className="text-neutral-600">
            {listing.city}, UT
            {listing.community ? ` · ${listing.community}` : ""}
          </p>
        </div>
        {details.length > 0 && (
          <p className="text-sm font-semibold text-neutral-800">{details.join(" · ")}</p>
        )}
        {listing.mlsNumber && (
          <p className="text-xs text-neutral-500">MLS #{listing.mlsNumber}</p>
        )}
        <a
          href={listing.landingPageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-auto inline-flex items-center justify-center gap-2 min-h-[52px] px-6 bg-ink text-white font-bold hover:bg-ink/85 transition-colors"
        >
          View This Home
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only"> — {listing.address}, {listing.city} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}

export default function CurrentListingsPage() {
  const listings = getCurrentListings();

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-3">
            Listed by Ammon &amp; Tasha Childs
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">Current Listings</h1>
          <p className="mt-5 max-w-2xl text-white/75 text-lg">
            These are the homes we are listing right now. Tap any home for photos,
            details, and a tour on its own page.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {listings.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <ListingCard key={l.slug} listing={l} />
            ))}
          </div>
        ) : (
          <p className="text-lg text-neutral-700">
            We don&apos;t have a home on the market at this moment. New listings are coming soon.
          </p>
        )}

        <div className="mt-16 bg-gold text-ink p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Looking for something else?
            </h2>
            <p className="mt-2 text-lg font-medium max-w-xl">
              We can send you homes that match — call or message us.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 min-h-[52px] px-7 bg-ink text-white font-bold hover:bg-ink/85 transition-colors"
            >
              Message Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${OFFICE.phone}`}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 border-2 border-ink font-bold hover:bg-ink hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              {OFFICE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
