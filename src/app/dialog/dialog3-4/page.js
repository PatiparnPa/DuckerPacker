"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Welcome({ params }) {
    const router = useRouter();
    const { name } = React.use(params);
    const handleScreenClick = () => {
        router.push('/quiz/quiz2');
    };

    return (
        <div
            onClick={handleScreenClick}
            className="flex flex-col items-center justify-center min-h-screen bg-[#FFF7E5] text-center p-6 cursor-pointer"
        >
            <img src="/bear.png" alt="Bear" className="w-314 h-458" />
        </div>
    );
}
