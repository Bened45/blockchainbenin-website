"use client";

import React from 'react';
import Button from './ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-primary-900 to-purple-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-2/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-800"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Construisons l'avenir ensemble
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight animate-slide-up animation-delay-200">
                        Révolutionnez l'Afrique <br />
                        avec la <span className="gradient-text-secondary">Blockchain</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
                        Rejoignez le mouvement qui transforme l'Afrique francophone. Apprenez, innovez et construisez l'avenir avec la technologie blockchain.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-600">
                        <Button
                            href="#start"
                            variant="primary"
                            size="lg"
                            rightIcon={<ArrowRight size={20} />}
                            className="w-full sm:w-auto"
                        >
                            Commencer maintenant
                        </Button>
                        <Button
                            href="#support"
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-dark-bg"
                        >
                            Nous soutenir
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in animation-delay-800">
                        {[
                            { value: '1000+', label: 'Membres' },
                            { value: '50+', label: 'Événements' },
                            { value: '300+', label: 'Formés' },
                            { value: '20+', label: 'Partenaires' },
                        ].map((stat, index) => (
                            <div key={index} className="glass rounded-2xl p-6 backdrop-blur-xl">
                                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-3 text-white hover:text-white/80 transition-all duration-300 cursor-pointer group">
                    <span className="text-base font-medium tracking-wide">Découvrir</span>
                    <ChevronDown size={28} className="animate-bounce group-hover:translate-y-1 transition-transform" />
                </div>
            </div>

            {/* Photo Credit */}
            <div className="absolute bottom-4 left-4 text-xs text-gray-500 z-20">
                PHOTO TAKEN BY DR LIGHT PHOTOGRAPHY
            </div>
        </div>
    );
};

export default Hero;
