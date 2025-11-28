'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import anime from 'animejs';

const affiliates = [
    { name: 'Art of Living', src: '/resources/affiliates/aol-logo-new.jpg' },
    { name: 'Toastmasters International', src: '/resources/affiliates/toastmasters-logo.jpg' },
    { name: 'Narayana Health', src: '/resources/affiliates/narayana-health-logo.png' },
    { name: 'Bagri Foundation', src: '/resources/affiliates/bagri-logo.jpg' },
    { name: 'Educait', src: '/resources/affiliates/educait-logo.jpg' },
    { name: 'Larsen & Toubro', src: '/resources/affiliates/l-and-t-logo.jpg' },
];

const Affiliates = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: '.affiliate-item',
                            opacity: [0, 1],
                            translateY: [20, 0],
                            delay: anime.stagger(100),
                            easing: 'easeOutQuad',
                            duration: 800,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl font-bold text-sky-900 mb-4 tracking-tight">Our Affiliates</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Collaborating with world-class organizations to provide holistic development opportunities for our students.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center justify-items-center">
                    {affiliates.map((affiliate, index) => (
                        <div
                            key={index}
                            className="affiliate-item w-full h-40 relative transition-all duration-500 opacity-0 transform hover:scale-110 cursor-pointer"
                        >
                            <Image
                                src={affiliate.src}
                                alt={`${affiliate.name} Logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Affiliates;
