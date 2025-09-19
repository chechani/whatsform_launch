import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import { webinarsPageData } from '@/data/pages/webinars';
import Link from 'next/link';

const WebinarsPage: React.FC = () => {
    const upcomingWebinar = webinarsPageData.upcomingWebinar;
    
    return (
        <main>
            <GenericPageHero 
                title={webinarsPageData.hero.title} 
                subtitle={webinarsPageData.hero.subtitle}
            />
            
            {/* Featured Upcoming Webinar */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-semibold rounded-full mb-4">
                            🔥 Featured Upcoming Webinar
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {upcomingWebinar.title}
                        </h2>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                        <div className="p-8 lg:p-12">
                            {/* Webinar Details Header */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Date</p>
                                        <p className="font-semibold text-slate-900 dark:text-white">{upcomingWebinar.date}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Investment</p>
                                        <p className="font-semibold text-slate-900 dark:text-white">{upcomingWebinar.fee}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Duration</p>
                                        <p className="font-semibold text-slate-900 dark:text-white">{upcomingWebinar.duration}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-12">
                                {/* Left Column - Agenda */}
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Detailed Agenda</h3>
                                    <div className="space-y-4">
                                        {upcomingWebinar.agenda.map((item, index) => (
                                            <div key={index} className="border-l-4 border-blue-500 pl-6 py-3">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                                                        {item.time}
                                                    </span>
                                                    <h4 className="font-semibold text-slate-900 dark:text-white">{item.topic}</h4>
                                                </div>
                                                <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                                                    {item.details.map((detail, detailIndex) => (
                                                        <li key={detailIndex} className="flex items-start space-x-2">
                                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Right Column - Who Should Attend & Objectives */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Who Should Attend?</h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {upcomingWebinar.targetAudience.map((audience, index) => (
                                                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                                                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-slate-700 dark:text-slate-300">{audience}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Learning Objectives</h3>
                                        <div className="space-y-3">
                                            {upcomingWebinar.objectives.map((objective, index) => (
                                                <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
                                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-white text-sm font-semibold">{index + 1}</span>
                                                    </div>
                                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{objective}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Registration CTA */}
                            <div className="mt-12 text-center">
                                <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                                    <Link 
                                        href="/contact"
                                        className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                        </svg>
                                        Register Now - {upcomingWebinar.fee}
                                    </Link>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">
                                        Limited seats available • Secure your spot today
                                    </span>
                                </div>
                                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                                    💡 Get actionable insights and practical tools to transform your WhatsApp communication strategy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Past Webinars Section */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            {webinarsPageData.pastWebinars.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            {webinarsPageData.pastWebinars.subtitle}
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {webinarsPageData.pastWebinars.videos.map((video, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                        Recording Available
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">
                                        {video.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            {new Date(video.date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
                                        </span>
                                        <Link 
                                            href={`https://www.youtube.com/watch?v=${video.id}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
                                        >
                                            Watch Now
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <CTA />
        </main>
    );
};

export default WebinarsPage;

export { getServerSideProps } from '@/lib/ssr';

