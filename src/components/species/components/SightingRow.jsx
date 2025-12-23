import { MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function SightingRow({ data }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-gray-light last:border-b transition-colors hover:bg-gray-50/50">
      {/* TRÁI: Badge Số lượng & Thời gian */}
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        {/* Badge */}
        <div className="flex flex-col items-center justify-center w-20 h-20 shrink-0 rounded-xl bg-green-logo/10 border border-green-logo/5">
          <span className="text-3xl font-bold text-green-logo leading-none">
            {data.speciesCount}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-green-logo mt-1">
            Species
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <span className="text-lg font-bold text-green-logo whitespace-nowrap">
            {data.date}
          </span>
          <span className="text-sm text-gray-dark whitespace-nowrap">
            {data.time}
          </span>
        </div>
      </div>

      {/* GIỮA: Địa điểm */}
      <div className="flex justify-start md:justify-center items-center gap-2 flex-1 md:px-10 mb-4 md:mb-0">
        <MapPin size={18} className="text-green-logo shrink-0" />
        <div className="flex flex-wrap items-center gap-x-6">
          <Link to={`/hotspots/${data.id}`} className="font-bold text-green-logo hover:underline cursor-pointer">
            {data.location}
          </Link>
          <span className="text-gray-dark text-sm">{data.province}</span>
        </div>
      </div>

      {/* PHẢI: Người quan sát */}
      <div className="flex items-center gap-2 min-w-[150px]">
        <User size={18} className="text-gray-dark shrink-0" />
        <Link to={`/photographers/${data.userId}`} className="text-gray-dark font-medium hover:text-green-logo cursor-pointer transition-colors">
          {data.observer}
        </Link>
      </div>
    </div>
  );
}
