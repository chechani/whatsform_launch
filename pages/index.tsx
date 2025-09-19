
import React from 'react';
import { Hero, UspSection as Feature, PowerfulFeatures as SecondaryFeatures, Testimonials, ActionStrip as Banner, ComparisonSection } from '../components/HomePageSections';
import { CTA, FAQ } from '../components/PageBuilder';
import { uniqueFeatures, features, testimonialsData, faq as homePageFaq } from '../data/homePage';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            hero: uniqueFeatures,
            feature: {
                title: "All-in-One WhatsApp Business Suite",
                intro: "Explore our most popular features for automation, engagement, and growth.",
                features,
            },
            secondaryFeatures: uniqueFeatures,
            testimonials: testimonialsData,
            faq: homePageFaq,
        },
    };
};

const HomePage = ({ hero, feature, secondaryFeatures, testimonials, faq }: any) => {
    const navigate = (path: string) => {
        // Navigation logic (if needed)
    };

    return (
        <main>
            <Hero data={hero} navigate={navigate} />
            <Feature data={feature} navigate={navigate} />
            <SecondaryFeatures data={secondaryFeatures} navigate={navigate} />
            <ComparisonSection navigate={navigate} />
            <Testimonials testimonials={testimonials} />
            <FAQ faqs={faq.categories} />
            <CTA />
            <Banner navigate={navigate} />
        </main>
    );
};

export default HomePage;
