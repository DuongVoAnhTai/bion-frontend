import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SeasonalSection({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-10 flex flex-col items-start text-left">
          <h2 className="font-space-grotesk text-4xl font-bold text-black-text mb-6">
            Seasonal
          </h2>
          <p className="max-full text-base md:text-lg text-gray-dark font-poppins leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* --- CHART CONTAINER --- */}
        <div className="w-full">
          <h3 className="text-center font-poppins font-bold text-xl text-black-text mb-6">
            Annual Activity Frequency of Wildlife Groups in Cat Tien
          </h3>

          <div className="h-[400px] md:h-[500px] w-full bg-white rounded-xl border border-gray-light/30 p-4 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data.chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
              >
                {/* Lưới tọa độ */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#DEDEDE"
                  vertical={true}
                />

                <XAxis
                  dataKey="month"
                  tick={{ fill: "#5B5B5B", fontSize: 12 }}
                  axisLine={{ stroke: "#C6C6C6" }}
                  label={{
                    value: "Month",
                    position: "insideBottom",
                    offset: -5,
                    fontStyle: "bold",
                  }}
                />

                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "#5B5B5B", fontSize: 12 }}
                  axisLine={{ stroke: "#C6C6C6" }}
                  label={{
                    value: "Activity Frequency Index",
                    angle: -90,
                    position: "insideLeft",
                    offset: 15, 
                    fontStyle: "bold",
                  }}
                />

                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid #C6C6C6",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />

                <Legend verticalAlign="top" align="right" height={36} />

                {/* Các đường line: Herp (Blue), Primate (Orange), Bird (BiON Green) */}
                <Line
                  type="monotone"
                  dataKey="bird"
                  name="Bird"
                  stroke="#2BA78C"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#2BA78C" }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="herp"
                  name="Herp"
                  stroke="#1f77b4"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#1f77b4" }}
                />
                <Line
                  type="monotone"
                  dataKey="primate"
                  name="Primate"
                  stroke="#ff7f0e"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#ff7f0e" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
