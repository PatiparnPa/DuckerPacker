"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Img1() {
  const router = useRouter();


  const handleNextImage = () => {
    router.push('/result'); 
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/dialog12.png')" }}
      onClick={handleNextImage} 
    >
    </div>
  );
}
