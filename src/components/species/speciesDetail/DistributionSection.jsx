import DistributionLocationCard from "../components/DistributionLocationCard";
import DistributionMap from "../components/DistributionMap";

export default function DistributionSection({ data }) {
  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- TITLE --- */}
        <h2 className="font-space-grotesk text-3xl font-bold text-black-text mb-10">
          Distribution
        </h2>

        {/* --- TOP CONTENT: TEXT & MINI MAP --- */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left: Text Description */}
          <div className="flex flex-col gap-6 flex-1 text-base md:text-lg leading-relaxed text-gray-dark font-poppins">
            {data.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Right: Mini Map Image */}
          <div className="w-full lg:w-[500px] shrink-0">
            <DistributionMap data={data.occurrences} />
          </div>
        </div>

        {/* --- BOTTOM CONTENT: HOTSPOT CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.hotspots.map((item, index) => (
            <DistributionLocationCard
              key={index}
              data={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
