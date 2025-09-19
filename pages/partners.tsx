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
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {partnersPageData.partnerTypes.types.map((type, index) => (
                            <div key={index} className="text-center p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="mx-auto w-16 h-16 text-green-500 mb-6">
                                    <type.icon className="w-full h-full" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{type.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContentSection title={partnersPageData.closing.title} subtitle={partnersPageData.closing.subtitle}>
                <Link href="/partners-request" legacyBehavior>
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

export { getServerSideProps } from '@/lib/ssr';

