"use client";

import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    className = '',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getAnimationStyles = () => {
        const baseStyles = {
            transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
            transitionDelay: `${delay}ms`,
        };

        const hiddenStyles: Record<string, React.CSSProperties> = {
            'fade-up': { opacity: 0, transform: 'translateY(40px)' },
            'fade-down': { opacity: 0, transform: 'translateY(-40px)' },
            'fade-left': { opacity: 0, transform: 'translateX(40px)' },
            'fade-right': { opacity: 0, transform: 'translateX(-40px)' },
            'scale': { opacity: 0, transform: 'scale(0.9)' },
            'fade': { opacity: 0 },
        };

        const visibleStyles: React.CSSProperties = {
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1)',
        };

        return {
            ...baseStyles,
            ...(isVisible ? visibleStyles : hiddenStyles[animation]),
        };
    };

    return (
        <div ref={ref} style={getAnimationStyles()} className={className}>
            {children}
        </div>
    );
};

export default AnimateOnScroll;
