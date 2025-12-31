import { useState } from "react";
import { Search } from "lucide-react";
import { DoubleDownIcon } from "../../assets/icon";
import { cn } from "../../lib/utils";
import ChecklistCard from "../community/components/ChecklistCard";
import HotspotCard from "../HotspotCard";
import SpeciesProfileCard from "./components/SpeciesProfileCard";

export default function MainSection({
  stats,
  speciesData,
  hotspotsData,
  checklistsData,
}) {
  const [activeTab, setActiveTab] = useState("species");

  const tabs = [stats.species, stats.hotspots, stats.checklists];

  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- 1. TABS NAVIGATION (3 Ô SỐ LIỆU) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center py-8 rounded-[20px] border-2 transition-all duration-300 cursor-pointer",
                activeTab === tab.id
                  ? "border-green-logo bg-white shadow-lg"
                  : "border-gray-light bg-white-background2 hover:border-gray"
              )}
            >
              <span
                className={cn(
                  "text-5xl font-bold font-space-grotesk",
                  activeTab === tab.id ? "text-green-logo" : "text-black-text"
                )}
              >
                {tab.count}
              </span>
              <span
                className={cn(
                  "text-base font-poppins mt-2",
                  activeTab === tab.id
                    ? "text-green-logo font-bold"
                    : "text-gray-dark"
                )}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* --- 2. SEARCH BAR --- */}
        <div className="relative mx-auto mb-20 w-full max-w-2xl">
          <input
            type="text"
            placeholder={stats[activeTab].placeholder}
            className="w-full rounded-full border border-green-border-fade bg-white py-4 pl-8 pr-16 text-black-text outline-none focus:border-green-logo transition-all placeholder:text-gray"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-green-logo p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <Search size={24} />
          </button>
        </div>

        {/* --- 3. DYNAMIC CONTENT GRID --- */}
        <div className="min-h-[500px]">
          {/* TRANG 1 */}
          {activeTab === "species" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 animate-in fade-in duration-500">
              {speciesData.map((item, index) => (
                <SpeciesProfileCard key={index} data={item} />
              ))}
            </div>
          )}

          {/* TRANG 2 */}
          {activeTab === "hotspots" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
              {hotspotsData.map((item, index) => (
                <HotspotCard key={index} data={item} />
              ))}
            </div>
          )}

          {/* TRANG 3 */}
          {activeTab === "checklists" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {checklistsData.map((item, index) => (
                <ChecklistCard key={index} data={item} />
              ))}
            </div>
          )}
        </div>

        {/* --- 4. VIEW MORE --- */}
        <div className="mt-10 flex justify-center">
          <button className="text-gray-placeholder hover:text-green-logo transition-colors animate-bounce cursor-pointer">
            <DoubleDownIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
