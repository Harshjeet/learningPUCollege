'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const AchievementPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Show popup after a short delay
        const showTimer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        // Auto-close after 5 seconds (plus the 1s delay = 6s total from mount, or 5s from show)
        const hideTimer = setTimeout(() => {
            handleClose();
        }, 6000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleRedirect = () => {
        router.push('/life-at-lgs');
        handleClose();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden transform transition-all scale-100">
                {/* Close Button (Quit Red Thing) */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                    }}
                    className="absolute top-2 right-2 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Content - Clickable to redirect */}
                <div
                    onClick={handleRedirect}
                    className="cursor-pointer group relative"
                >
                    <div className="relative h-[500px] w-full">
                        <Image
                            src="/resources/toastmasters-event.jpg"
                            alt="Achievement"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <h3 className="text-2xl font-bold mb-2">Celebrating Excellence!</h3>
                                <p className="text-sm opacity-90 group-hover:underline">Click to see Life at LGS &rarr;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementPopup;
