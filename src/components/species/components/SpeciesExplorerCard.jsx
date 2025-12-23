import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

export default function SpeciesExplorerCard({ data, className }) {
  return (
    <Link
      to={`/species/${data.id}`}
      className={cn(
        // Layout
        "group flex items-center justify-between overflow-hidden rounded-xl p-6 transition-all duration-300",
        "bg-white-background2 border border-gray-light",
        "hover:border-green-logo hover:shadow-md cursor-pointer",
        className
      )}
    >
      {/* TEXT INFO */}
      <div className="flex flex-col gap-2">
        {/* Tên loài */}
        <h3 className="font-space-grotesk text-xl font-bold text-black-text transition-colors group-hover:text-green-logo">
          {data.name}
        </h3>

        {/* Số lượng loài */}
        <p className="font-poppins text-sm text-gray-dark">
          {data.count} species
        </p>
      </div>

      {/* IMAGE */}
      <div className="h-20 w-28 md:w-32 shrink-0 overflow-hidden rounded-lg bg-gray-200">
        <img
          src={data.image}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </Link>
  );
}
