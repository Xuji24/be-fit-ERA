import { Button } from "@/components/shadcn/button";

export default function Navbar(){
    return (
        <nav className="w-full h-16 bg-[#193C43] flex items-center justify-between px-4">
            <div className="text-[#F4F3F6] text-xl font-bold">Be Fit ERA</div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" className="hover:bg-[#193C43] hover:text-[#F4F3F6] cursor-pointer" size="sm">Home</Button>
                <Button variant="ghost" className="hover:bg-[#193C43] hover:text-[#F4F3F6] cursor-pointer" size="sm">Events</Button>
                <Button variant="ghost" className="hover:bg-[#193C43] hover:text-[#F4F3F6] cursor-pointer" size="sm">Activities</Button>
                <Button variant="ghost" className="hover:bg-[#193C43] hover:text-[#F4F3F6] cursor-pointer" size="sm">FAQ&apos;s</Button>
                <Button variant="ghost" className="hover:bg-[#193C43] hover:text-[#F4F3F6] cursor-pointer" size="sm">Contact</Button>
            </div>
        </nav>
    )
}