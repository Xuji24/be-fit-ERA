'use client';

import Card from "@/components/seraui/card";

const Commmunity = [
    {
        id: 1,
        title: 'Country Using This App',
        growthNumber: 50,
        icon: '/icons/globe.png',
    },
    {
        id: 2,
        title: 'Monthly New Users',
        growthNumber: 800,
        icon: '/icons/users.png',
    },
    {
        id: 3,
        title: 'New Hosted Races',
        growthNumber: 100,
        icon: '/icons/calendar.png',
    },
    {
        id: 4,
        title: 'Users Joining Communities',
        growthNumber: 1000,
        icon: '/icons/connect.png',
    },
]

export default function Community(){
    return(
        <div className="flex flex-col items-center justify-center py-10 sm:py-20 lg:py-42 xl:py-50">
            <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
                    Run Together. Grow Together.
                </h2>
                <p className="text-md sm:text-xl lg:text-1.5xl text-center text-[#193C43] dark:text-[#F4F3F6] mb-10">
                    Thousands of runners worldwide use our platform to join virtual races,
                    track progress, and connect with a thriving global running community.
                </p>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full max-w-5xl">
                {Commmunity.map((item) => (
                    <Card key={item.id} id={item.id} title={item.title} growthNumber={item.growthNumber} iconPath={item.icon} />
                ))}
            </div>
        </div>
    )
}