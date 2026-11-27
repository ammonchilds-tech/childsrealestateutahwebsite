/**
 * Childs Real Estate's own current listings, curated by hand.
 *
 * This is NOT an MLS/IDX feed. Each card links to that listing's Aryeo
 * landing page. Copy landing-page URLs exactly as Ammon supplies them.
 *
 * Rules (from the Nov 27, 2026 punch list):
 * - Only publish beds/baths/sqft that Ammon has confirmed. Leave a field
 *   undefined until he does; the card simply omits it.
 * - Never link a card's main button to Zillow.
 * - When a listing sells, move it to RECENT_SALES the same week.
 */

export type ListingStatus = "Active" | "Coming Soon" | "Under Contract";

export interface Listing {
  slug: string;
  address: string;
  city: string;
  /** Neighborhood / community name shown under the address, if any. */
  community?: string;
  price: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  mlsNumber?: string;
  status: ListingStatus;
  photo: string;
  landingPageUrl: string;
  /** Optional ISO date (YYYY-MM-DD, Utah time). Hidden from the site before this day. */
  liveFrom?: string;
}

export const LISTINGS: Listing[] = [
  {
    slug: "4839-w-step-rock-ln-herriman",
    address: "4839 W Step Rock Ln",
    city: "Herriman",
    community: "Henley",
    price: 1_279_900,
    // beds / baths / sqft: waiting on Ammon to confirm
    status: "Active",
    photo:
      "https://cdn.aryeo.com/listings/4839-s-step-rock-ln-herriman-ut-84096-28042266/resized/large/large-01a01f91-d2d0-71ea-a30e-cf88ff317155.jpeg",
    landingPageUrl:
      "https://value-productions.aryeo.com/sites/4839-w-step-rock-ln-herriman-ut-84096-28042266/branded",
  },
  {
    slug: "1689-w-cadbury-ln-springville",
    address: "1689 W Cadbury Ln",
    city: "Springville",
    price: 549_900,
    beds: 5,
    baths: 3,
    sqft: 2902,
    status: "Active",
    photo:
      "https://cdn.aryeo.com/listings/1689-cadbury-ln-springville-ut-84663-28816844/resized/large/large-01a08b89-28cd-70e1-9dc0-4aa2465abe44.jpeg",
    landingPageUrl:
      "https://value-productions.aryeo.com/sites/1689-w-cadbury-ln-springville-ut-84663-28816844/branded",
  },
  {
    slug: "1079-e-270-s-santaquin",
    address: "1079 E 270 S",
    city: "Santaquin",
    community: "Langs",
    price: 575_000,
    // beds / baths / sqft: waiting on Ammon to confirm
    status: "Active",
    photo:
      "https://cdn.aryeo.com/listings/1079-270-s-santaquin-ut-84655-27421352/resized/large/large-019fd24e-5529-70b6-b27f-103a8afb4cd7.jpeg",
    landingPageUrl:
      "https://value-productions.aryeo.com/sites/1079-e-270-s-santaquin-ut-84655-27421352/branded",
  },
  {
    slug: "735-s-harrison-dr-26-springville",
    address: "735 S Harrison Dr #26",
    city: "Springville",
    price: 409_000,
    beds: 3,
    baths: 2.5,
    sqft: 1968,
    mlsNumber: "2186943",
    status: "Active",
    photo:
      "https://cdn.aryeo.com/listings/735-s-harrison-dr-springville-ut-84663-29276450/resized/large/large-01a0ce68-42a0-7202-8bf5-33de33e02b4a.jpeg",
    landingPageUrl:
      "https://value-productions.aryeo.com/sites/735-s-harrison-dr-26-springville-ut-84663-29276450/branded",
  },
  {
    slug: "551-s-1020-w-j302-american-fork",
    address: "551 S 1020 W #J302",
    city: "American Fork",
    // price: not supplied yet. Kept hidden until liveFrom AND a price is set.
    price: 0,
    status: "Active",
    photo:
      "https://cdn.aryeo.com/listings/551-s-1020-w-american-fork-ut-84003-31240307/resized/large/large-01a212dd-f8eb-71a5-b079-b4b4680cff79.jpeg",
    landingPageUrl:
      "https://value-productions.aryeo.com/sites/551-s-1020-w-american-fork-ut-84003-31240307/branded",
    liveFrom: "2026-12-03",
  },
  // ON HOLD — 723 S Harrison Dr, Springville. MLS shows $475,000 and 4 bd / 3 ba
  // (MLS #2194820) but Ammon confirmed 3 bd / 2.5 ba and had not set the price.
  // No landing-page URL supplied. Do not add until Ammon answers.
];

/** Today's date in Utah as YYYY-MM-DD. */
function utahToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Denver",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Listings that are ready to show right now. */
export function getCurrentListings(now: Date = new Date()): Listing[] {
  const today = utahToday(now);
  return LISTINGS.filter(
    (l) => l.price > 0 && (!l.liveFrom || l.liveFrom <= today),
  );
}

/**
 * Recently sold / closed deals. City and month only unless Ammon confirms
 * the client said yes to sharing a name, address, or price.
 */
export interface RecentSale {
  city: string;
  month: string;
  side: "Sold" | "Purchased" | "Closed";
}

export const RECENT_SALES: RecentSale[] = [
  { city: "Riverton", month: "November 2026", side: "Sold" },
  { city: "South Jordan", month: "November 2026", side: "Purchased" },
  { city: "Kaysville", month: "October 2026", side: "Closed" },
];
