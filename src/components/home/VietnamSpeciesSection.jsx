import { Button } from "../ui/Button";
import SpeciesCard from "./components/SpeciesCard";

const speciesList = [
  {
    id: 1,
    commonName: "Bar-bellied Pitta",
    scientificName: "Hydrornis elliotii",
    image: "/src/assets/images/pitta1.png",
  },
  {
    id: 2,
    commonName: "Blue-winged Pitta",
    scientificName: "Pitta moluccensis",
    image: "/src/assets/images/pitta2.png",
  },
  {
    id: 3,
    commonName: "Ruby-eyed Pit Viper",
    scientificName: "Trimeresurus rubeus",
    image: "/src/assets/images/pit-viper.png",
  },
  {
    id: 4,
    commonName: "Bar-bellied Pitta",
    scientificName: "Hydrornis elliotii",
    image: "/src/assets/images/pitta1.png",
  },
  {
    id: 5,
    commonName: "Blue-winged Pitta",
    scientificName: "Pitta moluccensis",
    image: "/src/assets/images/pitta2.png",
  },
  {
    id: 6,
    commonName: "Ruby-eyed Pit Viper",
    scientificName: "Trimeresurus rubeus",
    image: "/src/assets/images/pit-viper.png",
  },
];

export default function VietnamSpeciesSection() {
  return (
    <section className="bg-white-background2 py-20">
      {/* Container */}
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="mb-6 font-space-grotesk text-4xl font-bold text-black-text md:text-5xl">
            Vietnam’s Species
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-base text-gray-dark font-poppins">
            From tropical lowlands and misty limestone cliffs to vibrant coral
            reefs, the country is packed with wild places waiting to be
            explored. Which of Vietnam’s habitats are you most excited to
            experience?
          </p>
        </div>

        {/* --- GRID CARDS --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speciesList.map((item, index) => {
            let visibilityClass = "";

            if (index === 3) {
              visibilityClass = "hidden md:flex";
            } else if (index > 3) {
              // Item 5, 6: display only on desktop
              visibilityClass = "hidden lg:flex";
            }

            return (
              <SpeciesCard
                key={index}
                id={item.id}
                commonName={item.commonName}
                scientificName={item.scientificName}
                image={item.image}
                className={visibilityClass}
              />
            );
          })}
        </div>

        {/* --- BUTTON VIEW ALL --- */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-gray-light text-black-text hover:bg-gray-light/20"
          >
            View all species
          </Button>
        </div>
      </div>
    </section>
  );
}
