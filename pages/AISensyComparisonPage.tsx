import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../PageBuilder';
import { aiSensyComparisonData } from '../data/pages/comparisons';
import { CheckIconSolid, XIconSolid } from '../icons';

interface AISensyComparisonPageProps {
    navigate: (path: string) => void;
}

const ComparisonTable: React.FC<{ data: typeof aiSensyComparisonData.comparisonTable }> = ({ data }) => {
    return (
        <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800">
            <table className="w-full min-w-[800px]">
                <thead>
                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                        <th className="p-4 text-left font-semibold text-slate-700 dark:text-slate-300 w-1/3">Feature</th>
                        <th className="p-4 text-left font-semibold text-slate-700 dark:text-slate-300 w-1/3">{aiSensyComparisonData.hero.competitorName}</th>
                        <th className="p-4 text-left font-semibold text-green-600 dark:text-green-400 w-1/3 bg-green-50 dark:bg-green-950/50 rounded-t-lg">WhatsForm</th>
                    </tr>
                </thead>
                <tbody>
                    {data.features.map(point => (
                        <tr key={point.feature} className="border-b border-slate-200 dark:border-slate-800 last:border-b-0">
                            <td className="p-4 font-semibold text-slate-800 dark:text-white align-top">{point.feature}</td>
                            <td className="p-4 text-slate-600 dark:text-slate-400 align-top">
                                <div className="flex items-start">
                                    {point.competitor.supported ? <CheckIconSolid className="h-5 w-5 text-yellow-500 flex-shrink-0 mr-2 mt-1" /> : <XIconSolid className="h-5 w-5 text-red-400 flex-shrink-0 mr-2 mt-1" />}
                                    <span>{point.competitor.text}</span>
                                </div>
                            </td>
                            <td className="p-4 text-slate-600 dark:text-slate-400 align-top bg-green-50 dark:bg-green-950/50">
                                <div className="flex items-start">
                                    <CheckIconSolid className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                                    <span>{point.whatsform.text}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const AISensyComparisonPage: React.FC<AISensyComparisonPageProps> = ({ navigate }) => {
    const { hero, comparisonTable, tcoSection, onboardingSupport, summary } = aiSensyComparisonData;
    return (
        <main>
            <GenericPageHero 
                title={hero.title} 
                subtitle={hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={comparisonTable.title}
                    />
                    <div className="mt-16">
                         <ComparisonTable data={comparisonTable} />
                    </div>
                </div>
            </section>
            
            <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={tcoSection.title}
                        subtitle={tcoSection.subtitle}
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                       {tcoSection.points.map(point => (
                           <div key={point.title} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
                               <h3 className="font-bold text-lg text-slate-800 dark:text-white">{point.title}</h3>
                               <p className="mt-2 text-slate-600 dark:text-slate-400">{point.description}</p>
                           </div>
                       ))}
                    </div>
                </div>
            </section>
            
            <section className="py-24 lg:py-28 bg-pastel-green dark:bg-green-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={onboardingSupport.title}
                        subtitle={onboardingSupport.subtitle}
                    />
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                       {onboardingSupport.points.map(point => (
                           <div key={point.title} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl text-center">
                               <h3 className="font-bold text-xl text-slate-800 dark:text-white">{point.title}</h3>
                               <p className="mt-2 text-slate-600 dark:text-slate-400">{point.description}</p>
                           </div>
                       ))}
                    </div>
                </div>
            </section>

            <div className="bg-white dark:bg-slate-950 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={summary.title} 
                        subtitle={summary.text}
                    >
                        <a href="#/signup" onClick={(e) => { e.preventDefault(); navigate('#/signup'); }} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {summary.cta}
                        </a>
                    </ContentSection>
                </div>
            </div>
            
            <CTA navigate={navigate} />
        </main>
    );
};

export default AISensyComparisonPage;
