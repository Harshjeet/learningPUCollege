'use client';

import React, { useState, useRef } from 'react';

interface BlogVideo {
    src: string;
    title: string;
}

interface BlogVideoSliderProps {
    videos: BlogVideo[];
}

const BlogVideoSlider: React.FC<BlogVideoSliderProps> = ({ videos }) => {
    const [selectedVideo, setSelectedVideo] = useState<BlogVideo | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Adjust based on card width + gap
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const openLightbox = (video: BlogVideo) => {
        setSelectedVideo(video);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedVideo(null);
        document.body.style.overflow = 'unset';
    };

    if (videos.length === 0) {
        return null;
    }

    return (
        <div className="relative group">
            {/* Scroll Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -ml-4 hover:bg-white"
            >
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -mr-4 hover:bg-white"
            >
                <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slider Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-80 h-48 relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow snap-start bg-gray-100"
                        onClick={() => openLightbox(video)}
                    >
                        <video
                            src={video.src}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                            <p className="text-white text-sm font-medium truncate">{video.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <video
                            src={selectedVideo.src}
                            className="w-full max-h-[80vh] rounded-lg shadow-2xl"
                            controls
                            autoPlay
                            playsInline
                        />
                        <h3 className="text-white text-xl font-semibold mt-4 text-center">{selectedVideo.title}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogVideoSlider;
