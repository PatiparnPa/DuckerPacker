"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Plan() {
  const router = useRouter();

  // Function to navigate to /dialog/dialog2
  const handleNextPage = () => {
    router.push('/dialog/dialog6'); // Navigates to the dialog2 page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
      <p className="text-lg text-gray-700 mb-6">
      ทำยังไงกันดี ที่ๆเธออยากไป<br></br>มันไม่มีเพื่อนคนไหนอยากไปเลยนะ
      </p>
      <div className="mb-6">
        <img src="/duck_bears.png" alt="Duck&Bears" className="w-[329px] h-[281px]" />
      </div>

      {/* Button container */}
      <div className="space-y-4 w-full max-w-md px-4">
        <button
          onClick={handleNextPage} // Navigate to /dialog/dialog2 on click
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          แน่นอนสิ! เพราะฉันไม่ชวนใครต่างหาก! เที่ยวคนเดียวนี่แหละที่สนุกที่สุด
        </button>
        <button
          onClick={handleNextPage} // Same handler for the second button
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          ไม่เป็นไรเลย หากไม่มีใครไปด้วย ฉันก็พร้อมจะเดินทางคนเดียวเสมอ!
        </button>
        <button
          onClick={handleNextPage} // Same handler for the second button
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          เดินทางคนเดียวมันจะไปสนุกอะไรหล่ะต้องชวนเพื่อนไปด้วยสิ! ไปไหนไปกัน!
        </button>
      </div>
    </div>
  );
}
