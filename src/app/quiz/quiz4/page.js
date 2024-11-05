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
            <h1 className="text-[32px] font-bold text-[#F88F24]">เรามาถึงกันแล้ว!</h1>
            <p className="text-lg text-custom-brown">สถานที่ตรงหน้าเธอตอนนี้คือที่ไหน</p>
            <br />

            {/* Button container */}
            <div className="space-y-4 w-full max-w-md px-4">
                <button
                    onClick={() => handleNextPage('/img/img1')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    ทะเลกว้างสุดลุกหูลุกตา
                </button>
                <button
                    onClick={() => handleNextPage('/img/img2')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    ทุ่งดอกไม้ที่ล้อมรอบไปด้วยภูเขาใหญ่
                </button>
                <button
                    onClick={() => handleNextPage('/img/img3')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    ท่ามกลางตึกสูงที่เต็มไปด้วยผู้คน
                </button>
                <button
                    onClick={() => handleNextPage('/img/img4')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    คาเฟ่สวยๆ และ กาแฟหอมๆ
                </button>
                <button
                    onClick={() => handleNextPage('/img/img5')}
                    className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
                >
                    นี่มันจุดไฮไลท์ของเมืองที่ห้ามพลาดนี่หน่า
                </button>
            </div>
        </div>
    );
}
