import Image from "next/image";

export default function ServiceCard({ title, description, priceRange, imageSrc }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  transition-all hover:scale-105 size-full">
        <Image src={imageSrc} alt={title} width={900} height={900} className="w-full lg:h-[22rem] object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-pink-500">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <p className="text-pink-500 font-bold mt-4">{priceRange}</p>
        </div>
      </div>
    );
  }
  