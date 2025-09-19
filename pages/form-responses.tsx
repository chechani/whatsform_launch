import React from 'react';
import { useRouter } from 'next/router';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '@/components/PageBuilder';
import { formResponsePageData } from '@/data/pages/formResponse';

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

const FormResponsePage: React.FC = () => {
    const router = useRouter();

    const handleFeaturesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push('/features');
    };

    return (
        <main>
            <GenericPageHero title={formResponsePageData.hero.title} subtitle={formResponsePageData.hero.subtitle} />
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {formResponsePageData.sections.map((section, index) => (
                    <SectionWrapper key={index} index={index}>
                       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        {(() => {
                            switch (section.type) {
                                case 'centeredText':
                                    return <ContentSection title={section.title} subtitle={section.subtitle} />;
                                case 'contentWithImage':
                                    return <ContentWithImage {...section as any} />;
                                case 'benefitsGrid':
                                    return <BenefitsGrid {...section as any} />;
                                default:
                                    return null;
                            }
                        })()}
                        </div>
                    </SectionWrapper>
                ))}
            </div>

            <div className="bg-pastel-green dark:bg-green-950/30 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={formResponsePageData.closing.title} subtitle={formResponsePageData.closing.subtitle}>
                        <a href="/features" onClick={handleFeaturesClick} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {formResponsePageData.closing.cta}
                        </a>
                    </ContentSection>
                </div>
            </div>
            
            <CTA />
        </main>
    );
};

export default FormResponsePage;
export { getServerSideProps } from '@/lib/ssr';

