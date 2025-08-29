import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../PageBuilder';
import { careersPageData } from '../data/pages/careers';

interface CareersPageProps {
    navigate: (path: string) => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title={careersPageData.hero.title} 
                subtitle={careersPageData.hero.subtitle} 
            />
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
                    <ContentSection 
                        title={careersPageData.culture.title}
                        text={careersPageData.culture.text}
                    />

                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-12">Open Positions</h2>
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {careersPageData.positions.map((job, index) => (
                                <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-400 dark:hover:border-green-500">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{job.title}</h3>
                                        <p className="mt-1 text-slate-500 dark:text-slate-400">{job.department} &middot; {job.location}</p>
                                    </div>
                                    <a href={`mailto:careers@whatsform.in?subject=Application for ${job.title}`} className="mt-4 md:mt-0 inline-block bg-green-500 text-white font-semibold py-2 px-5 rounded-lg text-sm hover:bg-green-600 transition-colors">
                                        Apply Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <CTA navigate={navigate} />
        </main>
    );
};

export default CareersPage;