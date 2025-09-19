import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../components/PageBuilder';
import { jcafPageData } from '../../data/pages/customers/Jcaf';

const JcafPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero title={jcafPageData.hero.title} subtitle={jcafPageData.hero.subtitle} />
            
            <div className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
                    {jcafPageData.sections.map((section, index) => {
                        switch (section.type) {
                            case 'centeredText':
                                return <ContentSection key={index} title={section.title} subtitle={section.subtitle} />;
                            case 'contentWithImage':
                                return <ContentWithImage key={index} {...section as any} />;
                            case 'benefitsGrid':
                                return <BenefitsGrid key={index} {...section as any} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>

            {/* Closing Section */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900 dark:to-slate-800 py-20">
                <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                        {jcafPageData.closing.title}
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                        {jcafPageData.closing.subtitle}
                    </p>
                    <Link 
                        href="/book-demo" 
                        className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        {jcafPageData.closing.cta}
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
            
            <CTA />
        </main>
    );
};

export default JcafPage;

export { getServerSideProps } from '@/lib/ssr';

