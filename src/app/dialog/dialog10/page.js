"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleScreenClick = () => {
        router.push('/dialog/dialog11');
    };

    return (
        <div
            onClick={handleScreenClick}
            className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
        >
            <h1 className="text-[28px] font-bold text-[#F88F24]">ขอบคุณเธอมากๆนะ</h1>

            <h1 className="text-[24px] font-bold text-[#F88F24]">วันนี้ฉันมีความสุขมากๆเลยล่ะ</h1>
        </div>
    );
}
