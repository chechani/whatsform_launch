import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import Link from 'next/link';

const SiteIndexPage: React.FC = () => {
    const sections = [
        {
            title: 'Products',
            links: [
                { text: 'Features', path: '/features' },
                { text: 'Pricing', path: '/pricing' },
                { text: 'Book a Demo', path: '/book-demo' },
            ]
        },
        {
            title: 'Company',
            links: [
                { text: 'About Us', path: '/company' },
                { text: 'Careers', path: '/careers' },
                { text: 'Contact', path: '/contact' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { text: 'Blog', path: '/blog' },
                { text: 'Help Center', path: '/help-center' },
                { text: 'Developer Docs', path: '/developer-docs' },
            ]
        }
    ];

    return (
        <main>
            <GenericPageHero 
                title="Site Index" 
                subtitle="A complete overview of our website."
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sections.map(section => (
                            <div key={section.title} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{section.title}</h2>
                                <ul className="mt-4 space-y-2">
                                    {section.links.map(link => (
                                        <li key={link.path}>
                                            <Link href={link.path} legacyBehavior>
                                                <a className="text-green-600 hover:underline">{link.text}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default SiteIndexPage;
