"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "Qu'est-ce que la blockchain ?",
            answer: "La blockchain est une technologie de stockage et de transmission d'informations, transparente et sécurisée, fonctionnant sans organe central de contrôle. C'est comme un grand livre comptable public et infalsifiable qui enregistre toutes les transactions."
        },
        {
            question: "Comment rejoindre Blockchain Bénin ?",
            answer: "Vous pouvez nous rejoindre en remplissant le formulaire sur notre page 'Rejoindre'. Nous organisons régulièrement des événements ouverts à tous, des formations gratuites et payantes, ainsi que des meetups pour la communauté."
        },
        {
            question: "Les formations sont-elles payantes ?",
            answer: "Nous proposons à la fois des formations gratuites d'introduction et des formations certifiantes payantes plus approfondies. Consultez notre page Programmes pour découvrir toutes nos offres."
        },
        {
            question: "Comment puis-je soutenir le projet ?",
            answer: "Vous pouvez nous soutenir de plusieurs façons : faire un don, devenir partenaire, ou contribuer en tant que bénévole. Visitez notre page 'Nous Soutenir' pour plus de détails."
        },
        {
            question: "Quels sont les prérequis pour suivre une formation ?",
            answer: "Pour nos formations d'introduction, aucun prérequis technique n'est nécessaire. Pour les formations avancées, des connaissances de base en programmation peuvent être recommandées selon le programme choisi."
        },
        {
            question: "Organisez-vous des événements en présentiel ?",
            answer: "Oui ! Nous organisons régulièrement des meetups, ateliers et la BB Week à Cotonou. Suivez notre page Événements et nos réseaux sociaux pour ne rien manquer."
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-dark-bg">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 mb-6">
                        <HelpCircle size={16} />
                        <span className="text-sm font-medium">Questions fréquentes</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        FAQ
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Retrouvez les réponses aux questions les plus fréquemment posées sur la blockchain et notre organisation.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-white font-medium pr-4">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
                    <a
                        href="/soutenir#form"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-glow-primary transition-all duration-300"
                    >
                        Nous contacter
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
