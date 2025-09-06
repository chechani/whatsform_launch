import React from 'react';
import { Hero, UspSection as Feature, PowerfulFeatures as SecondaryFeatures, Testimonials, ActionStrip as Banner, ComparisonSection } from '../components/HomePageSections';
import { CTA, FAQ } from '../components/PageBuilder';
import { uniqueFeatures, uspData, testimonialsData, faq as homePageFaq } from '../data/homePage';

const HomePage: React.FC = () => {
    const homePageData = {
        hero: uniqueFeatures,
        feature: uspData,
        secondaryFeatures: uniqueFeatures,
        testimonials: { testimonials: testimonialsData },
        faq: homePageFaq
    };

    const navigate = (path: string) => {
        console.log(`Navigating to ${path}`);
    };

    return (
        <main>
            <Hero navigate={navigate} />
            <Feature navigate={navigate} />
            <SecondaryFeatures navigate={navigate} />
            <ComparisonSection navigate={navigate} />
            <Testimonials />
            <FAQ faqs={homePageData.faq.categories} />
            <CTA />
            <Banner navigate={navigate} />
        </main>
    );
};

export default HomePage;
