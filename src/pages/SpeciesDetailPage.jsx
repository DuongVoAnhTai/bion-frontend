import JoinMissionSection from "../components/JoinMissionSection";
import { mockData } from "../components/species/speciesDetail/data/mockdata";
import DistributionSection from "../components/species/speciesDetail/DistributionSection";
import IdentificationSection from "../components/species/speciesDetail/IdentificationSection";
import MediaSection from "../components/species/speciesDetail/MediaSection";
import OverviewSection from "../components/species/speciesDetail/OverviewSection";
import RecentSightingsSection from "../components/species/speciesDetail/RecentSightingsSection";
import RelatedToursSection from "../components/species/speciesDetail/RelatedToursSection";

const SpeciesDetailPage = () => {
  const data = mockData;

  return (
    <div className="flex flex-col bg-white">
      <OverviewSection data={data} />

      <div className="bg-white-background2 pt-6 pb-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
          <div className=" h-px w-full bg-gray-light" />
        </div>
      </div>

      <IdentificationSection data={data.identification} />
      <DistributionSection data={data.distribution} />
      <RecentSightingsSection data={data.recentSightings} />
      <MediaSection data={data.media} />
      <RelatedToursSection data={data.relatedTours} />
      <JoinMissionSection />
    </div>
  );
};

export default SpeciesDetailPage;
