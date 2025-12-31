import CoreTechCard from "./components/CoreTechCard";

const techPoints = [
  {
    title: "Curated Natural value",
    description:
      "Carefully selected species and sites highlight what is rare, beautiful, and truly worth experiencing.",
    image: "/src/assets/images/natural.png",
  },
  {
    title: "Science meets Storytelling",
    description:
      "Scientific knowledge is translated into engaging narratives that inspire awareness and conservation.",
    image: "/src/assets/images/science.png",
  },
  {
    title: "Built for Wild Travel",
    description:
      "Designed to support high-quality wildlife tourism with reliable data and real-world usability.",
    image: "/src/assets/images/media-library.png",
  },
];

export default function CoreTechnologySection() {
  return (
    <section className="bg-white-background2 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Subtitle: #2BA78C */}
          <span className="font-poppins text-sm md:text-base font-bold text-green-logo uppercase tracking-[0.2em] mb-4">
            Core Technology of WANEE Ecosystem
          </span>

          {/* Main Title: Phối hợp màu sắc và font weight */}
          <h2 className="font-space-grotesk text-3xl md:text-6xl text-gray-dark leading-tight max-w-4xl">
            Where{" "}
            <span className="text-black-text font-bold uppercase tracking-tight">
              Biodiversity
            </span>{" "}
            becomes <br className="hidden md:block" />
            <span className="text-black-text font-bold uppercase tracking-tight">
              Experience
            </span>
          </h2>

          {/* Description below title: #5B5B5B */}
          <p className="mt-8 max-w-2xl font-poppins text-gray-dark text-base md:text-lg">
            BiON transforms biodiversity data into meaningful journeys
            connecting science, stories, and nature-based travel.
          </p>
        </div>

        {/* --- GRID CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techPoints.map((point, index) => (
            <CoreTechCard key={index} data={point} />
          ))}
        </div>
      </div>
    </section>
  );
}
