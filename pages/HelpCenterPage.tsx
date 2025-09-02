import React, { useState, useMemo } from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { helpCenterPageData } from '../data/pages/helpCenter';

interface HelpCenterPageProps {
    navigate: (path: string) => void;
}

const HelpCenterPage: React.FC<HelpCenterPageProps> = ({ navigate }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) {
            return helpCenterPageData.categories;
        }
        const lowercasedQuery = searchQuery.toLowerCase();
        return helpCenterPageData.categories.filter(category => 
            category.name.toLowerCase().includes(lowercasedQuery) ||
            category.description.toLowerCase().includes(lowercasedQuery)
        );
    }, [searchQuery]);

    return (
        <main>
            <GenericPageHero 
                title={helpCenterPageData.hero.title} 
                subtitle={helpCenterPageData.hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="relative">
                            <input 
                                type="search" 
                                placeholder="Search for articles..." 
                                className="w-full p-4 pl-12 text-lg bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map((category, index) => (
                                <a href="#/faq" onClick={(e) => { e.preventDefault(); navigate('#/faq'); }} key={index} className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">{category.name}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-300">{category.description}</p>
                                    <span className="mt-4 inline-block font-semibold text-green-600 dark:text-green-400">
                                        View Articles &rarr;
                                    </span>
                                </a>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">No Results Found</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-300">Try searching for a different keyword.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <CTA navigate={navigate} />
        </main>
    );
};

export default HelpCenterPage;