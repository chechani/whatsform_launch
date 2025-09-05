import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import Link from 'next/link';

const ComparisonPage: React.FC = () => {
    const comparisonData = {
        title: "WhatsForm vs. Google Forms",
        subtitle: "Beyond Simple Surveys: Why Your Business Needs Conversational Forms",
        features: [
            { feature: 'Form Interface', whatsForm: 'Interactive, chat-like experience', googleForms: 'Static, traditional form layout' },
            { feature: 'Data Collection', whatsForm: 'Real-time, within WhatsApp', googleForms: 'Collected in Google Sheets' },
            { feature: 'Automation', whatsForm: 'Advanced workflow automation', googleForms: 'Limited, requires third-party add-ons' },
            { feature: 'User Engagement', whatsForm: 'High, due to conversational nature', googleForms: 'Lower, can feel impersonal' },
        ]
    };

    return (
        <main>
            <GenericPageHero 
                title={comparisonData.title} 
                subtitle={comparisonData.subtitle} 
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title="The Right Tool for the Job" 
                        subtitle="Google Forms is great for simple surveys, but WhatsForm is built for business."
                    />
                    <div className="mt-12 overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                            <thead className="bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Feature</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">WhatsForm</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Google Forms</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200 dark:bg-slate-900 dark:divide-slate-700">
                                {comparisonData.features.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-4 px-6 text-sm font-medium text-slate-900 dark:text-white">{item.feature}</td>
                                        <td className="py-4 px-6 text-sm text-green-600 dark:text-green-400">{item.whatsForm}</td>
                                        <td className="py-4 px-6 text-sm text-slate-500 dark:text-slate-400">{item.googleForms}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <div className="mt-8 text-center">
                        <Link href="/signup" legacyBehavior>
                            <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                Try WhatsForm Now
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default ComparisonPage;
