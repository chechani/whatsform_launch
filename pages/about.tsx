import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import { aboutPageData } from '../data/pages/about';

const AboutPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={aboutPageData.hero.title} 
                subtitle={aboutPageData.hero.subtitle}
            />
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={aboutPageData.mission.title} 
                        subtitle={aboutPageData.mission.subtitle}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {aboutPageData.mission.content}
                        </p>
                    </ContentSection>
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={aboutPageData.team.title} 
                        subtitle={aboutPageData.team.subtitle}
                    >
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            {aboutPageData.team.members.map((member, index) => (
                                <div key={index} className="text-center">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">{member.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </ContentSection>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default AboutPage;

export { getStaticProps } from '@/lib/ssr';

