"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleScreenClick = () => {
        router.push('/quiz/quiz6');
    };

    return (
        <div
            onClick={handleScreenClick}
            className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
        >
            <p className="text-lg text-gray-700">เที่ยววันนี้สนุกสุดๆไปเลย<br></br>แต่ฉันว่าเราได้เวลากลับกันแล้วล่ะ</p>
            <h1 className="text-[20px] font-bold text-[#F88F24]">เอ๊ะ! เดี๋ยวนะ! คือว่า...</h1>
        </div>
    );
}
