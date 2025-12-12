import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import JoinForm from '@/components/JoinForm';
import { CheckCircle2, Users, Briefcase, Heart, ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Rejoindre | Blockchain Bénin',
    description: 'Devenez membre, partenaire ou bénévole et participez à la révolution blockchain au Bénin.',
};

export default function JoinPage() {
    return (
        <main className="bg-white min-h-screen">

            {/* ============================
                HERO SECTION
            ============================= */}
            <div className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
                {/* Image de fond */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/community-team.png"
                        alt="Community Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay sombre pour la lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/70 to-dark-bg/90" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Bouton de retour */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 mb-8 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Retour à l&apos;accueil</span>
                    </Link>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 mb-8 animate-fade-in">
                            <Users size={16} />
                            <span className="text-sm font-medium">Communauté & Écosystème</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-slide-up">
                            Rejoignez l&apos;Écosystème <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                Blockchain du Bénin
                            </span>
                        </h1>

                        <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-200">
                            Devenez acteur du changement. Que vous soyez étudiant, professionnel ou entreprise, il y a une place pour vous dans notre communauté grandissante.
                        </p>
                    </div>
                </div>
            </div>
            {/* ============================
                MEMBERSHIP OPTIONS
            ============================= */}
            <Section className="py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Membre */}
                    <MembershipCard
                        icon={<Users size={32} />}
                        title="Membre Individuel"
                        description="Pour les étudiants, développeurs et passionnés qui veulent apprendre et grandir."
                        color="primary"
                        items={[
                            'Accès aux formations',
                            'Réseau communautaire',
                            'Mentorat exclusif',
                            'Événements privés',
                        ]}
                    />

                    {/* Partenaire */}
                    <PartnerCard />

                    {/* Bénévole */}
                    <MembershipCard
                        icon={<Heart size={32} />}
                        title="Bénévole"
                        description="Pour ceux qui veulent donner de leur temps et contribuer à l’impact social."
                        color="purple"
                        items={[
                            'Impact social direct',
                            'Expérience terrain',
                            'Certificat bénévolat',
                            'Réseau étendu',
                        ]}
                    />
                </div>
            </Section>

            {/* ============================
                APPLICATION FORM
            ============================= */}
            <Section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">

                    {/* Texte à gauche */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Prêt à faire <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                                le grand saut ?
                            </span>
                        </h2>

                        <p className="text-xl text-gray-700 mb-8">
                            Remplissez le formulaire ci-contre pour initier votre demande d&apos;adhésion. Notre équipe examinera votre profil et vous contactera sous 48h.
                        </p>

                        <div className="relative h-64 w-full rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/community-team.png"
                                alt="Community"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-white shadow-xl p-8 md:p-10 rounded-3xl border border-gray-200">
                            <JoinForm />
                        </div>
                    </div>

                </div>
            </Section>
        </main>
    );
}

/* ===========================================================
   REUSABLE COMPONENTS
=========================================================== */

function MembershipCard({
    icon,
    title,
    description,
    items,
    color,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
    color: string;
}) {
    const bg = {
        primary: 'bg-primary/10 text-primary-600',
        purple: 'bg-purple-100 text-purple-600',
    }[color];

    const iconColor = {
        primary: 'text-primary-500',
        purple: 'text-purple-500',
    }[color];

    return (
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 hover:border-primary-400 transition-all duration-300 shadow-sm">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${bg}`}>
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

            <p className="text-gray-700 mb-8">{description}</p>

            <ul className="space-y-3 mb-8">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800">
                        <CheckCircle2 size={18} className={iconColor} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function PartnerCard() {
    return (
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-secondary/40 hover:border-secondary-500 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                POPULAIRE
            </div>

            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary-600 mb-6 group-hover:scale-110 transition-transform">
                <Briefcase size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Partenaire / Entreprise</h3>

            <p className="text-gray-700 mb-8">
                Pour les entreprises qui souhaitent innover et recruter les meilleurs talents.
            </p>

            <ul className="space-y-3 mb-8">
                {['Visibilité marque', 'Accès aux talents', 'Innovation lab', 'Sponsoring événements'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800">
                        <CheckCircle2 size={18} className="text-secondary-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
