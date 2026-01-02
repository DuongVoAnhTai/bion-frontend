import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { cn } from "../../../lib/utils";
import FilterSidebar from "./FilterSidebar";
import { taxonomyData } from "./data/taxonomy";
import TaxonomyItem from "./TaxonomyItem";
import SpeciesExplorerCard from "../components/SpeciesExplorerCard";

const mockData = Array(8).fill({
  id: 1,
  name: "Animallia",
  count: "26.314.614",
  image: "/src/assets/images/species-explorer2.png",
});

export default function MainSection() {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' hoặc 'list'

  return (
    <section className=" bg-white-background2 py-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- LEFT SIDEBAR --- */}
          <aside className="w-full lg:w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* --- DIVIDER (Đường kẻ dọc) --- */}
          {/* Chỉ hiện trên Desktop */}
          <div className="hidden lg:block w-px bg-gray-light self-stretch opacity-50"></div>

          {/* --- RIGHT CONTENT --- */}
          <div className="flex-1">
            {/* Toolbar: Toggle Grid/List */}
            <div className="mb-6 flex items-center gap-6 border-b border-gray-light/50 pb-4">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex items-center gap-2 text-base font-medium transition-colors cursor-pointer",
                  viewMode === "grid"
                    ? "text-green-logo font-bold"
                    : "text-gray hover:text-black-text"
                )}
              >
                <LayoutGrid className="h-5 w-5" />
                Grid
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "flex items-center gap-2 text-base font-medium transition-colors cursor-pointer",
                  viewMode === "list"
                    ? "text-green-logo font-bold"
                    : "text-gray hover:text-black-text"
                )}
              >
                <List className="h-5 w-5" />
                List
              </button>
            </div>

            {/* Grid Display */}
            {viewMode == "grid" ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {mockData.map((item, index) => (
                  <SpeciesExplorerCard key={index} data={item} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-1 bg-white-background2 rounded-xl">
                {taxonomyData.map((item, index) => (
                  <TaxonomyItem key={index} data={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
