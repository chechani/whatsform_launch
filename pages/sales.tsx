import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid } from '../components/PageBuilder';
import { salesPageData } from '../data/pages/sales';

interface SalesPageProps {
    navigate: (path: string) => void;
}

const SectionWrapper: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => {
    const bgColors = [
        "bg-pastel-blue dark:bg-sky-950/30",
        "bg-white dark:bg-slate-950",
        "bg-pastel-green dark:bg-green-950/30",
        "bg-white dark:bg-slate-950",
        "bg-pastel-yellow dark:bg-amber-950/30",
        "bg-white dark:bg-slate-950",
        "bg-pastel-pink dark:bg-violet-950/30",
    ];
    const bgColor = bgColors[index % bgColors.length];
    return <section className={`${bgColor} py-16 sm:py-20 lg:py-24 transition-colors duration-300`}>{children}</section>;
};

const SalesPage: React.FC<SalesPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero title={salesPageData.hero.title} subtitle={salesPageData.hero.subtitle} />
             <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                    {salesPageData.sections.map((section, index) => (
                        <SectionWrapper key={index} index={index}>
                            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                                {(() => {
                                    switch (section.type) {
                                        case 'centeredText':
                                            return <ContentSection title={section.title} subtitle={section.subtitle} />;
                                        case 'contentWithImage':
                                            return <ContentWithImage {...section as any} />;
                                        case 'featureGrid':
                                            return <PageFeatureGrid {...section as any} />;
                                        default:
                                            return null;
                                    }
                                })()}
                            </div>
                        </SectionWrapper>
                    ))}
                    <section className="bg-pastel-yellow dark:bg-amber-950/30 py-16 sm:py-20 lg:py-24 transition-colors duration-300">
                        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                            <ContentSection title={salesPageData.useCaseGrid.title} subtitle={salesPageData.useCaseGrid.subtitle} />
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {salesPageData.useCaseGrid.items.map(item => (
                                    <span key={item} className="bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-300 text-md font-semibold px-4 py-2 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
             </div>
             <div className="bg-pastel-pink dark:bg-violet-950/30 py-16 sm:py-20 transition-colors duration-300">
                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={salesPageData.closing.title}>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {salesPageData.closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </div>
            <CTA />
        </main>
    );
};

export default SalesPage;
export { getServerSideProps } from '@/lib/ssr';

