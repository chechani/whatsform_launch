import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import Link from 'next/link';
import { affiliatesPageData } from '@/data/pages/affiliates';
import { AcademicCapIcon, BuildingOfficeIcon, MegaphoneIcon, CurrencyDollarIcon, ChartBarIcon, UsersIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const iconMap: { [key: string]: React.FC<{className?: string}> } = {
    AcademicCapIcon,
    BuildingOfficeIcon,
    MegaphoneIcon,
    CurrencyDollarIcon,
    ChartBarIcon,
    UsersIcon,
    CheckCircleIcon,
};

const AffiliatesPage: React.FC = () => {
    const { hero, stats, idealAffiliates, benefits, commissionStructure, howItWorks, testimonials, resources, closing } = affiliatesPageData;

    return (
        <main>
            <GenericPageHero 
                title={hero.title}
                subtitle={hero.subtitle}
            />
            
            {/* Hero Description */}
            <section className="py-12 -mt-10">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        {hero.description}
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {stats.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-slate-600 dark:text-slate-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ideal Affiliates Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {idealAffiliates.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                            {idealAffiliates.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {idealAffiliates.categories.map((category, index) => {
                            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                            return (
                                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                                            {IconComponent && <IconComponent className="h-8 w-8 text-green-600 dark:text-green-400" />}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                            {category.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                                        {category.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {category.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                                        <p className="text-green-700 dark:text-green-300 font-semibold text-center">
                                            {category.earning}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {benefits.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            {benefits.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.benefits.map((benefit, index) => {
                            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
                            return (
                                <div key={index} className="text-center">
                                    <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                        {IconComponent && <IconComponent className="h-10 w-10 text-green-600 dark:text-green-400" />}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Commission Structure */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {commissionStructure.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            {commissionStructure.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {commissionStructure.tiers.map((tier, index) => (
                            <div key={index} className={`bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all ${
                                tier.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
                            }`}>
                                {tier.popular && (
                                    <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full text-center mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {tier.title}
                                    </h3>
                                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                                        {tier.commission}
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        {tier.description}
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {howItWorks.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            {howItWorks.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {howItWorks.steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {testimonials.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                                    "{testimonial.quote}"
                                </p>
                                <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg">
                                    <p className="text-green-700 dark:text-green-300 font-semibold text-sm">
                                        💰 {testimonial.earnings}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources */}
            <section className="py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {resources.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300">
                            {resources.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.resources.map((resource, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                                    {resource.title}
                                </h3>
                                <ul className="space-y-3">
                                    {resource.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600 dark:bg-green-700">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {closing.title}
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                        {closing.subtitle}
                    </p>
                    <Link href="/affiliates-request" legacyBehavior>
                        <a className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-50 transition-all hover:scale-105 shadow-lg">
                            {closing.cta}
                        </a>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default AffiliatesPage;

export { getStaticProps } from '@/lib/ssr';

