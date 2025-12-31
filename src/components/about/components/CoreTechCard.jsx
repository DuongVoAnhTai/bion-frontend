export default function CoreTechCard({ data }) {
  return (
    <div className="flex flex-col h-full rounded-4xl border border-gray-light bg-white-background2 overflow-hidden transition-all duration-300 hover:shadow-species">
      {/* 1. Image Section */}
      <div className="aspect-4/3 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* 2. Content Section */}
      <div className="flex flex-col p-8 flex-1">
        {/* Title */}
        <h3 className="font-space-grotesk text-xl md:text-2xl font-bold text-black-text mb-4">
          {data.title}
        </h3>

        {/* Description */}
        <p className="font-poppins text-base text-gray-dark leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}
