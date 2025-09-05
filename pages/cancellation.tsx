
import React from 'react';
import { GenericPageHero } from '../components/PageBuilder';
import { cancellationPageData } from '../data/pages/cancellation';

const PolicyContentRenderer: React.FC<{ content: typeof cancellationPageData.content }> = ({ content }) => {
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


const CancellationPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={cancellationPageData.hero.title} 
                subtitle={cancellationPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                   <PolicyContentRenderer content={cancellationPageData.content} />
                </div>
            </div>
        </main>
    );
};

export default CancellationPage;
