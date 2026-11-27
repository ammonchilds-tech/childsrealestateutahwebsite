/**
 * City pages ("Areas We Serve"). One entry per published city.
 *
 * Rules (punch list Task 7):
 * - Write each city's copy for that city — never paste paragraphs across cities.
 * - No prices or statistics unless they can be sourced and dated. Leave
 *   `marketNote` undefined until Ammon supplies a sourced figure.
 * - Publish order: Lehi, Highland, American Fork, then Alpine, Orem, Provo,
 *   Draper, Springville, and the rest of the FAQ list.
 */

export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  slug: string;
  name: string;
  /** Short line for cards and meta descriptions. */
  tagline: string;
  intro: string[];
  homes: string;
  whyPeopleMove: string[];
  /** A dated, sourced market note, e.g. { text, asOf, source }. Omit if none. */
  marketNote?: { text: string; asOf: string; source: string };
  faqs: CityFaq[];
}

export const CITIES_SERVED: City[] = [
  {
    slug: "lehi",
    name: "Lehi",
    tagline: "Point of the Mountain living between Salt Lake and Utah Counties",
    intro: [
      "Lehi sits at the Point of the Mountain, right where Utah County meets Salt Lake County. That location is the whole story for a lot of buyers: you can reach jobs in either county without crossing the whole valley, and a long list of tech companies have offices within a few minutes of most Lehi neighborhoods.",
      "We work in Lehi all the time — our office is just down the road in American Fork — and we help Lehi homeowners sell through the Smart Seller Program, with full service starting at 1%.",
    ],
    homes:
      "Lehi has two very different housing stocks. Near the historic downtown and Main Street you'll find older homes on established streets, some dating back generations. Spread out from there are newer master-planned communities, townhomes, and active new-construction subdivisions, from Traverse Mountain on the hillside to the newer neighborhoods on the city's west side.",
    whyPeopleMove: [
      "A short commute to the tech offices along the I-15 corridor at the Point of the Mountain",
      "Quick access to I-15, Mountain View Corridor, and a FrontRunner commuter-rail station",
      "Thanksgiving Point's gardens, museums, and trails, plus the historic Lehi Roller Mills",
      "A wide range of homes — first townhome to large family home — in one city",
    ],
    faqs: [
      {
        q: "Who can help me sell my home in Lehi?",
        a: "Ammon and Tasha Childs of Childs Real Estate (Simple Choice Real Estate) list homes in Lehi and across northern Utah County. Their Smart Seller Program offers full-service listing starting at 1% — Gold 1%, Diamond 1.99%, or Platinum 2.49%. Call Ammon at 801.735.8460 for a free home value.",
      },
      {
        q: "How do I sell a resale home in Lehi when builders nearby are offering incentives?",
        a: "Price against the new builds honestly and lean into what a resale home has that a new one doesn't: finished landscaping, window coverings, an established street, and a move-in date that doesn't depend on construction. Many Lehi sellers also offer a buyer credit or rate buydown so their home competes with builder incentives on monthly payment, not just price.",
      },
      {
        q: "Is Lehi a good place to buy a home if I work in Salt Lake County?",
        a: "Often, yes. Lehi is the northernmost large city in Utah County, so it shortens the drive to the Salt Lake Valley compared with cities farther south, and the FrontRunner station gives you a rail option. The tradeoff is that Point of the Mountain traffic can be heavy at rush hour, so test your commute at the time you'd actually drive it.",
      },
    ],
  },
  {
    slug: "highland",
    name: "Highland",
    tagline: "Quiet, residential, and close to the canyons",
    intro: [
      "Highland is a mostly residential city in northern Utah County, tucked between Alpine, American Fork, Lehi, and Cedar Hills. People who choose Highland usually want room — more yard, more space between neighbors, and a calmer pace than the busier cities around it.",
      "We help Highland families sell homes where the lot, the views, and the layout matter as much as the square footage, and we price them from real neighborhood sales, not a county average.",
    ],
    homes:
      "Many Highland neighborhoods are made up of single-family homes on larger lots, often with mountain views, room for a garden, or space for an outbuilding. You'll see a mix of homes built over the last few decades, including custom and semi-custom builds. There are fewer townhomes and condos here than in neighboring cities, so most buyers are shopping for a single-family home.",
    whyPeopleMove: [
      "Larger lots and a quieter, residential feel",
      "The Murdock Canal Trail for walking, running, and biking across northern Utah County",
      "Quick access to American Fork Canyon and the Alpine Loop",
      "Shopping, dining, and I-15 just a short drive away in Lehi and American Fork",
    ],
    faqs: [
      {
        q: "Who can help me sell my home in Highland, Utah?",
        a: "Ammon and Tasha Childs of Childs Real Estate (Simple Choice Real Estate) list homes in Highland and the surrounding northern Utah County cities. Their Smart Seller Program offers full-service listing at Gold 1%, Diamond 1.99%, or Platinum 2.49%. Call Ammon at 801.735.8460 for a free home value.",
      },
      {
        q: "How do you price a Highland home on a larger lot?",
        a: "Square footage alone doesn't capture a Highland home's value. We compare recent sales with similar lot size, usable yard, views, and outbuildings, then adjust for the house itself. Automated estimates often miss lot value, which is why a local comparative market analysis matters more here than in neighborhoods with uniform lots.",
      },
      {
        q: "What do buyers look for in a Highland home?",
        a: "Most Highland buyers want space: a usable yard, room for family and guests, garage and storage space, and a quiet street. Photography and marketing that show the lot and the views — including drone photos — help those features come through online, where most buyers see the home first.",
      },
    ],
  },
  {
    slug: "american-fork",
    name: "American Fork",
    tagline: "Our home base — historic Main Street to the canyon",
    intro: [
      "American Fork is home base for Childs Real Estate. Our office is at 825 E 1180 S, Suite 300, so when we talk about American Fork neighborhoods, we're talking about the streets we drive every day.",
      "The city mixes an old Utah County downtown with newer neighborhoods near the freeway, and it sits at the mouth of American Fork Canyon — one of the reasons people who move here tend to stay.",
    ],
    homes:
      "Around historic Main Street you'll find older, established neighborhoods with mature trees and a range of home styles. Newer subdivisions, townhomes, and condos are spread toward I-15 and the FrontRunner station. That range means American Fork works for first-time buyers, growing families, and people downsizing without leaving town.",
    whyPeopleMove: [
      "A real downtown on historic Main Street",
      "American Fork Canyon, Timpanogos Cave National Monument, and the Alpine Loop close by",
      "A FrontRunner station and quick I-15 access in both directions",
      "Everyday shopping and a hospital in town",
    ],
    faqs: [
      {
        q: "Is there a real estate office in American Fork I can visit?",
        a: "Yes. Childs Real Estate (Simple Choice Real Estate) is at 825 E 1180 S, Suite 300, American Fork, UT 84003. Call Ammon Childs at 801.735.8460 or Tasha Childs at 801.602.8856 to set a time to meet.",
      },
      {
        q: "How much does it cost to sell a home in American Fork with Childs Real Estate?",
        a: "Our Smart Seller Program has three full-service tiers: Gold at 1%, Diamond at 1.99%, and Platinum at 2.49%. Each tier's included marketing and services are listed on our Listing Packages page, so you know exactly what you're paying for before you sign.",
      },
      {
        q: "What kinds of homes are for sale in American Fork?",
        a: "American Fork has older homes near historic Main Street, newer single-family subdivisions, and townhomes and condos near I-15 and the FrontRunner station. That variety makes it a good fit for first-time buyers, move-up buyers, and people downsizing.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES_SERVED.find((c) => c.slug === slug);
}
