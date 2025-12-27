import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import HotspotCard from "../../HotspotCard";

export default function OtherHotspotsSection({ data }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Logic trượt bằng nút bấm
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Logic kéo chuột (Grab to scroll)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  if (!data || data.length === 0) return null;

  return (
    <section className="bg-white-background2 pt-6 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* TITLE */}
        <h2 className="mb-10 font-space-grotesk text-4xl font-bold text-black-text">
          Other Hotspots
        </h2>

        <div className="relative group/slider">
          {/* Nút mũi tên Trái - Chỉ hiện trên màn hình lớn */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 hidden xl:flex text-gray-dark hover:text-green-logo transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>

          {/* LIST CARDS */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={cn(
              "flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth select-none",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
          >
            {data.map((item) => (
              <div key={item.id} className="min-w-[280px] md:min-w-[320px]">
                <HotspotCard data={item} />
              </div>
            ))}
          </div>

          {/* Nút mũi tên Phải */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 hidden xl:flex text-gray-dark hover:text-green-logo transition-colors"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
