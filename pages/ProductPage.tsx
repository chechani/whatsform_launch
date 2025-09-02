import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../PageBuilder';
import { miniAppsPageData } from '../data/pages/product';

interface MiniAppsPageProps {
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

const MiniAppsPage: React.FC<MiniAppsPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero title={miniAppsPageData.hero.title} subtitle={miniAppsPageData.hero.subtitle} />
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {miniAppsPageData.sections.map((section, index) => {
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
                                        return <BenefitsGrid {...section as any} />;
                                    default:
                                        return null;
                                }
                            })()}
                            </div>
                        </SectionWrapper>
                    )
                })}
            </div>

            <div className="bg-pastel-green dark:bg-green-950/30 py-16 sm:py-20 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={miniAppsPageData.closing.title} subtitle={miniAppsPageData.closing.subtitle}>
                        <a href="#/signup" onClick={(e) => { e.preventDefault(); navigate('#/signup'); }} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {miniAppsPageData.closing.cta}
                        </a>
                    </ContentSection>
                </div>
            </div>
            
            <CTA navigate={navigate} />
        </main>
    );
};

export default MiniAppsPage;