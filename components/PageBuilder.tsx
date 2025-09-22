import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    CheckCircleIcon, WhatsAppIcon, PlayCircleIcon, CalendarDaysIcon,
    InboxIcon, UsersIcon, SparklesIcon, CalendarIcon, SendMessageIcon, TemplateIcon
} from '../icons';
import { TruckIcon, WrenchScrewdriverIcon, CurrencyDollarIcon, ClockIcon, HeartIcon, UserGroupIcon, BuildingStorefrontIcon, ShoppingCartIcon, PaperAirplaneIcon, ExclamationTriangleIcon, BuildingOfficeIcon, DevicePhoneMobileIcon, StarIcon, PlayIcon, MegaphoneIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    InboxIcon,
    UsersIcon,
    SparklesIcon,
    CalendarIcon,
    SendMessageIcon,
    TemplateIcon,
    CheckCircleIcon,
    TruckIcon,
    WrenchScrewdriverIcon,
    CurrencyDollarIcon,
    ClockIcon,
    HeartIcon,
    UserGroupIcon,
    BuildingStorefrontIcon,
    ShoppingCartIcon,
    PaperAirplaneIcon,
    ExclamationTriangleIcon,
    BuildingOfficeIcon,
    DevicePhoneMobileIcon,
    StarIcon,
    PlayIcon,
    MegaphoneIcon,
    ChartBarIcon,
    GlobeAltIcon,
};

const Card: React.FC<{ children: React.ReactNode, className?: string, href?: string, onClick?: (e: React.MouseEvent) => void, isLink?: boolean }> = ({ children, className = '', href, onClick, isLink = false }) => {
    const commonClasses = `bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col ${className}`;
    
    if (isLink && href) {
        return (
            <Link href={href} legacyBehavior>
                <a onClick={onClick} className={commonClasses}>
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <div className={commonClasses}>
            {children}
        </div>
    );
};


export const CTA: React.FC = () => (
    <section id="cta" className="bg-pastel-violet dark:bg-violet-950/30 text-gray-800 dark:text-gray-200 py-16 sm:py-24 lg:py-28 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Ready to Transform Your WhatsApp Business?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Connect today for a personalized demonstration and see how WhatsForm can enhance your business communication.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <a href="https://wa.me/917849945640?text=Demo" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-left flex items-center space-x-4 group">
                    <div className="bg-green-500 p-3 rounded-full text-white"><WhatsAppIcon className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800 dark:text-white">Live Demo on WhatsApp</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Message "Demo" to +91 78499 45640.</p>
                    </div>
                </a>
                <Link href="/videos" legacyBehavior>
                    <a className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-left flex items-center space-x-4 group">
                        <div className="bg-green-500 p-3 rounded-full text-white"><PlayCircleIcon /></div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-white">Recorded Walkthrough</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Explore features on YouTube.</p>
                        </div>
                    </a>
                </Link>
                <Link href="/book-demo" legacyBehavior>
                    <a className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-left flex items-center space-x-4 group">
                        <div className="bg-green-500 p-3 rounded-full text-white"><CalendarDaysIcon /></div>
                        <div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-white">Schedule a Meeting</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Book a one-on-one call with our team.</p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    </section>
);

export const GenericPageHero: React.FC<{title: string, subtitle: string}> = ({ title, subtitle }) => (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter">
                {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    </section>
);

export const FAQ: React.FC<{
    faqs?: {
        id: string;
        name: string;
        description: string;
        faqs: {
            question: string;
            answer: string;
        }[];
    }[];
}> = ({ faqs = [] }) => {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="space-y-8">
                    {faqs.map((category) => (
                        <div key={category.id}>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{category.name}</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">{category.description}</p>
                            <div className="space-y-4">
                                {category.faqs.map((faq, index) => (
                                    <div key={index} className="bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                                        <button
                                            onClick={() => toggleFAQ(`${category.id}-${index}`)}
                                            className="w-full text-left p-6 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between"
                                            aria-expanded={openIndex === `${category.id}-${index}`}
                                        >
                                            <h3 className="font-bold text-lg text-slate-800 dark:text-white pr-4">{faq.question}</h3>
                                            <svg
                                                className={`w-5 h-5 text-slate-600 dark:text-slate-400 transform transition-transform duration-200 flex-shrink-0 ${
                                                    openIndex === `${category.id}-${index}` ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={`transition-all duration-300 ease-in-out ${
                                            openIndex === `${category.id}-${index}` ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                        } overflow-hidden`}>
                                            <div className="px-6 pb-6">
                                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ContentSection: React.FC<{
    title: string;
    subtitle?: string;
    text?: string;
    children?: React.ReactNode;
}> = ({ title, subtitle, text, children }) => (
    <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
        {text && <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{text}</p>}
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
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{text}</p>
            {features && (
                <ul className="mt-6 space-y-2">
                    {features.map(f => <li key={f} className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircleIcon className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0" /> <span className="ml-3">{f}</span></li>)}
                </ul>
            )}
            {link && <Link href={link.path} legacyBehavior><a className="mt-6 inline-block text-green-600 font-semibold hover:underline">{link.text} &rarr;</a></Link>}
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
    sectionNumber?: string;
}> = ({ title, subtitle, features, image, sectionNumber }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative pt-8 pl-4">
            {sectionNumber && <span className="absolute left-0 top-0 text-8xl font-black text-slate-200 dark:text-slate-700/50 select-none -z-10">{sectionNumber}.</span>}
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
            {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>}
            <div className="mt-8 space-y-6">
                {features.map(f => (
                    <Card key={f.title} className="p-6">
                        <div className="flex items-start">
                            {f.icon && <div className="text-green-500 mr-4 mt-1 flex-shrink-0">{React.createElement(f.icon)}</div>}
                            <div>
                                <h3 className="font-semibold text-slate-800 dark:text-white">
                                    {f.title} {f.badge && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{f.badge}</span>}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mt-1 flex-grow">{f.description}</p>
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
    benefits: { icon: string; title: string; description: string }[];
}> = ({ title, subtitle, benefits }) => (
    <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.icon];
                return (
                    <Card key={index} className="text-center">
                        <div className="text-green-500 dark:text-green-400 mx-auto h-10 w-10 flex items-center justify-center">
                            {IconComponent && React.createElement(IconComponent, { className: "h-10 w-10" })}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-4">{benefit.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{benefit.description}</p>
                    </Card>
                );
            })}
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
            className={`bg-green-500 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
};

export const FloatingWidgets: React.FC = () => (
    <>
        <div className="fixed bottom-6 left-6 z-50">
            <a
                href="https://wa.me/917849945640"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="bg-green-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
            >
                <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:h-8" />
            </a>
        </div>

        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
            <ScrollToTopButton />
        </div>
    </>
);

export const ContactForm: React.FC<{formTitle: string, formSubtitle: string}> = ({ formTitle, formSubtitle }) => (
    <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{formTitle}</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{formSubtitle}</p>
            </div>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-800 dark:text-white" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-800 dark:text-white" />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-800 dark:text-white" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-slate-800 dark:text-white"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">Send Message</button>
                </div>
            </form>
        </div>
    </section>
);

export const VideoGallery: React.FC<{videos: {id: string, title: string, description: string, thumbnail: string}[]}> = ({ videos }) => (
    <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="relative">
                            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 transition-colors">
                                    <PlayCircleIcon className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{video.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
