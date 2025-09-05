import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import { industrySolutionsPageData } from '../data/pages/industrySolutions';
import Link from 'next/link';

const IndustrySolutionsPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={industrySolutionsPageData.hero.title} 
                subtitle={industrySolutionsPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industrySolutionsPageData.industries.map((industry, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{industry.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{industry.description}</p>
                                <Link href={industry.link} className="mt-4 inline-block text-green-600 font-semibold hover:underline">
                                    Learn More &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
             <section className="bg-slate-100 dark:bg-slate-800 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="Not seeing your industry?" 
                        subtitle="WhatsForm is flexible enough to adapt to any business. Contact us to learn how we can help you."
                    >
                        <div className="mt-8">
                            <Link href="/contact" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                Contact Us
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default IndustrySolutionsPage;
