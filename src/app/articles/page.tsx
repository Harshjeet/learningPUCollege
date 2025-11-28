import React from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import BlogVideoSlider from '../../components/BlogVideoSlider';

interface BlogVideo {
    src: string;
    title: string;
}

function getTitleFromFilename(filename: string): string {
    const name = filename.replace(/\.[^/.]+$/, "");
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

async function getBlogVideos(): Promise<BlogVideo[]> {
    const blogsDir = path.join(process.cwd(), 'public/resources/gallery/blogs');

    try {
        if (fs.existsSync(blogsDir)) {
            const files = await fs.promises.readdir(blogsDir);
            return files
                .filter(file => /\.(mp4|webm|ogg)$/i.test(file))
                .map(file => ({
                    src: `/resources/gallery/blogs/${file}`,
                    title: getTitleFromFilename(file)
                }));
        }
    } catch (error) {
        console.error('Error reading blogs directory:', error);
    }
    return [];
}

export default async function Articles() {
    const blogVideos = await getBlogVideos();

    return (
        <div className="bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl font-bold text-blue-900 mb-4">Educational Insights</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest trends in education, study tips, and insights from our expert faculty.
                    </p>
                </div>

                {/* Video Slider Section */}
                {blogVideos.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center mb-6">
                            <div className="bg-red-100 p-2 rounded-lg mr-3">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-blue-900">Video Insights</h2>
                        </div>
                        <BlogVideoSlider videos={blogVideos} />
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-48">
                            <Image src="/resources/gallery/neet-prep.jpg" alt="Blog Post" fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>December 15, 2023</span>
                                <span className="mx-2">•</span>
                                <span>Dr. Sarah Johnson</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-3">Effective Study Strategies for NEET</h3>
                            <p className="text-gray-600 mb-4">Discover proven techniques to maximize your NEET preparation and achieve your medical career goals.</p>
                            <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">Read More →</a>
                        </div>
                    </article>

                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-48">
                            <Image src="/resources/gallery/iit-jee-study.jpg" alt="Blog Post" fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>December 10, 2023</span>
                                <span className="mx-2">•</span>
                                <span>Prof. Michael Chen</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-3">Mastering Mathematics for IIT-JEE</h3>
                            <p className="text-gray-600 mb-4">Advanced mathematical concepts and problem-solving techniques for engineering entrance exams.</p>
                            <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">Read More →</a>
                        </div>
                    </article>

                    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full h-48">
                            <Image src="/resources/gallery/sat-classroom.jpg" alt="Blog Post" fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                                <span>December 5, 2023</span>
                                <span className="mx-2">•</span>
                                <span>Ms. Emily Rodriguez</span>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-3">Preparing for International Education</h3>
                            <p className="text-gray-600 mb-4">A comprehensive guide to SAT preparation and college applications for international universities.</p>
                            <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">Read More →</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
