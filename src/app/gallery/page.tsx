import React from 'react';
import fs from 'fs';
import path from 'path';
import GalleryGrid from '../../components/GalleryGrid';

type GalleryCategory = 'all' | 'events' | 'sports' | 'academics' | 'cultural' | 'videos' | 'blogs';

interface GalleryItem {
    src: string;
    category: GalleryCategory;
    title: string;
    type: 'image' | 'video';
}

function getCategoryFromFilename(filename: string, type: 'image' | 'video'): GalleryCategory {
    if (type === 'video') return 'videos';

    const lower = filename.toLowerCase();
    if (lower.includes('sport')) return 'sports';
    if (lower.includes('culture') || lower.includes('dance') || lower.includes('music')) return 'cultural';
    if (lower.includes('study') || lower.includes('class') || lower.includes('lab') || lower.includes('prep') || lower.includes('library') || lower.includes('academic')) return 'academics';
    if (lower.includes('event') || lower.includes('ceremony') || lower.includes('team') || lower.includes('canteen') || lower.includes('hostel')) return 'events';
    return 'events'; // Default fallback
}

function getTitleFromFilename(filename: string): string {
    // Remove extension
    const name = filename.replace(/\.[^/.]+$/, "");
    // Replace hyphens with spaces and capitalize
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function getGalleryItems(): Promise<GalleryItem[]> {
    const galleryDir = path.join(process.cwd(), 'public/resources/gallery');
    const videosDir = path.join(process.cwd(), 'public/resources/gallery/videos');
    const blogsDir = path.join(process.cwd(), 'public/resources/gallery/blogs');

    let items: GalleryItem[] = [];

    // Fetch Images
    try {
        const imageFiles = await fs.promises.readdir(galleryDir);
        const images: GalleryItem[] = imageFiles
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .map(file => ({
                src: `/resources/gallery/${file}`,
                category: getCategoryFromFilename(file, 'image'),
                title: getTitleFromFilename(file),
                type: 'image'
            }));
        items = [...items, ...images];
    } catch (error) {
        console.error('Error reading gallery directory:', error);
    }

    // Fetch Videos
    try {
        if (fs.existsSync(videosDir)) {
            const videoFiles = await fs.promises.readdir(videosDir);
            const videos: GalleryItem[] = videoFiles
                .filter(file => /\.(mp4|webm|ogg)$/i.test(file))
                .map(file => ({
                    src: `/resources/gallery/videos/${file}`,
                    category: getCategoryFromFilename(file, 'video'),
                    title: getTitleFromFilename(file),
                    type: 'video'
                }));
            items = [...items, ...videos];
        }
    } catch (error) {
        console.error('Error reading videos directory:', error);
    }

    // Fetch Blog Videos
    try {
        if (fs.existsSync(blogsDir)) {
            const blogFiles = await fs.promises.readdir(blogsDir);
            const blogVideos: GalleryItem[] = blogFiles
                .filter(file => /\.(mp4|webm|ogg)$/i.test(file))
                .map(file => ({
                    src: `/resources/gallery/blogs/${file}`,
                    category: 'blogs',
                    title: getTitleFromFilename(file),
                    type: 'video'
                }));
            items = [...items, ...blogVideos];
        }
    } catch (error) {
        console.error('Error reading blogs directory:', error);
    }

    return items;
}

export default async function Gallery() {
    const galleryItems = await getGalleryItems();

    return (
        <div className="bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl font-bold text-blue-900 mb-4">Gallery & Media</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Capturing the memorable moments and achievements that define life at LGS.
                    </p>
                </div>

                <GalleryGrid initialItems={galleryItems} />
            </div>
        </div>
    );
}
