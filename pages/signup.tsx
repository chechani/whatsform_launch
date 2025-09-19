

import React, { useState } from 'react';
import { signupPageData } from '../data/pages/signup';
import { countryCodes, industryCategoryMap } from '../data/formData';

const SignupPage: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        companyWebsite: '',
        city: '',
    });
    const [industry, setIndustry] = useState('');
    const [category, setCategory] = useState('');
    const [availableCategories, setAvailableCategories] = useState<string[]>([]);
    const [countryCode, setCountryCode] = useState('+91');
    const [termsAccepted, setTermsAccepted] = useState(false);
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const industryOptions = Object.keys(industryCategoryMap);
    const { leftColumn, rightColumn } = signupPageData;

    const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndustry = e.target.value;
        setIndustry(selectedIndustry);
        setCategory(''); // Reset category when industry changes
        setAvailableCategories(industryCategoryMap[selectedIndustry] || []);
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFeedbackMessage('');
        setSubmissionStatus('idle');

        if (!termsAccepted) {
            setFeedbackMessage('You must accept the terms and conditions to proceed.');
            setSubmissionStatus('error');
            return;
        }
        
        // Simple validation
        const requiredFields: (keyof typeof formData)[] = ['fullName', 'email', 'phone', 'companyName'];
        for (const field of requiredFields) {
            if (!formData[field].trim()) {
                const fieldName = field.replace(/([A-Z])/g, ' $1').toLowerCase();
                setFeedbackMessage(`Please fill out the ${fieldName} field.`);
                setSubmissionStatus('error');
                return;
            }
        }
        if (!industry || !category) {
            setFeedbackMessage('Please select an industry and a category.');
            setSubmissionStatus('error');
            return;
        }
        
        if (formData.companyWebsite.trim() && !/^(https?:\/\/).*\.(com|in)(\/.*)?$/.test(formData.companyWebsite)) {
            setFeedbackMessage('Please enter a valid website URL (e.g., https://example.com or http://example.in).');
            setSubmissionStatus('error');
            return;
        }

        setIsSubmitting(true);

        const payload = {
            full_name: formData.fullName,
            email: formData.email,
            whatsapp_no_personal: `${countryCode.replace('+', '')}${formData.phone}`,
            company_name: formData.companyName,
            company_website: formData.companyWebsite,
            city: formData.city,
            industry_of_business: industry,
            category: category,
            status: 'Requested'
        };
        
        try {
            // This sends a POST request to the Frappe API endpoint.
            // The `fetch` function is a standard web API for making network requests
            // and is correctly configured here to use the 'POST' method.
            const response = await fetch('https://web.waflow.in/api/resource/Trial%20Request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });
                        if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.exception || 'Submission failed. Please check your details and try again.');
            }

            setSubmissionStatus('success');
            setFeedbackMessage('Thank you! Your trial request has been submitted successfully.');

        } catch (error: any) {
            setSubmissionStatus('error');
            setFeedbackMessage(error.message || 'An unexpected error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";
    const selectClasses = `${inputClasses} appearance-none`;


    return (
        <main className="flex flex-col md:flex-row pt-20 bg-slate-50 dark:bg-slate-950">
            {/* Left Column */}
            <div className="w-full md:w-1/2 bg-green-950 text-white p-8 lg:p-16 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-12" dangerouslySetInnerHTML={{ __html: leftColumn.title }}/>
                    <div className="mt-12">
                        <p className="text-sm uppercase font-semibold tracking-wider text-slate-400">
                            {leftColumn.promo.title}
                        </p>
                        <div className="space-y-4 mt-4">
                            {leftColumn.promo.features.map(feature => (
                                <div key={feature.title} className="bg-green-900/50 p-4 rounded-lg flex items-center space-x-4">
                                    {React.createElement(feature.icon, { className: "h-8 w-8 text-green-400 flex-shrink-0"})}
                                    <div>
                                        <p className="font-semibold">{feature.title}</p>
                                        <p className="text-sm text-slate-400">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-sm text-slate-400">{leftColumn.trustedBy.title}</p>
                    <div className="border-t border-slate-700 my-4"></div>
                    <div className="flex items-center space-x-8 text-slate-400 font-medium flex-wrap gap-y-2">
                        {leftColumn.trustedBy.brands.map(brand => <span key={brand}>{brand}</span>)}
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-950 p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-full max-w-md mx-auto">
                    <div className="text-right mb-8">
                        <span className="text-slate-600 dark:text-slate-300">{rightColumn.loginPrompt.text}</span>
                        <a href={rightColumn.loginPrompt.linkPath} onClick={(e) => { e.preventDefault(); navigate(rightColumn.loginPrompt.linkPath); }} className="font-semibold text-green-600 hover:underline">{rightColumn.loginPrompt.linkText}</a>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{rightColumn.title}</h2>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">{rightColumn.subtitle}</p>

                    <form className="space-y-5 mt-8" onSubmit={handleSubmit} noValidate>
                        {submissionStatus !== 'success' ? (
                            <>
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="e.g. Bhagchand Chechani" required className={inputClasses} />
                                </div>

                                 <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. bcc@smartysoft.in" required className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp No</label>
                                    <div className="mt-1 flex rounded-lg shadow-sm">
                                        <select 
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 max-w-[150px]">
                                            {countryCodes.map(country => (
                                                <option key={`${country.name}-${country.code}`} value={`+${country.code}`}>
                                                    {`+${country.code} (${country.name})`}
                                                </option>
                                            ))}
                                        </select>
                                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} required className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
                                    <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleInputChange} required className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="companyWebsite" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company Website</label>
                                    <input type="url" name="companyWebsite" id="companyWebsite" value={formData.companyWebsite} onChange={handleInputChange} className={inputClasses} placeholder="https://example.com" />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                                    <input type="text" name="city" id="city" value={formData.city} onChange={handleInputChange} className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Industry of your Business</label>
                                    <select 
                                        id="industry"
                                        value={industry}
                                        onChange={handleIndustryChange}
                                        required
                                        className={`${selectClasses} ${!industry ? 'text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-slate-200'}`}
                                    >
                                        <option value="" disabled>Industry of your Business</option>
                                        {industryOptions.map(opt => <option key={opt} value={opt} className="text-black dark:bg-slate-800 dark:text-slate-200">{opt}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
                                    <select 
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        disabled={!industry}
                                        required
                                        className={`${selectClasses} ${!category ? 'text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-slate-200'} ${!industry ? 'bg-slate-200 dark:bg-slate-700 cursor-not-allowed' : 'bg-white dark:bg-slate-800'}`}
                                    >
                                         <option value="" disabled>
                                            {industry ? 'Select a category' : 'Select an industry first'}
                                        </option>
                                        {availableCategories.map(cat => <option key={cat} value={cat} className="text-black dark:bg-slate-800 dark:text-slate-200">{cat}</option>)}
                                    </select>
.                               </div>
                                
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" name="terms" type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="focus:ring-green-500 h-4 w-4 text-green-600 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="text-slate-600 dark:text-slate-300">
                                            By creating an account, you agree to the WhatsForm <a href='#' className='underline font-medium text-green-600 hover:text-green-700'>Privacy Policy</a> and <a href='#' className='underline font-medium text-green-600 hover:text-green-700'>Terms of Service</a>.
                                        </label>
                                    </div>
                                </div>

                                {feedbackMessage && (
                                    <div className={`p-4 text-sm rounded-md ${submissionStatus === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} role="alert">
                                        {feedbackMessage}
                                    </div>
                                )}
                                
                                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Submitting...' : 'Start Your 14-Day Free Trial'}
                                </button>
                            </>
                        ) : (
                            <div className="p-6 text-center bg-green-50 border border-green-200 rounded-lg">
                                <h3 className="text-2xl font-bold text-green-800">Request Submitted!</h3>
                                <p className="mt-2 text-green-700">{feedbackMessage}</p>
                                <p className="mt-4 text-sm text-slate-600">Our team will get in touch with you shortly.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </main>
    );
};

export default SignupPage;

export { getServerSideProps } from '@/lib/ssr';

