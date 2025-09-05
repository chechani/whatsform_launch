import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import { partnersPageData } from '../data/pages/partners';
import Link from 'next/link';

const PartnersPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={partnersPageData.hero.title} 
                subtitle={partnersPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={partnersPageData.partnerTypes.title} subtitle={partnersPageData.partnerTypes.subtitle} />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {partnersPageData.partnerTypes.types.map((type, index) => (
                            <div key={index} className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
                                <div className="mx-auto w-12 h-12 text-green-500 mb-4">
                                    <type.icon className="w-full h-full" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{type.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContentSection title={partnersPageData.closing.title} subtitle={partnersPageData.closing.subtitle}>
                <Link href="/contact" legacyBehavior>
                    <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                        {partnersPageData.closing.cta}
                    </a>
                </Link>
            </ContentSection>
            <CTA />
        </main>
    );
};

export default PartnersPage;
