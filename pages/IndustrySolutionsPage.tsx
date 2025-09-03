
import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { industrySolutionsPageData } from '../data/pages/industrySolutions';

interface IndustrySolutionsPageProps {
    navigate: (path: string) => void;
}

const IndustrySolutionsPage: React.FC<IndustrySolutionsPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={industrySolutionsPageData.hero.title} 
                subtitle={industrySolutionsPageData.hero.subtitle} 
            />
            <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="space-y-16">
                        {industrySolutionsPageData.industries.map(industry => (
                            <div key={industry.name}>
                                <div className="mb-8 md:mb-12 text-center">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{industry.name}</h2>
                                    <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{industry.description}</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {industry.categories.map(category => (
                                        <a 
                                            key={category.name} 
                                            href={category.path}
                                            onClick={(e) => { e.preventDefault(); navigate(category.path); }}
                                            className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 group flex flex-col"
                                        >
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">{category.name}</h3>
                                            <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{category.description}</p>
                                            <span className="mt-4 inline-block font-semibold text-green-600 dark:text-green-400 group-hover:underline self-start">
                                                Learn More &rarr;
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA navigate={navigate}/>
        </main>
    );
};

export default IndustrySolutionsPage;
