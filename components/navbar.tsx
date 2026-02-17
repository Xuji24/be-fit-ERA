"use client";
import Image from "next/image";
import { Button } from "@/components/shadcn/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#193C43] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between lg:justify-start gap-4 lg:gap-10 relative">
      <div className="w-20 sm:w-24 lg:w-32 shrink-0">
        <Image
          src="/be-fit-era-logo.png"
          alt="Be Fit ERA Logo"
          width={150}
          height={150}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6 lg:space-x-10 flex-1 justify-end">
        <a
          href="#"
          className="font-raleway font-bold text-sm lg:text-base text-white hover:text-[#33CCB3] transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="font-raleway font-bold text-sm lg:text-base text-white hover:text-[#33CCB3] transition-colors"
        >
          Race
        </a>
        <a
          href="#"
          className="font-raleway font-bold text-sm lg:text-base text-white hover:text-[#33CCB3] transition-colors"
        >
          Activities
        </a>
        <a
          href="#"
          className="font-raleway font-bold text-sm lg:text-base text-white hover:text-[#33CCB3] transition-colors"
        >
          FAQs
        </a>
        <a
          href="#"
          className="font-raleway font-bold text-sm lg:text-base text-white hover:text-[#33CCB3] transition-colors"
        >
          Contact
        </a>
        {/* Desktop Sign In Button */}
        <div className="hidden lg:block shrink-0">
            <Button className="font-raleway font-bold text-sm sm:text-base bg-[#33CCB3] text-white hover:bg-[#2ab89f] transition-colors px-6 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer">
            Sign In
            </Button>
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-white hover:text-[#33CCB3] transition-colors ml-auto"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#1a2f36] lg:hidden flex flex-col px-4 py-4 space-y-3 border-t border-[#33CCB3]/20">
          <a
            href="#"
            className="font-raleway font-bold text-sm text-white hover:text-[#33CCB3] transition-colors py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="font-raleway font-bold text-sm text-white hover:text-[#33CCB3] transition-colors py-2"
          >
            Race
          </a>
          <a
            href="#"
            className="font-raleway font-bold text-sm text-white hover:text-[#33CCB3] transition-colors py-2"
          >
            Activities
          </a>
          <a
            href="#"
            className="font-raleway font-bold text-sm text-white hover:text-[#33CCB3] transition-colors py-2"
          >
            FAQs
          </a>
          <a
            href="#"
            className="font-raleway font-bold text-sm text-white hover:text-[#33CCB3] transition-colors py-2"
          >
            Contact
          </a>
          <a
            href="#"
            className="font-raleway font-bold text-sm text-white hover:text-[#33CCB3] transition-colors py-2 border-t border-[#33CCB3]/20 pt-3"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}
