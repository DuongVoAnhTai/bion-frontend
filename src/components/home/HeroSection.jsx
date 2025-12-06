import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "../ui/Button";
import banner from "../../assets/images/banner.png";
import { ExploreSpeciesIcon, ExploreHotspotsIcon } from "../../assets/icon.jsx";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-center text-white -mt-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 px-4">
        {/* Title */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl md:text-6xl font-bold font-space-grotesk text-white-background2">
            Explore Biodiversity
          </h1>
          <p className="text-base md:text-xl max-w-2xl text-white-background1">
            Discover and contribute to wildlife in Vietnam
          </p>
        </div>

        {/* Search bar */}
        <div className="bg-black/60 border border-white/40 rounded-full flex items-center p-1 md:p-2 w-full max-w-lg ">
          <input
            type="text"
            placeholder="Search species, locations, etc..."
            className="bg-transparent focus:outline-none text-white-background1 placeholder-gray-400 grow px-3 md:px-4 text-sm md:text-base"
          />
          <button className="bg-back-text text-white-background2 border border-gray rounded-full p-2 md:p-3 hover:bg-gray-dark hover:border-white transition-all duration-300 cursor-pointer">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Explore Cards */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full px-4 md:px-0">
          {/* Species Explore */}
          <Link
            to="/species"
            className="group flex flex-col justify-center items-center border border-gray rounded-2xl bg-white/10 py-4 px-16 cursor-pointer backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <ExploreSpeciesIcon />
            </div>

            <Button
              variant="hero"
              className="text-white-background2 mt-2 pointer-events-none group-hover:bg-primary-500/80"
            >
              <span>Explore Species</span>
            </Button>
          </Link>

          {/* Hotspots Explore */}
          <Link
            to="/hotspots"
            className="group flex flex-col justify-center items-center border border-gray rounded-2xl bg-white/10 py-4 px-16 cursor-pointer backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <ExploreHotspotsIcon />
            </div>

            <Button
              variant="hero"
              className="text-white-background2 mt-2 pointer-events-none group-hover:bg-primary-500/80"
            >
              <span>Explore Hotspots</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
