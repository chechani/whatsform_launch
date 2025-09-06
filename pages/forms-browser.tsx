
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { formsData, formCategories, FormTemplate } from '../data/formsData';
import { formTemplatesHtml } from '../data/formTemplatesHtml';
import { SearchIcon, ShareIcon, ClipboardIcon, WhatsAppIcon, MenuIcon, CloseIcon, CheckCircleIcon } from '../icons';

// Card component for displaying a form template in the list
const FormCard: React.FC<{ form: FormTemplate; isSelected: boolean; onClick: () => void; }> = ({ form, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform ${isSelected 
            ? 'bg-white dark:bg-slate-800 ring-2 ring-green-500 shadow-lg' 
            : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:-translate-y-1'
        }`}
        aria-pressed={isSelected}
    >
        <h3 className="font-bold text-slate-800 dark:text-white">{form.name}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{form.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
            {form.tags.map(tag => (
                <span key={tag} className="text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full font-medium">{tag}</span>
            ))}
        </div>
    </button>
);

// Preview component for the selected form
const FormPreview: React.FC<{ form: FormTemplate | null }> = ({ form }) => {
    const [copied, setCopied] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Function to dynamically adjust iframe height based on its content
    const adjustIframeHeight = () => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
            // A small timeout helps ensure the content has fully rendered, especially with images or complex styles.
            setTimeout(() => {
                if (iframeRef.current && iframeRef.current.contentWindow) {
                    const body = iframeRef.current.contentWindow.document.body;
                    const html = iframeRef.current.contentWindow.document.documentElement;
                    // Use the max height of all possible properties to get the full content height
                    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                    if (height > 0) {
                        iframeRef.current.style.height = `${height}px`;
                    }
                }
            }, 150);
        }
    };

    // Effect to reset iframe height when the selected form changes
    useEffect(() => {
        if (iframeRef.current) {
            const webPreviewContent = form && formTemplatesHtml[form.keyword];
            const isUrl = webPreviewContent && (webPreviewContent.startsWith('http://') || webPreviewContent.startsWith('https://'));
            // Reset to a sensible default to avoid layout jumps while new content loads
            iframeRef.current.style.height = isUrl ? 'calc(100vh - 18rem)' : '600px';
        }
    }, [form]);

    if (!form) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500 dark:text-slate-400 p-8 transition-colors duration-300">
                <p>Select a form from the list to see a preview.</p>
            </div>
        );
    }
    
    const whatsappLink = `https://wa.me/917849945640?text=${encodeURIComponent(form.keyword)}`;
    const webPreviewContent = formTemplatesHtml[form.keyword] || null;
    const isUrl = webPreviewContent && (webPreviewContent.startsWith('http://') || webPreviewContent.startsWith('https://'));

    const copyLink = () => {
        navigator.clipboard.writeText(whatsappLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareForm = async () => {
        if (navigator.share && form) {
            try {
                await navigator.share({
                    title: form.name,
                    text: `Check out this form template: ${form.name} - ${form.description}`,
                    url: whatsappLink,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            copyLink();
            alert('Link copied to clipboard! Web Share is not supported in your browser.');
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col h-full transition-colors duration-300">
            {/* Header */}
            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-colors duration-300">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{form.name}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Category: {form.category}</p>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <button onClick={shareForm} className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-all duration-300" aria-label="Share form">
                        <ShareIcon className="h-5 w-5" />
                    </button>
                    <button onClick={copyLink} className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 transition-all duration-300" aria-label="Copy link">
                        {copied ? <CheckCircleIcon className="h-5 w-5 text-green-500"/> : <ClipboardIcon className="h-5 w-5" />}
                    </button>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-[#25D366] text-white font-bold py-2.5 px-5 rounded-lg hover:bg-[#1DAE54] transition-colors shadow-md transform hover:scale-105">
                        <WhatsAppIcon className="h-5 w-5" />
                        <span>Experience in WhatsApp</span>
                    </a>
                </div>
            </div>
            
            {/* Body */}
            <div className="bg-slate-100 dark:bg-slate-700/50 overflow-hidden rounded-b-2xl flex-grow transition-colors duration-300">
                {webPreviewContent ? (
                    <iframe
                        ref={iframeRef}
                        key={form.keyword}
                        src={isUrl ? webPreviewContent : undefined}
                        srcDoc={!isUrl ? webPreviewContent : undefined}
                        title={`${form.name} Web Preview`}
                        className={`w-full border-0 ${!isUrl ? 'transition-[height] duration-300 ease-in-out' : ''}`}
                        style={{ height: isUrl ? 'calc(100vh - 18rem)' : '600px' }} // Taller for external sites
                        sandbox={!isUrl ? "allow-scripts allow-forms allow-same-origin" : undefined}
                        onLoad={!isUrl ? adjustIframeHeight : undefined}
                    />
                ) : (
                    <div className="h-full min-h-[400px] flex items-center justify-center p-8">
                        <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md transition-colors duration-300">
                            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200">Web Preview Not Available</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">
                                A web preview for this template is not available.
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

// Main page component
const FormsBrowserPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedForm, setSelectedForm] = useState<FormTemplate | null>(formsData.length > 0 ? formsData[0] : null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
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
                form.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                form.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return categoryMatch && searchMatch;
        });
    }, [selectedCategory, searchQuery]);

    const handleSelectForm = (form: FormTemplate) => {
        setSelectedForm(form);
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };
    
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
                        <div className="lg:hidden ml-4">
                            <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors duration-300" aria-label="Open form list">
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                 </div>

                 <div className="flex gap-6">
                    {/* Sidebar */}
                    <aside className={`fixed lg:relative top-0 lg:top-0 left-0 z-40 w-80 lg:w-96 h-full lg:h-[calc(100vh-12rem)] bg-slate-50 dark:bg-slate-900 flex flex-col transition-all duration-300 ease-in-out lg:transform-none lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800 lg:hidden bg-white dark:bg-slate-800 transition-colors duration-300">
                            <h2 className="font-bold text-lg text-slate-800 dark:text-white">Form Templates</h2>
                            <button onClick={() => setSidebarOpen(false)} className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors duration-300" aria-label="Close form list">
                                <CloseIcon />
                            </button>
                        </div>

                        <div className="p-4 bg-white dark:bg-slate-800 rounded-t-lg lg:rounded-lg transition-colors duration-300">
                            <label htmlFor="category-select" className="text-sm font-medium text-slate-600 dark:text-slate-400">Select Category</label>
                            <select 
                                id="category-select"
                                value={selectedCategory}
                                onChange={e => setSelectedCategory(e.target.value)}
                                className="mt-1 w-full p-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors duration-300"
                            >
                                {formCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                        <div className="flex-grow overflow-y-auto p-4 bg-white dark:bg-slate-800 rounded-b-lg lg:rounded-lg grid gap-4 auto-rows-min transition-colors duration-300">
                             {filteredForms.length > 0 ? filteredForms.map(form => (
                                <FormCard key={`${form.name}-${form.keyword}`} form={form} isSelected={selectedForm?.keyword === form.keyword} onClick={() => handleSelectForm(form)} />
                            )) : (
                                <p className="text-slate-500 dark:text-slate-400 p-4 text-center">No forms found.</p>
                            )}
                        </div>
                    </aside>

                    {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}

                    {/* Main Workspace */}
                    <main className="flex-1 min-w-0">
                        <div className="lg:sticky lg:top-40">
                            <FormPreview form={selectedForm} />
                        </div>
                    </main>
                 </div>
             </div>
        </div>
    );
};

export default FormsBrowserPage;