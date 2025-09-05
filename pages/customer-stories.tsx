import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import { customerStoriesPageData } from '@/data/pages/customer-stories';
import Link from 'next/link';

const CustomerStoriesPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={customerStoriesPageData.hero.title} 
                subtitle={customerStoriesPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {customerStoriesPageData.stories.map((story, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{story.company}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">"{story.quote}"</p>
                                <Link href={story.link} legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Read Story &rarr;</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default CustomerStoriesPage;
