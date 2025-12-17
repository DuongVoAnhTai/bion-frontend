import { cn } from "../../lib/utils";


export default function SpeciesCardExplorer({ name, count, image, className }) {
  return (
    <div
      className={cn(
        // Layout
        "group flex items-center justify-between overflow-hidden rounded-xl p-6 transition-all duration-300",
        "bg-white-background2 border border-gray-light",
        "hover:border-green-logo hover:shadow-md cursor-pointer",
        className
      )}
    >
      {/* TEXT INFO */}
      <div className="flex flex-col gap-2">
        {/* Tên loài */}
        <h3 className="font-space-grotesk text-xl font-bold text-black-text transition-colors group-hover:text-green-logo">
          {name}
        </h3>

        {/* Số lượng loài */}
        <p className="font-poppins text-sm text-gray-dark">{count} species</p>
      </div>

      {/* IMAGE */}
      <div className="h-20 w-32 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
}
