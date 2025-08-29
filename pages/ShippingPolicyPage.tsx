
import React from 'react';
import { GenericPageHero } from '../PageBuilder';
import { shippingPolicyData } from '../data/pages/shippingPolicy';

const PolicyContentRenderer: React.FC<{ content: typeof shippingPolicyData.content }> = ({ content }) => {
    return (
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'heading':
                        return <h2 key={index} className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mt-10 mb-4">{block.text}</h2>;
                    case 'paragraph':
                        return <p key={index}>{block.text}</p>;
                    default:
                        return null;
                }
            })}
        </div>
    );
};


const ShippingPolicyPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={shippingPolicyData.hero.title} 
                subtitle={shippingPolicyData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                   <PolicyContentRenderer content={shippingPolicyData.content} />
                </div>
            </div>
        </main>
    );
};

export default ShippingPolicyPage;
