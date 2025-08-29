

import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, CodeBracketIcon, SparklesIcon, DeviceIcon, PlayCircleIcon, CloseIcon, WhatsAppIcon } from './icons';
import { benefits, useCases, uniqueFeatures, testimonialsData, uspData, comparisonSectionData } from './data/homePage';

const cyclingWords = ["Multi-steps Forms", "WorkFlows", "AI Agents", "Automation"];

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col ${className}`}>
        {children}
    </div>
);

export const Hero: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const videoId = 'zmxHz-hQ32E'; // Intro video ID
    const videoThumbnail = 'https://i.ytimg.com/vi/zmxHz-hQ32E/hqdefault.jpg';

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFading(true); // Start fading out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % cyclingWords.length);
                setIsFading(false); // Start fading in
            }, 300); // This should be less than the interval time and aligned with CSS transition
        }, 2500); // Time each word is displayed + transition time

        return () => clearInterval(timer);
    }, []);
    
    return (
        <>
            <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-white dark:bg-slate-950 overflow-hidden">
                 <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl" />
                 <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side: Text Content */}
                        <div className="text-left animate-fade-in">
                            <span className="inline-block bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 font-semibold px-4 py-1 rounded-full mb-4 text-sm uppercase tracking-wider">
                                Empowering WhatsApp Communication
                            </span>
                            <h1 className="font-black text-slate-900 dark:text-white leading-tight tracking-tighter min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem] flex flex-col justify-start">
                                <span className={`block text-5xl sm:text-6xl md:text-7xl transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                                    {cyclingWords[index] === "Multi-steps Forms" ? (
                                        <>
                                            <span style={{ fontSize: '60%', fontWeight: 700 }}>Multi-steps </span>
                                            Forms
                                        </>
                                    ) : (
                                        cyclingWords[index]
                                    )}
                                </span>
                                <div className="mt-2 flex items-center justify-start gap-x-2">
                                    <span className="text-lg sm:text-xl md:text-2xl">Inside</span>
                                    <span className="text-3xl sm:text-4xl md:text-5xl text-green-500">WhatsApp.</span>
                                    <WhatsAppIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500" />
                                </div>
                            </h1>
                            <p className="mt-2 text-md font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
                                "Game Changing for Customer Engagement"
                            </p>
                            <div className="mt-6 space-y-5 max-w-xl">
                                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
                                    “95% of businesses still use WhatsApp only for chats or broadcasts. With WhatsForm, turn every message into a structured form, workflow, or AI-driven response.”
                                </p>
                                <p className="font-semibold text-md text-slate-700 dark:text-slate-300 italic p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg border-l-4 border-green-500 shadow-sm">
                                    “No more scattered chats, endless reminders, or missed follow-ups. WhatsForm transforms WhatsApp into your business engine.”
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Video */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div 
                                className="relative rounded-2xl shadow-2xl border-4 border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 p-2 cursor-pointer group"
                                onClick={() => setIsVideoModalOpen(true)}
                            >
                                <img 
                                    src={videoThumbnail} 
                                    alt="WhatsForm product demo video thumbnail" 
                                    className="rounded-xl w-full" 
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-xl">
                                    <div className="bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                        <PlayCircleIcon className="h-12 w-12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isVideoModalOpen && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setIsVideoModalOpen(false)}>
                    <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setIsVideoModalOpen(false)} className="absolute -top-4 -right-4 h-10 w-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-transform z-10" aria-label="Close video player">
                            <CloseIcon />
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export const ActionStrip: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    return (
        <section className="bg-slate-100 dark:bg-slate-800/50 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                            Ready to transform your communication?
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">
                            Explore our features, watch a demo, or start your free trial today.
                        </p>
                    </div>
                    <div className="flex-shrink-0 mt-4 sm:mt-0 flex items-center space-x-4">
                        <a
                            href="#/videos"
                            onClick={(e) => { e.preventDefault(); navigate('#/videos'); }}
                            className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-300 dark:border-slate-700"
                        >
                            Watch Demo
                        </a>
                        <a
                            href="#/evaluation"
                            onClick={(e) => { e.preventDefault(); navigate('#/evaluation'); }}
                            className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-all shadow-md shadow-green-500/20"
                        >
                            Evaluate
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const PowerfulFeatures: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => (
    <section id="features" className="py-24 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {uniqueFeatures.title}
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    {uniqueFeatures.subtitle}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {uniqueFeatures.pillars.map(pillar => (
                     <Card key={pillar.title} className="text-center">
                        <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                            {React.createElement(pillar.icon)}
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">{pillar.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{pillar.description}</p>
                    </Card>
                ))}
            </div>
            <div className="mt-12 text-center">
                <button
                    onClick={() => navigate(uniqueFeatures.cta.path)}
                    className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg"
                >
                    {uniqueFeatures.cta.text}
                </button>
            </div>
        </div>
    </section>
);

export const MiniApps: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => (
    <section id="mini-apps" className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Go Beyond Forms: <span className="text-green-500">Build Mini-Apps in WhatsApp</span>
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Transform WhatsApp into a powerful application platform. Create interactive, AI-driven experiences that connect to your core business systems in real-time.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <Card className="text-center">
                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                        <CodeBracketIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">{/* FIX: Added flex-grow to make cards equal height */}
                        Two-Way API Connection
                    </h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">Fetch and push data to your CRM, ERP, or databases in real-time to create truly dynamic interactions.</p>
                </Card>
                 <Card className="text-center">
                     <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                        <SparklesIcon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">AI-Powered Logic</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">Our AI agents understand user intent, handle complex conversations, and personalize the experience on the fly.</p>
                </Card>
                 <Card className="text-center">
                     <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                        <DeviceIcon />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">Interactive Experiences</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">Build app-like workflows for loan calculation, appointment booking, product catalogs, and more.</p>
                </Card>
            </div>
            <div className="mt-12 text-center">
                <button
                    onClick={() => navigate('#/product')}
                    className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-500 hover:text-white transition-all"
                >
                    Learn About Mini-Apps
                </button>
                 <div className="mt-4">
                    <a
                        href="#/powerful-forms"
                        onClick={(e) => { e.preventDefault(); navigate('#/powerful-forms'); }}
                        className="text-green-600 dark:text-green-400 font-semibold hover:underline"
                    >
                        Explore the powerful Flow Builder &rarr;
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export const Benefits: React.FC = () => (
    <section className="py-24 lg:py-28 bg-pastel-yellow dark:bg-amber-950/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Benefits You'll Experience</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Unlock efficiency, engagement, and a better customer experience.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="text-center">
                        <div className="text-green-500 dark:text-green-400 mx-auto">{React.createElement(benefit.icon)}</div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-4">{benefit.title}</h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export const UseCases: React.FC = () => (
    <section id="use-cases" className="py-24 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Who Is WhatsForm For?</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">WhatsForm is a horizontal platform for any business that relies on WhatsApp to connect, enabling you to structure your communication for scale.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {useCases.map((useCase, index) => (
                    <span key={index} className="bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-300 text-md font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105">
                        {useCase}
                    </span>
                ))}
            </div>
        </div>
    </section>
);

export const UspSection: React.FC = () => (
    <section className="py-24 lg:py-28 bg-pastel-violet dark:bg-violet-950/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <span className="text-sm font-bold uppercase text-green-600 dark:text-green-400">{uspData.title}</span>
                <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {uspData.subtitle}
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    {uspData.intro}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {uspData.features.map(feature => (
                     <Card key={feature.title} className="p-6 group">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1 text-green-500 dark:text-green-400 group-hover:text-green-600 transition-colors duration-300">
                                {React.createElement(feature.icon, { className: "h-8 w-8" })}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{feature.title}</h3>
                                <p className="mt-1 text-slate-600 dark:text-slate-400 flex-grow">{feature.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

export const Testimonials: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);

    const openVideoModal = (videoId: string) => {
        setCurrentVideoId(videoId);
        setModalOpen(true);
    };

    const closeVideoModal = () => {
        setModalOpen(false);
        setCurrentVideoId(null);
    };

    return (
        <>
            <section className="py-24 lg:py-28 bg-pastel-green dark:bg-green-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Trusted by Leading Businesses
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                            See how WhatsForm is making an impact across industries.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                            <Card key={index}>
                                <img src={testimonial.logoUrl} alt="Company logo" className="h-8 mb-6 self-start filter dark:invert" />
                                {testimonial.videoId && testimonial.videoThumbnail ? (
                                    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group flex-grow" onClick={() => openVideoModal(testimonial.videoId as string)}>
                                        <img src={testimonial.videoThumbnail} alt={`Video testimonial from ${testimonial.author}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                                            <div className="bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                                <PlayCircleIcon />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <blockquote className="text-lg text-slate-600 dark:text-slate-400 flex-grow">
                                        <p>"{testimonial.quote}"</p>
                                    </blockquote>
                                )}
                                <footer className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 flex items-center">
                                    <img src={testimonial.imageUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <p className="font-semibold text-slate-800 dark:text-white">{testimonial.author}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                                    </div>
                                </footer>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {modalOpen && currentVideoId && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeVideoModal}>
                    <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeVideoModal} className="absolute -top-4 -right-4 h-10 w-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-transform z-10" aria-label="Close video player">
                            <CloseIcon />
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export const ComparisonSection: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => (
    <section id="comparison" className="py-24 lg:py-28 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {comparisonSectionData.title}
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    {comparisonSectionData.subtitle}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {comparisonSectionData.competitors.map(competitor => (
                    <div key={competitor.name} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center">
                        <div className="flex-grow">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">WhatsForm vs.</h3>
                            <p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{competitor.name}</p>
                            <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm">{competitor.description}</p>
                        </div>
                        <div className="mt-6">
                            <a 
                                href={competitor.path} 
                                onClick={e => { e.preventDefault(); navigate(competitor.path); }}
                                className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-sm hover:bg-green-600 transition-all"
                            >
                                Compare Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);