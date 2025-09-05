import React from 'react';
import { GenericPageHero, CTA, ContentSection, TeamSection } from '../components/PageBuilder';
import { aboutPageData } from '../data/pages/about';

const AboutPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={aboutPageData.hero.title} 
                subtitle={aboutPageData.hero.subtitle}
            />
            <ContentSection 
                title={aboutPageData.mission.title} 
                subtitle={aboutPageData.mission.subtitle}
            />
            <TeamSection 
                title={aboutPageData.team.title} 
                subtitle={aboutPageData.team.subtitle} 
                members={aboutPageData.team.members}
            />
            <CTA />
        </main>
    );
};

export default AboutPage;
