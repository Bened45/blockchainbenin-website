import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Stats from "@/components/Stats";
import Pillars from "@/components/Pillars";
import Events from "@/components/Events";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from 'next';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const metadata: Metadata = {
    title: "Accueil", // Will be "Accueil | Blockchain Bénin"
    description: "Blockchain Bénin est la première communauté blockchain au Bénin. Nous formons, accompagnons et connectons les acteurs de l'écosystème Web3.",
};

const reader = createReader('', keystaticConfig);

export default async function Home() {
    // Fetch events and gallery data from Keystatic
    const eventsData = await reader.collections.events.all();
    const galleryData = await reader.collections.gallery.all();

    // Transform events data - resolve async description to string
    const transformedEvents = await Promise.all(
        eventsData.map(async (event) => {
            // Get description content as string
            const descriptionNodes = await event.entry.description();
            const descriptionText = descriptionNodes
                .map((node: any) => {
                    if (node.type === 'paragraph' && node.children) {
                        return node.children.map((child: any) => child.text || '').join('');
                    }
                    return '';
                })
                .join(' ');

            return {
                slug: event.slug,
                entry: {
                    ...event.entry,
                    description: descriptionText,
                },
            };
        })
    );

    // Sort events by date (most recent first)
    const sortedEvents = transformedEvents.sort((a, b) => {
        const dateA = a.entry.date ? new Date(a.entry.date) : new Date(0);
        const dateB = b.entry.date ? new Date(b.entry.date) : new Date(0);
        return dateB.getTime() - dateA.getTime();
    });

    // Sort gallery by date (most recent first)
    const sortedGallery = galleryData.sort((a, b) => {
        const dateA = a.entry.date ? new Date(a.entry.date) : new Date(0);
        const dateB = b.entry.date ? new Date(b.entry.date) : new Date(0);
        return dateB.getTime() - dateA.getTime();
    });

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />
            <Hero />

            {/* Sections without spacing gaps */}
            <div>
                {/* <About /> */}
                <Programs />
                <MissionVision />
                <Stats />
                <Pillars />
                <Events events={sortedEvents} />
                <Partners />
                <Gallery items={sortedGallery} />
                <Newsletter />
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}

