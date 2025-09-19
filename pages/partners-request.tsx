import React, { useState } from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { partnersRequestPageData } from '../data/pages/partnersRequest';

const PartnersRequestPage: React.FC = () => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('https://connect.waflow.in/webhook/675cef03-3a7a-437f-96d1-beb19e2318fd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'partner_application',
                    timestamp: new Date().toISOString(),
                    data: formData
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({});
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            setError('Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <main>
                <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 flex items-center justify-center px-6">
                    <div className="max-w-md text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Application Submitted!</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Thank you for your interest in partnering with WhatsForm. We'll review your application and get back to you within 2-3 business days.
                        </p>
                        <button 
                            onClick={() => window.location.href = '/'}
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200"
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <GenericPageHero 
                title={partnersRequestPageData.hero.title} 
                subtitle={partnersRequestPageData.hero.subtitle}
            />

            {/* Benefits Section */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            Why Partner with WhatsForm?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
                            {partnersRequestPageData.hero.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {partnersRequestPageData.benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <benefit.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Partner Types */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {partnersRequestPageData.partnerTypes.map((type, index) => (
                            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                                    <type.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                    {type.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">
                                    {type.description}
                                </p>
                                <ul className="space-y-2">
                                    {type.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            {partnersRequestPageData.formFields.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            {partnersRequestPageData.formFields.subtitle}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                <p className="text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {partnersRequestPageData.formFields.fields.map((field, index) => (
                                    <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                                        <label 
                                            htmlFor={field.name} 
                                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                        >
                                            {field.label}
                                            {field.required && <span className="text-red-500 ml-1">*</span>}
                                        </label>
                                        
                                        {field.type === 'select' ? (
                                            <select
                                                id={field.name}
                                                name={field.name}
                                                required={field.required}
                                                value={formData[field.name] || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            >
                                                {field.options?.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : field.type === 'textarea' ? (
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                required={field.required}
                                                rows={4}
                                                placeholder={field.placeholder}
                                                value={formData[field.name] || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                required={field.required}
                                                placeholder={field.placeholder}
                                                value={formData[field.name] || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting Application...
                                        </>
                                    ) : (
                                        <>
                                            Submit Partner Application
                                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
};

export default PartnersRequestPage;

export { getServerSideProps } from '@/lib/ssr';

