'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import anime from 'animejs';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        // Animate hero section elements
        anime({
            targets: titleRef.current,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 300,
            easing: 'easeOutQuart'
        });

        anime({
            targets: subtitleRef.current,
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 600,
            easing: 'easeOutQuart'
        });

        anime({
            targets: buttonsRef.current,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 900,
            easing: 'easeOutQuart'
        });

        anime({
            targets: statsRef.current,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 1200,
            easing: 'easeOutQuart'
        });
    }, [t]);

    return (
        <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/resources/video.mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/80 -z-10 backdrop-blur-[2px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1
                                ref={titleRef}
                                className="font-display text-5xl lg:text-7xl font-bold text-sky-800 leading-tight opacity-0"
                            >
                                <span>{t('hero-title-1')}</span>{' '}
                                <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
                                    {t('hero-title-2')}
                                </span>
                            </h1>
                            <p
                                ref={subtitleRef}
                                className="text-xl text-gray-600 leading-relaxed opacity-0"
                            >
                                {t('hero-subtitle')}
                            </p>
                        </div>
                        <div
                            ref={buttonsRef}
                            className="flex flex-col sm:flex-row gap-4 opacity-0"
                        >
                            <Link
                                href="/connect"
                                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/30 text-center"
                            >
                                {t('hero-btn-admission')}
                            </Link>
                            <Link
                                href="/connect"
                                className="border-2 border-sky-700 text-sky-700 px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 hover:text-white transition-all duration-300 text-center"
                            >
                                {t('hero-btn-visit')}
                            </Link>
                        </div>
                        <div
                            ref={statsRef}
                            className="grid grid-cols-3 gap-8 pt-8 opacity-0"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-700">95%</div>
                                <div className="text-sm text-gray-600">{t('stat-success')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-700">1200+</div>
                                <div className="text-sm text-gray-600">{t('stat-students')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sky-700">50+</div>
                                <div className="text-sm text-gray-600">{t('stat-faculty')}</div>
                            </div>
                        </div>
                    </div>
                    {/* Right side intentionally left empty for video visibility */}
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
