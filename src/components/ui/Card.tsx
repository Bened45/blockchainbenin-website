import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'bordered' | 'gradient' | 'glass';
    hover?: 'lift' | 'glow' | 'tilt' | 'none';
    padding?: 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'default',
    hover = 'lift',
    padding = 'md',
    rounded = 'xl',
}) => {
    const variants = {
        default: 'bg-white shadow-md',
        elevated: 'bg-white shadow-xl',
        bordered: 'bg-white border-2 border-gray-200',
        gradient: 'bg-gradient-to-br from-primary-500 to-primary-700 text-white',
        glass: 'glass',
    };

    const hovers = {
        lift: 'hover:shadow-2xl hover:-translate-y-2',
        glow: 'hover:shadow-glow-primary',
        tilt: 'hover:rotate-1 hover:scale-105',
        none: '',
    };

    const paddings = {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const roundeds = {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
    };

    const cardClasses = `
        ${variants[variant]}
        ${hovers[hover]}
        ${paddings[padding]}
        ${roundeds[rounded]}
        ${className}
        transition-all duration-300
    `.trim().replace(/\s+/g, ' ');

    return <div className={cardClasses}>{children}</div>;
};

export default Card;
