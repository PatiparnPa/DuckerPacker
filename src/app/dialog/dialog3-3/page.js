"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleScreenClick = () => {
        router.push('/dialog/dialog3-4');
    };

    return (
        <div
            onClick={handleScreenClick}
            className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
        >
            <p className="text-lg text-gray-700">ก่อนจะออกเดินทาง</p>

            <h1 className="text-[32px] font-bold text-custom-orange">เสียงประตูบ้านก็ดังขึ้น</h1>
            <br></br>
            <img src="/door_knock.png" alt="KnockDoor" className="w-314 h-458" />
        </div>
    );
}
