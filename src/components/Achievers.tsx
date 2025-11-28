'use client';

import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useLanguage } from '../context/LanguageContext';

const Achievers = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-sky-800 mb-4">{t('section-achievers')}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Celebrating the achievements of our students who have excelled in various fields and brought pride to our institution.
                    </p>
                </div>

                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        gap: '2rem',
                        autoplay: true,
                        interval: 4000,
                        pauseOnHover: true,
                        breakpoints: {
                            1024: {
                                perPage: 2,
                            },
                            768: {
                                perPage: 1,
                            }
                        }
                    }}
                    aria-label="Student Achievers"
                >
                    <SplideSlide>
                        <div className="achievement-card rounded-2xl p-8 mx-4 border border-gray-100 shadow-sm">
                            <div className="relative w-full h-48 mb-6">
                                <Image src="/resources/student-achievers.jpg" alt="Student Achievement" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-display text-xl font-semibold text-sky-800 mb-2">NEET Topper 2023</h3>
                                <p className="text-gray-600 mb-4">Scored 99.8 percentile and secured admission in AIIMS Delhi</p>
                                <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">All India Rank: 127</span>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">99.8 Percentile</span>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="achievement-card rounded-2xl p-8 mx-4 border border-gray-100 shadow-sm">
                            <div className="relative w-full h-48 mb-6">
                                <Image src="/resources/iit-jee-study.jpg" alt="IIT Achievement" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-display text-xl font-semibold text-sky-800 mb-2">IIT-JEE Advanced 2023</h3>
                                <p className="text-gray-600 mb-4">Multiple students secured ranks under 1000</p>
                                <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
                                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">12 Students in Top 1000</span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">89% Success Rate</span>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="achievement-card rounded-2xl p-8 mx-4 border border-gray-100 shadow-sm">
                            <div className="relative w-full h-48 mb-6">
                                <Image src="/resources/sat-classroom.jpg" alt="SAT Achievement" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-display text-xl font-semibold text-sky-800 mb-2">SAT Excellence 2023</h3>
                                <p className="text-gray-600 mb-4">Students achieved perfect scores and secured admissions in Ivy League universities</p>
                                <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
                                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">5 Perfect Scores</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Ivy League Admissions</span>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
};

export default Achievers;
