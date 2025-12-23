import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TourCard from "../components/TourCard";

export default function RelatedToursSection({ data }) {
  const scrollRef = useRef(null);

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
        {/* HEADER */}
        <h2 className="mb-10 font-space-grotesk text-4xl font-bold text-black-text">
          Related Tours
        </h2>

        {/* SLIDER */}
        <div className="relative group/slider">
          {/* Nút mũi tên Trái */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 hidden xl:flex text-gray-dark hover:text-green-logo transition-colors"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>

          {/* List Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
          >
            {data.map((item) => (
              <TourCard key={item.id} data={item} />
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
