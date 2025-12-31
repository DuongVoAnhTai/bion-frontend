// src/components/hotspots/detail/HotspotOverview.jsx
import { ArrowUpRight } from "lucide-react";
import {
  LocationIcon,
  AreaIcon,
  KeyUniqueIcon,
  BestTimeIcon,
  HighlightIcon,
  IUCNIcon,
} from "../../../assets/icon";
import { Button } from "../../ui/Button";
import InfoCard from "../components/InfoCard";

export default function OverviewSection({ data }) {
  if (!data) return null;

  // HÀM XỬ LÝ CHỈ ĐƯỜNG
  const handleGetDirection = () => {
    const { lat, lng } = data.coords || {};

    if (!lat || !lng) {
      alert("Location coordinates not found.");
      return;
    }

    // Tạo URL Google Maps dẫn đến tính năng Chỉ đường (Directions)
    // destination={lat},{lng} : Điểm đến là tọa độ của Hotspot
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

    // Mở tab mới với cấu hình an toàn (noopener, noreferrer)
    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white-background2 pb-6 pt-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- 1. GALLERY SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12 h-auto md:h-[500px]">
          {/* Ảnh lớn bên trái (8/12) */}
          <div className="md:col-span-8 h-[300px] md:h-full overflow-hidden rounded-2xl">
            <img
              src={data.images[0]}
              className="w-full h-full xl:h-[500px] object-cover"
              alt="Main view"
            />
          </div>

          {/* 2 Ảnh nhỏ bên phải (4/12) */}
          <div className="md:col-span-4 flex flex-col gap-4 h-full">
            {/* Ảnh nhỏ 1: flex-1 để chiếm 50% chiều cao */}
            <div className="flex-1 overflow-hidden rounded-2xl">
              <img
                src={data.images[1]}
                className="w-full h-60 object-cover"
                alt="Detail 1"
              />
            </div>
            {/* Ảnh nhỏ 2: flex-1 để chiếm 50% chiều cao */}
            <div className="flex-1 overflow-hidden rounded-2xl">
              <img
                src={data.images[2]}
                className="w-full h-60 object-cover"
                alt="Detail 2"
              />
            </div>
          </div>
        </div>

        {/* --- 2. TITLE SECTION --- */}
        <h1 className="text-center md:text-start font-space-grotesk text-4xl md:text-5xl font-bold text-black-text uppercase mb-10">
          {data.name}
        </h1>

        {/* --- 3. META INFO BAR --- */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-light pb-8 mb-12 gap-6 md:gap-0">
          {/* Slot 1: Priority */}
          <div className="flex items-center gap-3">
            <span className="text-gray-dark font-poppins font-medium whitespace-nowrap">
              Biodiversity Priority:
            </span>
            <span className="px-4 py-1 rounded-full bg-green-logo/10 text-green-logo font-bold text-sm">
              {data.priority}
            </span>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block w-px h-8 bg-gray-light mx-4" />

          {/* Slot 2: Habitat */}
          <div className="flex items-center gap-3">
            <span className="text-gray-dark font-poppins font-medium whitespace-nowrap">
              Habitat:
            </span>
            <span className="px-4 py-1 rounded-full bg-green-logo/10 text-green-logo font-bold text-sm">
              {data.habitat}
            </span>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block w-px h-8 bg-gray-light mx-4" />

          {/* Slot 3 */}
          <Button
            onClick={handleGetDirection}
            className="rounded-full bg-green-logo hover:bg-green-logo/90 text-white px-8 py-6 flex items-center justify-center gap-2 text-lg w-full md:w-auto"
          >
            Get direction <ArrowUpRight size={20} />
          </Button>
        </div>

        {/* --- 4. INFO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard
            icon={LocationIcon}
            title="Location"
            description={data.info.location}
          />
          <InfoCard icon={AreaIcon} title="Area" description={data.info.area} />
          <InfoCard
            icon={KeyUniqueIcon}
            title="Key Uniques"
            description={data.info.uniques}
          />
          <InfoCard
            icon={BestTimeIcon}
            title="Best Time to visit"
            description={data.info.bestTime}
          />
          <InfoCard
            icon={HighlightIcon}
            title="Highlights"
            description={data.info.highlights}
          />
          <InfoCard
            icon={IUCNIcon}
            title="IUCN Status"
            description={data.info.iucnStatus}
          />
        </div>
      </div>
    </section>
  );
}
