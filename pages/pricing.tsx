import React from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { pricingPageData } from '../data/pages/pricing';
import { CheckCircleIcon } from '../icons';

const PricingPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={pricingPageData.hero.title} 
                subtitle={pricingPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPageData.plans.map((plan, index) => (
                            <div key={index} className={`bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md ${plan.isPopular ? 'border-2 border-green-500' : ''}`}>
                                {plan.isPopular && <div className="text-center text-green-500 font-bold mb-4">Most Popular</div>}
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center">{plan.name}</h3>
                                <p className="mt-4 text-4xl font-extrabold text-slate-800 dark:text-white text-center">{plan.price}</p>
                                <p className="mt-2 text-slate-600 dark:text-slate-400 text-center">{plan.frequency}</p>
                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                                            <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`mt-8 w-full font-bold py-3 px-8 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg ${plan.isPopular ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
};

export default PricingPage;
