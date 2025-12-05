"use client";

import React, { useState } from 'react';
import Button from './ui/Button';
import { Send, User, Mail, MessageSquare, Briefcase } from 'lucide-react';

const JoinForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'member', // member, partner, volunteer
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual submission logic
        console.log('Form submitted:', formData);
        alert('Merci de votre intérêt ! Nous vous recontacterons bientôt.');
    };

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
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
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
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Type of Membership */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Je souhaite rejoindre en tant que</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { id: 'member', label: 'Membre', icon: User },
                        { id: 'partner', label: 'Partenaire', icon: Briefcase },
                        { id: 'volunteer', label: 'Bénévole', icon: Send },
                    ].map((type) => (
                        <div
                            key={type.id}
                            onClick={() => setFormData({ ...formData, type: type.id })}
                            className={`
                                cursor-pointer rounded-xl p-4 border transition-all duration-300 flex flex-col items-center gap-2
                                ${formData.type === type.id
                                    ? 'bg-primary/20 border-primary text-white'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                                }
                            `}
                        >
                            <type.icon size={24} />
                            <span className="font-medium">{type.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message (Optionnel)</label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Dites-nous en plus sur vos motivations..."
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
                rightIcon={<Send size={20} />}
            >
                Envoyer ma candidature
            </Button>
        </form>
    );
};

export default JoinForm;
