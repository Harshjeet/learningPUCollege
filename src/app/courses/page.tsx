'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import anime from 'animejs';

const Courses = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    useEffect(() => {
        // Animate cards on scroll
        const cards = document.querySelectorAll('.course-card, .scholarship-card');
        cards.forEach((card, index) => {
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

    const openAdmissionForm = (course: string) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeAdmissionModal = () => {
        setModalOpen(false);
        setSelectedCourse(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Application submitted successfully! We will contact you soon.');
        closeAdmissionModal();
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-display text-5xl font-bold text-blue-900 mb-6">Courses & Admissions</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive range of courses designed to excel in competitive examinations
                            and build strong foundations for your academic journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Streams */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Our Main Streams</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive integrated programs designed for success in competitive examinations.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* PCMB Stream */}
                        <div id="pcmb" className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative w-full h-96">
                                <Image src="/resources/science-lab.jpg" alt="PCMB Stream" fill className="rounded-2xl shadow-2xl object-cover" />
                            </div>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-2xl">
                                    <h3 className="font-display text-2xl font-semibold text-blue-900 mb-4">PCMB (Physics, Chemistry, Mathematics, Biology)</h3>
                                    <p className="text-gray-700 mb-4">
                                        The most versatile combination that opens doors to both Medical and Engineering careers. Ideal for students who want to keep all their options open.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">Integrated NEET & JEE Coaching</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">Advanced Lab Facilities</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">Career Guidance for Medical & Engineering</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => openAdmissionForm('pcmb')} className="w-full md:w-auto bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300">
                                    Apply for PCMB
                                </button>
                            </div>
                        </div>

                        {/* PCMC Stream */}
                        <div id="pcmc" className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-last lg:order-first space-y-6">
                                <div className="bg-blue-50 p-6 rounded-2xl">
                                    <h3 className="font-display text-2xl font-semibold text-blue-900 mb-4">PCMC (Physics, Chemistry, Mathematics, Computer Science)</h3>
                                    <p className="text-gray-700 mb-4">
                                        Designed for future technology leaders. This combination focuses on Engineering and Computer Science foundations.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">Integrated JEE & CET Coaching</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">Hands-on Coding & Computer Labs</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="text-gray-700">Focus on Logical Reasoning & Analytics</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => openAdmissionForm('pcmc')} className="w-full md:w-auto bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300">
                                    Apply for PCMC
                                </button>
                            </div>
                            <div className="relative w-full h-96">
                                <Image src="/resources/library-students.jpg" alt="PCMC Stream" fill className="rounded-2xl shadow-2xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Math Foundation Course */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Math Foundation Course</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Build a strong mathematical foundation essential for all competitive examinations and advanced studies.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full h-96">
                            <Image src="/resources/iit-jee-study.jpg" alt="Math Foundation Course" fill className="rounded-2xl shadow-2xl object-cover" />
                        </div>
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-2xl">
                                <h3 className="font-display text-2xl font-semibold text-blue-900 mb-4">Course Highlights</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Comprehensive coverage of mathematical concepts</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Problem-solving techniques and shortcuts</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Regular assessments and progress tracking</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-sky-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Individual attention and doubt clearing</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-blue-900">6 Months</div>
                                    <div className="text-sm text-gray-600">Duration</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-blue-900">₹45,000</div>
                                    <div className="text-sm text-gray-600">Course Fee</div>
                                </div>
                            </div>

                            <button onClick={() => openAdmissionForm('math-foundation')} className="w-full bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Catalog */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-40 right-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-sky-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Choose Your Path</span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Course Catalog</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Choose from our comprehensive range of courses designed for various competitive examinations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 'neet',
                                title: 'NEET Preparation',
                                badge: 'Medical',
                                badgeColor: 'emerald',
                                desc: 'Comprehensive preparation for medical entrance examinations with expert faculty and advanced lab facilities.',
                                duration: '2 Years',
                                success: '92%',
                                image: '/resources/neet-prep.jpg'
                            },
                            {
                                id: 'iit-jee',
                                title: 'IIT-JEE Preparation',
                                badge: 'Engineering',
                                badgeColor: 'blue',
                                desc: 'Rigorous training for engineering entrance exams with focus on problem-solving and analytical skills.',
                                duration: '2 Years',
                                success: '89%',
                                image: '/resources/iit-jee-study.jpg'
                            },
                            {
                                id: 'cet',
                                title: 'CET Preparation',
                                badge: 'State Level',
                                badgeColor: 'purple',
                                desc: 'Specialized coaching for Common Entrance Test with state-specific curriculum and pattern.',
                                duration: '1-2 Years',
                                success: '94%',
                                image: '/resources/sat-classroom.jpg'
                            },
                            {
                                id: 'sat',
                                title: 'SAT Preparation',
                                badge: 'International',
                                badgeColor: 'rose',
                                desc: 'Global standard test preparation for undergraduate admissions in international universities.',
                                duration: '6-12 Months',
                                success: '96%',
                                image: '/resources/sat-classroom.jpg'
                            },
                            {
                                id: 'foundation',
                                title: 'Foundation Course',
                                badge: 'Class 8-10',
                                badgeColor: 'indigo',
                                desc: 'Early preparation program for students from classes 8-10 to build strong conceptual foundations.',
                                duration: '1-3 Years',
                                success: '98%',
                                image: '/resources/science-lab.jpg'
                            },
                            {
                                id: 'crash',
                                title: 'Crash Course',
                                badge: 'Intensive',
                                badgeColor: 'amber',
                                desc: 'Intensive revision program for last-minute preparation and quick concept review.',
                                duration: '3 Months',
                                success: '85%',
                                image: '/resources/library-students.jpg'
                            }
                        ].map((course) => (
                            <div key={course.id} className="group bg-white rounded-3xl p-4 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-sky-100/50 transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col h-full">
                                <div className="mb-5 relative w-full h-56 overflow-hidden rounded-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-3 right-3 z-20">
                                        <span className={`backdrop-blur-md bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide text-${course.badgeColor}-600`}>
                                            {course.badge}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-2 pb-2 flex-grow flex flex-col">
                                    <h3 className="font-display text-2xl font-bold text-slate-800 mb-3 group-hover:text-sky-700 transition-colors duration-300">
                                        {course.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                                        {course.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100">
                                        <div>
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Duration</span>
                                            <span className="font-medium text-slate-700">{course.duration}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Success Rate</span>
                                            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">{course.success}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => openAdmissionForm(course.id)}
                                        className="w-full bg-slate-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-sky-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-sky-200 flex items-center justify-center group/btn mt-auto"
                                    >
                                        <span>Apply Now</span>
                                        <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Admission Process</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple and transparent admission process to help you get started on your academic journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div className="text-center">
                            <div className="step-indicator bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative after:content-[''] after:absolute after:top-1/2 after:left-full after:w-full after:h-0.5 after:bg-gray-200 after:hidden md:after:block last:after:hidden">
                                1
                            </div>
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-2">Online Application</h3>
                            <p className="text-gray-600 text-sm">Fill out the online application form with basic details and course preferences.</p>
                        </div>

                        <div className="text-center">
                            <div className="step-indicator bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative after:content-[''] after:absolute after:top-1/2 after:left-full after:w-full after:h-0.5 after:bg-gray-200 after:hidden md:after:block last:after:hidden">
                                2
                            </div>
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-2">Entrance Test</h3>
                            <p className="text-gray-600 text-sm">Appear for our aptitude test to assess your current knowledge and learning potential.</p>
                        </div>

                        <div className="text-center">
                            <div className="step-indicator bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative after:content-[''] after:absolute after:top-1/2 after:left-full after:w-full after:h-0.5 after:bg-gray-200 after:hidden md:after:block last:after:hidden">
                                3
                            </div>
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-2">Counseling</h3>
                            <p className="text-gray-600 text-sm">Personal counseling session to discuss course selection and career goals.</p>
                        </div>

                        <div className="text-center">
                            <div className="step-indicator bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-2">Admission</h3>
                            <p className="text-gray-600 text-sm">Complete the admission formalities and begin your journey with us.</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8">
                        <h3 className="font-display text-2xl font-semibold text-blue-900 mb-6 text-center">Eligibility Criteria</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-semibold text-lg text-blue-900 mb-3">Academic Requirements</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Minimum 60% in previous examination</li>
                                    <li>• Science stream (Physics, Chemistry, Mathematics/Biology)</li>
                                    <li>• Valid transfer certificate from previous institution</li>
                                    <li>• Age limit: 14-18 years for regular courses</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-blue-900 mb-3">Required Documents</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Birth certificate or Aadhar card</li>
                                    <li>• Previous academic mark sheets</li>
                                    <li>• Passport size photographs (4 copies)</li>
                                    <li>• Parent/guardian ID proof</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules and Regulations */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Rules & Regulations</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Clear guidelines to ensure a productive and disciplined learning environment for all students.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Attendance Policy</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Minimum 85% attendance required</li>
                                        <li>• Leave application must be submitted in advance</li>
                                        <li>• Medical leave requires proper documentation</li>
                                        <li>• Regular attendance monitoring and reporting</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Academic Integrity</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Zero tolerance for plagiarism and cheating</li>
                                        <li>• Original work submission mandatory</li>
                                        <li>• Fair assessment practices</li>
                                        <li>• Ethical conduct in all examinations</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Code of Conduct</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Respectful behavior towards faculty and peers</li>
                                        <li>• Proper uniform and dress code</li>
                                        <li>• No use of mobile phones during classes</li>
                                        <li>• Maintain discipline in school premises</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg text-blue-900 mb-3">Fee Regulations</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Fee payment within due dates</li>
                                        <li>• Late payment charges applicable</li>
                                        <li>• Refund policy as per institution norms</li>
                                        <li>• Installment options available for eligible students</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-lg text-blue-900 mb-3">Disciplinary Actions</h3>
                            <p className="text-gray-600 mb-3">
                                Any violation of school rules and regulations may result in disciplinary action including warning,
                                suspension, or expulsion depending on the severity of the offense. Parents will be notified
                                immediately in case of any serious disciplinary issues.
                            </p>
                            <p className="text-gray-600">
                                The school reserves the right to modify rules and regulations as necessary for the smooth
                                functioning of the institution and the welfare of all students.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scholarship Programs */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Scholarship Programs</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Merit-based and need-based scholarships to support deserving students in their academic journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Merit Scholarship */}
                        <div className="scholarship-card rounded-2xl p-6 border border-gray-100">
                            <div className="text-center mb-4">
                                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Merit Scholarship</h3>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-600 text-sm">Awarded to students with exceptional academic performance and competitive exam scores.</p>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Scholarship:</span>
                                        <span className="font-semibold text-sky-600">50-100%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Eligibility:</span>
                                        <span className="font-semibold text-gray-700">95%+ Marks</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t">
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li>• Based on entrance test performance</li>
                                        <li>• Academic record consideration</li>
                                        <li>• Personal interview assessment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Need-Based Scholarship */}
                        <div className="scholarship-card rounded-2xl p-6 border border-gray-100">
                            <div className="text-center mb-4">
                                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Need-Based Scholarship</h3>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-600 text-sm">Financial assistance for deserving students from economically weaker backgrounds.</p>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Scholarship:</span>
                                        <span className="font-semibold text-sky-600">25-75%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Eligibility:</span>
                                        <span className="font-semibold text-gray-700">Income &lt; ₹5L</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t">
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li>• Family income verification</li>
                                        <li>• Academic performance review</li>
                                        <li>• Personal circumstances assessment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sports Scholarship */}
                        <div className="scholarship-card rounded-2xl p-6 border border-gray-100">
                            <div className="text-center mb-4">
                                <div className="bg-sky-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Sports Scholarship</h3>
                            </div>

                            <div className="space-y-3">
                                <p className="text-gray-600 text-sm">Recognition and support for students with exceptional athletic achievements and potential.</p>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Scholarship:</span>
                                        <span className="font-semibold text-sky-600">30-60%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 text-sm">Eligibility:</span>
                                        <span className="font-semibold text-gray-700">State/National Level</span>
                                    </div>
                                </div>

                                <div className="pt-3 border-t">
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        <li>• Sports achievement certificates</li>
                                        <li>• Physical fitness assessment</li>
                                        <li>• Academic performance review</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 className="font-display text-2xl font-semibold text-blue-900 mb-4">How to Apply for Scholarships</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                                        1
                                    </div>
                                    <h4 className="font-semibold text-blue-900 mb-2">Submit Application</h4>
                                    <p className="text-gray-600 text-sm">Fill scholarship application form with required documents</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                                        2
                                    </div>
                                    <h4 className="font-semibold text-blue-900 mb-2">Document Verification</h4>
                                    <p className="text-gray-600 text-sm">Our team will verify your documents and eligibility</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                                        3
                                    </div>
                                    <h4 className="font-semibold text-blue-900 mb-2">Scholarship Award</h4>
                                    <p className="text-gray-600 text-sm">Successful candidates will be notified and awarded</p>
                                </div>
                            </div>
                            <Link href="/connect" className="inline-block mt-6 bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-300">
                                Apply for Scholarship
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book List Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Recommended Book List</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Curated list of essential books and study materials for comprehensive exam preparation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-4">Physics</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• NCERT Physics (Class 11 & 12)</li>
                                <li>• Concepts of Physics - H.C. Verma</li>
                                <li>• Fundamentals of Physics - Halliday</li>
                                <li>• Problems in General Physics - Irodov</li>
                                <li>• Understanding Physics - D.C. Pandey</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-4">Chemistry</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• NCERT Chemistry (Class 11 & 12)</li>
                                <li>• Organic Chemistry - Morrison & Boyd</li>
                                <li>• Physical Chemistry - O.P. Tandon</li>
                                <li>• Inorganic Chemistry - J.D. Lee</li>
                                <li>• Modern Approach to Chemical Calculations - R.C. Mukherjee</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-4">Mathematics</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• NCERT Mathematics (Class 11 & 12)</li>
                                <li>• Mathematics - R.D. Sharma</li>
                                <li>• Problems in Calculus - I.A. Maron</li>
                                <li>• Coordinate Geometry - S.L. Loney</li>
                                <li>• Higher Algebra - Hall & Knight</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="font-display text-lg font-semibold text-blue-900 mb-4">Biology</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• NCERT Biology (Class 11 & 12)</li>
                                <li>• Trueman's Biology - Tiwari & Tyagi</li>
                                <li>• Objective Biology - Dinesh</li>
                                <li>• Pradeep's Biology</li>
                                <li>• Biology - Campbell & Reece</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">All study materials and books are provided by the institution as part of the course package.</p>
                        <button onClick={() => alert('Book list downloaded successfully!')} className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300">
                            Download Complete Book List
                        </button>
                    </div>
                </div>
            </section>

            {/* Admission Form Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-display text-2xl font-bold text-blue-900">Admission Application</h3>
                                <button onClick={closeAdmissionModal} className="text-gray-500 hover:text-gray-700">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                        <input type="text" name="firstName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                        <input type="text" name="lastName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                                        <input type="tel" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Preference *</label>
                                    <select name="course" defaultValue={selectedCourse || ''} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="pcmb">PCMB (Physics, Chemistry, Maths, Biology)</option>
                                        <option value="pcmc">PCMC (Physics, Chemistry, Maths, CS)</option>
                                        <option value="neet">NEET Preparation</option>
                                        <option value="iit-jee">IIT-JEE Preparation</option>
                                        <option value="cet">CET Preparation</option>
                                        <option value="sat">SAT Preparation</option>
                                        <option value="foundation">Foundation Course</option>
                                        <option value="crash">Crash Course</option>
                                        <option value="math-foundation">Math Foundation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Grade/Class</label>
                                    <input type="text" name="grade" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                                    <textarea name="message" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button type="button" onClick={closeAdmissionModal} className="mr-4 px-6 py-2 text-gray-600 hover:text-gray-800 font-medium">Cancel</button>
                                    <button type="submit" className="px-6 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors">Submit Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
