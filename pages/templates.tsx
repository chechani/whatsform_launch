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
                    <ContentSection 
                        title="Browse by Category" 
                        subtitle="Find the perfect starting point for your next form."
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templatesPageData.templates.map((template, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{template.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{template.description}</p>
                                <Link href={template.link} legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Use Template &rarr;</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default TemplatesPage;
