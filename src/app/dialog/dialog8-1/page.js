"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleScreenClick = () => {
        router.push('/dialog/dialog9');
    };

    return (
        <div
            onClick={handleScreenClick}
            className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
        >
            <p className="text-lg text-gray-700">จะมาดีหรือร้ายไม่รู้</p>
            <h1 className="text-[20px] font-bold text-[#F88F24]">แต่ฉันว่าระวังตัวไว้ก่อนดีกว่า</h1>
        </div>
    );
}
