import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import { siteIndexData } from '@/data/pages/siteIndex';
import Link from 'next/link';

const SiteIndexPage: React.FC = () => {
    return (
        <main>
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-gray-900 dark:text-white overflow-hidden">
                {/* Original pattern overlay */}
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-slate-200/30 dark:bg-slate-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
                    {/* Site Index Badge */}
                    <div className="text-center mb-4">
                        <span className="inline-block bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-blue-200 dark:border-slate-700 backdrop-blur-sm">
                            Site Index
                        </span>
                    </div>
                    
                    {/* Main Title */}
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            WhatsForm 
                            <span className="text-blue-600 dark:text-blue-400"> Complete</span> Guide
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Explore every feature, solution, and resource in our comprehensive WhatsApp Business platform. 
                            Find exactly what you need to transform your customer communication.
                        </p>
                    </div>
                </div>
            </div>
            
            <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Page Stats */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-8 bg-white dark:bg-slate-800 rounded-full px-8 py-4 shadow-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">{siteIndexData.categories.length}</div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">Categories</div>
                            </div>
                            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {siteIndexData.categories.reduce((total, category) => total + category.links.length, 0)}
                                </div>
                                <div className="text-sm text-slate-600 dark:text-slate-300">Total Pages</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {siteIndexData.categories.map((category, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <span className="text-2xl text-white font-bold">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                                            <p className="text-green-100 mt-1">{category.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {category.links.map((link, linkIndex) => (
                                            <div key={linkIndex} className="group">
                                                <Link href={link.path.replace('#', '')} className="block p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 bg-slate-50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-700">
                                                    <div className="flex items-start space-x-4">
                                                        <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-1.5 group-hover:scale-125 transition-transform"></div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-1">
                                                                {link.name}
                                                            </h3>
                                                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                                                                {link.description}
                                                            </p>
                                                        </div>
                                                        <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Navigation */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                            <span>Last updated: {new Date().toLocaleDateString()}</span>
                            <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                            <span>Complete site navigation</span>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export function getStaticProps() {
    return { props: {} };
}

export default SiteIndexPage;
