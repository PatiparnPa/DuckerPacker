"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleScreenClick = () => {
        router.push('/dialog/dialog3-1');
    };

    return (
        <div
            onClick={handleScreenClick}
            className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
        >
            <p className="text-lg text-gray-700">พร้อมแล้วงั้นสินะ~</p>
            <br></br>
            <div className="mb-6">
                <img src="/duck.png" alt="Ducky" className="w-198 h-296" />
            </div>
            <p className="text-lg text-gray-700">งั้นเราไปผจญภัยกันเถอะ</p>
        </div>
    );
}
