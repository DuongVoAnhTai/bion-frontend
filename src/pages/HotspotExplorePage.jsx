import HeroSection from "../components/hotspots/hotspotsExplorer/HeroSection";
import WildlifeHotspotsSection from "../components/hotspots/hotspotsExplorer/WildlifeHotspotsSection";
import JoinMissionSection from "../components/JoinMissionSection";

const allHotspots = [
  {
    id: 1,
    name: "Tam Dao National Park",
    location: "Vinh Phuc, Northern Vietnam",
    image: "/src/assets/images/cat-ba.png",
  },
  {
    id: 2,
    name: "Can Gio Mangrove Forest",
    location: "Can Gio, Southern Vietnam",
    image: "/src/assets/images/cuc-phuong.png",
  },
  {
    id: 3,
    name: "Sapa - Hoang Lien Son National Park",
    location: "Lao Cai, Northern Vietnam",
    image: "/src/assets/images/cat-ba.png",
  },
  {
    id: 4,
    name: "Cat Ba Island",
    location: "Hai phong, Northern Vietnam",
    image: "/src/assets/images/cuc-phuong.png",
  },
  {
    id: 5,
    name: "Cuc Phuong National Park",
    location: "Ninh Binh, Northern Vietnam",
    image: "/src/assets/images/cat-ba.png",
  },
  {
    id: 6,
    name: "Van Long Nature Reserve",
    location: "Ninh Binh, Northern Vietnam",
    image: "/src/assets/images/cuc-phuong.png",
  },
  {
    id: 7,
    name: "Phong Nha Ke Bang National Park",
    location: "Quang Binh, Central Vietnam",
    image: "/src/assets/images/cat-ba.png",
  },
  {
    id: 8,
    name: "Sa Mu Pass",
    location: "Quang Binh, Central Vietnam",
    image: "/src/assets/images/cuc-phuong.png",
  },
  {
    id: 9,
    name: "Bach Ma National Park",
    location: "Hue, Central Vietnam",
    image: "/src/assets/images/cat-ba.png",
  },
];

const HotspotExplorePage = () => {
  return (
    <div className="flex flex-col bg-white-background2">
      {/* Hero Section */}
      <HeroSection />

      {/* Các section tiếp theo (Filter, List...) sẽ thêm ở đây */}
      {/* <div className="h-screen"> */}
      {/* Placeholder để test hiệu ứng fade của Hero */}
      {/* </div> */}

      <WildlifeHotspotsSection data={allHotspots} />
      <JoinMissionSection />
    </div>
  );
};

export default HotspotExplorePage;
