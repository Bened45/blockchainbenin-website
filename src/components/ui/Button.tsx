import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    target?: '_blank' | '_self';
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    target = '_self',
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

    const variants = {
        primary: "bg-gradient-primary text-white shadow-lg hover:shadow-glow-primary hover:brightness-110",
        secondary: "bg-gradient-secondary text-white shadow-lg hover:shadow-glow-secondary hover:brightness-110",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-primary/10"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {loading && <Loader2 className="animate-spin" size={18} />}
            {!loading && leftIcon && leftIcon}
            <span>{children}</span>
            {!loading && rightIcon && rightIcon}
        </>
    );

    if (href && !disabled) {
        return (
            <Link
                href={href}
                className={combinedClassName}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={combinedClassName}
            disabled={disabled || loading}
        >
            {content}
        </button>
    );
};

export default Button;
