const partners = [
  {
    id: 1,
    name: "Partner 1",
    image: "/src/assets/images/Logoipsum1.svg",
  },
  {
    id: 2,
    name: "Partner 2",
    image: "/src/assets/images/Logoipsum2.svg",
  },
  {
    id: 3,
    name: "Partner 3",
    image: "/src/assets/images/Logoipsum3.svg",
  },
  {
    id: 4,
    name: "Partner 4",
    image: "/src/assets/images/Logoipsum4.svg",
  },
  {
    id: 5,
    name: "Partner 5",
    image: "/src/assets/images/Logoipsum5.svg",
  },
];

export default function DataIntegrationSection() {
  return (
    <section className="bg-white-background2 py-16">
      <div className="container mx-auto px-4 md:px-8 xl:px-[156px]">
        {/* --- HEADER --- */}
        <div className="mb-10 text-center">
          {/* Title: */}
          <h2 className="font-space-grotesk text-3xl font-bold text-green-logo md:text-4xl">
            Data Integration
          </h2>
        </div>

        {/* --- LOGO STRIP --- */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-y border-gray-light py-10 xl:justify-between">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100 grayscale"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-8 w-auto md:h-10 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
