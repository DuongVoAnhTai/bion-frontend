import heroImg from "../../../assets/images/banner3.png";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* 1. BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* 2. DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* 3. BOTTOM GRADIENT FADE */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 h-64"
        style={{
          background: `linear-gradient(180deg, #F7F7F700 0%, #F7F7F7 80%, #F7F7F7 100%)`,
        }}
      />

      {/* 4. CONTENT LAYER */}
      <div className="container relative z-30 mx-auto px-4 md:px-8 xl:px-[156px]">
        <div className="flex flex-col items-center gap-6   mx-auto">
          {/* Main Heading */}
          <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold text-white-background2 leading-tight">
            Discover Vietnam Wildlife Hotspots{" "}
            <br className="hidden md:block" /> with our exclusive list
          </h1>

          {/* Description */}
          <p className="font-poppins text-lg md:text-xl text-white-background1 max-w-3xl leading-relaxed">
            Use our list to explore top Vietnam wildlife hotspots—plan your
            route, pick the right season, and get inspired for your next wild
            adventure.
          </p>

          {/* Guide book Button */}
          <div className="mt-4 group cursor-pointer flex flex-col items-center gap-1 rounded-full border border-white/40 bg-black/20 px-10 py-4 backdrop-blur-md transition-all hover:bg-black/40 hover:border-white">
            <span className="text-xs uppercase tracking-widest text-white/70 font-bold">
              Guide book:
            </span>
            <span className="text-xl text-white-background2 font-space-grotesk">
              Explore Vietnam in Wild
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
