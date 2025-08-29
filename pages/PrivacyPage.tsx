
import React from 'react';
import { GenericPageHero } from '../PageBuilder';
import { privacyPageData } from '../data/pages/privacy';

const PolicyContentRenderer: React.FC<{ content: typeof privacyPageData.content }> = ({ content }) => {
    return (
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'heading':
                        return <h2 key={index}>{block.text}</h2>;
                    case 'paragraph':
                        return <p key={index}>{block.text}</p>;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

const PrivacyPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={privacyPageData.hero.title} 
                subtitle={privacyPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                   <PolicyContentRenderer content={privacyPageData.content} />
                </div>
            </div>
        </main>
    );
};

export default PrivacyPage;
