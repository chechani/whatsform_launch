
import React, { useState, useMemo } from 'react';
import { formsData, formCategories, FormTemplate } from '../data/formsDataNormalized';
import { SearchIcon, WhatsAppIcon } from '../icons';

// Card component for displaying a form template in the list
const FormCard: React.FC<{ form: FormTemplate }> = ({ form }) => {
    const whatsappLink = `https://wa.me/917849945640?text=${encodeURIComponent(form.keyword)}`;
    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-5 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <h3 className="font-bold text-slate-800 dark:text-white">{form.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{form.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {form.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full font-medium">{tag}</span>
                ))}
            </div>
            <div className="mt-4 inline-flex items-center space-x-2 bg-[#25D366] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1DAE54] transition-colors">
                <WhatsAppIcon className="h-5 w-5" />
                <span>Open in WhatsApp</span>
            </div>
        </a>
    );
};

// Preview removed per requirements.

// Main page component
const FormsBrowserPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredForms = useMemo(() => {
        return formsData.filter(form => {
            const categoryMatch = selectedCategory === 'All' || form.category === selectedCategory;
            const searchMatch = searchQuery.trim() === '' || 
                form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return categoryMatch && searchMatch;
        });
    }, [selectedCategory, searchQuery]);

    return (
                <div className="pt-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
             <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
                                 <div className="sticky top-24 z-30 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-lg -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12 py-4 mb-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                         <div className="relative w-full max-w-lg">
                            <input
                                type="search"
                                placeholder="Search forms by name, category, or tag..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full p-2 pl-10 text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors duration-300"
                                aria-label="Search forms"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                            </div>
                        </div>
                                                <div className="ml-4 hidden lg:flex items-center gap-3">
                                                    <label htmlFor="category-select" className="text-sm font-medium text-slate-600 dark:text-slate-400">Category</label>
                                                    <select 
                                                            id="category-select"
                                                            value={selectedCategory}
                                                            onChange={e => setSelectedCategory(e.target.value)}
                                                            className="p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors duration-300"
                                                    >
                                                            {formCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                                    </select>
                                                </div>
                    </div>
                 </div>

                                 {/* Grid of forms - no sidebar, no preview */}
                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                                     {filteredForms.length > 0 ? (
                                         filteredForms.map(form => (
                                             <FormCard key={`${form.name}-${form.keyword}`} form={form} />
                                         ))
                                     ) : (
                                         <p className="text-slate-500 dark:text-slate-400 p-4 text-center col-span-full">No forms found.</p>
                                     )}
                                 </div>
             </div>
        </div>
    );
};

export default FormsBrowserPage;
export { getServerSideProps } from '@/lib/ssr';

