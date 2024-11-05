"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SelectResult() {
  const router = useRouter();

  // Define the URLs for the images in the result set
  const imageUrls = [
    '/animal/result1.png',
    '/animal/result2.png',
    '/animal/result3.png',
    '/animal/result4.png',
    '/animal/result5.png',
    '/animal/result6.png',
    '/animal/result7.png'
  ];

  // Function to navigate to each image's full-screen view
  const viewImage = (index) => {
    router.push(`/resulting/result${index + 1}`); // Navigates to the full-screen view for each image
  };

  // Function to navigate back to the Home page (quiz restart)
  const handleRestartQuiz = () => {
    router.push('/'); // Goes back to the home page
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-[#FFF7E5]">
      <h1 className="text-2xl font-bold mb-6">เลือกรูปภาพ</h1>
      <div className="grid grid-cols-2 gap-4 mb-6 w-full max-w-md">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            onClick={() => viewImage(index)} // Opens each image in full screen
            className="cursor-pointer rounded-md border border-gray-300 overflow-hidden"
          >
            <img
              src={url}
              alt={`Result ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleRestartQuiz}
        className="px-6 py-2 bg-orange-500 text-white rounded-md"
      >
        ทำควิซใหม่อีกครั้ง
      </button>
    </div>
  );
}
