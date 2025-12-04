"use client";

import React from 'react';
import Section from './ui/Section';

const Partners = () => {
    const partners = [
        { name: "Partner 1", icon: "🎓" },
        { name: "Partner 2", icon: "🌐" },
        { name: "Partner 3", icon: "💡" },
        { name: "Partner 4", icon: "🚀" },
        { name: "Partner 5", icon: "💎" },
        { name: "Partner 6", icon: "🔗" },
    ];

    return (
        <Section id="partners" className="bg-white py-20 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-700 uppercase tracking-widest">
                    Ils nous font confiance
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* Marquee Content - Duplicated for seamless loop */}
                <div className="animate-marquee flex gap-16 items-center whitespace-nowrap py-4">
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer grayscale hover:grayscale-0"
                        >
                            <span className="text-5xl">{partner.icon}</span>
                            <span className="text-2xl font-bold font-display">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Partners;
