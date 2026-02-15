'use client';
import Image from "next/image";
import {Button} from "@/components/shadcn/button";
export default function Navbar(){
    return (
        <nav className="w-full h-28 bg-[#193C43] p-4 flex items-center justify-between">
            <div className="flex items-center">
                <Image src="/be-fit-era-logo.png" alt="Be Fit ERA Logo" width={200} height={200} className="mr-2" />
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#" className="text-white hover:text-gray-300">Events</a>
                <a href="#" className="text-white hover:text-gray-300">Activities</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </div>
            <div>
                <Button variant="outline" className=" border-white hover:bg-white hover:text-[#193C43]">Sign in</Button>
            </div>
        </nav>
    )
}