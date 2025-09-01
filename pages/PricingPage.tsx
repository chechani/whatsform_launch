import React, { useState } from 'react';
import { pricingData } from '../data/pages/pricing';
import { CheckIconSolid, XIconSolid } from '../icons';
import { QuoteWizard } from '../QuoteWizard';

interface PricingPageProps {
    navigate: (path: string) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ navigate }) => {
    const [billingCycle, setBillingCycle] = useState<'yearly' | 'quarterly'>('yearly');
    const [isQuoteWizardOpen, setQuoteWizardOpen] = useState(false);

    const plans = pricingData.plans[billingCycle];

    const FeatureItem: React.FC<{ feature: typeof plans[0]['features'][0] }> = ({ feature }) => {
        let icon;
        let textClass = "text-slate-600 dark:text-slate-400";
        switch (feature.type) {
            case 'included':
                icon = <CheckIconSolid className="h-5 w-5 text-green-500" />;
                break;
            case 'excluded':
                icon = <XIconSolid className="h-5 w-5 text-red-400" />;
                textClass += " line-through";
                break;
            case 'limited':
                icon = <CheckIconSolid className="h-5 w-5 text-green-500" />;
                break;
        }

        return (
            <li className="flex items-start space-x-3 py-2">
                <div className="flex-shrink-0 mt-1">{icon}</div>
                <span className={textClass}>{feature.text}</span>
            </li>
        );
    };

    return (
        <main className="bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <span className="text-lg font-semibold text-green-600 dark:text-green-400">{pricingData.tagline}</span>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{pricingData.title}</h1>
                    <div className="mt-8 flex justify-center">
                        <div className="bg-slate-200 dark:bg-slate-800 p-1 rounded-full flex items-center space-x-1">
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${billingCycle === 'yearly' ? 'bg-green-500 text-white' : 'text-slate-600 dark:text-slate-300'}`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setBillingCycle('quarterly')}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${billingCycle === 'quarterly' ? 'bg-green-500 text-white' : 'text-slate-600 dark:text-slate-300'}`}
                            >
                                Quarterly
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                        {plans.map(plan => (
                            <div key={plan.name} className={`relative bg-white dark:bg-slate-900 border rounded-2xl p-8 text-left flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-green-500 border-2 shadow-green-500/10' : 'border-slate-200 dark:border-slate-800 hover:border-green-400 dark:hover:border-green-500'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                        <span className="bg-green-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular</span>
                                    </div>
                                )}
                                <div className="flex-grow">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h2>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-slate-900 dark:text-white">₹{plan.price.toLocaleString('en-IN')}</span>
                                        <span className="text-slate-500 dark:text-slate-400"> / {billingCycle === 'yearly' ? 'Year' : 'Quarter'}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{pricingData.gstText}</p>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{pricingData.creditCardText}</p>
                                    <ul className="mt-6 space-y-2 border-t border-slate-200 dark:border-slate-700 pt-6">
                                        {plan.features.map(feature => <FeatureItem key={feature.text} feature={feature} />)}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <a href="#/signup" onClick={(e) => { e.preventDefault(); navigate('#/signup'); }} className={`w-full text-center block font-bold py-3 px-6 rounded-lg transition-all ${plan.popular ? 'bg-green-500 text-white hover:bg-green-600 shadow-md shadow-green-500/30' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'}`}>
                                        Choose Plan
                                    </a>
                                     {plan.formAssist && (
                                        <div className="mt-4 text-center text-sm bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 p-2 rounded-md">
                                            {plan.formAssist}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 max-w-4xl mx-auto space-y-8">
                         <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left">
                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{pricingData.apiCharges.title}</h3>
                             <p className="mt-2 text-slate-600 dark:text-slate-400" dangerouslySetInnerHTML={{ __html: pricingData.apiCharges.description }} />
                             <a href={pricingData.apiCharges.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-2 px-5 rounded-lg text-sm hover:bg-slate-300 dark:hover:bg-slate-600">
                                 {pricingData.apiCharges.cta}
                             </a>
                         </div>
                         <div className="bg-pastel-green dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{pricingData.customQuote.title}</h3>
                              <p className="mt-2 text-slate-600 dark:text-slate-400">{pricingData.customQuote.description}</p>
                              <button onClick={() => setQuoteWizardOpen(true)} className="mt-6 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                  {pricingData.customQuote.cta}
                              </button>
                         </div>
                    </div>
                </div>
            </div>
            {isQuoteWizardOpen && <QuoteWizard onClose={() => setQuoteWizardOpen(false)} />}
        </main>
    );
};

export default PricingPage;