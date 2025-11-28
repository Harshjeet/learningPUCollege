'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useLanguage } from '../../context/LanguageContext';
import ApplicationForm from '../../components/ApplicationForm';

const Careers = () => {
    const { t } = useLanguage();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    const openApplicationForm = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setModalOpen(true);
    };

    const closeApplicationModal = () => {
        setModalOpen(false);
        setSelectedJob(null);
    };

    const openings = [
        {
            title: "Senior Physics Lecturer",
            department: "Science (PUC)",
            location: "Mysore Campus",
            type: "Full-time",
            description: "We are looking for an experienced Physics lecturer with a passion for teaching and a strong command of the subject to guide our students for competitive exams like NEET and JEE."
        },
        {
            title: "Mathematics Faculty",
            department: "Science (PUC)",
            location: "Mysore Campus",
            type: "Full-time",
            description: "Join our team of expert mathematicians to inspire students and help them master complex concepts for board and entrance examinations."
        },
        {
            title: "Student Counselor",
            department: "Administration",
            location: "Mysore Campus",
            type: "Full-time",
            description: "We need a compassionate counselor to support our students' mental well-being and academic growth."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 bg-sky-900 text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-sky-900/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[url('/resources/gallery/campus-1.jpg')] bg-cover bg-center opacity-30" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Join Our Team</h1>
                    <p className="text-xl max-w-2xl mx-auto text-sky-100">
                        Be a part of an institution that is shaping the future of education. We are always looking for passionate educators and staff.
                    </p>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-sky-900 mb-4">Why Work With Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            At Learners PU College, we believe in growth, not just for our students, but for our faculty and staff as well.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Growth</h3>
                            <p className="text-gray-600">Regular workshops, training sessions, and opportunities to attend conferences.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Environment</h3>
                            <p className="text-gray-600">Work with some of the best minds in education in a supportive and friendly atmosphere.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 text-sky-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">World-Class Facilities</h3>
                            <p className="text-gray-600">Access to modern labs, libraries, and technology to aid your teaching and research.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold text-sky-900 mb-8">Current Openings</h2>
                    <div className="space-y-6">
                        {openings.map((job, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                                        <div className="flex space-x-4 text-sm text-gray-500 mt-1">
                                            <span>{job.department}</span>
                                            <span>•</span>
                                            <span>{job.location}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <button onClick={() => openApplicationForm(job.title)} className="mt-4 md:mt-0 bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-colors">
                                        Apply Now
                                    </button>
                                </div>
                                <p className="text-gray-600">{job.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center bg-sky-50 rounded-2xl p-8">
                        <h3 className="text-xl font-semibold text-sky-900 mb-2">Don't see a suitable role?</h3>
                        <p className="text-gray-600 mb-6">
                            We are always on the lookout for talent. Send your resume to <a href="mailto:careers@lgs.edu" className="text-sky-600 font-medium hover:underline">careers@lgs.edu</a> and we will get back to you.
                        </p>
                    </div>
                </div>
            </section>

            <ApplicationForm
                isOpen={modalOpen}
                onClose={closeApplicationModal}
                initialCourse={selectedJob}
            />
        </main>
    );
};

export default Careers;
