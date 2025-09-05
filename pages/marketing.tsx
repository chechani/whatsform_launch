import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage } from '../components/PageBuilder';
import { marketingPageData } from '../data/pages/marketing';

interface MarketingPageProps {
    navigate: (path: string) => void;
}

const SectionWrapper: React.FC<{ index: number; children: React.ReactNode; }> = ({ index, children }) => {
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

const MarketingPage: React.FC<MarketingPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero title={marketingPageData.hero.title} subtitle={marketingPageData.hero.subtitle} />
            
            {marketingPageData.sections.map((section, index) => (
                <SectionWrapper key={index} index={index}>
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                        {(() => {
                            switch (section.type) {
                                case 'centeredText':
                                    return <ContentSection title={section.title} subtitle={section.subtitle} />;
                                case 'featureList':
                                    return (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {section.features.map(f => (
                                                <div key={f.title} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 text-center">
                                                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                                                        {React.createElement(f.icon, { className: "h-8 w-8" })}
                                                    </div>
                                                    <h3 className="mt-4 text-lg font-semibold text-slate-800 dark:text-slate-200">{f.title}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                case 'stats':
                                    return (
                                        <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-4xl mx-auto">
                                            <p className="text-lg text-slate-600 dark:text-slate-300">{section.description}</p>
                                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                                                {section.stats.map(stat => (
                                                    <div key={stat.label}>
                                                        <p className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400">{stat.value}</p>
                                                        <p className="mt-2 text-slate-600 dark:text-slate-300">{stat.label}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                case 'contentWithImage':
                                    return <ContentWithImage {...section as any} />;
                                default:
                                    return null;
                            }
                        })()}
                    </div>
                </SectionWrapper>
            ))}
            
            <div className="bg-pastel-pink dark:bg-violet-950/30 py-16 sm:py-20 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={marketingPageData.closing.title} subtitle={marketingPageData.closing.subtitle}>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                {marketingPageData.closing.cta}
                            </a>
                        </Link>
                    </ContentSection>
                </div>
            </div>
            <CTA />
        </main>
    );
};

export default MarketingPage;