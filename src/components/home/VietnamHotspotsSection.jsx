import HotspotCard from "../HotspotCard";
import { Button } from "../ui/Button";

const hotspots = [
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
    image: "/src/assets/images/van-long.png",
  },
  {
    id: 4,
    name: "Cat Ba Island",
    location: "Hai phong, Northern Vietnam",
    image: "/src/assets/images/cat-ba.png",
  },
  {
    id: 5,
    name: "Cuc Phuong National Park",
    location: "Ninh Binh, Northern Vietnam",
    image: "/src/assets/images/cuc-phuong.png",
  },
  {
    id: 6,
    name: "Van Long Nature Reserve",
    location: "Ninh Binh, Northern Vietnam",
    image: "/src/assets/images/van-long.png",
  },
];

export default function VietnamHotspotsSection() {
  return (
    <section className="bg-white-background2 py-20">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-6 font-space-grotesk text-4xl font-bold text-black-text md:text-5xl">
            Top Vietnam Wildlife Hotspots
          </h2>
          <p className="max-w-3xl text-base text-gray-dark font-poppins">
            Explore Vietnam’s most sought-after nature destinations—now
            accessible through WANEE’s expert-led tours across the country.
            Which wild site will you visit first?
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hotspots.map((item, index) => {
            let visibilityClass = "";

            if (index === 3) {
              visibilityClass = "hidden md:flex";
            } else if (index > 3) {
              // Item 5, 6: display only on desktop
              visibilityClass = "hidden lg:flex";
            }

            return (
              <HotspotCard
                key={index}
                data={item}
                className={visibilityClass}
              />
            );
          })}
        </div>

        {/* --- BUTTON --- */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-gray-light text-black-text hover:bg-gray-light/20"
          >
            View all hotspots
          </Button>
        </div>
      </div>
    </section>
  );
}
