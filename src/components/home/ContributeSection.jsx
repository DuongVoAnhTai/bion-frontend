import ContributeCard from "./components/ContributeCard";
import { UploadIcon, ObserveIcon, IdentifyIcon } from "../../assets/icon";

const actions = [
  {
    icon: UploadIcon,
    title: "Upload",
    description: "Share your photos and recordings of wildlife",
    link: "/contribute",
  },
  {
    icon: ObserveIcon,
    title: "Observe",
    description: "Submit your own observations from the field",
    link: "/contribute",
  },
  {
    icon: IdentifyIcon,
    title: "Identify",
    description: "Help review and identify community sightings",
    link: "/contribute",
  },
];

export default function ContributeSection() {
  return (
    <section className="bg-white-background2 py-20">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-6 font-space-grotesk text-4xl font-bold text-black-text md:text-5xl">
            Contribute to community
          </h2>
          <p className="max-w-3xl text-base text-gray-dark font-poppins">
            Join meaningful conservation efforts where knowledge meets action —
            supporting local livelihoods, protecting habitats, and empowering
            nature-connected futures.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {actions.map((item, index) => (
            <ContributeCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
