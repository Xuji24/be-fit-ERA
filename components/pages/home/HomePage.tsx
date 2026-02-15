'use client';
import {Button} from '@/components/shadcn/button';

export default function HomePage() {
    function handleClick(){
        alert('Get Started button clicked!');
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome to Be Fit ERA</h1>
            <p className="text-lg mb-8">Select your first virtual run!</p>
            <Button variant="ghost" className="hover:bg-[#193C43] hover:text-[#F4F3F6] cursor-pointer" onClick={handleClick} size="lg">Get Started</Button>
        </div>
    );
}