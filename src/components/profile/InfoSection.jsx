import { Button } from "../ui/Button";

export default function InfoSection({ data }) {
  return (
    <section className="bg-white-background2 pb-10">
      {/* 1. BANNER IMAGE */}
      <div className="h-48 md:h-64 lg:h-100 w-full overflow-hidden">
        <img
          src={data.banner}
          alt="Profile Banner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* 2. CONTENT AREA */}
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px] relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* AVATAR */}
          <div className="relative -mt-16 md:-mt-24 shrink-0">
            <div className="h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden shadow-lg bg-gray-light">
              <img
                src={data.avatar}
                alt={data.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* TEXT INFO */}
          <div className="flex-1 flex flex-col pt-2 md:pt-6">
            <h1 className="font-space-grotesk text-3xl md:text-5xl font-bold text-gray-dark">
              {data.name}
            </h1>

            {/* Handle */}
            <p className="font-poppins text-lg text-gray mt-1">
              @{data.handle}
            </p>

            {/* Stats, Separator */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-4 font-poppins text-sm md:text-base text-gray-dark">
              <span>
                <strong className="text-gray-dark">{data.followers}</strong>{" "}
                followers
              </span>
              <span className="text-gray-placeholder">•</span>
              <span>
                <strong className="text-gray-dark">{data.images}</strong> images
              </span>
              <span className="text-gray-placeholder">•</span>
              <span>
                <strong className="text-gray-dark">{data.checklists}</strong>{" "}
                checklists
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
