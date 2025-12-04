"use client";

import React from 'react';
import Section from './ui/Section';
import { BookOpen, Lightbulb, Users, Heart } from 'lucide-react';

const Pillars = () => {
    const pillars = [
        {
            title: 'Éducation',
            description: 'Des formations de qualité, accessibles à tous les niveaux pour maîtriser la blockchain.',
            icon: <BookOpen size={40} />,
            color: 'from-primary-500 to-primary-700'
        },
        {
            title: 'Innovation',
            description: 'Encourager la créativité et développer des solutions adaptées aux défis africains.',
            icon: <Lightbulb size={40} />,
            color: 'from-accent-500 to-accent-700'
        },
        {
            title: 'Communauté',
            description: 'Un réseau solide de passionnés, développeurs et entrepreneurs blockchain.',
            icon: <Users size={40} />,
            color: 'from-secondary-500 to-secondary-700'
        },
        {
            title: 'Impact Social',
            description: 'Utiliser la blockchain pour créer un impact positif et durable en Afrique.',
            icon: <Heart size={40} />,
            color: 'from-primary-600 to-secondary-600'
        }
    ];

    return (
        <Section id="pillars" className="bg-gray-50 py-32">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-bg mb-6">
                    Nos Piliers Fondamentaux
                </h2>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                    Quatre fondations solides pour transformer l'écosystème blockchain africain
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {pillars.map((pillar, index) => (
                    <div key={index} className="group h-[400px] perspective-1000">
                        <div className="relative w-full h-full transition-all duration-700 preserve-3d group-hover:rotate-y-180">

                            {/* Front Side */}
                            <div className="absolute inset-0 backface-hidden">
                                <div className="h-full w-full bg-white rounded-[2rem] shadow-xl p-10 flex flex-col items-center justify-center text-center border border-gray-100 group-hover:shadow-2xl transition-shadow">
                                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                        {pillar.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-dark-bg">{pillar.title}</h3>
                                    <div className="mt-4 w-12 h-1 bg-gray-200 rounded-full"></div>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180">
                                <div className={`h-full w-full bg-gradient-to-br ${pillar.color} rounded-[2rem] shadow-xl p-10 flex flex-col items-center justify-center text-center text-white`}>
                                    <h3 className="text-2xl font-display font-bold mb-6">{pillar.title}</h3>
                                    <p className="text-lg leading-relaxed opacity-90">
                                        {pillar.description}
                                    </p>
                                    <button className="mt-8 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors font-medium">
                                        En savoir plus
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </Section>
    );
};

export default Pillars;
