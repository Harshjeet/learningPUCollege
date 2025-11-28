'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import anime from 'animejs';

// Types
type InquiryType = 'admission' | 'course' | 'fee' | 'scholarship' | 'facility' | 'other';
type PositionType = 'mathematics-faculty' | 'biology-teacher' | 'academic-counselor' | 'general-application';

const Connect = () => {
    // State
    const [careerModalOpen, setCareerModalOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<PositionType | ''>('');
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

    useEffect(() => {
        // Animate contact cards on load
        anime({
            targets: '.contact-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            easing: 'easeOutQuart'
        });
    }, []);

    // Notification helper
    const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    // Form Handlers
    const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate form submission
        showNotification('Message sent successfully! We will contact you within 24 hours.', 'success');
        (e.target as HTMLFormElement).reset();
    };

    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        showNotification('Successfully subscribed to our newsletter!', 'success');
        (e.target as HTMLFormElement).reset();
    };

    const handleCareerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        showNotification('Application submitted successfully! We will review and get back to you soon.', 'success');
        setCareerModalOpen(false);
        (e.target as HTMLFormElement).reset();
    };

    const openCareerForm = (position: PositionType) => {
        setSelectedPosition(position);
        setCareerModalOpen(true);
    };

    return (
        <div className="bg-white relative">
            {/* Notification Toast */}
            {notification && (
                <div className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg text-white transform transition-all duration-300 ${notification.type === 'success' ? 'bg-green-500' : notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                    {notification.message}
                </div>
            )}

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-display text-5xl font-bold text-blue-900 mb-6">Connect with Us</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Get in touch with us for admissions, career opportunities, or any inquiries.
                            We're here to help you on your educational journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose the best way to connect with us based on your needs and preferences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Phone Contact */}
                        <div className="contact-card bg-white rounded-2xl p-6 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Phone</h3>
                            <p className="text-gray-600 text-sm mb-4">Speak directly with our admissions team</p>
                            <a href="tel:+15551234567" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                                +1 (555) 123-4567
                            </a>
                        </div>

                        {/* Email Contact */}
                        <div className="contact-card bg-white rounded-2xl p-6 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Email</h3>
                            <p className="text-gray-600 text-sm mb-4">Send us your queries and documents</p>
                            <a href="mailto:info@lgs.edu" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                                info@lgs.edu
                            </a>
                        </div>

                        {/* Address */}
                        <div className="contact-card bg-white rounded-2xl p-6 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600 text-sm mb-4">Come see our campus and facilities</p>
                            <p className="text-orange-500 font-semibold">
                                123 Education Street<br />
                                Learning City, LC 12345
                            </p>
                        </div>

                        {/* Office Hours */}
                        <div className="contact-card bg-white rounded-2xl p-6 shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 className="font-display text-xl font-semibold text-blue-900 mb-2">Office Hours</h3>
                            <p className="text-gray-600 text-sm mb-4">Best time to reach us</p>
                            <p className="text-orange-500 font-semibold text-sm">
                                Mon-Fri: 8:00 AM - 5:00 PM<br />
                                Sat: 9:00 AM - 2:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="font-display text-4xl font-bold text-blue-900 mb-6">Send us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about admissions, courses, or anything else? Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleInquirySubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                        <input type="text" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                        <input type="text" name="lastName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                        <input type="tel" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                                    <select name="inquiryType" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                                        <option value="">Select Inquiry Type</option>
                                        <option value="admission">Admission Inquiry</option>
                                        <option value="course">Course Information</option>
                                        <option value="fee">Fee Structure</option>
                                        <option value="scholarship">Scholarship Information</option>
                                        <option value="facility">Campus Facilities</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Please describe your inquiry in detail..."></textarea>
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" name="newsletter" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label className="ml-2 block text-sm text-gray-700">
                                        Subscribe to our newsletter for updates and educational content
                                    </label>
                                </div>

                                <button type="submit" className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map and Additional Info */}
                        <div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                                <h3 className="font-display text-2xl font-semibold text-blue-900 mb-6">Visit Our Campus</h3>
                                <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                        </svg>
                                        <p className="text-gray-600">Interactive Campus Map</p>
                                        <p className="text-sm text-gray-500 mt-2">123 Education Street, Learning City</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Free campus tours available daily</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Parking facilities available</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-orange-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-gray-700">Wheelchair accessible campus</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="font-display text-2xl font-semibold text-blue-900 mb-6">Quick Links</h3>
                                <div className="space-y-3">
                                    <a href="/courses" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Course Information
                                    </a>
                                    <a href="/courses" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Scholarship Programs
                                    </a>
                                    <a href="/life-at-lgs" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Campus Life
                                    </a>
                                    <a href="/about" className="flex items-center text-gray-700 hover:text-orange-500 transition-colors">
                                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        Meet Our Faculty
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Opportunities */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-blue-900 mb-4">Career Opportunities</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join our team of passionate educators and contribute to shaping the future of education.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Current Openings */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-blue-900 mb-6">Current Openings</h3>

                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-semibold text-lg text-blue-900">Senior Mathematics Faculty</h4>
                                            <p className="text-gray-600">IIT-JEE Division</p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Full Time</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Experienced mathematics teacher with proven track record in IIT-JEE coaching.
                                        Minimum 5 years experience required.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Experience: 5+ years</span>
                                        <button onClick={() => openCareerForm('mathematics-faculty')} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-semibold text-lg text-blue-900">Biology Teacher</h4>
                                            <p className="text-gray-600">NEET Division</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Part Time</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Dynamic biology teacher for NEET preparation. Medical background preferred.
                                        Excellent communication skills required.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Experience: 3+ years</span>
                                        <button onClick={() => openCareerForm('biology-teacher')} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="font-semibold text-lg text-blue-900">Academic Counselor</h4>
                                            <p className="text-gray-600">Student Support Services</p>
                                        </div>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Full Time</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Student counselor to guide academic planning and career choices.
                                        Psychology or education background preferred.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Experience: 2+ years</span>
                                        <button onClick={() => openCareerForm('academic-counselor')} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Work with Us */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-blue-900 mb-6">Why Work with Us</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                                        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-blue-900 mb-2">Competitive Compensation</h4>
                                        <p className="text-gray-600 text-sm">Industry-leading salary packages with performance bonuses and annual increments.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-blue-900 mb-2">Supportive Environment</h4>
                                        <p className="text-gray-600 text-sm">Collaborative work culture with continuous learning and professional development opportunities.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-blue-900 mb-2">Growth Opportunities</h4>
                                        <p className="text-gray-600 text-sm">Clear career progression paths with leadership development and training programs.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12V6H4v10h12z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg text-blue-900 mb-2">Modern Facilities</h4>
                                        <p className="text-gray-600 text-sm">State-of-the-art classrooms, labs, and technology to support effective teaching.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">Ready to Join Our Team?</h4>
                                <p className="text-gray-600 text-sm mb-4">
                                    Send your resume and cover letter to careers@lgs.edu or use our online application form.
                                </p>
                                <button onClick={() => openCareerForm('general-application')} className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                                    Submit General Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
                        <h2 className="font-display text-4xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Subscribe to our newsletter for the latest updates on courses, events, and educational insights.
                        </p>

                        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="flex-1 px-6 py-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-blue-200 text-sm mt-4">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Career Application Modal */}
            {careerModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setCareerModalOpen(false)}>
                    <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-display text-2xl font-bold text-blue-900">Career Application</h3>
                                <button onClick={() => setCareerModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleCareerSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input type="text" name="fullName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                                        <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Position Applied For *</label>
                                        <select name="position" required defaultValue={selectedPosition} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option value="">Select Position</option>
                                            <option value="mathematics-faculty">Senior Mathematics Faculty</option>
                                            <option value="biology-teacher">Biology Teacher</option>
                                            <option value="academic-counselor">Academic Counselor</option>
                                            <option value="general-application">General Application</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Total Experience *</label>
                                        <select name="experience" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option value="">Select Experience</option>
                                            <option value="0-2">0-2 years</option>
                                            <option value="2-5">2-5 years</option>
                                            <option value="5-10">5-10 years</option>
                                            <option value="10+">10+ years</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Current/Last Salary</label>
                                        <input type="text" name="currentSalary" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., ₹5,00,000 per annum" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Highest Qualification *</label>
                                    <input type="text" name="qualification" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., M.Sc Mathematics, B.Ed" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                                    <textarea name="coverLetter" rows={4} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us why you're interested in this position and what makes you a good fit..."></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Resume Upload</label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                        <p className="text-gray-600 mb-2">Upload your resume (PDF, DOC, DOCX)</p>
                                        <button type="button" onClick={() => document.getElementById('resumeUpload')?.click()} className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors">
                                            Choose File
                                        </button>
                                        <input type="file" id="resumeUpload" name="resume" accept=".pdf,.doc,.docx" className="hidden" />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input type="checkbox" name="terms" required className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    <label className="ml-2 block text-sm text-gray-700">
                                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                                    </label>
                                </div>

                                <div className="flex space-x-4 pt-4">
                                    <button type="submit" className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                        Submit Application
                                    </button>
                                    <button type="button" onClick={() => setCareerModalOpen(false)} className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Connect;
