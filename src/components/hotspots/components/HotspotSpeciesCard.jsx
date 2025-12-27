import { Link } from "react-router-dom";

export default function HotspotSpeciesCard({ data }) {
  return (
    <Link
      to={`/species/${data.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-light bg-white-background2 transition-all duration-300 hover:-translate-y-1 hover:shadow-species"
    >
      {/* 1. Image: Aspect ratio 4:3 */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={data.image}
          alt={data.commonName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Info Section */}
      <div className="flex flex-col p-5">
        <h3 className="font-space-grotesk text-lg font-bold text-black-text transition-colors group-hover:text-green-logo">
          {data.commonName}
        </h3>
        <p className="font-poppins text-sm text-gray-dark italic mt-1">
          {data.scientificName}
        </p>
      </div>
    </Link>
  );
}
