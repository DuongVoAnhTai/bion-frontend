import { cn } from "../../lib/utils";

export default function WhoUsesCard({ icon, title, description, className }) {
  const Icon = icon;

  return (
    <div
      className={cn(
        "flex h-full flex-col items-start rounded-3xl p-8",
        "bg-white-background2 border border-gray-light",
        "transition-colors hover:border-green-logo/50",
        className
      )}
    >
      {/* Icon Wrapper */}
      <div className="mb-6">
        <Icon className="h-10 w-10 text-green-logo" />
      </div>

      {/* Content */}
      <h3 className="mb-3 font-space-grotesk text-2xl font-bold text-black-text">
        {title}
      </h3>
      <p className="font-poppins text-base text-gray-dark">{description}</p>
    </div>
  );
}
