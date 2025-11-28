'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type GalleryCategory = 'all' | 'events' | 'sports' | 'academics' | 'cultural' | 'videos' | 'blogs';

interface GalleryItem {
    src: string;
    category: GalleryCategory;
    title: string;
    type: 'image' | 'video';
}

interface GalleryGridProps {
    initialItems: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ initialItems }) => {
    const [activeGalleryFilter, setActiveGalleryFilter] = useState<GalleryCategory>('all');
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    const filteredGallery = activeGalleryFilter === 'all'
        ? initialItems
        : initialItems.filter(item => item.category === activeGalleryFilter);

    const openLightbox = (item: GalleryItem) => {
        setSelectedItem(item);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedItem(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            {/* Gallery Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['all', 'events', 'sports', 'academics', 'cultural', 'videos', 'blogs'].map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveGalleryFilter(filter as GalleryCategory)}
                        className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${activeGalleryFilter === filter
                            ? 'bg-orange-500 border-orange-500 text-white'
                            : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                            }`}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === 'all' ? 'Media' : ''}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGallery.map((item, index) => (
                    <div
                        key={index}
                        className="gallery-item relative h-64 group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-gray-100"
                        onClick={() => openLightbox(item)}
                    >
                        {item.type === 'video' ? (
                            <div className="w-full h-full relative pointer-events-none">
                                <video
                                    src={item.src}
                                    className="w-full h-full object-cover"
                                    muted
                                    playsInline
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-blue-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <span className="text-white font-semibold">{item.title}</span>
                                    <span className="ml-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">Video</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold text-center px-4">{item.title}</span>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedItem && (
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
                        {selectedItem.type === 'video' ? (
                            <video
                                src={selectedItem.src}
                                className="w-full max-h-[80vh] rounded-lg shadow-2xl"
                                controls
                                autoPlay
                                playsInline
                            />
                        ) : (
                            <div className="relative w-full h-[80vh]">
                                <Image
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        )}
                        <h3 className="text-white text-xl font-semibold mt-4 text-center">{selectedItem.title}</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default GalleryGrid;
