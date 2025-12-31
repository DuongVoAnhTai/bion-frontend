import { Link, useNavigate } from "react-router-dom";

export default function MediaGridCard({ data }) {
  const navigate = useNavigate();

  // Chuyển hướng đến chi tiết quan sát khi click vào ảnh hoặc tên loài
  const handleViewDetail = () => {
    navigate(`/species/${data.id}`);
  };

  return (
    <div className="group flex flex-col gap-3">
      {/* 1. Image */}
      <div
        onClick={handleViewDetail}
        className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-sm transition-all group-hover:shadow-md"
      >
        <img
          src={data.url}
          alt={data.speciesName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Content Info */}
      <div className="flex flex-col font-poppins">
        {/* Date: #A1A1A1 */}
        <span className="text-[13px] text-gray mb-1">{data.date}</span>

        {/* Species Name */}
        <h4
          onClick={handleViewDetail}
          className="text-[15px] font-bold text-black-text cursor-pointer hover:text-green-logo transition-colors line-clamp-1"
        >
          {data.speciesName}
        </h4>

        {/* Author */}
        <div className="flex items-center gap-1 text-[13px] text-gray-dark mt-0.5">
          <span>©</span>
          <Link
            to={`/photographers/${data.authorId}`}
            className="hover:text-green-logo hover:underline transition-all"
          >
            {data.author}
          </Link>
        </div>
      </div>
    </div>
  );
}
