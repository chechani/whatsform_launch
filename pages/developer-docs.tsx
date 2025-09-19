import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import Link from 'next/link';

const DeveloperDocsPage: React.FC = () => {
    const apiSections = [
        { title: 'Getting Started', description: 'Authentication and basic setup.' },
        { title: 'Form Submissions', description: 'Receiving form data via webhooks.' },
        { title: 'Contact Management', description: 'Programmatically manage contacts.' },
    ];

    return (
        <main>
            <GenericPageHero 
                title="Developer Documentation" 
                subtitle="Integrate and extend WhatsForm with our powerful APIs."
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="Unlock a Universe of Possibilities" 
                        subtitle="Our comprehensive documentation provides everything you need to build on top of the WhatsForm platform."
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {apiSections.map(section => (
                            <div key={section.title} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{section.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{section.description}</p>
                                <Link href="/developer-docs" legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Read Docs &rarr;</a>
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

export default DeveloperDocsPage;

export { getStaticProps } from '@/lib/ssr';

