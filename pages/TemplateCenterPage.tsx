
import React, { useState } from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage } from '../PageBuilder';
import { templateCenterData } from '../data/pages/templateCenter';
import { CheckCircleIcon, PlayCircleIcon, CloseIcon } from '../icons';

interface TemplateCenterPageProps {
    navigate: (path: string) => void;
}

const TemplateCenterPage: React.FC<TemplateCenterPageProps> = ({ navigate }) => {
    const [activeTab, setActiveTab] = useState(templateCenterData.strategyGuide.tabs[0].id);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const activeTabData = templateCenterData.strategyGuide.tabs.find(tab => tab.id === activeTab);

    return (
        <main>
            <GenericPageHero 
                title={templateCenterData.hero.title} 
                subtitle={templateCenterData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
                    {/* Strategy Guide Section */}
                     <section className="bg-pastel-blue dark:bg-sky-950/30 py-20 lg:py-24 -m-6 sm:-m-8 lg:-m-12 rounded-2xl">
                        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 font-semibold px-4 py-1 rounded-full mb-4">
                                {React.createElement(templateCenterData.strategyGuide.icon, { className: 'h-5 w-5' })}
                                <span>{templateCenterData.strategyGuide.badge}</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{templateCenterData.strategyGuide.title}</h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{templateCenterData.strategyGuide.subtitle}</p>
                        </div>
                        <div className="mt-12 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
                            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 border-b border-slate-200 dark:border-slate-700">
                                {templateCenterData.strategyGuide.tabs.map(tab => (
                                    <button 
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-4 py-3 font-semibold text-sm lg:text-base rounded-t-lg transition-colors duration-200 focus:outline-none -mb-px ${activeTab === tab.id ? 'text-green-600 dark:text-green-400 border-b-2 border-green-500' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border-b-2 border-transparent'}`}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-8 p-6 animate-fade-in">
                                {activeTabData && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                                        <div className="md:col-span-2">
                                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{activeTabData.title}</h3>
                                            <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{activeTabData.description}</p>
                                        </div>
                                        <img src={activeTabData.image} alt={activeTabData.title} className="rounded-lg shadow-md mx-auto" />
                                    </div>
                                )}
                            </div>
                        </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-20 lg:py-24">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                             <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{templateCenterData.stats.title}</h2>
                             <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{templateCenterData.stats.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {templateCenterData.stats.cards.map(stat => (
                                <div key={stat.label} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                                    <p className="text-5xl font-extrabold text-green-600 dark:text-green-400">{stat.value}</p>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.subtitle}</p>
                                    <h3 className="mt-2 font-semibold text-slate-700 dark:text-slate-300 text-lg">{stat.label}</h3>
                                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 flex-grow">{stat.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section className="bg-pastel-yellow dark:bg-amber-950/30 py-20 lg:py-24 -m-6 sm:-m-8 lg:-m-12 rounded-2xl">
                        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                            <ContentWithImage {...templateCenterData.mediaLibrary} />
                        </div>
                    </section>
                     <section className="py-20 lg:py-24">
                        <ContentWithImage {...templateCenterData.multiLanguage} reverse />
                    </section>

                    {/* Game Changer Section */}
                     <section className="bg-pastel-violet dark:bg-violet-950/30 py-20 lg:py-24 -m-6 sm:-m-8 lg:-m-12 rounded-2xl">
                        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{templateCenterData.gameChanger.title}</h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{templateCenterData.gameChanger.subtitle}</p>
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
                                {templateCenterData.gameChanger.points.map(point => (
                                    <div key={point.title} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex items-start space-x-4">
                                        <div className="flex-shrink-0 text-green-500 mt-1">
                                            {React.createElement(point.icon, { className: "h-6 w-6" })}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{point.title}</h3>
                                            <p className="mt-1 text-slate-600 dark:text-slate-400">{point.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </section>

                    {/* Video Section */}
                    <section className="py-20 lg:py-24">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                                {templateCenterData.closingVideo.title}
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                                {templateCenterData.closingVideo.subtitle}
                            </p>
                        </div>
                        <div className="mt-12 max-w-4xl mx-auto">
                            <div
                                className="relative rounded-2xl shadow-2xl border-4 border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 p-2 cursor-pointer group"
                                onClick={() => setIsVideoModalOpen(true)}
                            >
                                <img
                                    src={templateCenterData.closingVideo.thumbnail}
                                    alt="Template Center Walkthrough Video Thumbnail"
                                    className="rounded-xl w-full"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-xl">
                                    <div className="bg-white/20 backdrop-blur-sm text-white rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                        <PlayCircleIcon className="h-12 w-12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <CTA navigate={navigate} />

            {isVideoModalOpen && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setIsVideoModalOpen(false)}>
                    <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setIsVideoModalOpen(false)} className="absolute -top-4 -right-4 h-10 w-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-transform z-10" aria-label="Close video player">
                            <CloseIcon />
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${templateCenterData.closingVideo.videoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </main>
    );
};

export default TemplateCenterPage;
