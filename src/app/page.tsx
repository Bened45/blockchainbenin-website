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

export const metadata: Metadata = {
    title: "Accueil", // Will be "Accueil | Blockchain Bénin"
    description: "Blockchain Bénin est la première communauté blockchain au Bénin. Nous formons, accompagnons et connectons les acteurs de l'écosystème Web3.",
};

export default function Home() {
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
                <Events />
                <Partners />
                <Gallery items={sortedGallery} />
                <Newsletter />
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}

