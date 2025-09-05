import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import { careersPageData } from '../data/pages/careers';
import Link from 'next/link';

const CareersPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={careersPageData.hero.title} 
                subtitle={careersPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={careersPageData.openings.title} 
                        subtitle={careersPageData.openings.subtitle}
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {careersPageData.openings.jobs.map((job, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{job.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{job.location} - {job.type}</p>
                                <Link href={job.applyLink} legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Apply Now &rarr;</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default CareersPage;
