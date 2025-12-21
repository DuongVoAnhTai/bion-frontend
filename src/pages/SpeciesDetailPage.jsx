import DistributionSection from "../components/species/speciesDetail/DistributionSection";
import IdentificationSection from "../components/species/speciesDetail/IdentificationSection";
import OverviewSection from "../components/species/speciesDetail/OverviewSection";

const mockData = {
  id: 12,
  scientificName: "Hydrornis soror",
  author: "Wardlew/Ramsay 1886",
  status: "Endemic",
  group: "Birds",
  image: "/src/assets/images/species-detail.png",
  taxonomy: ["Animalia", "Chordata", "Avies", "Passentomes", "Iklae"],
  identification: {
    content: [
      "Oligodon macrurus is a small snake with a distinctive long tail, which accounts for one-third of its total body length. Its back and head are grayish, with darker brown stripes extending from the eyes to the fourth and fifth supralabial scales.",
      "A dark brown stripe begins from the occipital region, running down the body but not reaching the ventral scales. It has a dark spot on its forehead and another between the stripes at the back of the head. A dark V-shaped mark is present on the neck, bordered by black edges.",
      "The body displays faint horizontal stripes, with a less pronounced pattern on the flanks. The tail features a lighter dorsal stripe with gray edges, and the ventral side is cream-colored.",
    ],
    conservationSummary: "Habital loss. Vulnerable In Vietnam Red Data Book.",
  },
  distribution: {
    content: [
      "Oligodon macrurus has been recorded at elevations below 200 meters above sea level, based on its known coastal range in Vietnam.",
      "Oligodon macrurus is endemic to Vietnam, specifically found in a restricted coastal area between Khanh Hoa and Ninh Thuan Provinces.",
      "There is limited information on the habitat of Oligodon macrurus. It is presumed to inhabit evergreen deciduous forests, sometimes being observed in proximity to human settlements.",
    ],
    hotspots: [
      {
        id: 1,
        name: "Tam Dao National Park",
        type: "Coastal",
        image: "/src/assets/images/cat-ba.png",
      },
      {
        id: 2,
        name: "Sapa-Hoang Lien Son National Park",
        type: "Mountainous",
        image: "/src/assets/images/cuc-phuong.png",
      },
      {
        id: 3,
        name: "Cat Tien National Park",
        type: "Forestry",
        image: "/src/assets/images/cat-ba.png",
      },
      {
        id: 4,
        name: "Cuc Phuong National Park",
        type: "Forestry",
        image: "/src/assets/images/cuc-phuong.png",
      },
    ],

    occurrences: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { location: "Tam Đảo NP", date: "2024-03-10" },
          geometry: { type: "Point", coordinates: [105.64, 21.45] }, // [Kinh độ, Vĩ độ]
        },
        {
          type: "Feature",
          properties: { location: "Cúc Phương NP", date: "2024-05-22" },
          geometry: { type: "Point", coordinates: [105.71, 20.25] },
        },
        {
          type: "Feature",
          properties: { location: "Cát Tiên NP", date: "2023-11-15" },
          geometry: { type: "Point", coordinates: [107.43, 11.42] },
        },
      ],
    },
  },
};

const SpeciesDetailPage = () => {
  return (
    <div className="flex flex-col bg-white">
      <OverviewSection data={mockData} />

      <div className="bg-white-background2 pt-6 pb-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
          <div className=" h-px w-full bg-gray-light" />
        </div>
      </div>

      <IdentificationSection data={mockData} />
      <DistributionSection data={mockData} />
    </div>
  );
};

export default SpeciesDetailPage;
