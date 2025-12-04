import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const EventsPage = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: 'Stellar Pop City',
            date: '06 Décembre 2025',
            time: '09:00 - 18:00',
            location: 'Cotonou, Bénin',
            subtitle: 'Blockchain BENIN Week 2026',
            description: 'Une semaine dédiée à la blockchain avec conférences, ateliers et networking pour tous les passionnés de blockchain en Afrique.',
            participants: '500+ participants attendus',
            type: 'Conférence',
            status: 'upcoming'
        },
        {
            id: 2,
            title: 'Crypto Treasury',
            date: '06 Décembre 2025',
            time: '10:00 - 17:00',
            location: 'Cotonou, Bénin',
            subtitle: 'Crypto Treasury',
            description: '48h pour développer des solutions blockchain innovantes pour l\'Afrique. Mentorat, prix et opportunités de networking.',
            participants: '100+ développeurs',
            type: 'Hackathon',
            status: 'upcoming'
        },
        {
            id: 3,
            title: 'Noël en Or',
            date: '14 Décembre 2026',
            time: 'Temps plein - 6 semaines',
            location: 'Cotonou, Bénin',
            subtitle: 'Bootcamp Développeur Blockchain',
            description: 'Formation intensive de 6 semaines pour devenir développeur blockchain professionnel avec certification reconnue.',
            participants: '50 places disponibles',
            type: 'Formation',
            status: 'upcoming'
        }
    ];

    const pastEvents = [
        {
            id: 1,
            title: 'Campus Meetup Tour 2024',
            date: 'Octobre 2024',
            location: 'Universités du Bénin',
            description: 'Tournée dans 10 universités pour sensibiliser les étudiants à la blockchain.',
            participants: '500+ étudiants',
            images: 3
        },
        {
            id: 2,
            title: 'Hackathon DeFi 2024',
            date: 'Août 2024',
            location: 'Cotonou, Bénin',
            description: '48h de développement intensif avec 15 projets présentés.',
            participants: '80 développeurs',
            images: 5
        },
        {
            id: 3,
            title: 'Formation Smart Contracts',
            date: 'Juin 2024',
            location: 'En ligne & Présentiel',
            description: 'Formation de 8 semaines sur le développement de smart contracts.',
            participants: '150 certifiés',
            images: 4
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 pb-12">
                {/* Header Section */}
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
                        Événements Blockchain
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Participez à nos conférences, hackathons, formations et rencontres pour développer vos compétences blockchain
                    </p>
                </div>

                {/* Upcoming Events Section */}
                <div className="container mx-auto px-4 max-w-6xl mb-20">
                    <h2 className="text-3xl font-bold text-[#4CAF50] mb-8">
                        Événements à Venir
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
                            >
                                {/* Green Header */}
                                <div className="bg-[#4CAF50] p-6 text-white h-32 flex items-center justify-center">
                                    <h3 className="text-2xl font-bold text-center">{event.title}</h3>
                                </div>

                                {/* Body */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="text-[#4CAF50] font-bold text-sm mb-2">
                                        {event.date}
                                    </div>
                                    <div className="text-[#0066CC] font-bold text-sm mb-4">
                                        {event.subtitle}
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                                        {event.description}
                                    </p>

                                    {/* Event Details */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Clock size={14} />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <MapPin size={14} />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                                            <Users size={14} />
                                            <span>{event.participants}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-[#0066CC] text-white py-3 px-6 rounded-full font-medium hover:bg-[#0052A3] transition-colors">
                                        S'inscrire →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Events Section */}
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">
                        Événements Passés
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pastEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-gray-500">
                                        {event.date}
                                    </span>
                                    <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">
                                        {event.images} photos
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {event.title}
                                </h3>

                                <p className="text-gray-600 text-sm mb-4">
                                    {event.description}
                                </p>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <MapPin size={14} />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <Users size={14} />
                                        <span>{event.participants}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-gradient-to-r from-[#0066CC] to-[#4CAF50] rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Ne manquez aucun événement
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Abonnez-vous à notre newsletter pour recevoir les notifications de nos prochains événements blockchain.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-[#0066CC] rounded-full font-bold hover:bg-gray-100 transition-colors">
                                S'abonner à la newsletter
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                                Proposer un événement
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default EventsPage;
