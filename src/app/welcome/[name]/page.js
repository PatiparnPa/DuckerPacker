"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
  const router = useRouter();
  const { name } = React.use(params);
  const handleScreenClick = () => {
    router.push('/quiz/quiz1'); 
  };

  return (
    <div
      onClick={handleScreenClick} 
      className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
    >
      <h1 className="text-4xl font-bold text-custom-brown mb-2">เอาหละ!</h1>
      <p className="text-2xl font-bold text-custom-brown mb-2">
        {decodeURIComponent(name)}
      </p>
      <div className="mb-6">
      <img src="/duck.png" alt="Ducky" className="w-198 h-296" />
      </div>
      <p className="text-lg text-custom-brown">พร้อมออกเดินทางไปกับฉันรึยัง</p>
    </div>
  );
}
