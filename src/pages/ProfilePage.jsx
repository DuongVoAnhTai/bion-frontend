import JoinMissionSection from "../components/JoinMissionSection";
import * as mockData from "../components/profile/data/mockdata";
import InfoSection from "../components/profile/InfoSection";
import MainSection from "../components/profile/MainSection";

const ProfilePage = () => {
  return (
    <div className="flex flex-col bg-white-background2">
      <InfoSection data={mockData.mockProfile} />

      <div className="bg-white-background2 pt-6 pb-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
          <div className=" h-px w-full bg-gray-light" />
        </div>
      </div>

      <MainSection
        stats={mockData.profileStats}
        speciesData={mockData.userSpecies}
        hotspotsData={mockData.userHotspots}
        checklistsData={mockData.userChecklist}
      />

      <JoinMissionSection />
    </div>
  );
};

export default ProfilePage;
