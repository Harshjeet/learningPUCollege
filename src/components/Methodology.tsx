'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Methodology = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-display text-4xl font-bold text-sky-800 mb-6">Our Learning Tools</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-emerald-500 text-white p-3 rounded-full flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-sky-800 mb-2">Study Technology</h3>
                                    <p className="text-gray-600">Helps identify and eliminate learning barriers, ensuring deep conceptual understanding.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-sky-500 text-white p-3 rounded-full flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-sky-800 mb-2">5W1H Learning Method</h3>
                                    <p className="text-gray-600">Students explore concepts through structured questioning What? Why? When? Where? Who? How?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-500 text-white p-3 rounded-full flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-sky-800 mb-2">Mind Mapping</h3>
                                    <p className="text-gray-600">A visual learning technique that enhances retention, clarity, and recall.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-emerald-500 text-white p-3 rounded-full flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-sky-800 mb-2">Hybrid Learning</h3>
                                    <p className="text-gray-600">A balanced blend of in‑person and online learning that offers flexibility while maintaining strong teacher support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative w-full h-96">
                            <Image src="/resources/gallery/faculty-team.jpg" alt="Teaching Methodology" fill className="rounded-2xl shadow-2xl object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-800">10:1</div>
                                <div className="text-sm text-gray-600">{t('meth-ratio')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
