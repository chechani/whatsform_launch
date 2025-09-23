
import React from 'react';
import { Hero, UspSection as Feature, PowerfulFeatures as SecondaryFeatures, Testimonials, ActionStrip as Banner, ComparisonSection, PlatformCapabilities } from '../components/HomePageSections';
import { CTA, FAQ } from '../components/PageBuilder';
import { uniqueFeatures, features, testimonialsData, faq as homePageFaq } from '../data/homePage';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            hero: uniqueFeatures,
            feature: {
                title: "Powerful Features That Drive Results",
                intro: "Specific tools and capabilities that help you achieve your business goals faster.",
                features,
            },
            testimonials: testimonialsData,
            faq: homePageFaq,
        },
    };
};

const HomePage = ({ hero, feature, testimonials, faq }: any) => {
    const navigate = (path: string) => {
        // Navigation logic (if needed)
    };

    return (
        <main>
            <Hero data={hero} navigate={navigate} />
            <PlatformCapabilities navigate={navigate} />
            <Feature data={feature} navigate={navigate} />
            <ComparisonSection navigate={navigate} />
            <Testimonials testimonials={testimonials} />
            <FAQ faqs={faq.categories} />
            <CTA />
            <Banner navigate={navigate} />
        </main>
    );
};

export default HomePage;
