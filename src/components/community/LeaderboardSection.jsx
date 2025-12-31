import LeaderboardItem from "./components/LeaderboardItem";

export default function LeaderboardSection({ data }) {
  const currentMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  if (!data) return null;

  return (
    <section className="bg-white-background2 pt-15 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-20 text-center">
          <h2 className="font-space-grotesk text-3xl font-bold text-green-logo uppercase tracking-[0.2em] mb-4">
            Leader Board
          </h2>
          <p className="mx-auto max-w-2xl text-gray-dark font-poppins">
            See top contributors ranked by impact, activity, and dedication to
            biodiversity documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-light/40 -translate-x-1/2" />

          {/* CỘT 1: ALL TIME */}
          <div className="lg:pr-20">
            <h3 className="font-space-grotesk text-xl font-bold text-gray-dark mb-8 uppercase tracking-wider border-b border-gray-light/30 pb-4">
              All Time
            </h3>
            <div className="flex flex-col gap-2">
              {/* Đổ mảng allTime vào đây */}
              {data.allTime.map((item) => (
                <LeaderboardItem key={`all-${item.rank}`} {...item} />
              ))}
            </div>
          </div>

          {/* CỘT 2: MONTHLY (Dùng ngày tháng động) */}
          <div className="lg:pl-20">
            <h3 className="font-space-grotesk text-xl font-bold text-gray-dark mb-8 uppercase tracking-wider border-b border-gray-light/30 pb-4">
              {currentMonthYear}
            </h3>
            <div className="flex flex-col gap-2">
              {/* Đổ mảng monthly vào đây */}
              {data.monthly.map((item) => (
                <LeaderboardItem key={`month-${item.rank}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
