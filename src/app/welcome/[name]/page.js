"use client";

import React from 'react';

export default function Welcome({ params }) {
  // Unwrap `params` using React.use()
  const { name } = React.use(params);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-2">เอาหละ!</h1>
      <p className="text-2xl font-bold text-gray-700 mb-2">
        {decodeURIComponent(name)} {/* Decode the URL-encoded name */}
      </p>
      <div className="mb-6">
        <img src="/duck.png" alt="Ducky" className="w-32 h-32" />
      </div>
      <p className="text-lg text-gray-700">พร้อมออกเดินทางไปกับฉันรึยัง</p>
    </div>
  );
}
