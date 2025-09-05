import React from 'react';
import { GenericPageHero, CTA, FAQ } from '../components/PageBuilder.tsx';
import { faqPageData } from '../data/pages/faq';

const FAQPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={faqPageData.hero.title} 
                subtitle={faqPageData.hero.subtitle}
            />
            <FAQ {...faqPageData} />
            <CTA />
        </main>
    );
};

export default FAQPage;
