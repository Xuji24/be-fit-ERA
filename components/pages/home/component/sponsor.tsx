import Image from "next/image";

const sponsors = [
  {
    id: 1,
    name: "aquafina",
    logo: "/sponsors/aquafina.png",
  },
  {
    id: 2,
    name: "summit",
    logo: "/sponsors/summit-water.png",
  },
  {
    id: 3,
    name: "asics",
    logo: "/sponsors/asics.png",
  },
  {
    id: 4,
    name: "puma",
    logo: "/sponsors/puma.jpg",
  },
  {
    id: 5,
    name: "nike",
    logo: "/sponsors/nike.jpg",
  },
  {
    id: 6,
    name: "uniqlo",
    logo: "/sponsors/uniqlo.jpg",
  },
  {
    id: 7,
    name: "coca-cola",
    logo: "/sponsors/coca-cola.png",
  },
  {
    id: 8,
    name: "pocari",
    logo: "/sponsors/pocari.jpg",
  },
];

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-10 lg:px-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
        Our Sponsors
      </h2>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {/* Sponsor Logos */}
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="bg-[#F4F3F6] dark:bg-[#193C43] shadow-md shadow-[#33CCB3] rounded-lg w-full flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={120}
              className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}