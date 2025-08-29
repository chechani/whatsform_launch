


import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { developerDocsPageData } from '../data/pages/developerDocs';

interface DeveloperDocsPageProps {
    navigate: (path: string) => void;
}

const DeveloperDocsPage: React.FC<DeveloperDocsPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={developerDocsPageData.hero.title} 
                subtitle={developerDocsPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{developerDocsPageData.content.title}</h2>
                     <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">{developerDocsPageData.content.subtitle}</p>
                </div>
            </div>
            <CTA navigate={navigate} />
        </main>
    );
};

export default DeveloperDocsPage;