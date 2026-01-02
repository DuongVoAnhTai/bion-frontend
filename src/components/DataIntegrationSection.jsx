import { Link } from "react-router-dom";

const partners = [
  {
    id: 1,
    name: "GBIF",
    link: "https://www.gbif.org/",
    image:
      "https://mediasvc.eurekalert.org/Api/v1/Multimedia/c10f3e69-a4a5-4e23-a88e-d11f00fcae0b/Rendition/low-res/Content/Public",
  },
  {
    id: 2,
    name: "Catalogue of life",
    link: "https://www.catalogueoflife.org/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDtUCOGdat_JYo37vqQBQGoZ55XZxTExHQw&s",
  },
  {
    id: 3,
    name: "IUCN",
    link: "https://www.iucnredlist.org/.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER60TAABV_lmKa1x0kBRo__DozoviioBVyw&s",
  },
  {
    id: 4,
    name: "iNaturalist",
    link: "https://www.inaturalist.org/home",
    image:
      "https://e7.pngegg.com/pngimages/630/238/png-clipart-inaturalist-android-iphone-citing-leaf-text.png",
  },
  {
    id: 5,
    name: "eBird",
    link: "https://ebird.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/EBird-2024-logo.svg/1200px-EBird-2024-logo.svg.png"
  },
];

export default function DataIntegrationSection() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 border-y border-gray-light py-10 xl:justify-around">
      {partners.map((partner) => (
        <Link
          key={partner.id}
          to={partner.link}
          className="flex items-center justify-center opacity-70 transition-opacity hover:opacity-100"
        >
          <img
            src={partner.image}
            alt={partner.name}
            className="h-8 w-auto md:h-14 object-contain"
          />
        </Link>
      ))}
    </div>
  );
}
