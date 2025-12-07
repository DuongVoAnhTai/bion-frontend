import { useState } from "react";
import CoreModuleCard from "../ui/CoreModuleCard";

// Dữ liệu mẫu
const modules = [
  {
    title: "Species Explorer",
    link: "/species",
    description:
      "Search and filter species using taxonomy, status, and region.",
    image: "/src/assets/images/species-explorer.png",
  },
  {
    title: "Hotspot Explorer",
    link: "/hotspots",
    description:
      "Discover biodiversity hotspots and protected areas across Vietnam.",
    image: "/src/assets/images/hotspot-explorer.png",
  },
  {
    title: "Occurrence Map",
    link: "/map",
    description: "Visualise species distribution data on interactive maps.",
    image: "/src/assets/images/occurence-map.png",
  },
  {
    title: "Media Library",
    link: "/media",
    description:
      "Access a vast collection of verified biodiversity images and videos.",
    image: "/src/assets/images/media-library.png",
  },
];

export default function WhatIsBionSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMobileClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white-background2 py-20">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        <div className="flex flex-col items-center text-center">
          {/* Subtitle */}
          <span className="mb-3 text-sm font-bold uppercase tracking-widest text-green-logo font-poppins">
            What is BiON?
          </span>

          {/* Title: #151515 -> text-black-text */}
          <h2 className="mb-8 font-space-grotesk text-3xl md:text-5xl font-bold leading-tight text-black-text">
            BiON is Vietnam’s Biodiversity <br /> Intelligence Platform
          </h2>

          {/* Line: #DEDEDE -> bg-gray-border */}
          <div className="mb-8 h-px w-24 bg-gray-border"></div>

          {/* Heading: #5B5B5B -> text-gray-dark */}
          <h3 className="mb-4 text-2xl font-bold text-gray-dark font-poppins">
            Core Modules
          </h3>

          {/* Desc: #A1A1A1 -> text-gray */}
          <p className="mb-12 max-w-2xl text-gray font-poppins">
            A clean and modern way to explore species, hotspots, maps, and
            verified scientific data.
          </p>
        </div>

        {/* Grid Modules */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <CoreModuleCard
              key={index}
              title={module.title}
              link={module.link}
              description={module.description}
              image={module.image}
              isActive={activeIndex === index}
              onMobileClick={() => handleMobileClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
