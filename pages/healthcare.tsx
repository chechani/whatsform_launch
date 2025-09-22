import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { healthcarePageData } from '../data/pages/healthcare';

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
    return <section className={`${bgColor} py-16 sm:py-20 lg:py-24`}>{children}</section>;
};


const HealthcarePage: React.FC = () => {
    return (
        <main>
            <GenericPageHero title={healthcarePageData.hero.title} subtitle={healthcarePageData.hero.subtitle} />
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {healthcarePageData.sections.map((section, index) => {
                    const subCategory = healthcarePageData.subCategories.find(sc => sc.id === (section as any).id);
                    return (
                        <SectionWrapper key={index} index={index}>
                            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                                {(() => {
                                    switch (section.type) {
                                        case 'centeredText':
                                            return <ContentSection title={section.title} subtitle={section.subtitle} />;
                                        case 'contentWithImage':
                                            return <ContentWithImage {...section as any} />;
                                        case 'benefitsGrid':
                                            return (
                                                <div>
                                                    <BenefitsGrid {...section as any} />
                                                    {subCategory && (
                                                        <div className="mt-8 text-center">
                                                            <Link href={`/healthcare/${subCategory.slug}`} legacyBehavior>
                                                                <a className="text-green-500 hover:text-green-600 font-semibold">
                                                                    Learn more &rarr;
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })()}
                            </div>
                        </SectionWrapper>
                    )
                })}
            </div>

            <div className="bg-pastel-green dark:bg-green-950/30 py-16 sm:py-20">
                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={healthcarePageData.closing.title} subtitle={healthcarePageData.closing.subtitle}>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {healthcarePageData.closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </div>
            
                        <CTA />
        </main>
    );
};

export default HealthcarePage;
export { getStaticProps } from '@/lib/ssr';

