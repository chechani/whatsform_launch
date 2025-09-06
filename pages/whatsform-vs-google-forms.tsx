import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import Link from 'next/link';
import { CheckCircleIcon } from '../icons';

const ComparisonPage: React.FC = () => {
    const comparisonCategories = [
        {
            title: "User Experience",
            subtitle: "See how a conversational approach transforms data collection and user engagement.",
            comparisons: [
                {
                    feature: "Interaction Model",
                    whatsForm: "Conversational and interactive. Delivers questions one-by-one inside a WhatsApp chat, feeling like a natural dialogue.",
                    googleForms: "Static, web-based questionnaire. Users see all questions at once or in pre-defined sections."
                },
                {
                    feature: "User Environment",
                    whatsForm: "Entire experience is native to WhatsApp. No app switching, no new UI to learn, leading to minimal friction and higher completion rates.",
                    googleForms: "Requires users to click a link, open a browser, and leave their current app. This context switch increases drop-off rates."
                }
            ]
        },
        {
            title: "Functionality & AI",
            subtitle: "Advanced features that make WhatsForm more than just a form builder.",
            comparisons: [
                {
                    feature: "Dynamic Logic",
                    whatsForm: "Powered by an AI core and a visual flow builder. It supports complex conditional logic, calculations, and can adapt the conversation based on user intent and real-time data from APIs.",
                    googleForms: "Offers basic conditional logic (skip to section based on answer). It cannot adapt in real-time to user input."
                },
                {
                    feature: "Multimedia Input",
                    whatsForm: "Natively accepts photos, videos, documents, and live locations directly from the WhatsApp interface, making it effortless for users.",
                    googleForms: "File uploads are possible but can be clunky, especially on mobile, and often require a Google account login."
                },
                {
                    feature: "Data Verification",
                    whatsForm: "Automatically captures a verified WhatsApp phone number with every submission, providing a high-quality, reliable contact point.",
                    googleForms: "Relies on email addresses which can be fake or temporary. Phone number collection is optional and not verified."
                }
            ]
        },
        {
            title: "Automation & Business Integration",
            subtitle: "Where WhatsForm truly shines - turning data collection into business automation.",
            comparisons: [
                {
                    feature: "Immediate Action",
                    whatsForm: "Every submission can trigger instant, real-time workflows. Add a lead to a CRM, create a support ticket, schedule a meeting, and send a confirmation message back to the user in seconds.",
                    googleForms: "Responses land in a Google Sheet. Any further action (like sending an email or updating a CRM) requires manual work or a third-party tool like Zapier, which introduces delays."
                },
                {
                    feature: "Human Handoff",
                    whatsForm: "Features a unified Team Inbox. An AI conversation can be seamlessly handed over to a human agent with the full chat history for context, turning a form into a continuous relationship.",
                    googleForms: "The interaction is a one-way data drop. There is no way to continue the conversation or ask for clarification."
                },
                {
                    feature: "Campaigns & Nurturing",
                    whatsForm: "Built for engagement. Supports automated drip campaigns, follow-up sequences, and broadcasts, allowing you to nurture leads and customers over time in the same channel.",
                    googleForms: "A passive tool for data collection. Not designed for proactive, multi-step user engagement."
                }
            ]
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-green-200/30 dark:bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter">
                        WhatsForm vs. Google Forms
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        It's more than a form. It's a conversation. See why businesses are moving from static questionnaires to dynamic, AI-powered interactions on WhatsApp.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/signup" legacyBehavior>
                            <a className="inline-flex items-center bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg">
                                Start a Conversation
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="/resources" legacyBehavior>
                            <a className="inline-flex items-center bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-600 shadow-md">
                                Learn More
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Feature-by-Feature Breakdown */}
            <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 dark:bg-gradient-to-r dark:from-green-900 dark:to-green-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            Feature-by-Feature Breakdown
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            See how a conversational approach transforms data collection and user engagement.
                        </p>
                    </div>

                    {/* Platform Headers - Show Once */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 mb-12">
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-600">
                            {/* WhatsForm Header */}
                            <div className="p-8 text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                                        <CheckCircleIcon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                                        WhatsForm
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-300">
                                    Conversational AI-Powered Forms
                                </p>
                            </div>
                            {/* Google Forms Header */}
                            <div className="p-8 text-center bg-slate-50 dark:bg-slate-700/50">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-slate-400 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-600 dark:text-slate-400">
                                        Google Forms
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Traditional Static Forms
                                </p>
                            </div>
                        </div>
                    </div>

                    {comparisonCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    {category.title}
                                </h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                    {category.subtitle}
                                </p>
                            </div>

                            <div className="space-y-6">
                                {category.comparisons.map((comparison, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                                        <div className="bg-slate-100 dark:bg-slate-700 px-6 py-4 border-b border-slate-200 dark:border-slate-600">
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white text-center">
                                                {comparison.feature}
                                            </h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-600">
                                            {/* WhatsForm Column */}
                                            <div className="p-6">
                                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                    {comparison.whatsForm}
                                                </p>
                                            </div>
                                            {/* Google Forms Column */}
                                            <div className="p-6 bg-slate-50 dark:bg-slate-700/50">
                                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {comparison.googleForms}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="py-20 bg-gradient-to-br from-green-500 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Google Forms collects data.<br />
                        WhatsForm builds relationships.
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                        For organizations looking to not just collect information but also engage and act on it in real time, static forms are inadequate. WhatsForm fills that gap by turning a form into a conversation and a trigger for automation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/signup" legacyBehavior>
                            <a className="inline-flex items-center bg-white text-green-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                                Start Building Relationships
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                        </Link>
                        <Link href="/resources" legacyBehavior>
                            <a className="inline-flex items-center bg-transparent text-white font-semibold py-4 px-8 rounded-xl text-lg hover:bg-white/10 transition-all duration-300 border border-white/30">
                                See Success Stories
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
