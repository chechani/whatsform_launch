import React, { useState, useEffect } from 'react';
import { GenericPageHero, CTA } from '../components/PageBuilder';
import { affiliatesRequestPageData } from '../data/pages/affiliatesRequest'; // Ensure this path is correct
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

const AffiliatesRequestPage: React.FC = () => {
    const personalInfoFields = ["full_name", "email", "phone", "city", "state_region"];

    const getInitialFormData = () => {
        const initial: Record<string, string | boolean> = {};
        affiliatesRequestPageData.formFields.sections.forEach(section => {
            section.fields.forEach(field => {
                if (field.type === 'select' && field.options && field.options.length > 0) {
                    // CORRECTED: Use the 'value' of the first option.
                    // This will be "" for your placeholder options.
                    initial[field.name] = field.options[0].value; 
                } else if (field.type === 'checkbox') {
                    initial[field.name] = false;
                } else {
                    initial[field.name] = "";
                }
            });
        });
        return initial;
    };

    const [formData, setFormData] = useState<Record<string, string | boolean>>(getInitialFormData());
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const missingFields = personalInfoFields.filter((key) => {
            const value = formData[key];
            return !value || (typeof value === 'string' && value.trim() === '');
        });

        if (missingFields.length > 0) {
            setError('Please fill all required personal information fields.');
            setIsSubmitting(false);
            return;
        }

        const finalPayload = {
            full_name: formData.full_name as string || '',
            email: formData.email as string || '',
            phone: formData.phone as string || '',
            city: formData.city as string || '',
            state_region: formData.state_region as string || '',
            primary_profession: formData.primary_profession as string || '',
            company_name: formData.company_name as string || '',
            years_experience: formData.years_experience as string || '', 
            client_base_size: formData.client_base_size as string || '',
            website_url: formData.website_url as string || '',
            linkedin_profile: formData.linkedin_profile as string || '',
            primary_social_platform: formData.primary_social_platform as string || '',
            online_following: formData.online_following as string || '',
            client_types: formData.client_types as string || '',
            promotion_plan: formData.promotion_plan as string || '',
            whatsapp_value_proposition: formData.whatsapp_value_proposition as string || '',
            expected_monthly_referrals: formData.expected_monthly_referrals as string || '',
            affiliate_experience: formData.affiliate_experience as string || '',
            referral_source: formData.referral_source as string || '',
            additional_comments: formData.additional_comments as string || '',
            terms_agreed: formData.terms_agreed ? 1 : 0
        };

        try {
            const response = await fetch('https://web.waflow.in/api/resource/Affiliate Interest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalPayload)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData(getInitialFormData());
            } else {
                const errorData = await response.json().catch(() => ({ message: 'Could not parse error JSON' }));
                console.error("API Error Response:", errorData);
                throw new Error(`Submission failed: ${errorData.message || response.statusText}`);
            }
        } catch (err: any) {
            console.error("Fetch API error:", err);
            setError(`Failed to submit application. Please try again. Error: ${err.message || 'Unknown error'}`);
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
                            Thank you for applying to our affiliate program! We'll review your application and respond within 2-3 business days with next steps.
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

    const { hero, idealCandidates, benefits, requirements, earningSamples, formFields } = affiliatesRequestPageData;

    return (
        <main>
            {/* ... All your other sections like Hero, IdealCandidates, etc. ... */}
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

            {/* Ideal Candidates Section */}
            <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {idealCandidates.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {idealCandidates.candidates.map((candidate, index) => {
                            const IconComponent = iconMap[candidate.icon as keyof typeof iconMap];
                            return (
                                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
                                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mb-6 w-fit">
                                        {IconComponent && <IconComponent className="h-8 w-8 text-green-600 dark:text-green-400" />}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                        {candidate.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                                        {candidate.description}
                                    </p>
                                    <div className="space-y-2">
                                        {candidate.examples.map((example, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                                {example}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Program Benefits & Features
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
                            return (
                                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                                            {IconComponent && <IconComponent className="h-8 w-8 text-green-600 dark:text-green-400" />}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                                        {benefit.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {benefit.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Earning Examples */}
            <section className="py-16 lg:py-20 bg-green-50 dark:bg-green-900/20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            {earningSamples.title}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            {earningSamples.subtitle}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {earningSamples.examples.map((example, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                                    {example.profile}
                                </h3>
                                <div className="space-y-3 mb-6 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-300">Referrals:</span>
                                        <span className="text-slate-900 dark:text-white font-medium">{example.referrals}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-300">Avg Plan:</span>
                                        <span className="text-slate-900 dark:text-white font-medium">{example.avgPlan}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-300">Commission:</span>
                                        <span className="text-green-600 dark:text-green-400 font-bold">{example.commission}</span>
                                    </div>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-600 dark:text-slate-300">Monthly:</span>
                                        <span className="text-xl font-bold text-green-600 dark:text-green-400">{example.monthlyEarning}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600 dark:text-slate-300">Annual:</span>
                                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">{example.annualEarning}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-16 lg:py-20 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {requirements.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                        {requirements.subtitle}
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                        <ul className="space-y-4 text-left">
                            {requirements.list.map((requirement, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{requirement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            {formFields.title}
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            {formFields.subtitle}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12">
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                <p className="text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-12">
                            {formFields.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className={sectionIndex > 0 ? 'border-t border-slate-200 dark:border-slate-700 pt-12' : ''}>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                                        {section.title}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {section.fields.map((field, index) => {
                                            const isRequired = personalInfoFields.includes(field.name);
                                            return (
                                                <div key={field.name} className={field.type === 'textarea' || field.type === 'checkbox' ? 'md:col-span-2' : ''}>
                                                    {field.type === 'checkbox' ? (
                                                        <div className="flex items-start space-x-3">
                                                            <input
                                                                type="checkbox"
                                                                id={field.name}
                                                                name={field.name}
                                                                required={isRequired}
                                                                checked={!!formData[field.name]}
                                                                onChange={handleInputChange}
                                                                className="mt-1 w-4 h-4 text-green-600 border-slate-300 rounded focus:ring-green-500"
                                                            />
                                                            <label 
                                                                htmlFor={field.name} 
                                                                className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                                                            >
                                                                {field.label}
                                                                {isRequired && <span className="text-red-500 ml-1">*</span>}
                                                            </label>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <label 
                                                                htmlFor={field.name}
                                                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                                                            >
                                                                {field.label}
                                                                {isRequired && <span className="text-red-500 ml-1">*</span>}
                                                            </label>
                                                            {field.type === 'select' ? (
                                                                <select
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    required={isRequired}
                                                                    value={formData[field.name] as string}
                                                                    onChange={handleInputChange}
                                                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                                                >
                                                                    {field.options?.map((option) => (
                                                                        <option 
                                                                            key={option.label} 
                                                                            value={option.value} // CORRECTED: Use option.value
                                                                        >
                                                                            {option.label}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            ) : field.type === 'textarea' ? (
                                                                <textarea
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    required={isRequired}
                                                                    rows={4}
                                                                    placeholder={field.placeholder}
                                                                    value={formData[field.name] as string}
                                                                    onChange={handleInputChange}
                                                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                                                                />
                                                            ) : (
                                                                <input
                                                                    type={field.type}
                                                                    id={field.name}
                                                                    name={field.name}
                                                                    required={isRequired}
                                                                    placeholder={field.placeholder}
                                                                    value={formData[field.name] as string}
                                                                    onChange={handleInputChange}
                                                                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 disabled:bg-slate-400 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
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
                                            Submit Affiliate Application
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
        </main>
    );
};

export default AffiliatesRequestPage;

export { getStaticProps } from '@/lib/ssr';