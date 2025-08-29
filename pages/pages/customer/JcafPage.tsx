

import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../PageBuilder';
import { jcafPageData } from '../../data/pages/customers/Jcaf';

interface JcafPageProps {
    navigate: (path: string) => void;
}

const JcafPage: React.FC<JcafPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero title={jcafPageData.hero.title} subtitle={jcafPageData.hero.subtitle} />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
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

            <div className="bg-slate-50 dark:bg-slate-900 py-20">
                <ContentSection title={jcafPageData.closing.title} subtitle={jcafPageData.closing.subtitle}>
                     <a href="#/book-demo" onClick={(e) => { e.preventDefault(); navigate('#/book-demo'); }} className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                        {jcafPageData.closing.cta}
                    </a>
                </ContentSection>
            </div>
            
            <CTA navigate={navigate} />
        </main>
    );
};

export default JcafPage;
