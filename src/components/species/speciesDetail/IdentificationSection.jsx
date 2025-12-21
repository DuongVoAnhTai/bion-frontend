import { Link } from "react-router-dom";

export default function IdentificationSection({ data }) {
  return (
    <section className="bg-white-background2 pt-6 pb-10">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- TITLE --- */}
        <h2 className="font-space-grotesk text-3xl font-bold text-black-text mb-8">
          Identification
        </h2>

        {/* --- DESCRIPTION TEXT --- */}
        <div className="flex flex-col gap-6 max-w-none text-base md:text-lg leading-relaxed text-gray-dark font-poppins">
          {/* Loop qua các đoạn văn bản (nếu có trong data) hoặc dùng text cứng từ mẫu */}
          {data.identification.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Conservation Line */}
          <p className="mt-2">
            <span className="font-bold text-gray-dark">
              Conservation & threats summary:
            </span>{" "}
            {data.identification.conservationSummary}
          </p>
        </div>

        {/* --- GALLERY IMAGES --- */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link
              to={`/species/${data.id}`}
              key={item}
              className="group overflow-hidden rounded-3xl aspect-4/3 bg-gray-light/20 cursor-pointer"
            >
              <img
                src={data.image}
                alt={`Identification detail ${item}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
