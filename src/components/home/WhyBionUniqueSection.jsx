import UniqueFeatureItem from "./components/UniqueFeatureItem";
import {
  DatabaseIcon,
  InternetIcon,
  RelationIcon,
  UIIcon,
} from "../../assets/icon";

const features = [
  {
    icon: DatabaseIcon,
    title: "Multi-kingdom database",
    description: "A unified system covering life across all taxa.",
  },
  {
    icon: InternetIcon,
    title: "International standards",
    description: "Aligned with global biodiversity frameworks for accuracy.",
  },
  {
    icon: RelationIcon,
    title: "Curated data",
    description: "Expert-verified records for reliable species insights.",
  },
  {
    icon: UIIcon,
    title: "Friendly UI",
    description: "Clean, intuitive tools built for fast ecological search.",
  },
];

export default function WhyBionUniqueSection() {
  return (
    <section className="bg-white-background2 py-20">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 font-space-grotesk text-4xl font-bold text-black-text md:text-5xl">
            Why is BiON unique?
          </h2>
          <p className="text-base text-gray-dark font-poppins">
            BiON brings science, tourism, and conservation together in one
            platform.
          </p>
        </div>

        {/* --- MAIN CARD --- */}
        <div className="rounded-4xl bg-white-background2 p-8 shadow-lg md:p-12 lg:px-16 lg:py-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <UniqueFeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
