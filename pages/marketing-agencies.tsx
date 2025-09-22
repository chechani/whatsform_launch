

import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import { marketingAgenciesPageData } from '../data/pages/marketingAgencies';
import { ArrowRightIcon } from '../icons';

const MarketingAgenciesPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={marketingAgenciesPageData.hero.title} 
                subtitle={marketingAgenciesPageData.hero.subtitle} 
            />
            <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {marketingAgenciesPageData.subCategories.map((subCategory, index) => (
                            <Link key={index} href={`/marketing-agencies/${subCategory.slug}`} legacyBehavior>
                                <a className="block p-8 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                                        {subCategory.hero.title}
                                    </h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                                        {subCategory.hero.subtitle}
                                    </p>
                                    <div className="mt-4 inline-flex items-center text-green-600 font-semibold">
                                        Learn More
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-pastel-green dark:bg-green-950/30 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={marketingAgenciesPageData.closing.title} subtitle={marketingAgenciesPageData.closing.subtitle}>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {marketingAgenciesPageData.closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </div>
            <CTA />
        </main>
    );
};

export default MarketingAgenciesPage;
export { getStaticProps } from '@/lib/ssr';

