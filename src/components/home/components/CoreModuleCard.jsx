import { useNavigate } from "react-router-dom";
import { cn } from "../../../lib/utils";

export default function CoreModuleCard({
  title,
  description,
  image,
  link,
  className,
  isActive,
  onMobileClick,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const isDesktop = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (isDesktop) return;

    onMobileClick();
  };

  const handleButtonViewMore = (e) => {
    e.stopPropagation();
    navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "group relative h-[500px] w-full overflow-hidden cursor-pointer",
        className
      )}
    >
      {/* 1. Background Image */}
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700",
          isActive ? "scale-110" : "group-hover:scale-110"
        )}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* 2. Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-colors duration-500",
          isActive ? "bg-black/80" : "group-hover:bg-black/80"
        )}
      />

      {/* 3. Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-gray-border">
        {/* Title */}
        <h3
          className={cn(
            "font-space-grotesk text-3xl font-bold transition-transform duration-500",
            isActive ? "-translate-y-2" : "group-hover:-translate-y-2"
          )}
        >
          {title}
        </h3>

        {/* Hidden Content (display when hover) */}
        <div
          className={cn(
            "grid transition-all duration-500 overflow-hidden",
            isActive
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100"
          )}
        >
          <div className="overflow-hidden flex flex-col items-center">
            <p className="mt-2 text-base text-gray-border line-clamp-3">
              {description}
            </p>

            {/* View More Button */}
            <button
              onClick={handleButtonViewMore}
              className="mt-6 rounded-full border border-gray bg-white-background2/10 px-6 py-2 text-sm font-medium text-white-background2 backdrop-blur-md transition-colors hover:bg-white-background2/20 cursor-pointer"
            >
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
