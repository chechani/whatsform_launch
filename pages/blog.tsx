import React from 'react';
import { GenericPageHero, CTA } from '@/components/PageBuilder';
import { blogPosts } from '@/data/pages/blog';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title="WhatsForm Blog" 
                subtitle="Insights, tips, and stories on revolutionizing business communication with WhatsApp and AI"
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image 
                                        src={post.image} 
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-3">
                                        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                                            <span>{post.author}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight">{post.title}</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 flex-grow text-sm leading-relaxed">{post.excerpt}</p>
                                    <Link href={post.slug} legacyBehavior>
                                        <a className="mt-4 inline-flex items-center text-green-600 font-semibold hover:text-green-700 dark:hover:text-green-400 transition-colors">
                                            Read More 
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default BlogPage;

export { getServerSideProps } from '@/lib/ssr';

