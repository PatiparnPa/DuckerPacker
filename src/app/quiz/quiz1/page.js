"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Plan() {
    const router = useRouter();
    const handleNextPage = () => {
        router.push('/dialog/dialog2');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
            <p className="text-lg text-custom-brown mb-6">
                ก่อนออกเดินทางทำไมเจ้าถึงได้<br />วางแผนนานขนาดนี้!
            </p>
            <div className="mb-6">
                <img src="/duck.png" alt="Ducky" className="w-[198px] h-[296px]" />
            </div>

            {/* Button container */}
            <div className="space-y-4 w-full max-w-md px-4">
                <button
                    onClick={handleNextPage} // Navigate to /dialog/dialog2 on click
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    แน่นอนว่าต้องวางแผนให้รอบคอบก่อนจะออกเดินทางทุกครั้งสิ! เจ้าบ้า!
                </button>
                <button
                    onClick={handleNextPage} // Same handler for the second button
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    ฉันพร้อมตั้งแต่เมื่อวานแล้วจ้า แผนที่ดีที่สุดคือ ไม่มีแผนยังไงเล่า!
                </button>
            </div>
        </div>
    );
}
