import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
}) => {
    const variants = {
        primary: 'bg-primary-100 text-primary-700 border-primary-200',
        secondary: 'bg-secondary-100 text-secondary-700 border-secondary-200',
        success: 'bg-green-100 text-green-700 border-green-200',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        error: 'bg-red-100 text-red-700 border-red-200',
        accent: 'bg-accent-100 text-accent-700 border-accent-200',
    };

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
    };

    const badgeClasses = `
        inline-flex items-center gap-1.5 font-medium rounded-full border
        ${variants[variant]}
        ${sizes[size]}
        ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
        <span className={badgeClasses}>
            {icon && <span className="inline-flex">{icon}</span>}
            {children}
        </span>
    );
};

export default Badge;
