
import React from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { cancellationPageData } from '../data/pages/cancellation';

const CancellationPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={cancellationPageData.hero.title} 
                subtitle={cancellationPageData.hero.subtitle} 
            />
            
            <div className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Overview Card */}
                    <div className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Important Notice</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {cancellationPageData.overview}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-8">
                        {cancellationPageData.sections.map((section, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-lg font-semibold text-slate-700 dark:text-slate-300">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                                {section.title}
                                            </h3>
                                            <div className="space-y-4">
                                                {section.content.map((item, itemIndex) => (
                                                    <div key={itemIndex}>
                                                        {item.type === 'paragraph' && (
                                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                                {item.text}
                                                            </p>
                                                        )}
                                                        {item.type === 'list' && (
                                                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                                                {item.items.map((listItem, listIndex) => (
                                                                    <li key={listIndex} className="flex items-start space-x-3">
                                                                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                                                                        <span className="leading-relaxed">{listItem}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {item.type === 'highlight' && (
                                                            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
                                                                <p className="text-amber-800 dark:text-amber-200 font-medium">
                                                                    {item.text}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Information */}
                    <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                Have Questions?
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                                If you have any questions about our refund and cancellation policy or need assistance with your account, our support team is here to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a 
                                    href="mailto:sales@smartysoft.in" 
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Support
                                </a>
                                <span className="text-sm text-slate-500 dark:text-slate-400">
                                    Response within 24 hours
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CTA />
        </main>
    );
};

export default CancellationPage;

export { getServerSideProps } from '@/lib/ssr';

