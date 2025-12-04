import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-dark-bg text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            
                            <div className="w-10 h-10 lg:w-32 lg:h-32 relative flex-shrink-0">
                                <Image
                                    src="/logo2.png"
                                    alt="Blockchain Bénin Charity Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-gray-300 leading-relaxed">
                            Pionniers de l'éducation et de l'innovation blockchain en Afrique francophone. Construisons ensemble un avenir décentralisé.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            {['Accueil', 'À Propos', 'Programmes', 'Événements', 'Galerie', 'Contact'].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Initiatives */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6">Initiatives</h4>
                        <ul className="space-y-4">
                            {['Blockchain Charity', 'BB Week', 'Formations Certifiantes', 'Carrières', 'Devenir Partenaire'].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-gray-300 hover:text-secondary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-gray-300">
                                <MapPin className="text-primary flex-shrink-0" />
                                <span>Cotonou, Bénin<br />Quartier Haie Vive</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="text-primary flex-shrink-0" />
                                <span>+229 01 65 44 93 07</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="text-primary flex-shrink-0" />
                                <span>contact@blockchainbenin.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Blockchain BENIN. Tous droits réservés.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                        <a href="#" className="hover:text-white transition-colors">Conditions</a>
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
