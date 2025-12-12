"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';

// URL du formulaire Google Forms pour l'inscription au Club Blockchain
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdA4BuImBw4m1zN997DowOTt7AHt7FLThmgCAbtz9c0sH2FxQ/viewform?embedded=true";

const ClubJoinForm = () => {
    return (
        <div className="w-full">
            {/* Message d'information */}
            <div className="mb-6 p-4 bg-primary-50 border border-primary-200 rounded-xl">
                <div className="flex items-start gap-3">
                    <ExternalLink className="text-primary-600 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                        <h3 className="font-semibold text-primary-900 mb-1">
                            Formulaire d&apos;inscription
                        </h3>
                        <p className="text-sm text-primary-700">
                            Remplissez le formulaire ci-dessous pour rejoindre le Club Blockchain.
                            Vos informations seront traitées en toute confidentialité.
                        </p>
                    </div>
                </div>
            </div>

            {/* Iframe Google Forms */}
            <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                    src={GOOGLE_FORM_URL}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full"
                    title="Formulaire d'inscription au Club Blockchain"
                >
                    Chargement…
                </iframe>
            </div>

            {/* Lien alternatif si l'iframe ne fonctionne pas */}
            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">
                    Le formulaire ne s&apos;affiche pas correctement ?
                </p>
                <a
                    href={GOOGLE_FORM_URL.replace('?embedded=true', '')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                    Ouvrir dans un nouvel onglet
                    <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};

export default ClubJoinForm;
