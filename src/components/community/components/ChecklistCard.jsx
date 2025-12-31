import { Link, useNavigate } from "react-router-dom";
import { MapPin, User } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function ChecklistCard({ data }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/`);
  };

  const handleUserClick = (e) => {
    e.stopPropagation();
    navigate(`/photographers/${data.userId}`);
  };
  
  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "group flex flex-col gap-4 p-6 rounded-2xl border border-gray-light bg-white-background2 transition-all duration-300",
        "hover:border-green-logo hover:shadow-md cursor-pointer"
      )}
    >
      {/* --- TẦNG TRÊN: SỐ LƯỢNG & NGÀY GIỜ --- */}
      <div className="flex justify-around items-start">
        {/* Khối bên trái: 19 SPECIES */}
        <div className="flex flex-col items-start border-r border-gray-light/50 pr-4 min-w-20">
          <span className="text-4xl font-bold text-green-logo leading-none">
            {data.speciesCount}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-logo mt-1">
            Species
          </span>
        </div>

        {/* Khối bên phải: NGÀY & GIỜ */}
        <div className="flex flex-col items-start text-right font-poppins">
          <span className="text-[15px] font-bold text-black-text group-hover:text-green-logo transition-colors">
            {data.date}
          </span>
          <span className="text-[13px] text-gray mt-0.5">{data.time}</span>
        </div>
      </div>

      {/* --- TẦNG DƯỚI: ĐỊA ĐIỂM & USER --- */}
      <div className="flex flex-col gap-2 pt-2">
        {/* Địa điểm */}
        <div className="flex items-center gap-2 text-gray-dark group-hover:text-green-logo transition-colors">
          <MapPin
            size={16}
            className="shrink-0 text-gray-dark group-hover:text-green-logo transition-colors"
          />
          <span className="text-sm font-medium line-clamp-1 italic">
            {data.location}
          </span>
        </div>

        {/* Người đóng góp */}
        <div className="flex items-center gap-2 text-gray-dark">
          <User size={16} className="shrink-0" />
          <span
            onClick={handleUserClick}
            className="text-sm font-medium hover:underline hover:text-green-logo transition-all"
          >
            {data.userName}
          </span>
        </div>
      </div>
    </div>
  );
}
