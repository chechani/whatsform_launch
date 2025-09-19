import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import { templatesPageData } from '@/data/pages/templates';
import Link from 'next/link';

const TemplatesPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={templatesPageData.hero.title} 
                subtitle={templatesPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    {templatesPageData.categories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{category.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.templates.map((template, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
                                        <img src={template.image} alt={template.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{template.title}</h3>
                                        <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{template.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {template.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Link href="/contact" legacyBehavior>
                                            <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Use Template &rarr;</a>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default TemplatesPage;

export { getServerSideProps } from '@/lib/ssr';

