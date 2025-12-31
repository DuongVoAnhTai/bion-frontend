import { Link } from "react-router-dom";

export default function MemberCard({ data }) {
  return (
    <Link
      to={`/photographers/${data.id}`}
      className="group flex flex-col items-center text-center p-4 rounded-xl border border-transparent transition-all duration-300 hover:border-green-border-fade hover:bg-white/50"
    >
      {/* Avatar tròn */}
      <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-transparent group-hover:border-green-logo transition-colors">
        <img
          src={data.avatar}
          alt={data.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Tên: #151515, Hover: #2BA78C */}
      <h4 className="mb-1 font-space-grotesk text-base font-bold text-black-text transition-colors group-hover:text-green-logo">
        {data.name}
      </h4>

      {/* Chỉ số: #5B5B5B */}
      <div className="flex flex-col text-[12px] text-gray-dark font-poppins">
        <span>{data.imagesCount} images</span>
        <span>{data.checklistsCount} checklist</span>
      </div>
    </Link>
  );
}
