

import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { teamInboxPageData } from '../data/pages/teamInbox';

interface TeamInboxPageProps {
    navigate: (path: string) => void;
}

const SectionWrapper: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => {
    const bgColors = [
        "bg-white dark:bg-slate-950",
        "bg-pastel-blue dark:bg-sky-950/30",
        "bg-white dark:bg-slate-950",
        "bg-pastel-green dark:bg-green-950/30",
    ];
    const bgColor = bgColors[index % bgColors.length];
    return <section className={`${bgColor} py-16 sm:py-20 lg:py-24 transition-colors duration-300`}>{children}</section>;
};

const TeamInboxPage: React.FC<TeamInboxPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero title={teamInboxPageData.hero.title} subtitle={teamInboxPageData.hero.subtitle} />
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {teamInboxPageData.sections.map((section, index) => (
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

            <div className="bg-pastel-yellow dark:bg-amber-950/30 py-16 sm:py-20 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={teamInboxPageData.closing.title} subtitle={teamInboxPageData.closing.subtitle}>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {teamInboxPageData.closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </div>
            
            <CTA />
        </main>
    );
};

export default TeamInboxPage;