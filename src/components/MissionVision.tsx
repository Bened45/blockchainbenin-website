import React from 'react';
import Section from './ui/Section';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

const MissionVision = () => {
    return (
        <Section id="mission-vision" className="bg-dark-bg relative overflow-hidden py-32">
            {/* Abstract Background Shapes */}
            <div className="absolute te résoudre des défis complexes avec des solutions décentralisées.op-0 right-0 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-4">

                {/* Mission Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-400 border border-primary/20 mb-6">
                            <Target size={16} />
                            <span className="text-sm font-bold tracking-wider uppercase">Notre Mission</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                            Éduquer pour <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Transformer</span>
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-primary pl-6">
                            Nous ne formons pas seulement des développeurs. Nous forgeons les architectes de l'avenir numérique africain, capables de résoudre des défis complexes avec des solutions décentralisées.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Formation de qualité', 'Innovation locale', 'Inclusion numérique', 'Leadership tech'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-500">
                                    <CheckCircle2 className="text-primary-500" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
                                alt="Mission"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-white font-bold text-2xl">Impact Réel</div>
                                <div className="text-gray-100">Des solutions concrètes pour l'Afrique</div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-2xl opacity-40 z-0"></div>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary-400 border border-secondary/20 mb-6">
                            <Eye size={16} />
                            <span className="text-sm font-bold tracking-wider uppercase">Notre Vision</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-green mb-8 leading-tight">
                            Le Hub Blockchain <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-200">de Référence</span>
                        </h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8 border-l-4 border-secondary pl-6">
                            D'ici 2030, nous serons le cœur battant de l'innovation blockchain en Afrique francophone. Un écosystème où talents, capitaux et idées convergent pour créer de la valeur durable.
                        </p>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="text-4xl font-bold text-white mb-2">100+</div>
                            <div className="text-secondary-400 font-medium">Startups incubées (Objectif 2030)</div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
                                alt="Vision"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="text-white font-bold text-2xl">Futur Décentralisé</div>
                                <div className="text-gray-300">Une économie numérique inclusive</div>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-40 z-0"></div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default MissionVision;
