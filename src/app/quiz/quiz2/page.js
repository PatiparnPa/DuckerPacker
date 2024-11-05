"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Plan() {
  const router = useRouter();

  // Function to navigate to /dialog/dialog2
  const handleNextPage = () => {
    router.push('/dialog/dialog4'); // Navigates to the dialog2 page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
      <p className="text-lg text-gray-700 mb-6">
      พวกหมีขาวนักวางแผน<br></br>อยากไปเที่ยวกับพวกเราแหละ<br></br>เจ้าจะว่ายังไงหละ?
      </p>
      <div className="mb-6">
        <img src="/duck_bear.png" alt="Duck&Bear" className="w-[265px] h-[271px]" />
      </div>

      {/* Button container */}
      <div className="space-y-4 w-full max-w-md px-4">
        <button
          onClick={handleNextPage} // Navigate to /dialog/dialog2 on click
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          ดีเลย! มีพี่หมีขาวคอยนำเที่ยววางแผนให้ครบจบ ไปสิ! ไปกัน!
        </button>
        <button
          onClick={handleNextPage} // Same handler for the second button
          className="w-full bg-[#F88F24] text-white px-4 py-3 rounded-md font-bold hover:bg-[#e07f20]"
        >
          ไม่ล่ะ พวกนั้นมันเป็นจอมวางแผนฉันอยากจะนำเที่ยวเอง
        </button>
      </div>
    </div>
  );
}
