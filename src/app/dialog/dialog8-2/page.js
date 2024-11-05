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
            <p className="text-lg text-custom-brown">ดีเหมือนกันนะ</p>
            <h1 className="text-[20px] font-bold text-[#F88F24]">มาเที่ยวแล้วยังได้เพื่อนใหม่ด้วย</h1>
        </div>
    );
}
