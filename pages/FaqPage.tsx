import React, { useState, useMemo } from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { faqPageData } from '../data/pages/faq';
import { ChevronDownIcon } from '../icons';

interface FaqPageProps {
    navigate: (path: string) => void;
}

const FaqPage: React.FC<FaqPageProps> = ({ navigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(faqPageData.categories[0].id);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const filteredFaqs = useMemo(() => {
        let faqs = faqPageData.categories.find(c => c.id === activeCategory)?.faqs || [];

        if (searchQuery.trim() !== '') {
            // If searching, search across all categories
            faqs = faqPageData.categories.flatMap(c => c.faqs);
            const lowercasedQuery = searchQuery.toLowerCase();
            return faqs.filter(
                faq =>
                    faq.question.toLowerCase().includes(lowercasedQuery) ||
                    faq.answer.toLowerCase().includes(lowercasedQuery)
            );
        }
        return faqs;
    }, [activeCategory, searchQuery]);
    
    // When search is active, set active category to null to not highlight any category
    const currentCategory = searchQuery.trim() !== '' ? null : activeCategory;

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <main>
            <GenericPageHero 
                title={faqPageData.hero.title} 
                subtitle={faqPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                     <div className="max-w-2xl mx-auto mb-12">
                        <div className="relative">
                            <input 
                                type="search" 
                                placeholder="Search for answers..." 
                                className="w-full p-4 pl-12 text-lg bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                             <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Categories</h2>
                             <ul className="space-y-2">
                                {faqPageData.categories.map(category => (
                                    <li key={category.id}>
                                        <button 
                                            onClick={() => {
                                                setActiveCategory(category.id);
                                                setSearchQuery(''); // Clear search on category click
                                                setOpenAccordion(0); // Open first FAQ of new category
                                            }}
                                            className={`w-full text-left p-3 rounded-lg font-semibold transition-colors duration-200 ${
                                                currentCategory === category.id 
                                                ? 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300' 
                                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                                            }`}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                             </ul>
                        </aside>

                        {/* FAQs Content */}
                        <div className="lg:col-span-3">
                            {filteredFaqs.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredFaqs.map((faq, index) => (
                                        <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-300">
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="w-full flex justify-between items-center text-left p-6 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                                                aria-expanded={openAccordion === index}
                                            >
                                                <span className="text-lg font-semibold text-slate-800 dark:text-white">{faq.question}</span>
                                                <span className={`transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}>
                                                    <ChevronDownIcon className="h-6 w-6 text-slate-500" />
                                                </span>
                                            </button>
                                            <div
                                                className={`transition-all duration-500 ease-in-out grid ${openAccordion === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="p-6 bg-white dark:bg-slate-900">
                                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">{faq.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">No Results Found</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">Try searching for a different keyword or select another category.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <CTA navigate={navigate} />
        </main>
    );
};

export default FaqPage;