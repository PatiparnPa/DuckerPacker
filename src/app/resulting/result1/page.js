"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ResultImage1() {
    const router = useRouter();
    const handleBack = () => {
        router.push('/select-result');
    };

    return (
        <div
            className="relative flex items-center justify-center w-full h-screen"
            style={{
                backgroundImage: "url('/resulting/result1.png')",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <button
                onClick={handleBack}
                className="absolute top-4 left-4 px-4 py-2 text-white rounded-md hover:bg-opacity-80 transition"
                style={{ backgroundColor: '#F88F24' }}
            >
                Back
            </button>
        </div>
    );
}
