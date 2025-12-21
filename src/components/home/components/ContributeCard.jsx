import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

export default function ContributeCard({
  icon,
  title,
  description,
  link,
  className,
}) {
  const Icon = icon;

  return (
    <Link
      to={link}
      className={cn(
        "flex flex-col items-start rounded-4xl p-8",
        "bg-white-background2 border border-gray-light",
        "transition-all duration-300",
        "hover:-translate-y-2",
        "hover:shadow-species",
        "cursor-pointer",
        "hover:border-green-logo/30",

        className
      )}
    >
      {/* Icon Wrapper */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-soft transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8 text-green-logo" />
      </div>

      {/* Title */}
      <h3 className="mb-3 font-space-grotesk text-2xl font-bold text-black-text">
        {title}
      </h3>

      {/* Description */}
      <p className="font-poppins text-base text-gray-dark leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
