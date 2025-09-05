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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {partnersPageData.partners.map((partner, index) => (
                            <div key={index} className="flex justify-center items-center p-8 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md">
                                <img src={partner.logo} alt={partner.name} className="max-h-12" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContentSection title={partnersPageData.cta.title} subtitle={partnersPageData.cta.subtitle}>
                <Link href="/contact" legacyBehavior>
                    <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                        {partnersPageData.cta.buttonText}
                    </a>
                </Link>
            </ContentSection>
            <CTA />
        </main>
    );
};

export default PartnersPage;
