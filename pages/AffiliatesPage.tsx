


import React from 'react';
import { GenericPageHero, CTA, ContentSection, BenefitsGrid } from '../PageBuilder';
import { affiliatesPageData } from '../data/pages/affiliates';
import { CheckCircleIcon } from '../icons';

interface AffiliatesPageProps {
    navigate: (path: string) => void;
}

const AffiliatesPage: React.FC<AffiliatesPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={affiliatesPageData.hero.title} 
                subtitle={affiliatesPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
                    <BenefitsGrid {...affiliatesPageData.benefits} />

                    <div className="text-center">
                        <ContentSection 
                            title={affiliatesPageData.howItWorks.title}
                            subtitle={affiliatesPageData.howItWorks.subtitle}
                        />
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {affiliatesPageData.howItWorks.steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto font-bold text-2xl">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">{step.title}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-300">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{affiliatesPageData.closing.title}</h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{affiliatesPageData.closing.subtitle}</p>
                        <a href="#/affiliates" onClick={(e) => { e.preventDefault(); navigate('#/affiliates'); }} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {affiliatesPageData.closing.cta}
                        </a>
                    </div>
                </div>
            </div>
            <CTA navigate={navigate} />
        </main>
    );
};

export default AffiliatesPage;