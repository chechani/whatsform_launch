import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { comparisonsLandingData } from '../data/pages/comparisonsLanding';
import { comparisonSectionData } from '../data/homePage';

interface ComparisonsLandingPageProps {
    navigate: (path: string) => void;
}

const ComparisonsLandingPage: React.FC<ComparisonsLandingPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={comparisonsLandingData.hero.title}
                subtitle={comparisonsLandingData.hero.subtitle}
            />
            <section className="py-24 lg:py-28 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
            <CTA navigate={navigate} />
        </main>
    );
};

export default ComparisonsLandingPage;
