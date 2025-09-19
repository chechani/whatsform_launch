import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { operationsPageData } from '../data/pages/operations';

const OperationsPage: React.FC = () => {
    return (
        <main>
            {/* Hero Section */}
            <GenericPageHero 
                title={operationsPageData.hero.title} 
                subtitle={operationsPageData.hero.subtitle}
            />
            
            {/* Overview Section with Stats */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            {operationsPageData.overview.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
                            {operationsPageData.overview.subtitle}
                        </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {operationsPageData.overview.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl sm:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-slate-600 dark:text-slate-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Operational Use Cases
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
                            Discover how WhatsForm transforms operations across every department in your organization
                        </p>
                    </div>

                    <div className="space-y-20">
                        {operationsPageData.useCases.map((useCase, index) => (
                            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                                            <useCase.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                                {useCase.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                                {useCase.title}
                                            </h3>
                                        </div>
                                    </div>
                                    
                                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                        {useCase.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Features:</h4>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {useCase.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start space-x-3">
                                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6">
                                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Benefits:</h4>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            {useCase.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center space-x-3">
                                                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-green-800 dark:text-green-300 font-medium text-sm">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                                    <div className="relative">
                                        <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl overflow-hidden shadow-lg">
                                            <img 
                                                src={useCase.image} 
                                                alt={useCase.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-3xl -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            {operationsPageData.integrations.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
                            {operationsPageData.integrations.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operationsPageData.integrations.systems.map((system, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {system.name}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    {system.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Why Operations Teams Choose WhatsForm
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
                            Built specifically for operational excellence and business process automation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {operationsPageData.benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-8 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-green-600 to-emerald-700 dark:from-green-700 dark:to-emerald-800">
                <div className="max-w-4xl mx-auto text-center px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        {operationsPageData.cta.title}
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                        {operationsPageData.cta.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href={operationsPageData.cta.primaryButton.link}
                            className="inline-flex items-center px-8 py-4 bg-white text-green-600 hover:bg-green-50 font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            {operationsPageData.cta.primaryButton.text}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link 
                            href={operationsPageData.cta.secondaryButton.link}
                            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-xl transition-colors duration-200"
                        >
                            {operationsPageData.cta.secondaryButton.text}
                        </Link>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default OperationsPage;

export { getStaticProps } from '@/lib/ssr';

