

import React from 'react';
import { Hero, ActionStrip, PowerfulFeatures, MiniApps, Benefits, UseCases, Testimonials, UspSection, ComparisonSection, FormsBrowserTeaser } from '../HomePageSections';
import { CTA } from '../PageBuilder';

interface HomePageProps {
    navigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
    return (
        <main>
            <Hero navigate={navigate} />
            <ActionStrip navigate={navigate} />
            <UspSection navigate={navigate} />
            <PowerfulFeatures navigate={navigate} />
            <MiniApps navigate={navigate} />
            <Benefits />
            <UseCases />
            <Testimonials />
            <ComparisonSection navigate={navigate} />
            <FormsBrowserTeaser navigate={navigate} />
            <CTA navigate={navigate} />
        </main>
    );
};

// FIX: Add default export for the HomePage component.
export default HomePage;