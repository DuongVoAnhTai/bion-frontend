import { CurationIcon, ClassIcon, BookIcon } from "../../assets/icon";
import PillarCard, { PillarItem } from "./components/PillarCard";

export default function PillarsSection() {
  return (
    <section className="bg-white-background2 pt-15 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="text-center mb-15">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-6">
            3 pillars that define BiON
          </h2>
          <p className="max-w-3xl mx-auto font-poppins text-gray-dark text-base md:text-lg">
            BiON is built on three interconnected pillars that transform
            biodiversity into meaningful, responsible, and inspiring nature
            experiences.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* PILLAR 1 */}
          <PillarCard
            icon={CurationIcon}
            title="Wild Beauty Curation"
            footer="Vietnam’s wild beauty—carefully curated."
          >
            <PillarItem>No mass listings or generic catalogs</PillarItem>
            <PillarItem>
              Focus on iconic species and signature landscapes
            </PillarItem>
            <PillarItem>
              Beauty as a deliberate selection, not coincidence
            </PillarItem>
            <PillarItem>
              Seasonality, light, and ecological context matter
            </PillarItem>
          </PillarCard>

          {/* PILLAR 2 */}
          <PillarCard
            icon={ClassIcon}
            title="Experience Design Engine"
            footer="BiON as a biodiversity-powered experience engine."
          >
            <PillarItem>One species to multiple experience layers</PillarItem>
            <PillarItem>One destination to diverse nature products</PillarItem>
            <PillarItem>Examples</PillarItem>
            <ul className="pl-14 space-y-2 list-disc list-outside">
              <li>Birding & wildlife watching</li>
              <li>Nature photography</li>
              <li>Slow nature walks</li>
              <li>Forest meditation & story walks</li>
              
            </ul>
          </PillarCard>

          {/* PILLAR 3 */}
          <PillarCard
            icon={BookIcon}
            title="Experience Design Engine"
            footer="People understand why conservation matters before being asked to protect."
          >
            <p className="mb-2">
              Each species or hotspot told through four layers:
            </p>
            <PillarItem>Scientific truth</PillarItem>
            <PillarItem>Aesthetic value</PillarItem>
            <PillarItem>Cultural & local perspective</PillarItem>
            <PillarItem>Conservation meaning</PillarItem>
          </PillarCard>
        </div>
      </div>
    </section>
  );
}
