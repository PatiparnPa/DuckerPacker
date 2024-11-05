"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Plan() {
    const router = useRouter();
    const handleNextPage = (path) => {
        router.push(path);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
            <p className="text-lg text-custom-brown">เสียงทักทายอันอบอุ่นนั้นดังมาจาก</p>
            <h1 className="text-[20px] font-bold text-[#F88F24]">แพนด้าคู่รักนักท่องเที่ยว</h1>
            <br />
            <div className="mb-6">
                <img src="/bears.png" alt="Bears" className="w-[329px] h-[281px]" />
            </div>

            {/* Button container */}
            <div className="space-y-4 w-full max-w-md px-4">
                <button
                    onClick={() => handleNextPage('/dialog/dialog8-1')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    พวกเธอเป็นมิจจี้รึเปล่าเนี่ย?! แม่ฉันไม่ให้คุยกับคนแปลกหน้านะ
                </button>
                <button
                    onClick={() => handleNextPage('/dialog/dialog8-2')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    สวัสดีจ้า! วิวที่นี่สวยสุดๆเลยนะพวกเธอมาจากที่ไหนกันหรอ
                </button>
            </div>
        </div>
    );
}
