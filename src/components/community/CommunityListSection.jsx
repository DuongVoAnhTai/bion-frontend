import { Search, ChevronDown } from "lucide-react";
import MemberCard from "./components/MemberCard";
import { DoubleDownIcon } from "../../assets/icon";

export default function CommunityListSection({ data }) {
  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-space-grotesk text-4xl font-bold text-black-text">
            Meet the BiON Community
          </h2>
          <p className="mx-auto max-w-2xl text-gray-dark font-poppins">
            Explore all BiON users, their contributions, photos, checklists, and
            monthly or all-time leaderboard rankings.
          </p>
        </div>

        {/* --- SEARCH BAR --- */}
        <div className="relative mx-auto mb-20 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Find your colleagues..."
            className="w-full rounded-full border border-green-border-fade bg-white py-4 pl-8 pr-16 text-black-text outline-none focus:border-green-logo transition-all placeholder:text-gray"
          />
          <button className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-green-logo text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer">
            <Search size={20} />
          </button>
        </div>

        {/* --- GRID MEMBERS --- */}
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {data.map((member) => (
            <MemberCard key={member.id} data={member} />
          ))}
        </div>

        {/* --- FOOTER: VIEW MORE --- */}
        <div className=" mt-10 flex justify-center">
          <button className="text-gray-placeholder hover:text-green-logo transition-colors animate-bounce cursor-pointer">
            <DoubleDownIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
