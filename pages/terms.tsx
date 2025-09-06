import React from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { termsPageData } from '../data/pages/terms';

const TermsPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={termsPageData.hero.title} 
                subtitle={termsPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200 dark:border-slate-700">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div className="mb-8 text-center border-b border-slate-200 dark:border-slate-600 pb-8">
                                <p className="text-slate-600 dark:text-slate-300 text-lg">
                                    Please read these Terms of Service carefully before using our service.
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                    Last updated: {new Date().toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </p>
                            </div>
                            
                            {termsPageData.content.map((item, index) => {
                                if (item.type === 'heading') {
                                    return (
                                        <div key={index} className="mt-12 first:mt-0">
                                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-3 border-b border-slate-200 dark:border-slate-600">
                                                {item.text}
                                            </h2>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index} className="mb-6">
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                }
                            })}
                            
                            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-600">
                                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                                        Contact Information
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        If you have any questions about these Terms of Service, please contact us at:
                                    </p>
                                    <div className="mt-3 space-y-1">
                                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                                            Email: support@whatsform.com
                                        </p>
                                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                                            Phone: +91 78499 45640
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default TermsPage;
