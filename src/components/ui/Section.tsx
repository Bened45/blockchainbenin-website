import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'default' | 'gradient' | 'dark' | 'pattern';
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    container?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    background = 'default',
    padding = 'lg',
    container = true
}) => {
    const backgrounds = {
        default: 'bg-white',
        gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50',
        dark: 'bg-dark-bg text-white',
        pattern: 'bg-white relative before:absolute before:inset-0 before:bg-[url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230066CC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] before:opacity-50'
    };

    const paddings = {
        sm: 'py-8 md:py-12',
        md: 'py-12 md:py-16',
        lg: 'py-16 md:py-24',
        xl: 'py-24 md:py-32'
    };

    const sectionClasses = `${backgrounds[background]} ${paddings[padding]} ${className}`;
    const containerClasses = container ? "container mx-auto px-4 sm:px-6 lg:px-8" : "";

    return (
        <section id={id} className={sectionClasses}>
            {container ? (
                <div className={containerClasses}>
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export default Section;
