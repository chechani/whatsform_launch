
import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, CodeBracketIcon, SparklesIcon, DeviceIcon, PlayCircleIcon, CloseIcon, WhatsAppIcon, FormsIcon, ArrowRightIcon } from './icons';
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
            <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
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
                                    <WhatsAppIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:h-12 text-green-500" />
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
                        <button onClick={() => setIsVideoModalOpen(false)} className="absolute -top-4 -right-4 h-10 w-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-lg hover:scale-110 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all z-10" aria-label="Close video player">
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
        <section className="bg-slate-100 dark:bg-slate-800/50 py-12 sm:py-16 transition-colors duration-300">
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
    <section id="features" className="py-24 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
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
    <section id="mini-apps" className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Go Beyond Forms: <span className="text-green-500">Build Mini-Apps in WhatsApp</span>
                </h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Leverage two-way APIs and AI to create powerful, interactive experiences that solve real business problems, all within the familiar chat interface.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <Card>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-lg">
                                <CodeBracketIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Real-Time Data Integration</h3>
                                <p className="mt-1 text-slate-600 dark:text-slate-400">Fetch product details, check inventory, or calculate loan quotes by connecting to your backend systems in real time.</p>
                            </div>
                        </div>
                    </Card>
                    <Card>
                         <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 p-3 rounded-lg">
                                <SparklesIcon />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">AI-Powered Conversations</h3>
                                <p className="mt-1 text-slate-600 dark:text-slate-400">Our AI agents understand user intent, handle complex queries, and personalize the experience, making your mini-app feel intelligent and human-like.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                    <img src="https://picsum.photos/seed/mini-app-hero/600/500" alt="Mini-app concept illustration" className="rounded-xl" />
                </div>
            </div>
             <div className="mt-12 text-center">
                <button
                    onClick={() => navigate('#/product')}
                    className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg"
                >
                    Learn About Mini-Apps
                </button>
            </div>
        </div>
    </section>
);

export const Benefits: React.FC = () => (
    <section id="benefits" className="py-24 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">The Benefits of a Conversational Approach</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    Moving from static forms to interactive conversations delivers tangible business outcomes.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
);

export const UseCases: React.FC = () => (
    <section id="use-cases" className="py-24 lg:py-28 bg-pastel-green dark:bg-green-950/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Trusted by Every Industry</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                    From patient intake to lead qualification, WhatsForm is versatile enough to power workflows for any business.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {useCases.map(useCase => (
                    <span key={useCase} className="bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 font-semibold px-5 py-3 rounded-full text-lg shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                        {useCase}
                    </span>
                ))}
            </div>
        </div>
    </section>
);


export const Testimonials: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

    const openVideoModal = (videoId: string) => {
        setCurrentVideoId(videoId);
        setIsVideoModalOpen(true);
    };
    
    const activeData = testimonialsData[activeTestimonial];

    return (
        <>
        <section className="py-24 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Loved by Businesses Big and Small</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="bg-slate-100 dark:bg-slate-800/50 p-8 rounded-2xl relative">
                             <svg className="absolute top-8 left-8 w-12 h-12 text-slate-300 dark:text-slate-700" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.33 5.5c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33c1.17 0 2.25-.25 3.25-.67.25-.17.42-.42.42-.75V15c0-.42-.25-.75-.58-.92-.42-.17-.83-.25-1.25-.25-2.33 0-4.25-1.92-4.25-4.25S7 5.5 9.33 5.5zM22.67 5.5c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33c1.17 0 2.25-.25 3.25-.67.25-.17.42-.42.42-.75V15c0-.42-.25-.75-.58-.92-.42-.17-.83-.25-1.25-.25-2.33 0-4.25-1.92-4.25-4.25S20.33 5.5 22.67 5.5z" />
                            </svg>
                            <blockquote className="relative text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                                <p>"{activeData.quote}"</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center space-x-4">
                                <img src={activeData.imageUrl} alt={activeData.author} className="h-14 w-14 rounded-full object-cover"/>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white">{activeData.author}</p>
                                    <p className="text-slate-600 dark:text-slate-400">{activeData.title}</p>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {testimonialsData.map((testimonial, index) => (
                             <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-full p-4 rounded-xl transition-all duration-200 flex items-center space-x-4 text-left ${activeTestimonial === index ? 'bg-green-100 dark:bg-green-500/10 ring-2 ring-green-500 shadow-lg' : 'bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800'}`}
                            >
                                <img src={testimonial.imageUrl} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-slate-800 dark:text-white">{testimonial.author}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
                                </div>
                                {testimonial.videoId && (
                                    <div className="flex-shrink-0 ml-auto text-green-500 opacity-70" onClick={(e) => { e.stopPropagation(); openVideoModal(testimonial.videoId); }}>
                                        <PlayCircleIcon className="h-8 w-8" />
                                    </div>
                                )}
                            </button>
                        ))}
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

export const UspSection: React.FC<{ navigate: (path: string) => void; }> = ({ navigate }) => (
    <section className="py-24 lg:py-28 bg-pastel-yellow dark:bg-amber-950/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
             <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{uspData.title}</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{uspData.intro}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {uspData.features.map(feature => (
                    <a
                        key={feature.title}
                        href={feature.path}
                        onClick={(e) => { e.preventDefault(); navigate(feature.path); }}
                        className="group bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
                    >
                         <div>
                            <div className="text-green-600 dark:text-green-400 mb-3">{React.createElement(feature.icon, { className: "h-8 w-8" })}</div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{feature.title}</h3>
                            <p className="mt-1 text-slate-600 dark:text-slate-400">{feature.description}</p>
                         </div>
                         <div className="mt-auto pt-4">
                            <span className="font-semibold text-green-600 dark:text-green-400 flex items-center">
                                Learn More
                                <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);


export const ComparisonSection: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => (
    <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{comparisonSectionData.title}</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{comparisonSectionData.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {comparisonSectionData.competitors.map(competitor => (
                    <a 
                        key={competitor.name} 
                        href={competitor.path} 
                        onClick={(e) => { e.preventDefault(); navigate(competitor.path); }}
                        className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col text-center"
                    >
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                            WhatsForm <span className="text-green-500">vs</span> {competitor.name}
                        </h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{competitor.description}</p>
                        <span className="mt-4 font-semibold text-green-600 dark:text-green-400 group-hover:underline">
                            See Comparison &rarr;
                        </span>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export const FormsBrowserTeaser: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    return (
        <section className="py-24 lg:py-28 bg-pastel-slate dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Explore 200+ Form Templates</h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                            Browse our extensive library of pre-built forms for every industry. Preview them live and see how they work directly on WhatsApp.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => navigate('#/forms-browser')}
                            className="flex items-center justify-center space-x-3 bg-green-500 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg shadow-green-500/30"
                        >
                            <span>Explore Forms Now</span>
                            <ArrowRightIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
