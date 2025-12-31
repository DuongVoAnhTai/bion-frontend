export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-white-background2">
      {/* --- LAYER ĐƯỜNG CONG TRÊN --- */}
      {/* Container giới hạn vùng hiển thị */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[116px] pointer-events-none z-0">
        {/* Layout 1: Hình bóng đổ nhòe */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: "1876px",
            height: "1876px",
            borderRadius: "1876px",
            background: "#A1A1A1",
            filter: "blur(50px)",
            top: "-1810px", // Đẩy lên trên để chỉ lộ phần đáy vòng tròn
          }}
        />

        {/* Layout 2: Hình nền trắng xám chính */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: "3852px",
            height: "3852px",
            borderRadius: "3852px",
            background: "#F7F7F7",
            top: "-3736px", // 3852px - 116px = 3736px
          }}
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      {/* Thẻ cha theo Figma: width 1128px, padding-top 86px */}
      <div className="relative z-10 w-full max-w-[1128px] flex flex-col items-center text-center px-4">
        <span className="font-poppins text-3xl md:text-4xl font-bold text-gray-dark mb-6">
          a community
        </span>

        <h1 className="font-space-grotesk text-5xl md:text-8xl font-bold text-black-text leading-[1.1] mb-12">
          Built to Protect <br /> Life on Earth
        </h1>

        <p className="font-poppins text-base md:text-lg text-gray-dark italic leading-relaxed max-w-2xl">
          BiON connects researchers, guides, and nature lovers to share data,
          exchange insights, and drive collective action for biodiversity
          conservation.
        </p>
      </div>

      {/* --- LAYER ĐƯỜNG CONG DƯỚI (Tương tự nhưng đảo ngược) --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[116px] pointer-events-none z-0">
        {/* Layout 1: Hình bóng đổ nhòe */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: "1876px",
            height: "1876px",
            borderRadius: "1876px",
            background: "#A1A1A1",
            filter: "blur(50px)",
            bottom: "-1810px", // Đẩy lên trên để chỉ lộ phần đáy vòng tròn
          }}
        />

        {/* Layout 2: Hình nền trắng xám chính */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            width: "3852px",
            height: "3852px",
            borderRadius: "3852px",
            background: "#F7F7F7",
            bottom: "-3736px",
          }}
        />
      </div>
    </section>
  );
}
