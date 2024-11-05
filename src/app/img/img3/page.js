"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Img1() {
  const router = useRouter();

  // Navigate to img1-1 on click
  const handleNextImage = () => {
    router.push('/img/img3-1'); // Navigates to /img/img1-1
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/img3.png')" }}
      onClick={handleNextImage} // Navigate on click
    >
    </div>
  );
}
