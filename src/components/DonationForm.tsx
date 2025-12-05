"use client";

import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Bitcoin, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const DonationForm = () => {
    const [amount, setAmount] = useState<number | null>(5000);
    const [customAmount, setCustomAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('mobile');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const predefinedAmounts = [2000, 5000, 10000, 25000, 50000];

    const paymentMethods = [
        { id: 'mobile', label: 'Mobile Money', icon: Smartphone, description: 'MTN, Moov, Orange' },
        { id: 'card', label: 'Carte Bancaire', icon: CreditCard, description: 'Visa, Mastercard' },
        { id: 'crypto', label: 'Crypto', icon: Bitcoin, description: 'BTC, ETH, USDT' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalAmount = amount || parseInt(customAmount);
        console.log('Donation submitted:', { amount: finalAmount, paymentMethod, ...formData });
        alert(`Merci pour votre don de ${finalAmount.toLocaleString()} FCFA ! Vous allez être redirigé vers la page de paiement.`);
    };

    const handleAmountSelect = (value: number) => {
        setAmount(value);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (value: string) => {
        setCustomAmount(value);
        setAmount(null);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Amount Selection */}
            <div className="space-y-4">
                <label className="text-lg font-semibold text-white">Choisissez un montant</label>
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                    {predefinedAmounts.map((value) => (
                        <button
                            key={value}
                            type="button"
                            onClick={() => handleAmountSelect(value)}
                            className={`
                                py-2 sm:py-3 px-2 sm:px-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 border
                                ${amount === value
                                    ? 'bg-primary-500 border-primary-500 text-white shadow-glow-primary'
                                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                                }
                            `}
                        >
                            {value.toLocaleString()}
                        </button>
                    ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                    <input
                        type="number"
                        placeholder="Autre montant"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">FCFA</span>
                </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
                <label className="text-lg font-semibold text-white">Mode de paiement</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {paymentMethods.map((method) => (
                        <div
                            key={method.id}
                            onClick={() => setPaymentMethod(method.id)}
                            className={`
                                cursor-pointer rounded-xl p-4 border transition-all duration-300
                                ${paymentMethod === method.id
                                    ? 'bg-primary/20 border-primary text-white'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                                }
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <method.icon size={24} />
                                <div>
                                    <div className="font-semibold text-white">{method.label}</div>
                                    <div className="text-sm text-gray-400">{method.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Donor Information */}
            <div className="space-y-4">
                <label className="text-lg font-semibold text-white">Vos informations (optionnel)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Votre email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                </div>
                <textarea
                    placeholder="Un message ? (optionnel)"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
            </div>

            {/* Submit */}
            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                rightIcon={<ArrowRight size={20} />}
            >
                Faire un don de {(amount || parseInt(customAmount) || 0).toLocaleString()} FCFA
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 pt-4">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary-500" />
                    <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-secondary-500" />
                    <span>Reçu fiscal disponible</span>
                </div>
            </div>
        </form>
    );
};

export default DonationForm;
