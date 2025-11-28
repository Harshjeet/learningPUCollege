'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import anime from 'animejs';
import Link from 'next/link';

// Types
type AchievementCategory = 'all' | 'academic' | 'sports' | 'cultural' | 'leadership';
type GalleryCategory = 'all' | 'events' | 'sports' | 'academics' | 'cultural';

interface Achievement {
    id: number;
    name: string;
    category: AchievementCategory;
    achievement: string;
    description: string;
    year: string;
    image: string;
    details: string;
}

interface GalleryItem {
    src: string;
    category: GalleryCategory;
    title: string;
}

interface Facility {
    title: string;
    content: React.ReactNode;
}

const LifeAtLGS = () => {
    // State
    const [activeAchievementFilter, setActiveAchievementFilter] = useState<AchievementCategory>('all');
    const [activeGalleryFilter, setActiveGalleryFilter] = useState<GalleryCategory>('all');
    const [visiblePhotos, setVisiblePhotos] = useState<number>(8);
    const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

    // Data
    const achievements: Achievement[] = [
        {
            id: 1,
            name: "Rahul Sharma",
            category: "academic",
            achievement: "NEET All India Rank 127",
            description: "Secured admission in AIIMS Delhi with 99.8 percentile",
            year: "2023",
            image: "/resources/gallery/student-achievers.jpg",
            details: "Rahul's dedication and consistent hard work helped him achieve this remarkable feat. He followed our structured study plan and attended all doubt-clearing sessions."
        },
        {
            id: 2,
            name: "Priya Patel",
            category: "sports",
            achievement: "National Badminton Champion",
            description: "Won gold medal in U-18 National Badminton Championship",
            year: "2023",
            image: "/resources/gallery/student-achievers.jpg",
            details: "Priya balanced her academic commitments with rigorous badminton training. Her time management skills and determination led to this national recognition."
        },
        {
            id: 3,
            name: "Amit Kumar",
            category: "cultural",
            achievement: "Inter-school Debate Winner",
            description: "Best speaker award at State Level Debate Competition",
            year: "2023",
            image: "/resources/gallery/toastmasters-event.jpg",
            details: "Amit's exceptional oratory skills and critical thinking abilities made him stand out. He is an active member of our Toastmasters club."
        },
        {
            id: 4,
            name: "Sarah Johnson",
            category: "leadership",
            achievement: "Student Council President",
            description: "Led various school initiatives and community service programs",
            year: "2023",
            image: "/resources/gallery/faculty-team.jpg",
            details: "Sarah demonstrated exceptional leadership qualities by organizing successful events and leading community outreach programs."
        },
        {
            id: 5,
            name: "Vikram Singh",
            category: "academic",
            achievement: "IIT-JEE Advanced Rank 456",
            description: "Secured admission in IIT Bombay Computer Science",
            year: "2023",
            image: "/resources/gallery/iit-jee-study.jpg",
            details: "Vikram's systematic approach to problem-solving and consistent practice helped him achieve this prestigious rank."
        },
        {
            id: 6,
            name: "Neha Gupta",
            category: "cultural",
            achievement: "Classical Dance Performer",
            description: "Performed at National Youth Festival",
            year: "2023",
            image: "/resources/gallery/student-achievers.jpg",
            details: "Neha's passion for classical dance and dedication to practice earned her this opportunity to perform at the national level."
        }
    ];

    const galleryItems: GalleryItem[] = [
        { src: "/resources/gallery/neet-prep.jpg", category: "academics", title: "NEET Preparation Class" },
        { src: "/resources/gallery/iit-jee-study.jpg", category: "academics", title: "IIT-JEE Study Session" },
        { src: "/resources/gallery/sat-classroom.jpg", category: "academics", title: "SAT Classroom" },
        { src: "/resources/gallery/science-lab.jpg", category: "academics", title: "Science Laboratory" },
        { src: "/resources/gallery/student-achievers.jpg", category: "events", title: "Achievement Ceremony" },
        { src: "/resources/gallery/toastmasters-event.jpg", category: "events", title: "Toastmasters Event" },
        { src: "/resources/gallery/faculty-team.jpg", category: "events", title: "Faculty Meeting" },
        { src: "/resources/gallery/library-students.jpg", category: "academics", title: "Library Study" },
        { src: "/resources/gallery/canteen.jpg", category: "events", title: "Canteen Time" },
        { src: "/resources/gallery/hostel.jpg", category: "events", title: "Hostel Life" },
        { src: "/resources/gallery/student-achievers.jpg", category: "sports", title: "Sports Day" },
        { src: "/resources/gallery/toastmasters-event.jpg", category: "cultural", title: "Cultural Program" }
    ];

    const facilities: Record<string, Facility> = {
        labs: {
            title: "Modern Laboratories",
            content: (
                <>
                    <div className="relative w-full h-64 mb-6">
                        <Image src="/resources/gallery/science-lab.jpg" alt="Laboratories" fill className="object-cover rounded-lg" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Features</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Separate Physics, Chemistry & Biology labs</li>
                                <li>• Latest equipment and apparatus</li>
                                <li>• Digital measurement instruments</li>
                                <li>• Safety equipment and first aid</li>
                                <li>• Fume hoods and ventilation systems</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Capacity</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 40 students per lab session</li>
                                <li>• Individual work stations</li>
                                <li>• Demonstration area</li>
                                <li>• Storage facilities</li>
                                <li>• Preparation rooms</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        classrooms: {
            title: "Smart Classrooms",
            content: (
                <>
                    <div className="relative w-full h-64 mb-6">
                        <Image src="/resources/gallery/sat-classroom.jpg" alt="Classrooms" fill className="object-cover rounded-lg" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Technology</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Interactive whiteboards</li>
                                <li>• Multimedia projectors</li>
                                <li>• High-speed internet</li>
                                <li>• Audio-visual systems</li>
                                <li>• Digital learning resources</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Comfort</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Ergonomic seating</li>
                                <li>• Air conditioning</li>
                                <li>• Natural lighting</li>
                                <li>• Spacious layout</li>
                                <li>• Acoustic design</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        library: {
            title: "Resource Library",
            content: (
                <>
                    <div className="relative w-full h-64 mb-6">
                        <Image src="/resources/gallery/library-students.jpg" alt="Library" fill className="object-cover rounded-lg" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Collections</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 50,000+ books</li>
                                <li>• National & international journals</li>
                                <li>• Digital resources</li>
                                <li>• Reference materials</li>
                                <li>• E-book access</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Facilities</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Reading halls</li>
                                <li>• Digital library corner</li>
                                <li>• Group study areas</li>
                                <li>• Quiet zones</li>
                                <li>• Wi-Fi connectivity</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        sports: {
            title: "Sports Complex",
            content: (
                <>
                    <div className="relative w-full h-64 mb-6">
                        <Image src="/resources/gallery/student-achievers.jpg" alt="Sports" fill className="object-cover rounded-lg" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Facilities</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Cricket ground</li>
                                <li>• Football field</li>
                                <li>• Basketball courts</li>
                                <li>• Volleyball courts</li>
                                <li>• Athletics track</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Amenities</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Gymnasium</li>
                                <li>• Changing rooms</li>
                                <li>• Equipment storage</li>
                                <li>• First aid facility</li>
                                <li>• Spectator seating</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        canteen: {
            title: "Modern Canteen",
            content: (
                <>
                    <div className="relative w-full h-64 mb-6">
                        <Image src="/resources/gallery/canteen.jpg" alt="Canteen" fill className="object-cover rounded-lg" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Services</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Nutritious meals</li>
                                <li>• Snacks and beverages</li>
                                <li>• Fresh fruit juices</li>
                                <li>• Special dietary options</li>
                                <li>• Hygienic preparation</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Facilities</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Spacious dining area</li>
                                <li>• Modern kitchen equipment</li>
                                <li>• Clean water supply</li>
                                <li>• Waste management</li>
                                <li>• Comfortable seating</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        },
        hostel: {
            title: "Residential Hostel",
            content: (
                <>
                    <div className="relative w-full h-64 mb-6">
                        <Image src="/resources/gallery/hostel.jpg" alt="Hostel" fill className="object-cover rounded-lg" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Accommodation</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Separate boys & girls hostels</li>
                                <li>• 2/3/4 sharing rooms</li>
                                <li>• Attached bathrooms</li>
                                <li>• Study tables and wardrobes</li>
                                <li>• Common rooms</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg text-blue-900 mb-3">Services</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 24/7 Security</li>
                                <li>• Housekeeping</li>
                                <li>• Laundry service</li>
                                <li>• Medical assistance</li>
                                <li>• Wi-Fi connectivity</li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    };

    useEffect(() => {
        // Animate elements on load
        anime({
            targets: '.achievement-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: 'easeOutQuart'
        });
    }, [activeAchievementFilter]);

    const filteredAchievements = activeAchievementFilter === 'all'
        ? achievements
        : achievements.filter(a => a.category === activeAchievementFilter);

    const filteredGallery = activeGalleryFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeGalleryFilter);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-display text-5xl font-bold text-blue-900 mb-6">Life at LGS</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience a vibrant campus life with world-class facilities, diverse activities, and endless opportunities
                            for personal growth and development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Wall of Fame */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Wall of Fame</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Celebrating the outstanding achievements of our students across academics, sports, and cultural activities.
                        </p>
                    </div>

                    {/* Achievement Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['all', 'academic', 'sports', 'cultural', 'leadership'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveAchievementFilter(filter as AchievementCategory)}
                                className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${activeAchievementFilter === filter
                                    ? 'bg-orange-500 border-orange-500 text-white'
                                    : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                                    }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === 'all' ? 'Achievements' : ''}
                            </button>
                        ))}
                    </div>

                    {/* Achievement Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAchievements.map((item) => (
                            <div key={item.id} className="achievement-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-64">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-900">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-blue-900 mb-1">{item.name}</h3>
                                    <p className="text-orange-500 font-medium mb-3">{item.achievement}</p>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    <div className="border-t pt-4">
                                        <p className="text-gray-500 text-sm italic">"{item.details}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campus Facilities */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Our Campus Facilities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            State-of-the-art infrastructure designed to support holistic learning and development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Labs */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => setSelectedFacility('labs')}>
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/gallery/science-lab.jpg" alt="Laboratories" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Modern Laboratories</h3>
                                <p className="text-gray-600 text-sm">Well-equipped science labs with latest equipment and safety measures.</p>
                            </div>
                        </div>

                        {/* Classrooms */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => setSelectedFacility('classrooms')}>
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/gallery/sat-classroom.jpg" alt="Classrooms" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Smart Classrooms</h3>
                                <p className="text-gray-600 text-sm">Digital classrooms with interactive whiteboards and multimedia facilities.</p>
                            </div>
                        </div>

                        {/* Library */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => setSelectedFacility('library')}>
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/gallery/library-students.jpg" alt="Library" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Resource Library</h3>
                                <p className="text-gray-600 text-sm">Extensive collection of books, journals, and digital resources.</p>
                            </div>
                        </div>

                        {/* Sports Ground */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => setSelectedFacility('sports')}>
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/gallery/student-achievers.jpg" alt="Sports Ground" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Sports Complex</h3>
                                <p className="text-gray-600 text-sm">Multi-sport facilities including cricket, football, basketball, and athletics.</p>
                            </div>
                        </div>

                        {/* Canteen */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => setSelectedFacility('canteen')}>
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/gallery/canteen.jpg" alt="Canteen" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Modern Canteen</h3>
                                <p className="text-gray-600 text-sm">Hygienic food court offering nutritious meals and snacks.</p>
                            </div>
                        </div>

                        {/* Hostel */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => setSelectedFacility('hostel')}>
                            <div className="mb-4 relative h-48 w-full">
                                <Image src="/resources/gallery/hostel.jpg" alt="Hostel" fill className="object-cover rounded-lg" />
                            </div>
                            <div className="text-center">
                                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Residential Hostel</h3>
                                <p className="text-gray-600 text-sm">Comfortable accommodation with modern amenities and 24/7 security.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Tours and Excursions */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Tours & Excursions</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Educational tours and excursions that provide real-world learning experiences and exposure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="relative h-48 mb-4">
                                <Image src="/resources/gallery/science-lab.jpg" alt="Industrial Visit" fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-3">Industrial Visits</h3>
                            <p className="text-gray-600 text-sm mb-4">Regular visits to industries, research centers, and manufacturing units to provide practical exposure.</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                </svg>
                                Quarterly visits
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="relative h-48 mb-4">
                                <Image src="/resources/gallery/library-students.jpg" alt="Educational Tour" fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-3">Educational Tours</h3>
                            <p className="text-gray-600 text-sm mb-4">National and international educational tours to historical sites, museums, and universities.</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                </svg>
                                Annual tours
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <div className="relative h-48 mb-4">
                                <Image src="/resources/gallery/faculty-team.jpg" alt="Adventure Camp" fill className="object-cover rounded-lg" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-3">Adventure Camps</h3>
                            <p className="text-gray-600 text-sm mb-4">Outdoor adventure camps focusing on team building, leadership, and personality development.</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                </svg>
                                Bi-annual camps
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery and Media */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Gallery & Media</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Capturing the memorable moments and achievements that define life at LGS.
                        </p>
                    </div>

                    {/* Gallery Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['all', 'events', 'sports', 'academics', 'cultural'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveGalleryFilter(filter as GalleryCategory)}
                                className={`px-6 py-3 rounded-full border-2 font-semibold transition-all duration-300 ${activeGalleryFilter === filter
                                    ? 'bg-orange-500 border-orange-500 text-white'
                                    : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                                    }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)} {filter === 'all' ? 'Photos' : ''}
                            </button>
                        ))}
                    </div>

                    {/* Photo Gallery */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredGallery.slice(0, visiblePhotos).map((item, index) => (
                            <div key={index} className="gallery-item relative h-48 group cursor-pointer overflow-hidden rounded-lg">
                                <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-semibold text-center px-4">{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visiblePhotos < filteredGallery.length && (
                        <div className="text-center mt-12">
                            <Link
                                href="/gallery"
                                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 inline-block"
                            >
                                View More Gallery
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Facility Modal */}
            {selectedFacility && facilities[selectedFacility] && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedFacility(null)}>
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-display text-2xl font-bold text-blue-900">{facilities[selectedFacility].title}</h3>
                                <button onClick={() => setSelectedFacility(null)} className="text-gray-500 hover:text-gray-700">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-6">
                                {facilities[selectedFacility].content}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LifeAtLGS;
