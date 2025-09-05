import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import { webinarsPageData } from '@/data/pages/webinars';
import Link from 'next/link';

const WebinarsPage: React.FC = () => {
    // Combine upcoming and past webinars for display
    const allWebinars = [
        {
            title: webinarsPageData.upcomingWebinar.title,
            description: `Duration: ${webinarsPageData.upcomingWebinar.duration} | Fee: ${webinarsPageData.upcomingWebinar.fee}`,
            date: webinarsPageData.upcomingWebinar.date,
            cta: "Register Now",
            link: "/contact"
        },
        ...webinarsPageData.pastWebinars.videos.map(video => ({
            title: video.title,
            description: video.description,
            date: video.date,
            cta: "Watch Recording",
            link: `https://www.youtube.com/watch?v=${video.id}`
        }))
    ];
    
    return (
        <main>
            <GenericPageHero 
                title={webinarsPageData.hero.title} 
                subtitle={webinarsPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="Upcoming and On-Demand Webinars" 
                        subtitle="Learn from our experts and discover new ways to grow your business."
                    />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {allWebinars.map((webinar, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{webinar.title}</h3>
                                <p className="mt-2 text-slate-600 dark:text-slate-400">{webinar.description}</p>
                                <p className="mt-2 text-sm text-slate-500">{webinar.date}</p>
                                <Link href={webinar.link} legacyBehavior>
                                    <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">{webinar.cta} &rarr;</a>
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

export default WebinarsPage;
