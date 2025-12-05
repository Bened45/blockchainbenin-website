"use client";

import React, { useState } from 'react';
import Button from './ui/Button';
import { User, Mail, Heart, Briefcase, Loader2, CheckCircle } from 'lucide-react';

const SupportForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'donation', // donation, partner, volunteer
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');

        // Reset form after delay
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', type: 'donation', message: '' });
        }, 3000);
    };

    if (status === 'success') {
        return (
            <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white">Merci pour votre soutien !</h3>
                <p className="text-gray-400">
                    Nous avons bien reçu votre demande. Notre équipe vous contactera dans les plus brefs délais.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Nom complet</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="text"
                            id="name"
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all disabled:opacity-50"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                        <input
                            type="email"
                            id="email"
                            required
                            disabled={status === 'loading'}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all disabled:opacity-50"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Type of Support */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Je souhaite soutenir en tant que</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { id: 'donation', label: 'Don', icon: Heart },
                        { id: 'partner', label: 'Partenaire', icon: Briefcase },
                        { id: 'volunteer', label: 'Bénévole', icon: User },
                    ].map((type) => (
                        <button
                            key={type.id}
                            type="button"
                            disabled={status === 'loading'}
                            onClick={() => setFormData({ ...formData, type: type.id })}
                            className={`cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col items-center gap-2 disabled:opacity-50
                ${formData.type === type.id ? 'bg-primary/20 border-primary text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'}
              `}
                        >
                            <type.icon size={24} />
                            <span className="font-medium">{type.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message (Optionnel)</label>
                <div className="relative">
                    <textarea
                        id="message"
                        rows={4}
                        disabled={status === 'loading'}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none disabled:opacity-50"
                        placeholder="Dites-nous comment vous souhaitez aider..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                        <Loader2 size={20} className="animate-spin" />
                        Envoi en cours...
                    </span>
                ) : (
                    'Envoyer ma demande'
                )}
            </Button>
        </form>
    );
};

export default SupportForm;

