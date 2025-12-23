export default function UniqueFeatureItem({ data }) {
  const Icon = data.icon;

  return (
    <div className="flex flex-col items-start gap-4">
      {/* Icon */}
      <div className="mb-2">
        <Icon className="h-10 w-10 text-green-logo" />
      </div>

      <h3 className="font-space-grotesk text-xl font-bold text-black-text">
        {data.title}
      </h3>

      <p className="font-poppins text-sm leading-relaxed text-gray-dark">
        {data.description}
      </p>
    </div>
  );
}
