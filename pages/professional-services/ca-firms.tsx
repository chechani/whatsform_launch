import React from 'react';
import { useRouter } from 'next/router';
import { GenericPageHero, CTA, ContentSection, ContentWithImage } from '../../components/PageBuilder';
import { caFirmsPageData } from '@/data/pages/caFirms';

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


const CAFirmsPage: React.FC = () => {
    const router = useRouter();

    const handleBookDemoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push('/book-demo');
    };

    return (
        <main>
            <GenericPageHero title={caFirmsPageData.hero.title} subtitle={caFirmsPageData.hero.subtitle} />
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {caFirmsPageData.sections.map((section, index) => {
                    return (
                        <SectionWrapper key={index} index={index}>
                           <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                                {(() => {
                                    switch (section.type) {
                                        case 'centeredText':
                                            return <ContentSection title={section.title} subtitle={section.subtitle} />;
                                        case 'contentWithImage':
                                            return <ContentWithImage {...section as any} />;
                                        default:
                                            return null;
                                    }
                                })()}
                            </div>
                        </SectionWrapper>
                    )
                })}

                <section className="bg-pastel-yellow dark:bg-amber-950/30 py-16 sm:py-20 lg:py-24">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                        <ContentSection title={caFirmsPageData.useCaseGrid.title} />
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {caFirmsPageData.useCaseGrid.items.map(item => (
                                <span key={item} className="bg-green-100 dark:bg-green-500/10 text-green-800 dark:text-green-300 text-md font-semibold px-4 py-2 rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <div className="bg-pastel-green dark:bg-green-950/30 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={caFirmsPageData.closing.title} subtitle={caFirmsPageData.closing.subtitle}>
                        <a href="/book-demo" onClick={handleBookDemoClick} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {caFirmsPageData.closing.cta}
                        </a>
                    </ContentSection>
                </div>
            </div>
            
            <CTA />
        </main>
    );
};

export default CAFirmsPage;

export { getStaticProps } from '@/lib/ssr';
