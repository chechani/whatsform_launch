import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import { industrySolutionsPageData } from '../data/pages/industrySolutions';
import Link from 'next/link';

const IndustrySolutionsPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={industrySolutionsPageData.hero.title} 
                subtitle={industrySolutionsPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="space-y-16">
                        {industrySolutionsPageData.industries.map((industry, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                                {/* Industry Header */}
                                <div className="p-8 border-b border-slate-200 dark:border-slate-700">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-3">
                                                {industry.title}
                                            </h2>
                                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {industry.description}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link 
                                                href={industry.link}
                                                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                                            >
                                                View Industry Overview
                                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Categories Grid */}
                                <div className="p-8">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                                            Specialized Solutions
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Explore tailored solutions for specific segments within {industry.title}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {industry.categories.map((category, catIndex) => (
                                            <Link 
                                                key={catIndex}
                                                href={category.path}
                                                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-green-300 dark:hover:border-green-500 transition-all duration-200 hover:shadow-md"
                                            >
                                                <div className="flex items-start justify-between mb-3">
                                                    <h4 className="font-semibold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                        {category.name}
                                                    </h4>
                                                    <svg className="w-4 h-4 text-slate-400 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                                                    {category.description}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
             <section className="bg-slate-100 dark:bg-slate-800 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="Don't See Your Industry or Category?" 
                        subtitle="WhatsForm's flexible platform can be customized for any business model or industry vertical. Our team will work with you to create the perfect solution."
                    >
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg text-center">
                                Contact Our Team
                            </Link>
                            <Link href="/book-demo" className="inline-block bg-transparent border-2 border-green-500 text-green-600 dark:text-green-400 font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-500 hover:text-white transition-all duration-200 shadow-lg text-center">
                                Book a Demo
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default IndustrySolutionsPage;

export { getServerSideProps } from '@/lib/ssr';

