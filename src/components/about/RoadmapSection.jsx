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
    timeframe: "3-6 months",
    icon: FoundationIcon,
    type: "foundation",
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
    timeframe: "6-12 months",
    icon: ExpansionIcon,
    type: "expansion",
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
    timeframe: "12-24 months",
    icon: AIIcon,
    type: "ai",
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
    timeframe: "24+ months",
    icon: NetworkIcon,
    type: "network",
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
          <p className="max-w-3xl mx-auto font-poppins text-gray-dark text-lg mb-4">
            BiON grows through clearly defined phases, each building long-term
            value for biodiversity, tourism, and conservation communities.
          </p>
          <div className="flex items-center justify-center gap-4 text-gray text-sm uppercase tracking-widest">
            <div className="w-px h-12 bg-gray-light" />
            A Purpose-Driven Development Journey
            <div className="w-px h-12 bg-gray-light" />
          </div>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="relative">
          {/* Trục đường kẻ ngang (Chỉ hiện trên Desktop) */}
          <div className="hidden lg:block absolute top-13 left-0 right-0 h-px bg-gray-light z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {roadmapData.map((item, index) => (
              <RoadmapPhase key={index} data={item} className={item.type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
