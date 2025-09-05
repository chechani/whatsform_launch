import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import Link from 'next/link';

const HelpCenterPage: React.FC = () => {
    const categories = [
        { title: 'Getting Started', description: 'Learn the basics of WhatsForm.', link: '/help-center/getting-started' },
        { title: 'Form Building', description: 'Create and customize your forms.', link: '/help-center/form-building' },
        { title: 'Integrations', description: 'Connect WhatsForm to other apps.', link: '/help-center/integrations' },
    ];

    return (
        <main>
            <GenericPageHero 
                title="Help Center" 
                subtitle="Find answers and tutorials to help you get the most out of WhatsForm."
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="Browse Help Topics" 
                        subtitle="Explore our comprehensive guides and find the information you need."
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map(category => (
                            <div key={category.title} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{category.description}</p>
                                <Link href={category.link} legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Explore &rarr;</a>
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

export default HelpCenterPage;
