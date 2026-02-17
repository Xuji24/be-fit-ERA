import Image from "next/image";
import { Button } from "@/components/shadcn/button";

export default function HeroSection() {
    return (
        <section className="w-full bg-[#F4F3F6] border-b-blue-500 px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
            {/* Left Side - Image */}
            <div className="lg:flex-1 flex justify-center bg-yellow-800 lg:justify-start">
                <Image 
                    src="/running-model.png" 
                    alt="Running Model" 
                    width={320} 
                    height={520}
                    className="lg:ml-50 pl-10 w-auto"
                />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col bg-yellow-800 w-full lg:flex-1">
                <h1 className="font-raleway font-bold text-3xl md:text-4xl lg:text-4xl text-[#193C43] leading-snug mb-4 md:mb-6">
                    Fitness doesn&apos;t require perfection. It only requires you to begin today.
                </h1>
                
                <p className="font-merriweather-sans text-sm md:text-base text-[#193C43] mb-8 md:mb-10 leading-relaxed">
                    You don&apos;t need to be fit to start — you just need to start.
                </p>

                <div>
                    <Button 
                        className="font-raleway font-bold text-base bg-[#33CCB3] text-white hover:bg-[#2ab89f] transition-colors px-8 py-3 rounded-full cursor-pointer"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    );
}