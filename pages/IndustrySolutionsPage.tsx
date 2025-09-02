import React from 'react';
import { GenericPageHero } from '../PageBuilder';
import { industrySolutionsData } from '../data/pages/industrySolutions';

interface IndustrySolutionsPageProps {
    navigate: (path: string) => void;
}

const IndustrySolutionsPage: React.FC<IndustrySolutionsPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={industrySolutionsData.hero.title} 
                subtitle={industrySolutionsData.hero.subtitle} 
            />
            <section className="py-16 sm:py-24 lg:py-28 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industrySolutionsData.industries.map(industry => (
                            <a 
                                key={industry.name} 
                                href={industry.path}
                                onClick={(e) => { e.preventDefault(); navigate(industry.path); }}
                                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 group flex flex-col"
                            >
                                <img src={industry.image} alt={`${industry.name} illustration`} className="w-full h-48 object-cover" />
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">{industry.name}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{industry.description}</p>
                                    <span className="mt-4 inline-block font-semibold text-green-600 dark:text-green-400 group-hover:underline self-start">
                                        Learn More &rarr;
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default IndustrySolutionsPage;