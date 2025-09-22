import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, BenefitsGrid } from '@/components/PageBuilder';
import { professionalServicesPageData } from '@/data/pages/professionalServices';

const ProfessionalServicesPage: React.FC = () => {

    return (
        <main>
            <GenericPageHero title={professionalServicesPageData.hero.title} subtitle={professionalServicesPageData.hero.subtitle} />
            
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {professionalServicesPageData.sections.map((section, index) => {
                    const subCategory = professionalServicesPageData.subCategories.find(sc => sc.id === (section as any).id);
                    const bgColors = [
                        "bg-white dark:bg-slate-950",
                        "bg-slate-50 dark:bg-slate-900",
                        "bg-white dark:bg-slate-950"
                    ];
                    const bgColor = bgColors[index % bgColors.length];
                    
                    return (
                        <section key={index} className={`${bgColor} py-16 sm:py-20 lg:py-24`}>
                            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                                {(() => {
                                    switch (section.type) {
                                        case 'benefitsGrid':
                                            return (
                                                <div>
                                                    <BenefitsGrid {...section as any} />
                                                    {subCategory && (
                                                        <div className="mt-8 text-center">
                                                            <Link href={`/professional-services/${subCategory.slug}`} legacyBehavior>
                                                                <a className="text-green-500 hover:text-green-600 font-semibold">
                                                                    Learn more &rarr;
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        default:
                                            return null;
                                    }
                                })()}
                            </div>
                        </section>
                    );
                })}
            </div>

            <section className="bg-green-50 dark:bg-green-950/30 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={professionalServicesPageData.closing.title} subtitle={professionalServicesPageData.closing.subtitle}>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-demo" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg text-center">
                                {professionalServicesPageData.closing.cta}
                            </Link>
                            <Link href="/contact" className="inline-block bg-transparent border-2 border-green-500 text-green-600 dark:text-green-400 font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-500 hover:text-white transition-all duration-200 shadow-lg text-center">
                                Contact Sales
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </section>
            
            <CTA />
        </main>
    );
};

export default ProfessionalServicesPage;

export { getStaticProps } from '@/lib/ssr';
