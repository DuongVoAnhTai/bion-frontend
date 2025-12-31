import * as mockData from "../components/community/data/mockData";
import CommunityListSection from "../components/community/CommunityListSection";
import HeroSection from "../components/community/HeroSection";
import LeaderboardSection from "../components/community/LeaderboardSection";
import RecentMediaSection from "../components/community/RecentMediaSection";
import RecentChecklistSection from "../components/community/RecentChecklistSection";
import JoinMissionSection from "../components/JoinMissionSection";

const CommunityPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      <CommunityListSection data={mockData.mockMembers} />
      <LeaderboardSection data={mockData.mockLeaderboard} />
      <RecentMediaSection data={mockData.mockMediaList} />
      <RecentChecklistSection data={mockData.mockChecklists} />
      <JoinMissionSection />
    </div>
  );
};

export default CommunityPage;
