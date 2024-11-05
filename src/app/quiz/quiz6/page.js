"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Plan() {
  const router = useRouter();

  // Function to navigate to /dialog/dialog2
  const handleNextPage = () => {
    router.push('/dialog/dialog10'); // Navigates to the dialog2 page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
      <p className="text-lg text-gray-700 mb-6">
      เธอคิดว่าเธอใช้เงินไปเท่าไหร่แล้วล่ะ
      </p>
      <div className="mb-6">
        <img src="/wallet.png" alt="Wallet" className="w-[250px] h-[290px]" />
      </div>

      {/* Button container */}
      <div className="space-y-4 w-full max-w-md px-4">
        <button
          onClick={handleNextPage} // Navigate to /dialog/dialog2 on click
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          ฉันประหยัดที่สุดแล้วว้อยย!ยังมีอีกหลายทริปให้ไปนะเจ้าเป็ดดด
        </button>
        <button
          onClick={handleNextPage} // Same handler for the second button
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          มีเท่าไหร่ขอทุ่มสุดตัวเล๊ย ไปเที่ยวนะ!ได้ไปทั้งทีฉันจะเอาให้คุ้มสุดๆไปเลย
        </button>
      </div>
    </div>
  );
}
