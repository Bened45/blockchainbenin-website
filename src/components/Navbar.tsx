"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'A Propos', href: '/about' },
        { name: 'Programmes', href: '/programmes' },
        { name: 'Club Blockchain', href: '/club-blockchain' },
        { name: 'Ressources', href: '/ressources' },
        { name: 'Événements', href: '/evenements' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname?.startsWith(href);
    };

    return (
        <nav
            className={`
                 fixed w-full z-50 transition-all duration-300
    ${scrolled
        ? 'bg-[#003E66] shadow-2xl border-b border-[#003E66]'
        : 'bg-[#003E66] border-b border--[#003E66]'
    }
            `}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 lg:w-32 lg:h-32 relative flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Blockchain Bénin Charity Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                                        ${isActive(link.href)
                                            ? 'text-white'
                                            : 'text-gray-300 hover:text-white'
                                        }
                                        group
                                    `}
                                >
                                    {link.name}
                                    {isActive(link.href) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                                    )}
                                    {!isActive(link.href) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-8 transition-all duration-300"></span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:block">
                        <Button
                            href="#join"
                            variant="primary"
                            size="sm"
                            className="shadow-glow-primary"
                        >
                            Rejoindre →
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <Menu className="block h-6 w-6" />
                            ) : (
                                <X className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className="glass-dark border-t border-white/10">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                                    block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                                    ${isActive(link.href)
                                        ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button
                                href="#join"
                                variant="primary"
                                className="w-full justify-center"
                            >
                                Rejoindre →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
