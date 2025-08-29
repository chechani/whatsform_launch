

import React from 'react';
import { Hero, ActionStrip, PowerfulFeatures, MiniApps, Benefits, UseCases, Testimonials, UspSection, ComparisonSection } from '../HomePageSections';
import { CTA } from '../PageBuilder';

interface HomePageProps {
    navigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
    return (
        <main>
            <Hero navigate={navigate} />
            <ActionStrip navigate={navigate} />
            <UspSection />
            <PowerfulFeatures navigate={navigate} />
            <MiniApps navigate={navigate} />
            <Benefits />
            <UseCases />
            <Testimonials />
            <ComparisonSection navigate={navigate} />
            {/* FIX: Pass navigate prop to CTA component. */}
            <CTA navigate={navigate} />
        </main>
    );
};

export default HomePage;