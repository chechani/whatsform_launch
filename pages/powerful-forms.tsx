import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid } from '@/components/PageBuilder';
import { powerfulFormsPageData } from '@/data/pages/powerfulForms';
import Link from 'next/link';

const PowerfulFormsPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={powerfulFormsPageData.hero.title} 
                subtitle={powerfulFormsPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
                    {powerfulFormsPageData.sections.map((section, index) => {
                        switch (section.type) {
                            case 'contentWithImage':
                                return <ContentWithImage key={index} {...section as any} />;
                            case 'pageFeatureGrid':
                                return <PageFeatureGrid key={index} {...section as any} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </section>
            <section className="bg-slate-100 dark:bg-slate-800 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={powerfulFormsPageData.closing.title} 
                        subtitle={powerfulFormsPageData.closing.subtitle}
                    >
                        <div className="mt-8">
                            <Link href="/signup" legacyBehavior>
                                <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                    {powerfulFormsPageData.closing.cta}
                                </a>
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default PowerfulFormsPage;
