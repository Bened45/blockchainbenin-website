import React from 'react';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import Image from 'next/image';
import ClubJoinForm from '@/components/ClubJoinForm';
import { ArrowLeft, Target, Eye, Heart, Users, Lightbulb, Rocket, ShoppingBag, Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Club Blockchain Bénin",
    description: "Rejoignez le Club Blockchain Bénin - La communauté étudiante blockchain du Bénin. Formation, networking et innovation Web3.",
};

export default function ClubBlockchainPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* ============================
                HERO SECTION
            ============================= */}
            <div className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
                {/* Image de fond */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/event-workshop.png"
                        alt="Club Blockchain Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay pour la lisibilité */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/85 via-primary-900/75 to-primary-900/90" />
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
                        {/* Logo du Club */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                <Image
                                    src="/logo-club-blockchain.png"
                                    alt="Club Blockchain Bénin"
                                    fill
                                    className="object-contain drop-shadow-2xl relative z-10"
                                    priority
                                />
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
                            Club Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300">Bénin</span>
                        </h1>

                        <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
                            La communauté étudiante qui façonne l&apos;avenir de la blockchain au Bénin. Rejoignez-nous pour apprendre, innover et construire ensemble.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#inscription"
                                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                            >
                                Rejoindre le Club
                            </a>
                            <a
                                href="#boutique"
                                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm border border-white/20"
                            >
                                Voir les Goodies
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================
                PRÉSENTATION DU CLUB
            ============================= */}
            <Section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Bienvenue au <span className="text-primary-500">Club Blockchain</span>
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Le Club Blockchain Bénin est une initiative étudiante visant à démocratiser l&apos;accès aux technologies blockchain et Web3 au sein des universités et écoles du Bénin.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                Nous sommes une communauté passionnée d&apos;étudiants, de développeurs et d&apos;innovateurs qui croient au pouvoir transformateur de la blockchain pour résoudre les défis locaux et créer de nouvelles opportunités.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-primary-50 p-6 rounded-2xl">
                                    <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                                    <div className="text-gray-700 font-medium">Membres actifs</div>
                                </div>
                                <div className="bg-secondary-50 p-6 rounded-2xl">
                                    <div className="text-4xl font-bold text-secondary-600 mb-2">50+</div>
                                    <div className="text-gray-700 font-medium">Événements organisés</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-20 blur-2xl"></div>
                            <Image
                                src="/images/community-team.png"
                                alt="Club Blockchain Team"
                                width={600}
                                height={400}
                                className="relative rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* ============================
                OBJECTIFS
            ============================= */}
            <Section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Nos <span className="text-primary-500">Objectifs</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Ce que nous visons à accomplir ensemble
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Former la nouvelle génération",
                                description: "Éduquer les étudiants aux technologies blockchain et Web3 à travers des formations pratiques et accessibles."
                            },
                            {
                                icon: <Lightbulb className="w-8 h-8" />,
                                title: "Stimuler l'innovation",
                                description: "Encourager la création de projets blockchain qui répondent aux besoins locaux et créent de la valeur."
                            },
                            {
                                icon: <Rocket className="w-8 h-8" />,
                                title: "Développer l'écosystème",
                                description: "Construire un réseau solide de talents blockchain au Bénin et en Afrique."
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Créer des opportunités",
                                description: "Connecter les membres avec des opportunités de stage, d'emploi et d'entrepreneuriat dans le Web3."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Favoriser la collaboration",
                                description: "Créer un environnement d'entraide et de partage de connaissances entre membres."
                            },
                            {
                                icon: <Eye className="w-8 h-8" />,
                                title: "Promouvoir la blockchain",
                                description: "Sensibiliser le grand public aux avantages et applications de la blockchain."
                            }
                        ].map((objective, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                                    {objective.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                                <p className="text-gray-700">{objective.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ============================
                MISSION & VISION
            ============================= */}
            <Section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-10 rounded-3xl text-white shadow-xl">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-6">Notre Mission</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Démocratiser l&apos;accès aux technologies blockchain au sein des universités béninoises en offrant des formations de qualité, en créant un espace d&apos;apprentissage collaboratif et en accompagnant les étudiants dans la réalisation de projets innovants qui contribuent au développement du Bénin.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-10 rounded-3xl text-white shadow-xl">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-6">Notre Vision</h3>
                            <p className="text-lg text-white/90 leading-relaxed">
                                Devenir le plus grand hub étudiant blockchain en Afrique francophone, formant une génération de leaders Web3 capables de créer des solutions blockchain qui transforment l&apos;économie africaine et positionnent le Bénin comme un acteur majeur de la révolution numérique.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ============================
                FORMULAIRE D'INSCRIPTION
            ============================= */}
            <Section id="inscription" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                                Rejoignez le <span className="text-primary-500">Club</span>
                            </h2>
                            <p className="text-xl text-gray-700">
                                Remplissez le formulaire ci-dessous pour devenir membre du Club Blockchain Bénin
                            </p>
                        </div>

                        <div className="bg-white shadow-xl p-8 md:p-12 rounded-3xl border border-gray-200">
                            <ClubJoinForm />
                        </div>
                    </div>
                </div>
            </Section>

            {/* ============================
                BOUTIQUE DE GOODIES
            ============================= */}
            <Section id="boutique" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Boutique de <span className="text-primary-500">Goodies</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Soutenez le club en achetant nos merchandises exclusives
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "T-Shirt Club Blockchain",
                                price: "10 000 FCFA",
                                image: "/images/event-workshop.png",
                                description: "T-shirt premium avec le logo du club"
                            },
                            {
                                name: "Casquette Club",
                                price: "7 500 FCFA",
                                image: "/images/event-meetup.png",
                                description: "Casquette ajustable avec broderie du logo"
                            },
                            {
                                name: "Stickers Pack",
                                price: "2 000 FCFA",
                                image: "/images/event-conference.png",
                                description: "Pack de 10 stickers assortis"
                            },
                            {
                                name: "Hoodie Club",
                                price: "15 000 FCFA",
                                image: "/images/event-hackathon.png",
                                description: "Sweat à capuche confortable et stylé"
                            },
                            {
                                name: "Sac Tote Bag",
                                price: "5 000 FCFA",
                                image: "/images/mission-training.png",
                                description: "Sac en toile réutilisable"
                            },
                            {
                                name: "Mug Club",
                                price: "4 000 FCFA",
                                image: "/images/vision-future.png",
                                description: "Mug céramique avec logo imprimé"
                            }
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                                        <Link
                                            href="/contact"
                                            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full font-medium transition-all inline-flex items-center gap-2"
                                        >
                                            <ShoppingBag size={18} />
                                            Commander
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-primary-50 p-8 rounded-2xl">
                        <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Commandes personnalisées</h3>
                        <p className="text-gray-700 mb-4">
                            Besoin d&apos;une commande en gros ou d&apos;un produit personnalisé ?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-bold transition-all"
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
