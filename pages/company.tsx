import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, TeamGrid, StatsGrid, ValuesGrid } from '@/components/PageBuilder';
import { companyPageData } from '@/data/pages/company';
import Link from 'next/link';

const CompanyPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero title={companyPageData.hero.title} subtitle={companyPageData.hero.subtitle} />
            
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentWithImage {...companyPageData.about} />
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <StatsGrid {...companyPageData.stats} />
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                   <ValuesGrid {...companyPageData.values} />
                </div>
            </section>

             <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <TeamGrid {...companyPageData.team} />
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={companyPageData.careers.title} subtitle={companyPageData.careers.subtitle}>
                        <Link href="/careers" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                View Open Positions
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
