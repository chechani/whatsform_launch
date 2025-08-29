import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../PageBuilder';
import { comparisonPageData } from '../data/pages/comparison';
import { CheckIconSolid, XIconSolid } from '../icons';

interface ComparisonPageProps {
    navigate: (path: string) => void;
}

const ComparisonPage: React.FC<ComparisonPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={comparisonPageData.hero.title} 
                subtitle={comparisonPageData.hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={comparisonPageData.comparison.title}
                        subtitle={comparisonPageData.comparison.subtitle}
                    />
                    <div className="mt-16 space-y-16">
                        {comparisonPageData.comparison.features.map(category => (
                            <div key={category.category}>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">{category.category}</h3>
                                <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
                                    <table className="w-full min-w-[800px]">
                                        <thead>
                                            <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                                                <th className="p-4 text-left font-semibold text-slate-700 dark:text-slate-300 w-1/4">Feature</th>
                                                <th className="p-4 text-left font-semibold text-slate-700 dark:text-slate-300 w-1/4">Google Forms</th>
                                                <th className="p-4 text-left font-semibold text-green-600 dark:text-green-400 w-2/4 bg-green-50 dark:bg-green-950/50 rounded-t-lg">WhatsForm</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.points.map(point => (
                                                <tr key={point.feature} className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                                                    <td className="p-4 font-semibold text-slate-800 dark:text-white align-top">{point.feature}</td>
                                                    <td className="p-4 text-slate-600 dark:text-slate-400 align-top">
                                                        <div className="flex items-start">
                                                            <XIconSolid className="h-5 w-5 text-red-400 flex-shrink-0 mr-2 mt-1" />
                                                            <span>{point.googleForms}</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-slate-600 dark:text-slate-400 align-top bg-green-50 dark:bg-green-950/50">
                                                        <div className="flex items-start">
                                                            <CheckIconSolid className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                                                            <span>{point.whatsform}</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="bg-pastel-green dark:bg-green-950/30 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={comparisonPageData.summary.title} 
                        subtitle={comparisonPageData.summary.subtitle}
                    >
                        <a href="#/signup" onClick={(e) => { e.preventDefault(); navigate('#/signup'); }} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {comparisonPageData.summary.cta}
                        </a>
                    </ContentSection>
                </div>
            </div>
            
            <CTA navigate={navigate} />
        </main>
    );
};

export default ComparisonPage;