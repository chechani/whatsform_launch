

import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../components/PageBuilder';
import { formsData } from '../../data/formsData';

export interface CategoryPageData {
    hero: { title: string; subtitle: string; };
    sections: (
        | { type: 'centeredText'; title: string; subtitle?: string; }
        | { type: 'contentWithImage'; subtitle: string; title: string; text: string; image: string; features: string[]; reverse?: boolean; }
        | { type: 'benefitsGrid'; title: string; subtitle?: string; benefits: { icon: React.FC<{className?: string}>; title: string; description: string }[]; }
    )[];
    relevantForms: string[];
    closing: { title: string; subtitle: string; cta: string; };
}

interface CategoryPageLayoutProps {
    navigate: (path: string) => void;
    data: CategoryPageData;
    currentIndustry?: string;
    currentCategory?: string;
}

const RelevantForms: React.FC<{ navigate: (path: string) => void; formKeywords: string[] }> = ({ navigate, formKeywords }) => {
    const relevantForms = formsData.filter(form => formKeywords.includes(form.keyword));

    if (relevantForms.length === 0) {
        return null;
    }

    return (
        <section className="bg-white dark:bg-slate-950 py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Relevant Form Templates</h2>
                    <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Get started quickly with these pre-built forms. Experience them live on WhatsApp.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relevantForms.map(form => (
                        <div key={form.keyword} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{form.name}</h3>
                            <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{form.description}</p>
                            <a 
                                href={`https://wa.me/917849945640?text=${encodeURIComponent(form.keyword)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block font-semibold text-green-600 dark:text-green-400 hover:underline self-start"
                            >
                                Try on WhatsApp &rarr;
                            </a>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <button
                        onClick={() => navigate('#/forms-browser')}
                        className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg"
                    >
                        Explore All Templates
                    </button>
                </div>
            </div>
        </section>
    );
};

export const CategoryPageLayout: React.FC<CategoryPageLayoutProps> = ({ navigate, data }) => {
    const { hero, sections, relevantForms, closing } = data;

    const SectionWrapper: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => {
        const bgColors = [
            "bg-white dark:bg-slate-950",
            "bg-pastel-blue dark:bg-sky-950/30",
            "bg-white dark:bg-slate-950",
            "bg-pastel-green dark:bg-green-950/30",
        ];
        const bgColor = bgColors[index % bgColors.length];
        return <div className={`${bgColor}`}>{children}</div>;
    };

    return (
        <main>
            <GenericPageHero title={hero.title} subtitle={hero.subtitle} />
            
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {sections.map((section, index) => (
                    <SectionWrapper key={index} index={index}>
                        <div className="py-16 sm:py-20 lg:py-24">
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
                        </div>
                    </SectionWrapper>
                ))}
            </div>
            
            {relevantForms.length > 0 && <RelevantForms navigate={navigate} formKeywords={relevantForms} />}

            <div className="bg-pastel-yellow dark:bg-amber-950/30 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={closing.title} subtitle={closing.subtitle}>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </div>
            
            <CTA />
        </main>
    );
};