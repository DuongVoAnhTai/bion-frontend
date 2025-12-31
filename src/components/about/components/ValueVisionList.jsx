export default function ValueVisionList({ icon, children }) {
  const Icon = icon;

  return (
    <div className="flex items-start gap-4 py-3 group">
      {/* Icon */}
      <div className="text-green-logo shrink-0 mt-1">
        <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
      </div>
      {/* Text */}
      <span className="font-poppins text-lg text-gray-dark leading-snug">
        {children}
      </span>
    </div>
  );
}
