'use client';
import Image from "next/image";

interface CardProps {
    id: number,
    title?: string,
    growthNumber?: number,
    imageWidth?: number,
    imageHeight?: number,
    iconPath: string,
}
export default function Card(props: CardProps){
    return(
        // Custom color scheme
        <div className="bg-[#F4F3F6] dark:bg-[#193C43] shadow-xl rounded-lg p-6 flex flex-col items-center justify-center gap-4">
           {/* Icon Placeholder */}
            <div className="w-12 h-12 bg-[#33CCB3] rounded-full flex items-center justify-center">
                {/* You can replace this with an actual icon using the iconPath */}
                <Image src={props.iconPath} alt={`${props.title} Icon`} width={props.imageWidth || 24} height={props.imageHeight || 24} className="object-contain" />
            </div>
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-center text-[#193C43] dark:text-[#F4F3F6]">
                {props.title}
            </h3>
            {/* Growth Number */}
            <p className="text-3xl sm:text-4xl font-bold text-[#33CCB3]">
                +{props.growthNumber}
            </p>
        </div>
    )
}