// src/components/about/RoadmapSection.jsx
import {
  FoundationIcon,
  ExpansionIcon,
  AIIcon,
  NetworkIcon,
} from "../../assets/icon";
import RoadmapPhase from "./components/RoadmapPhase";

const roadmapData = [
  {
    phase: "3-6 months",
    label: "Foundation",
    timeframe: "3-6 months",
    icon: FoundationIcon,
    goal: "Build a solid and reliable biodiversity foundation.",
    deliverables: [
      "Species taxonomy database",
      "Hotspot exploration & mapping",
      "Detailed species profiles",
      "Core data structure & standards",
    ],
  },
  {
    phase: "6-12 months",
    label: "Expansion",
    timeframe: "6-12 months",
    icon: ExpansionIcon,
    goal: "Expand depth, coverage, and usability of the platform.",
    deliverables: [
      "Seasonal patterns & biodiversity insights",
      "Biodiversity indices & analytics",
      "Destination & ecosystem profiles",
      "Enhanced data visualization",
    ],
  },
  {
    phase: "12-24 months",
    label: "AI System",
    timeframe: "12-24 months",
    icon: AIIcon,
    goal: "Transform data into an intelligent decision-support system.",
    deliverables: [
      "Smart data classification",
      "Automated insights & recommendations",
      "AI-assisted data cleaning",
      "Scalable system architecture",
    ],
  },
  {
    phase: "24+ months",
    label: "Network",
    timeframe: "24+ months",
    icon: NetworkIcon,
    goal: "Empower community participation and real-world engagement.",
    deliverables: [
      "Mobile PWA application",
      "User checklists & field uploads",
      "Community validation system",
      "Recognition & contribution tracking",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section className="bg-white-background2 pt-15 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-6">
            Our Roadmap
          </h2>
          <p className="max-w-3xl mx-auto font-poppins text-gray-dark text-lg mb-6">
            BiON grows through clearly defined phases, each building long-term
            value for biodiversity...
          </p>
          <div className="flex items-center justify-center gap-4 text-gray text-xs uppercase tracking-[0.3em] font-bold">
            <div className="w-px h-10 bg-gray-light" />
            A Purpose-Driven Development Journey
            <div className="w-px h-10 bg-gray-light" />
          </div>
        </div>

        {/* --- TIMELINE AREA --- */}
        <div className="relative">
          <div className="hidden lg:block absolute top-18 left-0 right-0 h-0.5 bg-gray-light/60 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {roadmapData.map((item, index) => (
              <RoadmapPhase key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
