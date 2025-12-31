import MediaGridCard from "./components/MediaGridCard";
import { DoubleDownIcon } from "../../assets/icon";

export default function RecentMediaSection({ data }) {
  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-16 text-center">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-4">
            Recent media
          </h2>
          <p className="mx-auto max-w-2xl text-gray-dark font-poppins text-base">
            Discover the latest photos and media shared by the BiON community in
            real time.
          </p>
        </div>

        {/* --- GRID LIST --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
          {data.map((item) => (
            <MediaGridCard key={item.id} data={item} />
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
