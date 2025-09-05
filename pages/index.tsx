import React from 'react';
import { Hero, UspSection as Feature, PowerfulFeatures as SecondaryFeatures, Testimonials, ActionStrip as Banner } from '../components/HomePageSections.tsx';
import { CTA, FAQ } from '../components/PageBuilder.tsx';
import { uniqueFeatures, uspData, testimonialsData } from '../data/homePage';
import { faqPageData } from '../data/pages/faq';

const HomePage: React.FC = () => {
    const homePageData = {
        hero: uniqueFeatures,
        feature: uspData,
        secondaryFeatures: uniqueFeatures,
        testimonials: { testimonials: testimonialsData },
        faq: faqPageData
    };

    const navigate = (path: string) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <main>
            <Hero navigate={navigate} />
            <Feature navigate={navigate} />
            <SecondaryFeatures navigate={navigate} />
            <Testimonials />
            <FAQ {...homePageData.faq} />
            <CTA />
            <Banner navigate={navigate} />
        </main>
    );
};

export default HomePage;
