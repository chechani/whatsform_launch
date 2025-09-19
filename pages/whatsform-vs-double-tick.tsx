import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '../components/PageBuilder';
import Link from 'next/link';
import { CheckCircleIcon, XIconSolid } from '../icons';
import { doubleTickComparisonData } from '../data/pages/doubleTickComparison';

const DoubleTickComparisonPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={doubleTickComparisonData.hero.title} 
                subtitle={doubleTickComparisonData.hero.subtitle}
            />
            
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {doubleTickComparisonData.comparison.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
                            {doubleTickComparisonData.comparison.subtitle}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {doubleTickComparisonData.comparison.features.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                                    {category.category}
                                </h3>
                                <div className="space-y-8">
                                    {category.points.map((point, pointIndex) => (
                                        <div key={pointIndex} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                                {point.feature}
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                                                    <div className="flex items-center mb-4">
                                                        <XIconSolid className="w-5 h-5 text-red-500 mr-3" />
                                                        <h5 className="font-semibold text-red-700 dark:text-red-300">Double Tick</h5>
                                                    </div>
                                                    <p className="text-slate-700 dark:text-slate-300">
                                                        {point.doubleTick}
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                                                    <div className="flex items-center mb-4">
                                                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                                                        <h5 className="font-semibold text-green-700 dark:text-green-300">WhatsForm</h5>
                                                    </div>
                                                    <p className="text-slate-700 dark:text-slate-300">
                                                        {point.whatsform}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-green-50 dark:bg-green-900/20">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        {doubleTickComparisonData.summary.title}
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                        {doubleTickComparisonData.summary.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/signup" legacyBehavior>
                            <a className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                                {doubleTickComparisonData.summary.cta}
                            </a>
                        </Link>
                        <Link href="/book-demo" legacyBehavior>
                            <a className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-300 dark:border-slate-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Book a Demo
                            </a>
                        </Link>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default DoubleTickComparisonPage;

export { getServerSideProps } from '@/lib/ssr';

