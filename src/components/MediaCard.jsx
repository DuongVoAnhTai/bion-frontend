import { Link } from "react-router-dom";

export default function MediaCard({ data }) {
  return (
    <div className="flex flex-col min-w-[280px] md:min-w-[300px] group cursor-pointer">
      {/* 1. Image Container */}
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={data.image}
          alt={`Observation by ${data.author}`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* 2. Meta Info */}
      <div className="mt-4 flex flex-col gap-1 font-poppins">
        {/* Date: #A1A1A1 */}
        <span className="text-sm text-gray">{data.date}</span>

        {/* Author */}
        <div className="flex item-center gap-1 text-black-text font-semibold">
          <span>©</span>
          <Link
            to={`/photographers/${data.authorId}`}
            className="hover:text-green-logo transition-colors"
          >
            {data.author}
          </Link>
        </div>

        {/* Location */}
        <p className="text-sm text-gray-dark leading-snug">{data.location}</p>
      </div>
    </div>
  );
}
