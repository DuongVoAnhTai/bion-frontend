// src/components/about/RoadmapPhase.jsx
export default function RoadmapPhase({ data }) {
  const Icon = data.icon;

  return (
    <div className="flex flex-col items-start font-poppins relative">
      {/* TẦNG 1: THỜI GIAN */}
      <div className="h-10 mb-2">
        <span className="text-xl font-bold text-gray-dark font-space-grotesk">
          {data.phase}
        </span>
      </div>

      {/* TẦNG 2: ĐIỂM NÚT (DOT) */}
      <div className="h-12 flex items-center relative z-10">
        {/* Điểm nút xanh có vòng đệm trắng bao quanh để "ngắt" đường kẻ ngang */}
        <div className="w-5 h-5 rounded-full bg-green-logo ring-[6px] ring-white-background2 shadow-sm" />
      </div>

      {/* TẦNG 3: BADGE VÀ NỘI DUNG */}
      <div className="mt-6 flex flex-col items-start">
        {/* Phase Badge */}
        <div className="flex items-center gap-3 bg-green-logo text-white px-6 py-2.5 rounded-full mb-8 shadow-sm">
          <Icon className="w-5 h-5" />
          <span className="font-bold text-base whitespace-nowrap">{data.label}</span>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <div className="text-[15px]">
            <span className="text-green-logo font-bold uppercase text-xs tracking-wider">
              Timeframe:
            </span>
            <p className="text-gray-dark mt-1">{data.timeframe}</p>
          </div>

          <div className="text-[15px]">
            <span className="text-green-logo font-bold uppercase text-xs tracking-wider">
              Goal:
            </span>
            <p className="text-gray-dark mt-1 leading-relaxed">{data.goal}</p>
          </div>

          <div className="text-[15px]">
            <span className="text-green-logo font-bold uppercase text-xs tracking-wider block mb-3">
              Key Deliverables:
            </span>
            <ul className="space-y-3">
              {data.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-dark text-[14px]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-logo/40 shrink-0" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
