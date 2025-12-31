import { Check } from "lucide-react";
import { cn } from "../../../lib/utils";

export default function PillarCard({
  icon,
  title,
  children,
  footer,
  className,
}) {
  const Icon = icon;

  return (
    <div
      className={cn(
        "flex flex-col rounded-4xl border border-gray-light bg-white-background2 p-10 transition-all duration-300 hover:shadow-species",
        className
      )}
    >
      {/* 1. ICON */}
      <div className="mb-8 text-green-logo">
        <Icon className="w-12 h-12" />
      </div>

      {/* 2. TITLE */}
      <h3 className="font-space-grotesk text-2xl font-bold text-black-text mb-8">
        {title}
      </h3>

      {/* 3. CONTENT AREA */}
      <div className="flex-1 flex flex-col gap-4 font-poppins text-gray-dark text-[15px]">
        {children}
      </div>

      {/* 4. DIVIDER */}
      <div className="h-px w-full bg-gray-border my-8" />

      {/* 5. FOOTER TEXT */}
      <p className="font-poppins italic text-black-text font-medium leading-relaxed">
        {footer}
      </p>
    </div>
  );
}

// Sub-component cho từng dòng có dấu check
export const PillarItem = ({ children }) => (
  <div className="flex items-start gap-3">
    <Check className="w-5 h-5 text-green-logo shrink-0 mt-0.5" />
    <span className="leading-snug">{children}</span>
  </div>
);
