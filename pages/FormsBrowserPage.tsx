

import React, { useState, useMemo, useEffect } from 'react';
import { formsData, formCategories, FormTemplate } from '../data/formsData';
import { formTemplatesHtml } from '../data/formTemplatesHtml';
// FIX: Import the missing CheckCircleIcon component.
import { SearchIcon, ShareIcon, ClipboardIcon, ChevronRightIcon, WhatsAppIcon, MenuIcon, CloseIcon, CheckCircleIcon } from '../icons';

const FormCard: React.FC<{ form: FormTemplate; isSelected: boolean; onClick: () => void; }> = ({ form, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left p-4 rounded-lg transition-all duration-200 border-l-4 ${isSelected ? 'bg-green-100 dark:bg-green-500/10 border-green-500' : 'bg-white dark:bg-slate-800/50 border-transparent hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'}`}
    >
        <div className="flex justify-between items-center">
            <h3 className="font-semibold text-slate-800 dark:text-white">{form.name}</h3>
            <ChevronRightIcon className="h-5 w-5 text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{form.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
            {form.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
    </button>
);

const FormPreview: React.FC<{ form: FormTemplate | null }> = ({ form }) => {
    const [copied, setCopied] = useState(false);

    if (!form) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                <p>Select a form to see a preview.</p>
            </div>
        );
    }
    
    const whatsappLink = `https://wa.me/917849945640?text=${encodeURIComponent(form.keyword)}`;
    const webPreviewHtml = formTemplatesHtml[form.keyword] || null;

    const copyLink = () => {
        navigator.clipboard.writeText(whatsappLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{form.name}</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Category: {form.category}</p>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <button onClick={copyLink} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors" aria-label="Copy link">
                        {copied ? <CheckCircleIcon className="h-5 w-5 text-green-500"/> : <ClipboardIcon className="h-5 w-5" />}
                    </button>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#25D366] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1DAE54] transition-colors shadow-md">
                        <WhatsAppIcon className="h-5 w-5" />
                        <span>Experience in WhatsApp</span>
                    </a>
                </div>
            </div>
            
            {/* Body */}
            <div className="flex-grow bg-slate-100 dark:bg-slate-800 overflow-hidden">
                {webPreviewHtml ? (
                    <iframe
                        key={form.keyword}
                        srcDoc={webPreviewHtml}
                        title={`${form.name} Web Preview`}
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-forms allow-same-origin"
                    />
                ) : (
                    <div className="h-full flex items-center justify-center p-8">
                        <div className="text-center bg-white dark:bg-slate-900 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">Web Preview Not Available</h3>
                            <p className="mt-2 text-slate-500 dark:text-slate-400">
                                A web preview is not available for this template.
                                <br />
                                You can still experience it live on WhatsApp.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


const FormsBrowserPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedForm, setSelectedForm] = useState<FormTemplate>(formsData[0]);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        // Close sidebar on desktop resize
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredForms = useMemo(() => {
        return formsData.filter(form => {
            const categoryMatch = selectedCategory === 'All' || form.category === selectedCategory;
            const searchMatch = searchQuery.trim() === '' || 
                form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return categoryMatch && searchMatch;
        });
    }, [selectedCategory, searchQuery]);

    const handleSelectForm = (form: FormTemplate) => {
        setSelectedForm(form);
        if (isSidebarOpen) {
            setSidebarOpen(false);
        }
    };
    
    return (
        <div className="pt-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
             <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
                 {/* Global Search & Mobile Nav Toggle */}
                 <div className="sticky top-24 z-30 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-lg -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                         <div className="relative w-full max-w-lg">
                            <input
                                type="search"
                                placeholder="Search forms by name, category, or tag..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full p-2 pl-10 text-base bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full focus:ring-2 focus:ring-green-500 focus:outline-none"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-slate-400" />
                            </div>
                        </div>
                        <div className="lg:hidden ml-4">
                            <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800" aria-label="Open form list">
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                 </div>

                 <div className="flex -mx-4">
                    {/* Sidebar */}
                    <aside className={`fixed lg:relative inset-y-0 left-0 z-40 w-80 lg:w-1/4 h-screen lg:h-auto bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform transition-transform duration-300 ease-in-out lg:transform-none lg:transition-none flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800 lg:hidden">
                            <h2 className="font-bold">Form Templates</h2>
                            <button onClick={() => setSidebarOpen(false)} className="p-2" aria-label="Close form list">
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="p-4">
                            <label htmlFor="category-select" className="text-sm font-medium text-slate-600 dark:text-slate-400">Select Category</label>
                            <select 
                                id="category-select"
                                value={selectedCategory}
                                onChange={e => setSelectedCategory(e.target.value)}
                                className="mt-1 w-full p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
                            >
                                {formCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                        <div className="flex-grow overflow-y-auto p-4 space-y-2">
                             {filteredForms.map(form => (
                                <div key={form.name} className="group">
                                    <FormCard form={form} isSelected={selectedForm?.name === form.name} onClick={() => handleSelectForm(form)} />
                                </div>
                            ))}
                        </div>
                    </aside>

                     {/* Backdrop for mobile sidebar */}
                    {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

                    {/* Main Workspace */}
                    <main className="w-full lg:w-3/4 p-4">
                         <div className="h-[calc(100vh-12rem)]">
                            <FormPreview form={selectedForm} />
                        </div>
                    </main>
                 </div>
             </div>
        </div>
    );
};

export default FormsBrowserPage;