import Image from "next/image";
import { Button } from "@/components/shadcn/button";

export default function HeroSection() {
    return (
      <section className="w-full bg-[#F4F3F6] border-b-blue-500 px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10">
        {/* Left Side - Image */}
        <div className="flex justify-center lg:flex-1 lg:justify-start w-full sm:w-auto">
          <Image
            src="/running-model.jpg"
            alt="Running Model"
            width={1080}
            height={1080}
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-152 lg:h-152 lg:ml-80 rounded-full object-contain shrink-0"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col w-full lg:flex-1 xl:mr-80">
          <h1 className="font-raleway font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#193C43] leading-snug mb-3 sm:mb-4 md:mb-6">
            Fitness doesn&apos;t require perfection. It only requires you to
            begin today.
          </h1>

          <p className="font-merriweather-sans text-xs sm:text-sm md:text-base lg:text-lg text-[#193C43] mb-6 sm:mb-8 md:mb-10 leading-relaxed">
            You don&apos;t need to be fit to start — you just need to start.
          </p>

          <div>
            <Button className="font-raleway font-bold text-sm sm:text-base bg-[#33CCB3] text-white hover:bg-[#2ab89f] transition-colors px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    );
}