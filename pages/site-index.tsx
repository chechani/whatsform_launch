import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import { siteIndexData } from '@/data/pages/siteIndex';
import Link from 'next/link';

const SiteIndexPage: React.FC = () => {
    const [search, setSearch] = React.useState("");
    // Filter categories and links by search
    const filteredCategories = siteIndexData.categories
        .map(cat => ({
            ...cat,
            links: cat.links.filter(link =>
                link.name.toLowerCase().includes(search.toLowerCase()) ||
                link.description.toLowerCase().includes(search.toLowerCase())
            )
        }))
        .filter(cat => cat.links.length > 0);

    return (
        <main>
            <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-gray-900 dark:text-white overflow-hidden">
                {/* Original pattern overlay */}
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-slate-200/30 dark:bg-slate-500/10 rounded-full blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
                    <div className="text-center mb-4">
                        <span className="inline-block bg-green-100 dark:bg-slate-800 text-green-700 dark:text-green-300 text-sm font-medium px-4 py-2 rounded-full border border-green-200 dark:border-slate-700 backdrop-blur-sm">
                            Site Index
                        </span>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            WhatsForm <span className="text-green-600 dark:text-green-400"> Complete</span> Guide
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            Explore every feature, solution, and resource in our comprehensive WhatsApp Business platform. Find exactly what you need to transform your customer communication.
                        </p>
                    </div>
                </div>
            </div>
            <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                            <div className="inline-flex items-center space-x-8 bg-white dark:bg-slate-800 rounded-full px-8 py-4 shadow-lg">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">{siteIndexData.categories.length}</div>
                                <div className="text-sm text-green-700 dark:text-green-300">Categories</div>
                            </div>
                            <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">{siteIndexData.categories.reduce((total, cat) => total + cat.links.length, 0)}</div>
                                <div className="text-sm text-green-700 dark:text-green-300">Total Pages</div>
                            </div>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="mb-8 flex justify-center">
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search pages, features, or topics..."
                            className="w-full max-w-xl px-6 py-3 rounded-lg border border-green-300 dark:border-green-700 bg-white dark:bg-slate-800 text-lg text-slate-800 dark:text-white shadow focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>
                    {/* Category-wise Table of Contents */}
                    <div className="space-y-12">
                        {filteredCategories.map((category, catIdx) => (
                            <div key={catIdx} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-8 py-6">
                                    <h2 className="text-2xl font-bold text-white mb-1">{category.title}</h2>
                                    <p className="text-green-100 mb-2">{category.description}</p>
                                </div>
                                <div className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.links.map((link, linkIdx) => (
                                            <div key={linkIdx} className="flex flex-col justify-between bg-green-50 dark:bg-green-900/50 rounded-xl border border-green-200 dark:border-green-700 shadow hover:shadow-lg transition-all duration-200 p-6 mb-4">
                                                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">{link.name}</h3>
                                                <p className="text-sm text-green-700 dark:text-green-300 mb-4">{link.description}</p>
                                                <div className="mt-auto">
                                                    <Link href={link.path.replace('#', '')} className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-5 rounded-lg text-base shadow transition-transform hover:scale-105">
                                                        Visit Page
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredCategories.length === 0 && (
                            <div className="text-center py-12 text-lg text-slate-500">No topics found. Try a different search term.</div>
                        )}
                    </div>
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                            <span>Last updated: {new Date().toLocaleDateString()}</span>
                            <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                            <span>Complete site navigation</span>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export { getStaticProps } from '@/lib/ssr';

export default SiteIndexPage;
