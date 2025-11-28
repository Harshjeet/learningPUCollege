'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import anime from 'animejs';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    const [expandedFaculty, setExpandedFaculty] = useState<number | null>(null);

    const facultyData = [
        // ... (keeping faculty data as is for now, or I could translate it if I had keys)
        {
            id: 1,
            name: "Dr. Priya Sharma",
            position: "Head of Science Department",
            qualification: "Ph.D in Physics, M.Sc, B.Ed",
            experience: "15 years",
            specialization: "Physics & Chemistry",
            achievements: "NEET Expert, Published 12 research papers",
            image: "/resources/faculty-team.jpg",
            description: "Dr. Sharma leads our science department with exceptional expertise in physics and chemistry. She has guided over 500 students to success in NEET examinations."
        },
        {
            id: 2,
            name: "Prof. Rajesh Kumar",
            position: "Senior Mathematics Faculty",
            qualification: "M.Tech, M.Sc Mathematics, B.Ed",
            experience: "18 years",
            specialization: "Advanced Mathematics",
            achievements: "IIT-JEE Specialist, 95% success rate",
            image: "/resources/faculty-team.jpg",
            description: "Prof. Kumar is renowned for his innovative teaching methods in mathematics. His students consistently achieve top ranks in IIT-JEE examinations."
        },
        // this is about page
        {
            id: 3,
            name: "Dr. Anjali Patel",
            position: "Biology Expert",
            qualification: "Ph.D in Biotechnology, M.Sc, B.Ed",
            experience: "12 years",
            specialization: "Biology & Life Sciences",
            achievements: "Medical Entrance Specialist, Research publications",
            image: "/resources/faculty-team.jpg",
            description: "Dr. Patel's expertise in biology has helped numerous students secure admissions in top medical colleges across the country."
        },
        {
            id: 4,
            name: "Mr. David Wilson",
            position: "English & SAT Faculty",
            qualification: "MA English, TESOL Certified",
            experience: "10 years",
            specialization: "English Language & Literature",
            achievements: "SAT Expert, 98% student satisfaction",
            image: "/resources/faculty-team.jpg",
            description: "Mr. Wilson brings international teaching experience and has helped students achieve perfect SAT scores."
        },
        {
            id: 5,
            name: "Dr. Meera Nair",
            position: "Chemistry Specialist",
            qualification: "Ph.D in Organic Chemistry, M.Sc, B.Ed",
            experience: "14 years",
            specialization: "Organic & Inorganic Chemistry",
            achievements: "Chemistry Olympiad Coach, Published researcher",
            image: "/resources/faculty-team.jpg",
            description: "Dr. Nair's passion for chemistry and innovative teaching methods make complex concepts accessible to all students."
        },
        {
            id: 6,
            name: "Prof. Arjun Reddy",
            position: "Mathematics & Statistics",
            qualification: "M.Sc Statistics, M.Ed",
            experience: "16 years",
            specialization: "Statistics & Probability",
            achievements: "Quantitative Aptitude Expert, Author of 3 books",
            image: "/resources/faculty-team.jpg",
            description: "Prof. Reddy's expertise in statistics and quantitative methods has helped students excel in various competitive examinations."
        }
    ];

    useEffect(() => {
        // Animate faculty cards on scroll
        const facultyCards = document.querySelectorAll('.faculty-card');
        facultyCards.forEach((card, index) => {
            anime({
                targets: card,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 600,
                delay: index * 100,
                easing: 'easeOutQuart'
            });
        });
    }, []);

    const toggleFacultyDetails = (id: number) => {
        if (expandedFaculty === id) {
            setExpandedFaculty(null);
        } else {
            setExpandedFaculty(id);
        }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-display text-5xl font-bold text-blue-900 mb-6">{t('about-title')}</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('about-desc')}
                        </p>
                    </div>
                </div>
            </section>

            {/* School Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-4xl font-bold text-blue-900 mb-6">{t('mission-vision-title')}</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-xl text-blue-900 mb-3">{t('mission-title')}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t('mission-desc')}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-blue-900 mb-3">{t('vision-title')}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t('vision-desc')}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-blue-900 mb-3">{t('values-title')}</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Excellence in Academic and Personal Development</li>
                                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Innovation and Continuous Learning</li>
                                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Integrity and Ethical Conduct</li>
                                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Respect for Diversity and Inclusion</li>
                                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Social Responsibility and Community Service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 w-full">
                            <Image src="/resources/faculty-team.jpg" alt="Learners PU College Faculty Team" fill className="rounded-2xl shadow-2xl object-cover" />
                            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold">15+</div>
                                    <div className="text-sm">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">{t('principal-msg-title')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A message from our esteemed principal about the school's commitment to educational excellence.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid lg:grid-cols-3 gap-8 items-center">
                            <div className="lg:col-span-1 text-center">
                                <div className="relative w-full h-64 mb-4">
                                    <Image src="/resources/faculty-team.jpg" alt="Principal" fill className="object-cover rounded-lg" />
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900">Dr. Sarah Johnson</h3>
                                <p className="text-gray-600">Principal & Academic Director</p>
                                <p className="text-sm text-gray-500">M.Ed, Ph.D in Educational Leadership</p>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Dear Students, Parents, and Well-wishers,
                                    </p>
                                    <p>
                                        It is with great pride and enthusiasm that I welcome you to Learners PU College.
                                        As we embark on another academic year, I am filled with optimism and excitement about
                                        the journey ahead.
                                    </p>
                                    <p>
                                        At Learners PU College, we believe that education is not merely about acquiring knowledge, but about
                                        developing the ability to think critically, solve problems creatively, and contribute
                                        meaningfully to society. Our commitment to excellence is reflected in every aspect of
                                        our institution - from our dedicated faculty to our state-of-the-art facilities.
                                    </p>
                                    <p>
                                        Our students consistently achieve outstanding results in competitive examinations, but
                                        more importantly, they develop into well-rounded individuals with strong values,
                                        leadership qualities, and a passion for lifelong learning.
                                    </p>
                                    <p>
                                        I invite you to explore our website and discover what makes Learners PU College a unique place for
                                        learning and growth. Together, we can build a brighter future for our students and
                                        our community.
                                    </p>
                                    <div className="mt-6">
                                        <p className="font-semibold text-blue-900">Dr. Sarah Johnson</p>
                                        <p className="text-gray-500">Principal, Learners PU College</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">{t('faculty-title')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meet our dedicated team of experienced educators who are passionate about teaching and committed to student success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facultyData.map(faculty => (
                            <div
                                key={faculty.id}
                                className="faculty-card bg-white rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all"
                                onClick={() => toggleFacultyDetails(faculty.id)}
                            >
                                <div className="text-center mb-4">
                                    <div className="relative w-24 h-24 mx-auto mb-4">
                                        <Image src={faculty.image} alt={faculty.name} fill className="rounded-full object-cover" />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold text-blue-900">{faculty.name}</h3>
                                    <p className="text-orange-500 font-medium">{faculty.position}</p>
                                    <p className="text-gray-600 text-sm">{faculty.experience} Experience</p>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Qualification:</span>
                                        <span className="text-gray-700 font-medium">{faculty.qualification}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Specialization:</span>
                                        <span className="text-gray-700 font-medium">{faculty.specialization}</span>
                                    </div>
                                </div>

                                <div
                                    className={`mt-4 pt-4 border-t border-gray-200 overflow-hidden transition-all duration-300 ${expandedFaculty === faculty.id ? 'max-h-[500px]' : 'max-h-0'}`}
                                >
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">Achievements</h4>
                                            <p className="text-gray-600 text-sm">{faculty.achievements}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-900 mb-1">About</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">{faculty.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mandatory Disclosures */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">{t('disclosures-title')}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transparent information about our school's compliance with educational regulations and standards.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Recognition & Affiliation</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Recognized by State Education Department</li>
                                        <li>• Affiliated to CBSE (Affiliation No: 1234567)</li>
                                        <li>• ISO 9001:2015 Certified Institution</li>
                                        <li>• Member of National Council of Educational Institutions</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Infrastructure Compliance</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Fire Safety Certificate (Valid till 2025)</li>
                                        <li>• Building Safety Certificate (Valid till 2026)</li>
                                        <li>• Health & Sanitation Certificate (Valid till 2024)</li>
                                        <li>• Environmental Clearance Certificate</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Faculty Qualifications</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• 100% faculty with minimum Bachelor's Degree</li>
                                        <li>• 85% faculty with Master's Degree or higher</li>
                                        <li>• All faculty with B.Ed or equivalent teaching qualification</li>
                                        <li>• Regular professional development programs</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Financial Information</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Audited financial statements available</li>
                                        <li>• Fee structure approved by regulatory authorities</li>
                                        <li>• Scholarship programs for meritorious students</li>
                                        <li>• Transparent fee refund policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-lg text-blue-900 mb-3">Academic Performance</h3>
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-blue-900">95.2%</div>
                                    <div className="text-sm text-gray-600">Overall Pass Percentage (2023)</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-900">89%</div>
                                    <div className="text-sm text-gray-600">First Division Percentage</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-900">156</div>
                                    <div className="text-sm text-gray-600">Students in Merit List</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Educational Insights</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Stay updated with the latest trends in education, study tips, and insights from our expert faculty.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full h-48">
                                <Image src="/resources/neet-prep.jpg" alt="Blog Post" fill className="object-cover" />
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
                                <Image src="/resources/iit-jee-study.jpg" alt="Blog Post" fill className="object-cover" />
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
                                <Image src="/resources/sat-classroom.jpg" alt="Blog Post" fill className="object-cover" />
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

                    <div className="text-center mt-12">
                        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                            View All Articles
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
