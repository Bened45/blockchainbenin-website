import React from 'react';
import Link from 'next/link';
import Section from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

const Gallery = () => {
    const galleryItems = [
        { title: "Campus Meetup Tour", category: "Événement", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop", size: "large" },
        { title: "FAB Summit", category: "Conférence", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop", size: "small" },
        { title: "Club Blockchain", category: "Communauté", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop", size: "tall" },
        { title: "Certification", category: "Formation", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop", size: "small" },
        { title: "BB Week", category: "Festival", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop", size: "wide" },
    ];

    return (
        <Section id="gallery" className="bg-dark-bg text-white py-32">
            <div className="container mx-auto px-4 mb-20 flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Moments <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Inoubliables</span>
                    </h2>
                    <p className="text-gray-700 text-xl max-w-md">
                        Plongez au cœur de l'action. Revivez l'énergie de notre communauté.
                    </p>
                </div>
                <Link href="/gallery" className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors">
                    Voir toute la galerie <ArrowUpRight size={18} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                {galleryItems.map((item, index) => (
                    <Link
                        href="/galerie"
                        key={index}
                        className={`
                            group relative rounded-3xl overflow-hidden cursor-pointer block
                            ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                            ${item.size === 'wide' ? 'md:col-span-2' : ''}
                            ${item.size === 'tall' ? 'md:row-span-2' : ''}
                        `}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-primary-400 text-sm font-bold uppercase tracking-wider mb-2 block">{item.category}</span>
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <button className="inline-flex items-center gap-2 text-white border-b border-white pb-1">
                    Voir toute la galerie <ArrowUpRight size={18} />
                </button>
            </div>
        </Section>
    );
};

export default Gallery;
