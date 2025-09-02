
import React from 'react';
import { CTA } from '../../PageBuilder';
import { dripCampaignsOnWhatsappData as post } from '../../data/pages/blog/dripCampaignsOnWhatsapp';

const BlogContentRenderer: React.FC<{ content: typeof post.content }> = ({ content }) => {
    return (
        <div className="space-y-6">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'heading':
                        return <h2 key={index} className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mt-10 mb-4">{block.text}</h2>;
                    case 'paragraph':
                        return <p key={index} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{block.text}</p>;
                    case 'list':
                        return (
                            <ul key={index} className="space-y-2 list-disc list-inside">
                                {block.items.map((item, i) => <li key={i} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{item}</li>)}
                            </ul>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

interface DripCampaignsOnWhatsappPageProps {
    navigate: (path: string) => void;
}

const DripCampaignsOnWhatsappPage: React.FC<DripCampaignsOnWhatsappPageProps> = ({ navigate }) => {
    return (
        <main>
            <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <header className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{post.title}</h1>
                        <div className="mt-6 text-slate-500 dark:text-slate-400">
                            <span>By {post.author}</span> &middot; <span>{post.date}</span> &middot; <span>{post.readTime}</span>
                        </div>
                    </header>
                    <img src={post.heroImage} alt={post.title} className="mt-12 rounded-2xl shadow-xl w-full" />
                    <article className="mt-16">
                        <BlogContentRenderer content={post.content} />
                    </article>
                </div>
            </div>
            <CTA navigate={navigate} />
        </main>
    );
};

export default DripCampaignsOnWhatsappPage;
