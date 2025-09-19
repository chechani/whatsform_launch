import React from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { privacyPageData } from '../data/pages/privacy';

const PrivacyPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={privacyPageData.hero.title} 
                subtitle={privacyPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200 dark:border-slate-700">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <div className="mb-8 text-center border-b border-slate-200 dark:border-slate-600 pb-8">
                                <p className="text-slate-600 dark:text-slate-300 text-lg">
                                    Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                                    Last updated: {new Date().toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </p>
                            </div>
                            
                            {privacyPageData.content.map((item, index) => {
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
                                        Contact Us About Privacy
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="space-y-1">
                                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                                            Email: privacy@whatsform.com
                                        </p>
                                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                                            Phone: +91 78499 45640
                                        </p>
                                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                                            Address: India
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

export default PrivacyPage;

export { getStaticProps } from '@/lib/ssr';

