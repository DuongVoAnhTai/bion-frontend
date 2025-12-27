import ChecklistSection from "../components/hotspots/hotspotsDetail/ChecklistSection";
import ContentSection from "../components/hotspots/hotspotsDetail/ContentSection";
import { mockData } from "../components/hotspots/hotspotsDetail/data/mockData";
import MediaSection from "../components/hotspots/hotspotsDetail/MediaSection";
import OtherHotspotsSection from "../components/hotspots/hotspotsDetail/OtherHotspotsSection";
import OverviewSection from "../components/hotspots/hotspotsDetail/OverviewSection";
import SeasonalSection from "../components/hotspots/hotspotsDetail/SeasonalSection";
import SpeciesSection from "../components/hotspots/hotspotsDetail/SpeciesSection";
import JoinMissionSection from "../components/JoinMissionSection";

export default function HotspotDetailPage() {
  return (
    <div className="flex flex-col bg-white-background2">
      <OverviewSection data={mockData} />
      <ContentSection data={mockData.overview} />
      <SpeciesSection data={mockData.speciesSection} />
      <SeasonalSection data={mockData.seasonalSection} />
      <ChecklistSection data={mockData.recentSightings} />
      <MediaSection data={mockData.media} />
      <OtherHotspotsSection data={mockData.otherHotspots} />
      <JoinMissionSection />
    </div>
  );
}
