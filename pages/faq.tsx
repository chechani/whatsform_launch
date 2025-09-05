import React from 'react';
import { GenericPageHero, CTA, FAQ } from '../components/PageBuilder';
import { faqPageData } from '../data/pages/faq';

const FAQPage: React.FC = () => {
    // Flatten all FAQs from all categories
    const allFaqs = faqPageData.categories.flatMap(category => category.faqs);
    
    return (
        <main>
            <GenericPageHero 
                title={faqPageData.hero.title} 
                subtitle={faqPageData.hero.subtitle}
            />
            <FAQ faqs={allFaqs} />
            <CTA />
        </main>
    );
};

export default FAQPage;
