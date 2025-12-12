"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Section from './ui/Section';
import Button from './ui/Button';
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

type Event = {
    slug: string;
    entry: {
        title: string;
        date: string | null;
        subtitle: string;
        description: string;
        image: string | null;
        category: string;
        action: string;
        location?: string;
        registrationLink?: string | null;
    };
};

type EventsProps = {
    events: Event[];
};

const Events = ({ events }: EventsProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Format date for display
    const formatDate = (dateString: string | null) => {
        if (!dateString) return { day: '??', month: '???' };
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.toLocaleDateString('fr-FR', { month: 'long' });
        return { day, month };
    };

    // Map category to French label
    const getCategoryLabel = (category: string) => {
        const labels: Record<string, string> = {
            conference: 'Conférence',
            hackathon: 'Hackathon',
            formation: 'Formation',
            meetup: 'Meetup',
            atelier: 'Atelier',
        };
        return labels[category] || category;
    };

    return (
        <Section id="events" className="bg-dark-bg py-32 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-2 md:mb-4">
                        Événements <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">À Venir</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-xl">
                        Ne manquez pas nos prochaines rencontres, formations et célébrations de l&apos;innovation.
                    </p>
                </div>

                <div className="flex gap-3 md:gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 md:p-4 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-3 md:p-4 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {events.map((event, index) => {
                    const { day, month } = formatDate(event.entry.date);
                    const categoryLabel = getCategoryLabel(event.entry.category);

                    return (
                        <div
                            key={index}
                            className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] snap-center group relative h-[400px] sm:h-[450px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                {event.entry.image && (
                                    <Image
                                        src={event.entry.image}
                                        alt={event.entry.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-90"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-bold border border-white/20">
                                        {categoryLabel}
                                    </span>
                                    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 text-white">
                                        <span className="text-xs uppercase font-bold">{month}</span>
                                        <span className="text-2xl font-bold">{day}</span>
                                    </div>
                                </div>

                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-display font-bold text-white mb-2">{event.entry.title}</h3>
                                    <p className="text-primary-400 font-medium mb-4">{event.entry.subtitle}</p>
                                    <p className="text-gray-300 mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                        {event.entry.description}
                                    </p>
                                    <Button
                                        href="#"
                                        variant="primary"
                                        className="w-full justify-between group/btn"
                                        rightIcon={<ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />}
                                    >
                                        {event.entry.action}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Events;
