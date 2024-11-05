"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
  const router = useRouter();
  const { name } = React.use(params);

  // Handle click anywhere on the screen
  const handleScreenClick = () => {
    router.push('/dialog/dialog3-3'); // Navigate to the `/plan` page when clicked
  };

  return (
    <div
      onClick={handleScreenClick} // Attach click handler
      className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
    >
      <img src="/door_knock.png" alt="KnockDoor" className="w-314 h-458" />
    </div>
  );
}
