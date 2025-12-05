import React from 'react';
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "À Propos",
    description: "Découvrez l'histoire, la mission et l'équipe de Blockchain Bénin. Nous construisons l'avenir de la technologie blockchain en Afrique francophone.",
};

export default function AboutPage() {
    return <AboutClient />;
}
