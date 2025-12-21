import DistributionLocationCard from "../components/DistributionLocationCard";

export default function DistributionSection({ data }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- TITLE --- */}
        <h2 className="font-space-grotesk text-3xl font-bold text-black-text mb-10">
          Distribution
        </h2>

        {/* --- TOP CONTENT: TEXT & MINI MAP --- */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left: Text Description */}
          <div className="flex flex-col gap-6 flex-1 text-base md:text-lg leading-relaxed text-gray-dark font-poppins">
            {data.distribution.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Right: Mini Map Image */}
          <div className="w-full lg:w-[450px] shrink-0">
            <div className="rounded-3xl overflow-hidden border border-gray-light/30 shadow-sm bg-white-background2">
              <img
                src="/src/assets/images/distribution.png"
                alt="Distribution Map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* --- BOTTOM CONTENT: HOTSPOT CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.distribution.hotspots.map((item, index) => (
            <DistributionLocationCard
              key={index}
              id={item.id}
              name={item.name}
              type={item.type}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
