
import React from 'react';
import { GenericPageHero, CTA, ContentSection, BenefitsGrid } from '../PageBuilder';
import { partnersPageData } from '../data/pages/partners';
import { GiftIcon, BotIcon, CodeBracketIcon } from '../icons';

const PartnersPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={partnersPageData.hero.title} 
                subtitle={partnersPageData.hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
                    <ContentSection 
                        title={partnersPageData.intro.title}
                        subtitle={partnersPageData.intro.subtitle}
                    />
                    
                    <div>
                        <ContentSection 
                            title={partnersPageData.partnerTypes.title}
                            subtitle={partnersPageData.partnerTypes.subtitle}
                        />
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {partnersPageData.partnerTypes.types.map(type => (
                                <div key={type.title} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col text-center">
                                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto">
                                        {React.createElement(type.icon)}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">{type.title}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <BenefitsGrid {...partnersPageData.benefits} />

                    <div className="text-center">
                        <ContentSection title={partnersPageData.howItWorks.title} />
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {partnersPageData.howItWorks.steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center items-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 mx-auto font-bold text-2xl border-2 border-green-200 dark:border-green-500/20">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-5">{step.title}</h3>
                                    <p className="mt-2 text-slate-600 dark:text-slate-400">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
             <section className="bg-pastel-green dark:bg-green-950/30 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={partnersPageData.closing.title} subtitle={partnersPageData.closing.subtitle}>
                        <a href="mailto:partners@whatsform.in" className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                            {partnersPageData.closing.cta}
                        </a>
                    </ContentSection>
                </div>
            </section>
            <CTA navigate={navigate} />
        </main>
    );
};

export default PartnersPage;