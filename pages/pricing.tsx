import React, { useState } from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { QuoteWizard } from '../components/QuoteWizard';
import { pricingPageData } from '../data/pages/pricing';
import { CheckCircleIcon } from '../icons';

const PricingPage: React.FC = () => {
    const [showQuoteWizard, setShowQuoteWizard] = useState(false);
    const [isYearly, setIsYearly] = useState(false);

    const currentPlans = isYearly ? pricingPageData.yearlyPlans : pricingPageData.quarterlyPlans;

    const openQuoteWizard = () => {
        setShowQuoteWizard(true);
    };

    const closeQuoteWizard = () => {
        setShowQuoteWizard(false);
    };
    return (
        <main>
            <GenericPageHero 
                title={pricingPageData.hero.title} 
                subtitle={pricingPageData.hero.subtitle}
            />
            
            {/* Pricing Toggle */}
            <section className="py-8 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 dark:bg-slate-800 p-1 rounded-lg flex">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                                    !isYearly 
                                        ? 'bg-green-500 text-white shadow-md' 
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                                }`}
                            >
                                Quarterly
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                                    isYearly 
                                        ? 'bg-green-500 text-white shadow-md' 
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                                }`}
                            >
                                Yearly
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-12 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentPlans.map((plan, index) => (
                            <div key={index} className={`relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl ${
                                plan.isPopular 
                                    ? 'border-green-500 transform scale-105' 
                                    : 'border-gray-200 dark:border-slate-700 hover:border-green-300'
                            }`}>
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{plan.name}</h3>
                                    <div className="mb-2">
                                        <span className="text-3xl font-bold text-slate-800 dark:text-white">{plan.price}</span>
                                        <span className="text-sm text-gray-500 ml-1">+ GST 18% extra</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{plan.frequency}</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        No Credit Card Required
                                    </p>
                                    
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button className={`w-full font-bold py-3 px-4 rounded-lg text-sm transition-all transform hover:scale-105 ${
                                    plan.isPopular 
                                        ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg' 
                                        : 'bg-green-500 text-white hover:bg-green-600'
                                }`}>
                                    {plan.cta}
                                </button>
                                
                                <div className="mt-4 text-center">
                                    <p className="text-xs text-gray-500">
                                        Assist in WhatsApp Form Building: <span className="font-semibold">{index === 0 ? '5' : index === 1 ? '10' : index === 2 ? '25' : '50'}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Enterprise Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                        {pricingPageData.enterprise.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        {pricingPageData.enterprise.subtitle}
                    </p>
                    <button 
                        onClick={openQuoteWizard}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        {pricingPageData.enterprise.cta}
                    </button>
                </div>
            </section>
            
            <CTA />
            
            {/* Quote Wizard Modal */}
            {showQuoteWizard && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <QuoteWizard onClose={closeQuoteWizard} />
                    </div>
                </div>
            )}
        </main>
    );
};

export default PricingPage;
