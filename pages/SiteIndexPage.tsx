import React from 'react';
import { GenericPageHero } from '../PageBuilder';
import { siteIndexData } from '../data/pages/siteIndex';

interface SiteIndexPageProps {
    navigate: (path: string) => void;
}

const SiteIndexPage: React.FC<SiteIndexPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={siteIndexData.hero.title}
                subtitle={siteIndexData.hero.subtitle}
            />
            <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="space-y-16">
                        {siteIndexData.sections.map((section, index) => (
                            <div key={index}>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white border-b-2 border-green-500 pb-3 mb-6">
                                    {section.title}
                                </h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">{section.description}</p>
                                <div className="space-y-4">
                                    {section.pages?.map(page => (
                                        <a 
                                            key={page.path}
                                            href={page.path}
                                            onClick={(e) => { e.preventDefault(); navigate(page.path); }}
                                            className="block p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-500 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
                                        >
                                            <h3 className="font-semibold text-green-600 dark:text-green-400">{page.name}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{page.description}</p>
                                        </a>
                                    ))}
                                    {section.subSections?.map(subSection => (
                                        <div key={subSection.title} className="mt-8">
                                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">{subSection.title}</h3>
                                            <div className="space-y-4">
                                                {subSection.pages.map(page => (
                                                     <a 
                                                        key={page.path}
                                                        href={page.path}
                                                        onClick={(e) => { e.preventDefault(); navigate(page.path); }}
                                                        className="block p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-500 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md"
                                                    >
                                                        <h3 className="font-semibold text-green-600 dark:text-green-400">{page.name}</h3>
                                                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{page.description}</p>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SiteIndexPage;
