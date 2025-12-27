import { ChevronDown } from "lucide-react";
import HotspotSpeciesCard from "../components/HotspotSpeciesCard";
import { Button } from "../../ui/Button";

export default function SpeciesSection({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col items-start text-left">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-6">
            Species
          </h2>
          <p className="max-w-4xl text-base md:text-lg text-gray-dark font-poppins leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* --- GRID (4 Columns) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => (
            <HotspotSpeciesCard key={item.id} data={item} />
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
              className="pt-1 transition-transform"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
