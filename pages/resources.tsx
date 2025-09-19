import React from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { resourcesPageData } from '../data/pages/resources';
import Link from 'next/link';

const ResourcesPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={resourcesPageData.hero.title} 
                subtitle={resourcesPageData.hero.subtitle}
            />
            
            {/* Statistics Section */}
            <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-green-600">{resourcesPageData.stats.blogPosts}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">Blog Articles</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-green-600">{resourcesPageData.stats.videoHours}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">Video Hours</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-green-600">{resourcesPageData.stats.templates}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">Templates</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                            <div className="text-3xl font-bold text-green-600">{resourcesPageData.stats.caseStudies}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">Case Studies</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="space-y-20">
                        {resourcesPageData.categories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{category.title}</h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 mt-4">{category.description}</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {category.resources.map((resource, resourceIndex) => (
                                        <Link key={resourceIndex} href={resource.link} className="group">
                                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500">
                                                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                                                    {resource.icon}
                                                </div>
                                                
                                                <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-3">
                                                    {resource.title}
                                                </h3>
                                                
                                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                                                    {resource.description}
                                                </p>
                                                
                                                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                                                    Explore Now
                                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
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

export default ResourcesPage;

export { getServerSideProps } from '@/lib/ssr';

