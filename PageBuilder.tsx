import React, { useState, useEffect } from 'react';
import { 
    CheckCircleIcon, WhatsAppIcon, PlayCircleIcon, CalendarDaysIcon 
} from './icons';

interface CTAProps {
    navigate: (path: string) => void;
}

const Card: React.FC<{ children: React.ReactNode, className?: string, href?: string, onClick?: (e: React.MouseEvent) => void, isLink?: boolean }> = ({ children, className = '', href, onClick, isLink = false }) => {
    const commonClasses = `bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col ${className}`;
    
    if (isLink) {
        return (
            <a href={href} onClick={onClick} className={commonClasses}>
                {children}
            </a>
        );
    }

    return (
        <div className={commonClasses}>
            {children}
        </div>
    );
};


export const CTA: React.FC<CTAProps> = ({ navigate }) => (
    <section id="cta" className="bg-pastel-violet dark:bg-violet-950/30 text-slate-800 dark:text-slate-200 py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Ready to Transform Your WhatsApp Business?</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">Connect today for a personalized demonstration and see how WhatsForm can enhance your business communication.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <a href="https://wa.me/917849945640?text=Demo" className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-left flex items-center space-x-4 group">
                    <div className="bg-green-500 p-3 rounded-full text-white"><WhatsAppIcon className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white">Live Demo on WhatsApp</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Message "Demo" to +91 78499 45640.</p>
                    </div>
                </a>
                <a href="#/videos" onClick={(e) => { e.preventDefault(); navigate('#/videos'); }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-left flex items-center space-x-4 group">
                    <div className="bg-green-500 p-3 rounded-full text-white"><PlayCircleIcon /></div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white">Recorded Walkthrough</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Explore features on YouTube.</p>
                    </div>
                </a>
                <a href="#/book-demo" onClick={(e) => { e.preventDefault(); navigate('#/book-demo'); }} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-left flex items-center space-x-4 group">
                    <div className="bg-green-500 p-3 rounded-full text-white"><CalendarDaysIcon /></div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-white">Schedule a Meeting</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">Book a one-on-one call with our team.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
);

export const GenericPageHero: React.FC<{title: string, subtitle: string}> = ({ title, subtitle }) => (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
                {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    </section>
);

export const ContentSection: React.FC<{
    title: string;
    subtitle?: string;
    text?: string;
    children?: React.ReactNode;
}> = ({ title, subtitle, text, children }) => (
    <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{subtitle}</p>}
        {text && <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{text}</p>}
        {children}
    </div>
);

export const ContentWithImage: React.FC<{
    title: string;
    subtitle?: string;
    text: string;

    image: string;
    reverse?: boolean;
    features?: string[];
    link?: { text: string; path: string; };
    badge?: string;
    specialText?: string;
}> = ({ title, subtitle, text, image, reverse, features, link, badge, specialText }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={` ${reverse ? 'md:col-start-2' : ''}`}>
            {badge && <span className="text-sm font-bold uppercase text-green-600 dark:text-green-400">{badge}</span>}
            {subtitle && <h3 className="text-sm font-bold uppercase text-slate-500 dark:text-slate-400 mt-2">{subtitle}</h3>}
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{title}</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{text}</p>
            {features && (
                <ul className="mt-6 space-y-2">
                    {features.map(f => <li key={f} className="flex items-center text-slate-600 dark:text-slate-400"><CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0" /> <span className="ml-3">{f}</span></li>)}
                </ul>
            )}
            {link && <a href={link.path} className="mt-6 inline-block text-green-600 font-semibold hover:underline">{link.text} &rarr;</a>}
            {specialText && <p className="mt-4 text-sm italic bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">{specialText}</p>}
        </div>
        <div>
            <img src={image} alt={title} className="rounded-xl shadow-lg dark:shadow-slate-800/50" />
        </div>
    </div>
);

export const PageFeatureGrid: React.FC<{
    title: string;
    subtitle?: string;
    features: {icon?: React.FC; title: string; description: string; badge?: string;}[];
    image?: string;
}> = ({ title, subtitle, features, image }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
            <div className="mt-8 space-y-6">
                {features.map(f => (
                    <Card key={f.title} className="p-6">
                        <div className="flex items-start">
                            {f.icon && <div className="text-green-500 mr-4 mt-1 flex-shrink-0">{React.createElement(f.icon)}</div>}
                            <div>
                                <h3 className="font-semibold text-slate-800 dark:text-white">
                                    {f.title} {f.badge && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{f.badge}</span>}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mt-1 flex-grow">{f.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
        {image && <div><img src={image} alt={title} className="rounded-xl shadow-lg" /></div>}
    </div>
);

export const BenefitsGrid: React.FC<{
    title: string;
    subtitle?: string;
    benefits: { icon: React.FC<{className?: string}>; title: string; description: string }[];
}> = ({ title, subtitle, benefits }) => (
    <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{subtitle}</p>}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                    <div className="text-green-500 dark:text-green-400 mx-auto h-10 w-10 flex items-center justify-center">
                        {React.createElement(benefit.icon, { className: "h-10 w-10" })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-4">{benefit.title}</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{benefit.description}</p>
                </Card>
            ))}
        </div>
    </div>
);

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

// This component now renders widgets on the corners of the screen.
export const FloatingWidgets: React.FC = () => (
    <>
        {/* WhatsApp button on the bottom-left */}
        <div className="fixed bottom-6 left-6 z-50">
            <a
                href="https://wa.me/917849945640"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
            >
                <WhatsAppIcon className="h-8 w-8" />
            </a>
        </div>

        {/* Container for widgets on the bottom-right, including scroll to top */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
            <ScrollToTopButton />
        </div>
    </>
);