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
                                <img src={story.image} alt={story.company} className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{story.company}</h3>
                                <p className="mt-2 text-sm text-green-600 dark:text-green-400">{story.industry}</p>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{story.summary}</p>
                                <div className="mt-4">
                                    {story.results.map((result, i) => (
                                        <div key={i} className="text-sm text-slate-500 dark:text-slate-400">• {result}</div>
                                    ))}
                                </div>
                                <Link href="/contact" legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Get Started &rarr;</a>
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

export { getServerSideProps } from '@/lib/ssr';

