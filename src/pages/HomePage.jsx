import HeroSection from "../components/home/HeroSection";
import WhatIsBionSection from "../components/home/WhatIsBiONSection";
import VietnamHotspotsSection from "../components/home/VietnamHotspotsSection";
import VietnamSpeciesSection from "../components/home/VietnamSpeciesSection";
import WhyBionUniqueSection from "../components/home/WhyBionUniqueSection";
import DataIntegrationSection from "../components/home/DataIntegrationSection";
import WhoUsesBionSection from "../components/home/WhoUsesBionSection";
import ContributeSection from "../components/home/ContributeSection";
import JoinMissionSection from "../components/home/JoinMissionSection";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhatIsBionSection />
      <VietnamSpeciesSection />
      <VietnamHotspotsSection />
      <WhyBionUniqueSection />
      <DataIntegrationSection />
      <WhoUsesBionSection />
      <ContributeSection />
      <JoinMissionSection />
    </div>
  );
};

export default HomePage;
