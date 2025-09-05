import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid } from '../components/PageBuilder';
import { supportPageData } from '../data/pages/support';

interface SupportPageProps {
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


const SupportPage: React.FC<SupportPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero title={supportPageData.hero.title} subtitle={supportPageData.hero.subtitle} />
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {supportPageData.sections.map((section, index) => {
                     return (
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
                     );
                })}
            </div>
            <CTA navigate={navigate} />
        </main>
    );
};

export default SupportPage;