import type { Metadata } from "next";
import { SearchHero } from "@/components/home/SearchHero";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { ComingSoonListings } from "@/components/home/ComingSoonListings";

export const metadata: Metadata = {
  title: "Search Homes for Sale in Utah",
  description:
    "Browse homes for sale in Utah County and the Salt Lake Valley. Search by city, neighborhood, or MLS number.",
};

export default function BuyersPage() {
  return (
    <>
      <SearchHero />
      <FeaturedListings />
      <ComingSoonListings />
    </>
  );
}
