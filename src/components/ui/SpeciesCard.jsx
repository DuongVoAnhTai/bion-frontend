import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export default function SpeciesCard({
  id,
  commonName,
  scientificName,
  image,
  className,
}) {
  return (
    <Link
      to={`/species/${id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-gray-light bg-white-background2 transition-all duration-300",
        "hover:-translate-y-2 hover:shadow-species cursor-pointer",
        className
      )}
    >
      {/* 1. Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={commonName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col p-6">
        {/* Common Name (#151515) */}
        <h3 className="mb-1 font-space-grotesk text-xl font-bold text-black-text">
          {commonName}
        </h3>

        {/* Scientific Name */}
        <p className="font-poppins text-sm text-gray-dark italic">
          {scientificName}
        </p>
      </div>
    </Link>
  );
}
