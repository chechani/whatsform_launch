import React, { useState } from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { QuoteWizard } from '../components/QuoteWizard';
import { pricingPageData } from '../data/pages/pricing';
import { CheckCircleIcon } from '../icons';

const PricingPage: React.FC = () => {
    const [showQuoteWizard, setShowQuoteWizard] = useState(false);
    const [isYearly, setIsYearly] = useState(false);

    const [region, setRegion] = useState<'india' | 'international'>('india');
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
            
            {/* Region Toggle at Top */}
            <section className="pt-8 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex justify-center mb-8">
                        <div className="bg-gray-100 dark:bg-slate-800 p-1 rounded-lg flex">
                            <button
                                onClick={() => setRegion('india')}
                                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                                    region === 'india' 
                                        ? 'bg-green-500 text-white shadow-md' 
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                                }`}
                            >
                                India
                            </button>
                            <button
                                onClick={() => setRegion('international')}
                                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                                    region === 'international' 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100'
                                }`}
                            >
                                International
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Toggle */}
            <section className="pb-8 bg-white dark:bg-slate-900">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {currentPlans.map((plan, index) => (
                            <div key={index} className={`relative bg-white dark:bg-slate-800 p-0 rounded-xl shadow-lg border-2 transition-all hover:shadow-xl flex flex-col ${
                                plan.isPopular 
                                    ? 'border-green-500 transform scale-105' 
                                    : 'border-gray-200 dark:border-slate-700 hover:border-green-300'
                            }`}>
                                {plan.isPopular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="p-6 pb-0">
                                    <div className="mb-4">
                                        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                                            <span className="text-sm text-green-700 dark:text-green-300 font-semibold">
                                                Active Flows: {index === 0 ? '2' : index === 1 ? '2' : index === 2 ? '5' : '10'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-center mb-4">
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{plan.name}</h3>
                                        <div className="mb-2">
                                            <span className="text-3xl font-bold text-slate-800 dark:text-white">
                                                {region === 'india' ? plan.priceINR : plan.priceUSD}
                                            </span>
                                            <span className="text-sm text-gray-500 ml-1">
                                                {region === 'india' ? '+ GST 18% extra' : 'No GST (USD)'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{plan.frequency}</p>
                                        <div className="mt-2">
                                            {index === 0 && <span className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full text-xs font-semibold">Best for Individuals & Small Teams</span>}
                                            {index === 1 && <span className="inline-block bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">Best for Growing Businesses</span>}
                                            {index === 2 && <span className="inline-block bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-xs font-semibold">Best for Established Teams</span>}
                                            {index === 3 && <span className="inline-block bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">Best for Enterprises</span>}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className={`bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-2 ${index >= 2 ? 'border-2 border-green-500' : ''}`}>
                                            <span className="block text-sm text-slate-700 dark:text-slate-300 font-semibold">Active WhatsApp Forms</span>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400">Up to 5 Static Forms</span>
                                            <span className="block text-xs text-red-500">No Dynamic Forms</span>
                                            <span className={`block text-xs ${index >= 2 ? 'text-green-600 font-bold' : 'text-red-500'}`}>{index >= 2 ? 'Includes Document Upload' : 'No Document Upload'}</span>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-2">
                                            <span className="block text-sm text-slate-700 dark:text-slate-300 font-semibold">Form Responses</span>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400">{plan.features.find(f => f.includes('Form Response'))}</span>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-2">
                                            <span className="block text-sm text-slate-700 dark:text-slate-300 font-semibold">Contacts</span>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400">{plan.features.find(f => f.includes('Contacts'))}</span>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-2">
                                            <span className="block text-sm text-slate-700 dark:text-slate-300 font-semibold">Users</span>
                                            <span className="block text-xs text-slate-500 dark:text-slate-400">{plan.features.find(f => f.includes('Users'))}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {plan.features.filter(f => !f.includes('Form Response') && !f.includes('Contacts') && !f.includes('Users')).map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 pt-0 flex flex-col gap-3">
                                    <button className={`w-full font-bold py-3 px-4 rounded-lg text-sm transition-all transform hover:scale-105 ${
                                        plan.isPopular 
                                            ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg' 
                                            : 'bg-green-500 text-white hover:bg-green-600'
                                    }`}>
                                        {plan.cta}
                                    </button>
                                    <button
                                        className="w-full font-bold py-3 px-4 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md"
                                        onClick={() => window.location.href = '/signup'}
                                    >
                                        Start Trial Now
                                    </button>
                                </div>
                                <div className="px-6 pb-6">
                                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center mt-4">
                                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 inline-block" />
                                        <span className="text-sm text-green-700 dark:text-green-300 font-semibold">Assist in WhatsApp Form Building: {index === 0 ? '5' : index === 1 ? '10' : index === 2 ? '25' : '50'}</span>
                                    </div>
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

export { getStaticProps } from '@/lib/ssr';

