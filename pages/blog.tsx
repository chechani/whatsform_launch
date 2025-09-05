import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import { blogPageData } from '@/data/pages/blog';
import Link from 'next/link';

const BlogPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={blogPageData.hero.title} 
                subtitle={blogPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPageData.posts.map((post, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{post.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{post.excerpt}</p>
                                <Link href={post.slug} legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Read More &rarr;</a>
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

export default BlogPage;
