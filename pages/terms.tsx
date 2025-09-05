import React from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder.tsx';
import { termsPageData } from '../data/pages/terms';

const TermsPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={termsPageData.hero.title} 
                subtitle={termsPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 prose dark:prose-invert">
                    {termsPageData.content.map((item, index) => (
                        <div key={index}>
                            {item.type === 'heading' ? (
                                <h2>{item.text}</h2>
                            ) : (
                                <p>{item.text}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default TermsPage;
