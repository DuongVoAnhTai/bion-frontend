import { ArrowDown } from "lucide-react";
import heroBg from "/src/assets/images/occurence-map.png";
import DataIntegrationSection from "./components/DataIntegrationSection";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-[#06251d]">
      {/* 1. LAYER NỀN */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay đen mờ 60% */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* 2. LAYER NỘI DUNG CHÍNH */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 xl:px-[156px] text-center text-white-background2">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Tên thương hiệu */}
          <h1 className="font-space-grotesk text-[100px] md:text-[180px] font-bold leading-none tracking-tighter text-white-background2 mb-4">
            BiON
          </h1>

          {/* Slogan với 2 thanh ngang */}
          <div className="mb-8">
            <h2 className="font-space-grotesk text-2xl md:text-4xl font-medium tracking-wide text-white-background2 whitespace-nowrap border-t border-b border-gray-border/50 py-4">
              Vietnam Wild Beauty Engine
            </h2>
          </div>

          {/* Mô tả */}
          <p className="font-poppins text-base md:text-lg text-white-background1 max-w-xl leading-relaxed opacity-90">
            A platform transforming Vietnam’s wild beauty into immersive,
            unforgettable travel experiences.
          </p>

          {/* Mũi tên trỏ xuống */}
          <div className="mt-16 animate-bounce text-white-background2 opacity-70">
            <ArrowDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* 3. LAYER MÂY & GRADIENT ĐÁY */}
      <div className="absolute inset-x-0 bottom-0 z-30">
        {/* Ảnh mây (Nếu có) */}
        {/* <img
          src={cloudsImg}
          className="w-full h-auto object-cover opacity-80"
          alt="Clouds"
        /> */}

        {/* Gradient che chân ảnh theo yêu cầu */}
        <div
          className="absolute inset-0 h-full"
          style={{
            background: `linear-gradient(180deg, #F7F7F700 0%, #F7F7F7 85%, #F7F7F7 100%)`,
          }}
        />
      </div>

      {/* 4. DATA INTEGRATION STRIP */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-white-background2">
        <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
          <div className="flex flex-col items-center pt-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-dark mb-2">
              Data Integration
            </span>
            {/* <div className="w-full h-px bg-gray-light" /> */}
            <DataIntegrationSection />
          </div>
        </div>
      </div>
    </section>
  );
}
