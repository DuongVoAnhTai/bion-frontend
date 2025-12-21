import { Link } from "react-router-dom";

export default function DistributionLocationCard({ id, name, type, image }) {
  return (
    <Link
      to={`/hotspots/${id}`}
      className="flex flex-col gap-3 group cursor-pointer"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-2xl aspect-4/3">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* Info */}
      <div>
        <h4 className="font-space-grotesk text-lg font-bold text-black-text line-clamp-1">
          {name}
        </h4>
        <p className="font-poppins text-sm text-gray">{type}</p>
      </div>
    </Link>
  );
}
