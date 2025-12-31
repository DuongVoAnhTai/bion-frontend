import { cn } from "../../../lib/utils";

export default function RoadmapPhase({ data, className }) {
  const Icon = data.icon;

  return (
    <div  
      className={cn(
        "flex flex-col items-start font-poppins relative",
        className
      )}
    >
      {/* 1. TIMELINE DOT & LABEL */}
      <div className="flex flex-col gap-4 mb-8">
        <span className="text-xl font-bold text-gray-dark font-space-grotesk">
          {data.phase}
        </span>
        {/* Điểm nút trên trục thời gian */}
        <div className="w-4 h-4 rounded-full bg-green-logo relative z-10" />
      </div>

      {/* 2. PHASE BADGE (Pill shape) */}
      <div className="flex items-center gap-3 bg-green-logo text-white px-6 py-3 rounded-full mb-8 shadow-md">
        <Icon className="w-6 h-6" />
        <span className="font-bold text-lg">
          {className === "foundation"
            ? "Foundation"
            : className === "expansion"
            ? "Expansion"
            : className === "ai"
            ? "AI System"
            : "Network"}
        </span>
      </div>

      {/* 3. DETAILS */}
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-green-logo font-bold">Timeframe:</span>
          <span className="text-gray-dark ml-2">{data.timeframe}</span>
        </div>

        <div>
          <span className="text-green-logo font-bold block mb-1">Goal:</span>
          <p className="text-gray-dark text-[15px] leading-relaxed">
            {data.goal}
          </p>
        </div>

        <div>
          <span className="text-green-logo font-bold block mb-2">
            Key Deliverables:
          </span>
          <ul className="space-y-2">
            {data.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-gray-dark text-[14px]"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
