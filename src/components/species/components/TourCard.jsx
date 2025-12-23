import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function TourCard({ data }) {
  return (
    <Link
      to={`/tours/${data.id}`}
      className="group flex flex-col min-w-[300px] md:min-w-[380px] bg-white-background2 border border-gray-light rounded-4xl overflow-hidden transition-all duration-300 hover:shadow-species hover:-translate-y-1"
    >
      {/* 1. Image: Chiếm nửa trên */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Content: Chiếm nửa dưới */}
      <div className="p-6 md:p-8 flex flex-col gap-4">
        {/* Title */}
        <h3 className="font-space-grotesk text-xl font-bold text-black-text leading-tight transition-colors group-hover:text-green-logo line-clamp-2">
          {data.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-dark font-poppins">
          <MapPin size={18} className="shrink-0" />
          <span className="text-sm md:text-base">{data.location}</span>
        </div>
      </div>
    </Link>
  );
}
