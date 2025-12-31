import { DoubleDownIcon } from "../../assets/icon";
import ChecklistCard from "./components/ChecklistCard";

export default function RecentChecklistSection({ data }) {
  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-16 text-center">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-4">
            Recent checklist
          </h2>
          <p className="mx-auto max-w-2xl text-gray-dark font-poppins text-base leading-relaxed">
            Explore the most recent species checklists contributed by the
            community from real field observations.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => (
            <ChecklistCard key={item.id} data={item} />
          ))}
        </div>

        {/* --- FOOTER: VIEW MORE --- */}
        <div className="mt-16 flex justify-center">
          <button className="text-gray-placeholder hover:text-green-logo transition-colors animate-bounce cursor-pointer">
            <DoubleDownIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
