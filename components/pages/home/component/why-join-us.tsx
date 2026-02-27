'use client';
import { useState, useEffect } from "react";
import { WhyJoinUsItem } from "@/utils/types/why-join-us-types";
import Image from "next/image";

const features = [
        {
            title: "Track your progress",
            description: "Track every run with detailed statistics including distance, time, pace, and calories burned. Visualize your progress through insights and performance history to stay consistent and improve over time.",
            icon: "/icons/Track-Progress.png"
        },
        {
            title: "Join Races",
            description: "Browse upcoming events, register in seconds, and participate from anywhere. Complete race requirements at your own pace and receive verified e-certificates and digital rewards upon completion.",
            icon: "/icons/Join-Races.png"
        },
        {
            title: "Be Healthy",
            description: "Transform your routine into a healthier lifestyle. Stay accountable, stay motivated, and become the strongest version of yourself.",
            icon: "/icons/Be-Healthy.png"
        },
];
export default function WhyJoinUs() {
    
    const [activeFeature, setActiveFeature] = useState<WhyJoinUsItem[]>([]);

    useEffect(() => {
        function setFeatures(){
            features.map((feature, index) => {
                setActiveFeature((prev) => [...prev, 
                    { id: index, title: feature.title, description: feature.description, icon: feature.icon }]);
            })
        }

        setFeatures();
    },[]);
    return(
        <div className="w-full bg-[#F4F3F6] px-4 sm:px-6 md:px-12 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-50 flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            <div className="w-full lg:w-3/4 xl:w-2/3 text-center">
                <h1 className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#193C43] leading-snug mb-3 sm:mb-4 md:mb-6">
                Why Join Us? 
                </h1>
                <p className="font-merriweather-sans text-xs sm:text-sm md:text-base lg:text-lg text-[#193C43] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                    Join our community of fitness enthusiasts and transform your health journey today.
                </p>
            </div>
            <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col lg:flex-row items-stretch justify-between gap-6 sm:gap-8 lg:gap-0">
                {activeFeature.map((feature, index) => (
                    <div 
                        key={index} 
                        className="flex-1 flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 py-4 sm:py-0"
                        style={index !== activeFeature.length - 1 ? { borderRight: "1px solid #ccc" } : {}}
                    >
                        <div className="flex gap-3 sm:gap-4 items-start">
                            <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                                <Image 
                                    src={feature.icon} 
                                    alt={feature.title} 
                                    width={60} 
                                    height={60}
                                    className="w-14 h-14 sm:w-16 sm:h-16"
                                />
                            </div>
                            <div className="w-full h-full flex justify-start items-center">
                                <h2 className="font-raleway font-bold text-lg sm:text-xl text-[#193C43]">
                                {feature.title}
                            </h2>
                            </div>
                        </div>
                        <p className="font-merriweather-sans text-sm sm:text-base text-[#193C43] leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}