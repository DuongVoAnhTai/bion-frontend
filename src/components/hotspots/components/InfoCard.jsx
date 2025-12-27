export default function InfoCard({ icon, title, description }) {
  const Icon = icon;
  return (
    <div className="flex flex-col gap-3 rounded-sm bg-white-background2 p-6 shadow-info-card transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="text-green-logo shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <h4 className="font-space-grotesk text-lg font-bold text-green-logo uppercase tracking-tight">
          {title}
        </h4>
      </div>

      {/* Nội dung */}
      <p className="font-poppins text-[15px] leading-relaxed text-gray-dark">
        {description}
      </p>
    </div>
  );
}
