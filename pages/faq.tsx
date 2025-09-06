import React from 'react';
import { GenericPageHero, CTA, FAQ } from '../components/PageBuilder';
import { faqPageData } from '../data/pages/faq';

const FAQPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={faqPageData.hero.title} 
                subtitle={faqPageData.hero.subtitle}
            />
            <FAQ faqs={faqPageData.categories} />
            <CTA />
        </main>
    );
};

export default FAQPage;
