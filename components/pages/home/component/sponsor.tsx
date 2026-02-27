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
        name: "fiji",
        logo: "/sponsors/fiji.png",
    },
    {
        id: 5,
        name: "uniqlo",
        logo: "/sponsors/uniqlo.png",
    },
    {
        id: 6,
        name: "starbucks",
        logo: "/sponsors/starbucks.png",
    },
    {
        id: 7,
        name: "coca-cola",
        logo: "/sponsors/coca-cola.png",
    }
]

export default function Sponsor(){
    return(
        <div className="flex flex-col items-center justify-center gap-6 py-10 sm:py-20 lg:py-42 xl:py-50">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
                Our Sponsors
            </h2>
            <div className="w-full max-w-5xl grid grid-cols-2 grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20">
                {/* Sponsor Logos */}
                {sponsors.map((sponsor) => (
                    <div key={sponsor.id} className=" bg-[#F4F3F6] dark:bg-[#193C43] shadow-md shadow-[#33CCB3] rounded-lg w-full flex justify-center items-center relative sm:p-4 md:p-6 lg:p-8 xl:p-10 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                        <Image src={sponsor.logo} alt={sponsor.name} width={108} height={64} />
                    </div>
                ))}
                
            </div>
        </div>
    );
}