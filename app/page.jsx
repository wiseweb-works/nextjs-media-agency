import CategorieSection from "@/components/sections/CategorieSection";
import FeaturedSections from "@/components/sections/FeaturedSections";
import HeroSection from "@/components/sections/HeroSection";
import MainSection from "@/components/sections/MainSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MainSection />
      <CategorieSection />
      <FeaturedSections />
    </>
  );
}
