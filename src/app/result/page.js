"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Result() {
    const router = useRouter();
    const [randomImage, setRandomImage] = useState('');


    const imageUrls = [
        '/resulting/result1.png',
        '/resulting/result2.png',
        '/resulting/result3.png',
        '/resulting/result4.png',
        '/resulting/result5.png',
        '/resulting/result6.png',
        '/resulting/result7.png'
    ];


    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        setRandomImage(imageUrls[randomIndex]);
    }, []);


    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = randomImage;
        link.download = 'random-image.png';
        link.click();
    };

    const handleNext = () => {
        router.push('/select-result');
    };

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-screen"
            style={{
                backgroundImage: `url('${randomImage}')`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute bottom-10 flex justify-between w-full px-10">
                <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md text-sm"
                    style={{ minWidth: '100px' }}
                >
                    ดาวน์โหลด
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 text-white rounded-md text-sm"
                    style={{
                        backgroundColor: '#F88F24',
                        minWidth: '100px'
                    }}
                >
                    ถัดไป
                </button>
            </div>
        </div>
    );
}
