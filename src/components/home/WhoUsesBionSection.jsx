import WhoUsesCard from "../ui/WhoUsesCard";
import {
  GuideIcon,
  ParkIcon,
  KidIcon,
  EducationIcon,
  CameraIcon,
} from "../../assets/icon";

const userGroups = [
  {
    icon: GuideIcon,
    title: "For Guides",
    description: "Prepare tours and check seasonality.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: ParkIcon,
    title: "For National Parks",
    description: "Manage species lists and locations.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: KidIcon,
    title: "For Kids & Educators",
    description: "Simple visuals and illustration.",
    colSpan: "lg:col-span-2",
  },
  {
    icon: EducationIcon,
    title: "For Students & Researchers",
    description: "Access DarwinCore datasets.",
    colSpan: "lg:col-span-3",
  },
  {
    icon: CameraIcon,
    title: "For Travelers & Photographers",
    description: "Find hotspots and highlight species.",
    colSpan: "lg:col-span-3",
  },
];

export default function WhoUsesBionSection() {
  return (
    <section className="bg-white-background2 py-20">
      <div className="container mx-auto px-4 md:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 font-space-grotesk text-4xl font-bold text-black-text md:text-5xl">
            Who uses BiON?
          </h2>
          <p className="text-base text-gray-dark font-poppins">
            BiON brings science, tourism, and conservation together in one
            platform.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {userGroups.map((item, index) => (
            <WhoUsesCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className={item.colSpan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
