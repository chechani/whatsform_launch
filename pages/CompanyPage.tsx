

import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage } from '../PageBuilder';
import { companyPageData } from '../data/pages/company';

const CompanyPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={companyPageData.hero.title} 
                subtitle={companyPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
                    <ContentWithImage {...companyPageData.mission as any} />
                    <ContentWithImage {...companyPageData.story as any} />
                </div>
            </div>
            
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={companyPageData.values.title}
                        subtitle={companyPageData.values.subtitle}
                    />
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyPageData.values.items.map(value => (
                            <div key={value.title} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-center">
                                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                                    {React.createElement(value.icon)}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">{value.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <div className="bg-white dark:bg-slate-950 py-20 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={companyPageData.closing.title} subtitle={companyPageData.closing.subtitle}>
                        <a href={companyPageData.closing.path} onClick={(e) => { e.preventDefault(); navigate(companyPageData.closing.path); }} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {companyPageData.closing.cta}
                        </a>
                    </ContentSection>
                </div>
            </div>

            <CTA navigate={navigate} />
        </main>
    );
};

export default CompanyPage;