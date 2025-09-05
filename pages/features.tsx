import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { featuresPageData } from '../data/pages/features';
import { ArrowRightIcon, ArrowDownIcon } from '../icons';

const FeaturesPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={featuresPageData.hero.title} 
                subtitle={featuresPageData.hero.subtitle} 
            />

            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuresPageData.features.map((feature, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
                                <div className="flex-shrink-0">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{feature.title}</h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">{feature.description}</p>
                                </div>
                                <div className="mt-4">
                                    <Link href={feature.link.replace('#', '')} legacyBehavior>
                                        <a className="text-green-600 font-semibold hover:underline flex items-center">
                                            Learn More <ArrowRightIcon className="w-5 h-5 ml-1" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default FeaturesPage;
