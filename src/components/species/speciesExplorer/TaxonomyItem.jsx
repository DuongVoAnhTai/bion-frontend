import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";

export default function TaxonomyItem({ data, level = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = data.children && data.children.length > 0;

  return (
    <div className="flex flex-col ">
      {/* Dòng hiển thị thông tin */}
      <div
        className={cn(
          "flex items-center gap-2 py-1.5 hover:bg-gray-100/50 rounded-md cursor-pointer transition-colors group",
          // Càng vào sâu càng thụt lề vào (ml-6, ml-12, ml-18...)
          level > 0 && `ml-6`
        )}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {/* Biểu tượng đóng mở */}
        <div className="w-4 h-4 flex items-center justify-center">
          {hasChildren ? (
            isOpen ? (
              <ChevronDown size={14} className="text-gray" />
            ) : (
              <ChevronRight size={14} className="text-gray" />
            )
          ) : (
            <div className="w-1 h-1 bg-gray-light rounded-full ml-1" /> // Dấu chấm cho cấp cuối (Species)
          )}
        </div>

        {/* Thông tin Text */}
        <div className="flex items-center gap-1.5 font-poppins text-[14px]">
          <span className="text-gray-dark font-medium whitespace-nowrap">
            {data.rank}:
          </span>
          <Link
            to={`/species/${data.id}`}
            className="text-green-logo hover:underline font-medium cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {data.name}
          </Link>
          <span className="text-gray-light ml-1">•</span>
          <span className="text-gray text-[13px]">{data.count} spp.</span>
        </div>
      </div>

      {/* Hiển thị con (Đệ quy) */}
      {hasChildren && isOpen && (
        <div className="ml-2">
          {data.children.map((child, index) => (
            <TaxonomyItem key={index} data={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
