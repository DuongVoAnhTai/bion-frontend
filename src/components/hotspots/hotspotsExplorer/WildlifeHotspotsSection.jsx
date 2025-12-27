import { ChevronDown } from "lucide-react";
import { Button } from "../../ui/Button";
import HotspotCard from "../../HotspotCard";

export default function WildlifeHotspotsSection({ data }) {
  return (
    // Background
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-16 flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="mb-6 font-space-grotesk text-4xl font-bold text-black-text md:text-5xl">
            Top Vietnam Wildlife Hotspots
          </h2>
          {/* Desc: #5B5B5B */}
          <p className="max-w-3xl text-base text-gray-dark font-poppins">
            Explore Vietnam’s most sought-after nature destinations—now
            accessible through WANEE’s expert-led tours across the country.
            Which wild site will you visit first?
          </p>
        </div>

        {/* --- GRID (3x3) --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <HotspotCard key={item.id} data={item} />
          ))}
        </div>

        {/* --- VIEW MORE BUTTON --- */}
        <div className="mt-16 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="group rounded-full border-gray-light text-black-text hover:bg-gray-light/10 flex items-center gap-2 px-10"
          >
            <span>View more</span>
            <ChevronDown
              size={20}
              className="transition-transform group-hover:translate-y-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
