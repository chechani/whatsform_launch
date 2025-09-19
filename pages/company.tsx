import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { companyPageData } from '../data/pages/company';
import Link from 'next/link';

const CompanyPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero title={companyPageData.hero.title} subtitle={companyPageData.hero.subtitle} />
            
            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentWithImage {...companyPageData.mission} />
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentWithImage {...companyPageData.story} />
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                   <BenefitsGrid 
                       title={companyPageData.values.title}
                       subtitle={companyPageData.values.subtitle}
                       benefits={companyPageData.values.items}
                   />
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={companyPageData.closing.title} subtitle={companyPageData.closing.subtitle}>
                        <Link href="/careers" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {companyPageData.closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default CompanyPage;

export { getServerSideProps } from '@/lib/ssr';

