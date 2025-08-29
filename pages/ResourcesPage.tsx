import React from 'react';
import { GenericPageHero } from '../PageBuilder';
import { blogPosts } from '../data/pages/blog';
import { resourcesPageData } from '../data/pages/resources';

interface ResourcesPageProps {
    navigate: (path: string) => void;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={resourcesPageData.hero.title} 
                subtitle={resourcesPageData.hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => {
                            const postPath = `#/blog/${post.slug}`;
                            return (
                                <a 
                                    key={post.slug} 
                                    href={postPath}
                                    onClick={(e) => { e.preventDefault(); navigate(postPath); }}
                                    className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-500 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                                >
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{post.title}</h3>
                                        <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{post.description}</p>
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-500 dark:text-slate-400">
                                            <span>{post.date} &middot; {post.readTime}</span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ResourcesPage;
