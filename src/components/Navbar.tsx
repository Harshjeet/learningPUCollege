'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { t, setLanguage, language } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/95 backdrop-blur-sm shadow-sm'
                }`}
            style={{ transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/resources/logo.png"
                            alt="LGS Logo"
                            width={48}
                            height={48}
                            className="h-12 w-auto object-contain"
                        />
                        <div className="font-display font-bold text-2xl text-sky-700 tracking-tight">LEARNERS PU COLLEGE</div>
                        <div className="hidden sm:block ml-2 text-sm text-gray-500 border-l pl-2 border-gray-300">

                        </div>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="nav-link text-sky-700 font-medium">
                            {t('nav-home')}
                        </Link>
                        <Link href="/about" className="nav-link text-gray-600 hover:text-sky-700 font-medium">
                            {t('nav-about')}
                        </Link>
                        <Link href="/courses" className="nav-link text-gray-600 hover:text-sky-700 font-medium">
                            {t('nav-courses')}
                        </Link>
                        <Link href="/life-at-lgs" className="nav-link text-gray-600 hover:text-sky-700 font-medium">
                            {t('nav-life')}
                        </Link>
                        <Link href="/connect" className="nav-link text-gray-600 hover:text-sky-700 font-medium">
                            {t('nav-connect')}
                        </Link>

                        {/* Language Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center space-x-1 text-gray-600 hover:text-sky-700 font-medium focus:outline-none">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                    ></path>
                                </svg>
                                <span>
                                    {language === 'en' ? 'En' :
                                        language === 'hi' ? 'Hi' :
                                            language === 'kn' ? 'Kn' :
                                                language === 'te' ? 'Te' :
                                                    language === 'ta' ? 'Ta' : 'Ml'}
                                </span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right z-50 border border-gray-100">
                                <div className="py-1">
                                    <button
                                        onClick={() => setLanguage('en')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                    >
                                        🇺🇸 English
                                    </button>
                                    <button
                                        onClick={() => setLanguage('hi')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                    >
                                        🇮🇳 हिन्दी
                                    </button>
                                    <button
                                        onClick={() => setLanguage('kn')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                    >
                                        🇮🇳 ಕನ್ನಡ
                                    </button>
                                    <button
                                        onClick={() => setLanguage('te')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                    >
                                        🇮🇳 తెలుగు
                                    </button>
                                    <button
                                        onClick={() => setLanguage('ta')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                    >
                                        🇮🇳 தமிழ்
                                    </button>
                                    <button
                                        onClick={() => setLanguage('ml')}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-sky-700"
                                    >
                                        🇮🇳 മലയാളം
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="md:hidden p-2 text-sky-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="px-4 py-6 space-y-4">
                    <Link href="/" className="block text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav-home')}
                    </Link>
                    <Link href="/about" className="block text-gray-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav-about')}
                    </Link>
                    <Link href="/courses" className="block text-gray-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav-courses')}
                    </Link>
                    <Link href="/life-at-lgs" className="block text-gray-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav-life')}
                    </Link>
                    <Link href="/connect" className="block text-gray-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav-connect')}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
