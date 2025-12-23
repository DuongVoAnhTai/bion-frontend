import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MediaCard from "../components/MediaCard";

export default function MediaSection({ data }) {
  const scrollRef = useRef(null);

  // Hàm scroll thủ công cho 2 nút mũi tên
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <section className="bg-white-background2 pt-6 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* HEADER: Tiêu đề "Media" */}
        <h2 className="mb-10 font-space-grotesk text-4xl font-bold text-black-text">
          Media
        </h2>

        {/* SLIDER CONTAINER */}
        <div className="relative group">
          {/* Nút điều hướng Trái */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-12 top-1/3 z-10 hidden xl:flex h-10 w-10 items-center justify-center text-gray-dark hover:text-green-logo transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={1} />
          </button>

          {/* List Ảnh cuộn ngang */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {data.map((item) => (
              <MediaCard key={item.id} data={item} />
            ))}
          </div>

          {/* Nút điều hướng Phải */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-12 top-1/3 z-10 hidden xl:flex h-10 w-10 items-center justify-center text-gray-dark hover:text-green-logo transition-colors"
          >
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
