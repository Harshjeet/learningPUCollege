'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import anime from 'animejs';
import { useLanguage } from '../context/LanguageContext';

const CourseStreams = () => {
    const { t } = useLanguage();

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        anime({
            targets: e.currentTarget,
            translateY: -8,
            boxShadow: '0 20px 40px rgba(14, 165, 233, 0.15)',
            duration: 400,
            easing: 'easeOutQuad'
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        anime({
            targets: e.currentTarget,
            translateY: 0,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            duration: 400,
            easing: 'easeOutQuad'
        });
    };

    return (
        <section id="streams" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-sky-800 mb-4">{t('section-streams')}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('section-streams-desc')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* NEET Stream */}
                    <Link href="/courses/neet" className="block">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all h-full"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/neet-prep.jpg" alt="NEET Preparation" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display text-xl font-semibold text-sky-800">NEET</h3>
                                    <span className="font-mono text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{t('stream-medical')}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{t('stream-medical-desc')}</p>
                                <div className="flex justify-between text-sm mt-auto pt-4">
                                    <span className="text-gray-500">{t('duration')}: {t('years-2')}</span>
                                    <span className="text-emerald-500 font-semibold">92% {t('stat-success')}</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* IIT-JEE Stream */}
                    <Link href="/courses/iit-jee" className="block">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all h-full"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/iit-jee-study.jpg" alt="IIT-JEE Preparation" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display text-xl font-semibold text-sky-800">IIT-JEE</h3>
                                    <span className="font-mono text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{t('stream-engineering')}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{t('stream-engineering-desc')}</p>
                                <div className="flex justify-between text-sm mt-auto pt-4">
                                    <span className="text-gray-500">{t('duration')}: {t('years-2')}</span>
                                    <span className="text-emerald-500 font-semibold">89% {t('stat-success')}</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* CET Stream */}
                    <Link href="/courses/cet" className="block">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all h-full"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/sat-classroom.jpg" alt="CET Preparation" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display text-xl font-semibold text-sky-800">CET</h3>
                                    <span className="font-mono text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">{t('stream-state')}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{t('stream-state-desc')}</p>
                                <div className="flex justify-between text-sm mt-auto pt-4">
                                    <span className="text-gray-500">{t('duration')}: {t('years-1-2')}</span>
                                    <span className="text-emerald-500 font-semibold">94% {t('stat-success')}</span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* SAT Stream */}
                    <Link href="/courses/sat" className="block">
                        <div
                            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all h-full"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/sat-classroom.jpg" alt="SAT Preparation" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-display text-xl font-semibold text-sky-800">SAT</h3>
                                    <span className="font-mono text-sm bg-red-100 text-red-800 px-2 py-1 rounded">{t('stream-international')}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{t('stream-international-desc')}</p>
                                <div className="flex justify-between text-sm mt-auto pt-4">
                                    <span className="text-gray-500">{t('duration')}: {t('months-6-12')}</span>
                                    <span className="text-emerald-500 font-semibold">96% {t('stat-success')}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CourseStreams;
