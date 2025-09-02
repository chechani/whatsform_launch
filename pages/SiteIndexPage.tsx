
import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
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
            <section className="py-24 lg:py-28 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="space-y-16">
                        {siteIndexData.categories.map(category => (
                            <div key={category.title}>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b-2 border-green-500 pb-3 mb-6">
                                    {category.title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 -mt-4 mb-6 text-base">
                                    {category.description}
                                </p>
                                <ul className="space-y-4">
                                    {category.links.map(link => (
                                        <li key={link.name}>
                                            <a 
                                                href={link.path} 
                                                onClick={(e) => { e.preventDefault(); navigate(link.path); }}
                                                className="group block p-4 -m-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                                            >
                                                <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                    {link.name}
                                                </p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                                    {link.description}
                                                </p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA navigate={navigate} />
        </main>
    );
};

export default SiteIndexPage;
    