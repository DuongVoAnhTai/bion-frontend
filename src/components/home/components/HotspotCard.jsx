import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { LocationsIcon } from "../../../assets/icon";

export default function HotspotCard({ id, name, location, image, className }) {
  return (
    <Link
      to={`/hotspots/${id}`}
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
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col p-6">
        <h3 className="mb-3 font-space-grotesk text-xl font-bold text-black-text">
          {name}
        </h3>

        <div className="flex items-start gap-2">
          {/* Icon Location */}
          <div className="mt-0.5 shrink-0 text-gray-dark">
            <LocationsIcon className="w-4 h-4" />
          </div>

          <p className="font-poppins text-sm text-gray-dark">{location}</p>
        </div>
      </div>
    </Link>
  );
}
