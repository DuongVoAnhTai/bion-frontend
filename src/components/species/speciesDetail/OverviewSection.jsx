import { Link } from "react-router-dom";

export default function OverviewSection({ data }) {
  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- BREADCRUMB --- */}
        <nav className="mb-8 flex items-center gap-2 font-poppins text-sm text-gray">
          <Link to="/" className="hover:text-green-logo transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/species"
            className="hover:text-green-logo transition-colors"
          >
            Species
          </Link>
          <span>/</span>
          <span className="text-gray-dark font-medium">
            {data.group || "Birds"}
          </span>
        </nav>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* --- LEFT: IMAGE --- */}
          <div className="w-full lg:w-[320px] shrink-0">
            <img
              src={data.image}
              alt={data.scientificName}
              className="aspect-square w-full rounded-4xl border border-gray-border object-cover shadow-species"
            />
          </div>

          {/* --- RIGHT: INFO --- */}
          <div className="flex flex-1 flex-col items-start pt-2">
            {/* 1. Badge Status */}
            <div className="mb-6 inline-block rounded-full bg-green-logo px-6 py-2 text-sm font-semibold text-white">
              {data.status || "Endemic"}
            </div>

            {/* 2. Divider Line */}
            <div className="mb-8 h-px w-full bg-gray-light" />

            {/* 3. Scientific Name */}
            <h1 className="mb-3 font-space-grotesk text-4xl font-bold leading-tight text-black-text md:text-5xl">
              {data.scientificName}
            </h1>

            {/* 4. Author/Year */}
            <p className="mb-10 font-poppins text-2xl font-medium text-gray-dark">
              {data.author}
            </p>

            {/* 5. Taxonomy Path */}
            <div className="flex flex-wrap items-center gap-3 font-poppins text-[16px] text-gray-dark">
              {data.taxonomy.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="hover:text-green-logo cursor-pointer transition-colors">
                    {item}
                  </span>
                  {index < data.taxonomy.length - 1 && (
                    <span className="text-gray-light text-xs">●</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
