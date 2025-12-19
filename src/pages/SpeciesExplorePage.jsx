import JoinMissionSection from "../components/JoinMissionSection";
import MainSection from "../components/species/speciesExplorer/MainSection";

const SpeciesExplorePage = () => {
  return (
    <div className="flex flex-col">
      <MainSection />
      <JoinMissionSection />
    </div>
  );
};

export default SpeciesExplorePage;
