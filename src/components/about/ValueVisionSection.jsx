import {
  DoubleDownIcon,
  LicensingIcon,
  StarIcon,
  ElementIcon,
  BundleIcon,
  BirdIcon,
  WildlifeIcon,
  TreeIcon,
  FlagIcon,
} from "../../assets/icon";
import ValueVisionList from "./components/ValueVisionList";

export default function ValueVisionSection() {
  return (
    <section className="bg-white-background2 mt-15 mb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="text-center mb-15">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-6">
            Value & Vision
          </h2>
          <p className="max-w-3xl mx-auto font-poppins text-gray-dark text-lg leading-relaxed">
            BiON is built to create real-world value while shaping how nature
            experiences in Vietnam are understood and remembered.
          </p>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-16 lg:gap-0">
          {/* Thanh dọc ngăn cách ở giữa */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-light/40 -translate-x-1/2" />

          {/* CỘT TRÁI: VALUE PROPOSITION */}
          <div className="lg:pr-16 flex flex-col items-center">
            <h3 className="font-space-grotesk text-4xl font-bold text-green-logo mb-4">
              Value Proposition
            </h3>
            <p className="font-poppins italic text-black-text font-semibold text-xl mb-8">
              BiON does not sell “raw data”
            </p>
            {/* Thanh kẻ ngang ngắn */}
            <div className="w-24 h-px bg-gray-light mb-8" />

            <div className="w-full max-w-md flex flex-col gap-2 mb-16">
              <ValueVisionList icon={LicensingIcon}>
                Experience licensing
              </ValueVisionList>
              <ValueVisionList icon={StarIcon}>
                Premium content & curated hotspots
              </ValueVisionList>
              <ValueVisionList icon={ElementIcon}>
                Solutions for government & institutions
              </ValueVisionList>
              <ValueVisionList icon={BundleIcon}>
                Exclusive bundles integrated with WANEE tours
              </ValueVisionList>
            </div>

            {/* Bottom Part */}
            <div className="mt-auto flex flex-col items-center text-center">
              <DoubleDownIcon className="w-8 h-8 text-gray-placeholder mb-8" />
              <h4 className="font-space-grotesk text-2xl font-bold text-black-text leading-tight max-w-[300px] mt-8">
                Revenue grows alongside conservation impact
              </h4>
            </div>
          </div>

          {/* CỘT PHẢI: OUR VISION */}
          <div className="lg:pl-16 flex flex-col items-center">
            <h3 className="font-space-grotesk text-4xl font-bold text-green-logo mb-4">
              Our Vision
            </h3>
            <p className="font-poppins italic text-black-text font-semibold text-xl mb-8">
              When people think of.
            </p>
            <div className="w-24 h-px bg-gray-light mb-8" />

            <div className="w-full max-w-md flex flex-col gap-2 mb-16">
              <ValueVisionList icon={BirdIcon}>
                Birding in Vietnam
              </ValueVisionList>
              <ValueVisionList icon={WildlifeIcon}>
                Wildlife in Vietnam
              </ValueVisionList>
              <ValueVisionList icon={TreeIcon}>
                Nature-based experiences in Vietnam
              </ValueVisionList>
              <ValueVisionList icon={FlagIcon}>
                Responsible conservation travel in Vietnam
              </ValueVisionList>
            </div>

            {/* Bottom Part */}
            <div className="mt-auto flex flex-col items-center text-center">
              <DoubleDownIcon className="w-8 h-8 text-gray-placeholder mb-8" />
              <h4 className="font-space-grotesk text-2xl font-bold text-black-text leading-tight max-w-[320px] mt-8">
                BiON becomes the reference platform
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
