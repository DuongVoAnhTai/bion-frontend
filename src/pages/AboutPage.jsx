import CoreTechnologySection from "../components/about/CoreTechnologySection";
import HeroSection from "../components/about/HeroSection";
import PillarsSection from "../components/about/PillarsSection";
import RoadmapSection from "../components/about/RoadmapSection";
import ValueVisionSection from "../components/about/ValueVisionSection";
import WhyBionUniqueSection from "../components/home/WhyBionUniqueSection";
import JoinMissionSection from "../components/JoinMissionSection";

const AboutPage = () => {
  return (
    <div className="flex flex-col bg-white-background2">
      <HeroSection />
      <CoreTechnologySection />
      <PillarsSection />

      <div className="bg-white-background2 pt-6 pb-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
          <div className=" h-px w-[250px] mx-auto bg-gray-light" />
        </div>
      </div>

      <ValueVisionSection />
      <WhyBionUniqueSection />
      <RoadmapSection />
      <JoinMissionSection />
    </div>
  );
};

export default AboutPage;
