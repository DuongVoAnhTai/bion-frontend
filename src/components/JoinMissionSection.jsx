import { Button } from "./ui/Button";
import banner2 from "../assets/images/banner2.png";
import { Link } from "react-router-dom";

export default function JoinMissionSection() {
  return (
    <section className="relative w-full py-20 bg-white-background2 overflow-hidden">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #F7F7F7 0%, #F7F7F700 25%, #F7F7F700 75%, #F7F7F7 100%)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, #F7F7F7 0%, #F7F7F700 15%, #F7F7F700 85%, #F7F7F7 100%)`,
          }}
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 xl:px-[156px]">
        <div className="mx-auto max-w-4xl rounded-4xl bg-white/60 p-10 text-center shadow-lg backdrop-blur-sm md:p-16">
          <h2 className="mb-6 font-space-grotesk text-3xl font-bold text-black-text md:text-4xl">
            Join the mission to protect Vietnam’s biodiversity.
          </h2>

          <p className="mb-10 text-base text-gray-dark font-poppins">
            Explore nature. Learn more. Contribute your sightings.
          </p>

          <Link to="/about">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-green-logo text-green-logo hover:bg-green-logo hover:text-white transition-all duration-300 px-10 text-lg"
            >
              Start exploring
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
