import { SearchHero } from "@/components/home/SearchHero";
import { FeaturedListings } from "@/components/home/FeaturedListings";
import { ComingSoonListings } from "@/components/home/ComingSoonListings";
// import { FeaturedAreas } from "@/components/home/FeaturedAreas"; // archived
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <SearchHero />
      <FeaturedListings />
      <ComingSoonListings />

      <TeamPreview />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
