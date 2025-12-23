import SightingRow from "../components/SightingRow";

export default function RecentSightingsSection({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-10">
          <h2 className="font-space-grotesk text-3xl font-bold text-black-text mb-4">
            Recent Sightings
          </h2>
          <p className="font-poppins text-sm text-gray-dark italic">
            Checklists submitted within the last hour are not shown.
          </p>
        </div>

        {/* --- LIST --- */}
        <div className="flex flex-col">
          {data.map((item) => (
            <SightingRow key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
