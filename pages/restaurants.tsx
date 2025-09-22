import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { BuildingStorefrontIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

import { restaurantsPageData } from '../data/pages/restaurants';

const RestaurantsPage: React.FC = () => {

    return (
        <main>
            <GenericPageHero title={restaurantsPageData.hero.title} subtitle={restaurantsPageData.hero.subtitle} />
            
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {restaurantsPageData.sections.map((section, index) => {
                    const subCategory = restaurantsPageData.subCategories.find(sc => sc.id === (section as any).id);
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
                                        case 'contentWithImage':
                                            return (
                                                <div>
                                                    <ContentWithImage {...section as any} />
                                                    {subCategory && (
                                                        <div className="mt-8 text-center">
                                                            <Link href={`/restaurants-food-outlets/${subCategory.slug}`} legacyBehavior>
                                                                <a className="text-green-500 hover:text-green-600 font-semibold">
                                                                    Learn more &rarr;
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        case 'benefitsGrid':
                                            return (
                                                <div>
                                                    <BenefitsGrid {...section as any} />
                                                    {subCategory && (
                                                        <div className="mt-8 text-center">
                                                            <Link href={`/restaurants-food-outlets/${subCategory.slug}`} legacyBehavior>
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
                    <ContentSection title={restaurantsPageData.closing.title} subtitle={restaurantsPageData.closing.subtitle}>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-demo" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg text-center">
                                {restaurantsPageData.closing.cta}
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

export default RestaurantsPage;

export { getStaticProps } from '@/lib/ssr';

