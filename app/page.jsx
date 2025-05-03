import CategorieSection from "@/components/CategorieSection";
import FeaturedSections from "@/components/FeaturedSections";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";

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
