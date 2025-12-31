import { CopyIcon } from "../../../assets/icon";

export default function SpeciesProfileCard({ data }) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      {/* 1. Image */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-white-background2">
        <img
          src={data.image}
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Info */}
      <div className="flex flex-col font-poppins">
        {/* Số lượng ảnh */}
        <div className="flex items-center gap-1.5 text-gray text-[13px] mb-1">
          <CopyIcon className="w-3.5 h-3.5" />
          <span>{data.imageCount} images</span>
        </div>

        {/* Tên Common Name */}
        <h4 className="text-[15px] font-bold text-black-text group-hover:text-green-logo transition-colors">
          {data.name}
        </h4>

        {/* Tên Scientific Name */}
        <p className="text-[12px] text-gray-dark italic">
          {data.scientificName}
        </p>
      </div>
    </div>
  );
}
