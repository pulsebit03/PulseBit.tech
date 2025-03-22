'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect } from 'react';
import { initAnimations } from '../initAnimations';

export default function About() {
    useEffect(() => {
        initAnimations();
    }, []);
    return (
        <>
            <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Hero Section */}
                    <section className="text-center space-y-6 fade-trigger">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">We Transform Ideas Into Digital Reality</h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Building innovative solutions since 2015
                        </p>
                    </section>

                    {/* Metrics Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center fade-trigger delay-100">
                        {[
                            { number: '500+', label: 'Projects Completed' },
                            { number: '150+', label: 'Team Members' },
                            { number: '98%', label: 'Client Satisfaction' }
                        ].map((metric, index) => (
                            <div key={index} className="p-6">
                                <h2 className="text-4xl font-bold text-primary mb-2">{metric.number}</h2>
                                <p className="text-gray-600 dark:text-gray-300">{metric.label}</p>
                            </div>
                        ))}
                    </section>

                    {/* Our Story */}
                    <section className="space-y-8 fade-trigger delay-200">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[300px] md:h-[400px]">
                                <Image
                                    src="/hero-image.svg"
                                    alt="Our Story"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    {[
                                        { year: '2015', text: 'Company founded in Chicago, Illinois.' },
                                        { year: '2018', text: 'Reach 100+ team members, expand into global markets.' },
                                        { year: '2020', text: 'Launched award-winning products globally.' },
                                        { year: '2023', text: 'Established presence in major markets worldwide.' }
                                    ].map((milestone, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="text-primary font-bold">{milestone.year}</div>
                                            <div className="text-gray-600 dark:text-gray-300">{milestone.text}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission, Vision, Values */}
                    <section className="grid md:grid-cols-3 gap-8 fade-trigger delay-300">
                        {[
                            {
                                title: 'Mission',
                                description: 'To provide innovative solutions that empower businesses to thrive in the digital era.'
                            },
                            {
                                title: 'Vision',
                                description: 'To be the leading innovator in creating seamless, future-ready digital experiences.'
                            },
                            {
                                title: 'Values',
                                description: 'Integrity, creativity, collaboration, and commitment to excellence in everything we do.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </section>

                    {/* Meet Our Leadership */}
                    <section className="space-y-8 fade-trigger delay-400">
                        <h2 className="text-3xl font-bold text-center">Meet Our Leadership</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: 'Ashish Marathi',
                                    role: 'CEO & Founder',
                                    image: '/hero-image.svg',
                                    socials: ['twitter', 'linkedin', 'github']
                                },
                                {
                                    name: 'Ashweta Yadav',
                                    role: 'Product Manager',
                                    image: '/hero-image.svg',
                                    socials: ['twitter', 'linkedin']
                                },
                                {
                                    name: 'Tim Arnold',
                                    role: 'Head of Development & Co-Founder',
                                    image: '/hero-image.svg',
                                    socials: ['twitter', 'linkedin', 'github']
                                }
                            ].map((leader, index) => (
                                <div key={index} className="text-center space-y-4">
                                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{leader.role}</p>
                                    <div className="flex justify-center space-x-4">
                                        {leader.socials.map((social, socialIndex) => (
                                            <a
                                                key={socialIndex}
                                                href={`#${social}`}
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                                            >
                                                <span className="sr-only">{social}</span>
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="space-y-8 fade-trigger delay-500">
                        <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: 'Collaborative Environment',
                                    description: 'We foster a culture of teamwork and mutual support'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                                        </svg>
                                    ),
                                    title: 'Customer Focus',
                                    description: 'Our clients success is our top priority'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    ),
                                    title: 'Excellence',
                                    description: 'We strive for excellence in everything we do'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                    title: 'Integrity',
                                    description: 'We maintain the highest ethical standards'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: 'Innovation',
                                    description: 'We embrace new ideas and creative solutions'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    ),
                                    title: 'Work-Life Balance',
                                    description: 'We value our teams wellbeing'
                                }
                            ].map((value, index) => (
                                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center space-x-4 mb-4">
                                        {value.icon}
                                        <h3 className="text-xl font-semibold">{value.title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trusted By */}
                    <section className="space-y-8 fade-trigger delay-600 pb-10">
                        <h2 className="text-3xl font-bold text-center">Trusted By</h2>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                            <Image src="/logo/techgrade.svg" alt="TechGrade" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                            <Image src="/logo/photograde.svg" alt="PhotoGrade" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                            <Image src="/logo/freelance.svg" alt="Freelance" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                            <Image src="/logo/softpoint.svg" alt="SoftPoint" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                        </div>
                    </section>
                </div>

            </div>
            <Footer />
        </>
    );
}