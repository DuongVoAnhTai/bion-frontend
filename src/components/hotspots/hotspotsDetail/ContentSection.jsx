export default function ContentSection({ data }) {
  if (!data) return null;

  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- TITLE --- */}
        <h2 className="font-space-grotesk text-3xl font-bold text-black-text mb-8">
          Overview
        </h2>

        {/* --- TEXT CONTENT --- */}
        <div className="flex flex-col gap-6 max-w-none text-base md:text-lg leading-relaxed text-gray-dark font-poppins mb-12">
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* --- GALLERY GRID (4 Ảnh) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white-background2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={img}
                alt={`Hotspot detail view ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
