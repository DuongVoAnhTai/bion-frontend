import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../../../lib/utils";

// Component nhỏ để tái sử dụng
const FilterAccordion = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-light/50 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group cursor-pointer"
      >
        <span
          className={cn(
            "font-poppins text-base font-medium text-gray-dark group-hover:text-green-logo transition-colors",
            isOpen && "text-green-logo"
          )}
        >
          {label}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray" />
        )}
      </button>

      {/* Nội dung xổ xuống (Demo) */}
      {isOpen && (
        <div className="mt-2 pl-2 space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-logo" />
            <span className="text-sm text-gray-dark">Option 1</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="accent-green-logo" />
            <span className="text-sm text-gray-dark">Option 2</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function FilterSidebar() {
  const filters = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus"];

  return (
    <aside className="w-full flex flex-col gap-6">
      {/* Tiêu đề */}
      <h2 className="font-space-grotesk text-2xl font-bold text-green-logo">
        Explore Species
      </h2>

      {/* Ô tìm kiếm */}
      <div className="relative">
        <input
          type="text"
          placeholder="Species..."
          className="w-full rounded-lg border border-gray-light bg-white-background2 py-3 pl-10 pr-4 text-sm text-black-text outline-none focus:border-green-logo transition-colors placeholder:text-gray"
        />
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray" />
      </div>

      {/* Danh sách bộ lọc */}
      <div className="hidden lg:flex flex-col">
        {filters.map((filter) => (
          <FilterAccordion key={filter} label={filter} />
        ))}
      </div>
    </aside>
  );
}
