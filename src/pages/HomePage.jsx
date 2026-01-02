import HeroSection from "../components/home/HeroSection";
import WhatIsBionSection from "../components/home/WhatIsBiONSection";
import VietnamHotspotsSection from "../components/home/VietnamHotspotsSection";
import VietnamSpeciesSection from "../components/home/VietnamSpeciesSection";
import WhyBionUniqueSection from "../components/home/WhyBionUniqueSection";
import DataIntegrationSection from "../components/DataIntegrationSection";
import WhoUsesBionSection from "../components/home/WhoUsesBionSection";
import ContributeSection from "../components/home/ContributeSection";
import JoinMissionSection from "../components/JoinMissionSection";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatIsBionSection />
      <VietnamSpeciesSection />
      <VietnamHotspotsSection />
      <WhyBionUniqueSection />

      <section className="bg-white-background2 py-16">
        <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
          {/* --- HEADER --- */}
          <div className="mb-10 text-center">
            {/* Title: */}
            <h2 className="font-space-grotesk text-3xl font-bold text-green-logo md:text-4xl">
              Data Integration
            </h2>
          </div>

          {/* --- LOGO STRIP --- */}
          <DataIntegrationSection />
        </div>
      </section>

      <WhoUsesBionSection />
      <ContributeSection />
      <JoinMissionSection />
    </div>
  );
};

export default HomePage;
