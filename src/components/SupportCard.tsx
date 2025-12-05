import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SupportCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, description, link }) => {
    return (
        <div className="glass p-6 rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            {link && (
                <a href={link} className="inline-flex items-center text-primary hover:underline">
                    En savoir plus <ArrowRight className="ml-1" size={16} />
                </a>
            )}
        </div>
    );
};

export default SupportCard;
