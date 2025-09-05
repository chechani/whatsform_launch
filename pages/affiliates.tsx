import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import Link from 'next/link';

const AffiliatesPage: React.FC = () => {
    const benefits = [
        'Generous commission rates',
        'High-demand product',
        'Marketing materials provided',
        'Dedicated affiliate support',
    ];

    return (
        <main>
            <GenericPageHero 
                title="Become a WhatsForm Affiliate" 
                subtitle="Join our partner program and earn recurring commissions."
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="Partner with a Leader in WhatsApp Engagement" 
                        subtitle="Promote a cutting-edge platform and build a new revenue stream."
                    />
                    <div className="mt-12 text-center">
                        <ul className="inline-block text-left space-y-2">
                            {benefits.map(benefit => (
                                <li key={benefit} className="flex items-center text-lg text-slate-600 dark:text-slate-300">
                                    <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Link href="/signup" legacyBehavior>
                                <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                    Join Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default AffiliatesPage;
