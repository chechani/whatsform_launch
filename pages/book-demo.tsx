import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { bookDemoPageData } from '@/data/pages/bookDemo';
import { countryCodes, industryCategoryMap } from '@/data/formData';
import { signupPageData } from '@/data/pages/signup';

// Generate time slots for the dropdown
const generateTimeSlots = () => {
    const slots = [];
    const startTime = 9 * 60; // 9:00 AM in minutes
    const endTime = 18 * 60; // 6:00 PM in minutes
    const interval = 30; // 30 minutes

    for (let minutes = startTime; minutes <= endTime; minutes += interval) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        const hh = String(hour).padStart(2, '0');
        const mm = String(minute).padStart(2, '0');
        slots.push(`${hh}:${mm}`);
    }
    return slots;
};

const timeSlots = generateTimeSlots();

const BookDemoPage: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        whatsappNumber: '',
        companyWebsite: '',
        city: '',
        demoType: 'Online Demo',
        preferredDemoDate: '',
        preferredDemoTime: '',
        useCaseDescription: '',
        notes: ''
    });

    const [industry, setIndustry] = useState('');
    const [category, setCategory] = useState('');
    const [availableCategories, setAvailableCategories] = useState<string[]>([]);
    const [countryCode, setCountryCode] = useState('+91');
    const [whatsappCountryCode, setWhatsappCountryCode] = useState('+91');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const industryOptions = Object.keys(industryCategoryMap);
    
    const today = new Date().toISOString().split('T')[0];

    const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndustry = e.target.value;
        setIndustry(selectedIndustry);
        setCategory('');
        setAvailableCategories(industryCategoryMap[selectedIndustry] || []);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFeedbackMessage('');
        setSubmissionStatus('idle');
        
        const requiredFields: (keyof typeof formData)[] = ['fullName', 'email', 'phone', 'companyName'];
        for (const field of requiredFields) {
            if (!String(formData[field]).trim()) {
                const fieldName = field.replace(/([A-Z])/g, ' $1').toLowerCase();
                setFeedbackMessage(`Please fill out the ${fieldName} field.`);
                setSubmissionStatus('error');
                return;
            }
        }
        if (!industry || !category) {
            setFeedbackMessage('Please select both an industry and a category.');
            setSubmissionStatus('error');
            return;
        }

        if (formData.companyWebsite.trim() && !/^(https?:\/\/).*\.(com|in)(\/.*)?$/.test(formData.companyWebsite)) {
            setFeedbackMessage('Please enter a valid website URL (e.g., https://example.com or http://example.in).');
            setSubmissionStatus('error');
            return;
        }

        setIsSubmitting(true);

        const selectedCountry = countryCodes.find(c => `+${c.code}` === countryCode);

        const payload = {
            full_name: formData.fullName,
            email: formData.email,
            phone: `${countryCode.replace('+', '')}${formData.phone}`,
            company_name: formData.companyName,
            industry: industry,
            category: category,
            product_interest: "WhatsForm", // Hardcoded value
            whatsapp_number: formData.whatsappNumber ? `${whatsappCountryCode.replace('+', '')}${formData.whatsappNumber}` : '',
            company_website: formData.companyWebsite,
            city: formData.city,
            country: selectedCountry ? selectedCountry.name : '',
            demo_type: "Online Demo",
            preferred_demo_date: formData.preferredDemoDate,
            preferred_demo_time: formData.preferredDemoTime,
            use_case_description: formData.useCaseDescription,
            number_of_users: 1, // Hidden field with fixed value
            lead_source: "Website", // Hidden field
            priority: "Medium", // Hidden field
            status:"Requested",        
            notes: formData.notes
        };

        try {
            const response = await fetch('https://web.waflow.in/api/resource/Demo%20Request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.exception || 'Submission failed. Please check your details and try again.');
            }

            setSubmissionStatus('success');
            setFeedbackMessage('Thank you! Your demo request has been submitted successfully. Our team will contact you shortly.');

        } catch (error: any) {
            setSubmissionStatus('error');
            setFeedbackMessage(error.message || 'An unexpected error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";
    const selectClasses = `${inputClasses} appearance-none`;
    const labelClasses = "block text-sm font-medium text-slate-700 dark:text-slate-300";


    return (
        <main className="flex flex-col md:flex-row md:pt-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Left Column */}
            <div className="w-full md:w-1/2 bg-green-950 text-white p-8 lg:p-16 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-12" dangerouslySetInnerHTML={{ __html: signupPageData.leftColumn.title }}/>
                    <div className="mt-12">
                        <p className="text-sm uppercase font-semibold tracking-wider text-slate-400">
                            {signupPageData.leftColumn.promo.title}
                        </p>
                        <div className="space-y-4 mt-4">
                            {signupPageData.leftColumn.promo.features.map(feature => (
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
                    <p className="text-sm text-slate-400">{signupPageData.leftColumn.trustedBy.title}</p>
                    <div className="border-t border-slate-700 my-4"></div>
                    <div className="flex items-center space-x-8 text-slate-400 font-medium flex-wrap gap-y-2">
                        {signupPageData.leftColumn.trustedBy.brands.map(brand => <span key={brand}>{brand}</span>)}
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-950 p-6 md:p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
                 <div className="w-full max-w-md mx-auto">
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{bookDemoPageData.form.title}</h2>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">{bookDemoPageData.form.subtitle}</p>
                    
                    <form className="space-y-5 mt-8" onSubmit={handleSubmit} noValidate>
                        {submissionStatus !== 'success' ? (
                            <>
                                <div>
                                    <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} required className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className={labelClasses}>Email *</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className={inputClasses} />
                                </div>

                                <div>
                                    <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
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
                                    <label htmlFor="companyName" className={labelClasses}>Company Name *</label>
                                    <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleInputChange} required className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="whatsappNumber" className={labelClasses}>WhatsApp Number (if different)</label>
                                    <div className="mt-1 flex rounded-lg shadow-sm">
                                        <select 
                                            value={whatsappCountryCode}
                                            onChange={(e) => setWhatsappCountryCode(e.target.value)}
                                            className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 max-w-[150px]">
                                            {countryCodes.map(country => (
                                                <option key={`${country.name}-${country.code}`} value={`+${country.code}`}>
                                                    {`+${country.code} (${country.name})`}
                                                </option>
                                            ))}
                                        </select>
                                        <input type="tel" name="whatsappNumber" id="whatsappNumber" value={formData.whatsappNumber} onChange={handleInputChange} className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="companyWebsite" className={labelClasses}>Company Website</label>
                                    <input type="url" name="companyWebsite" id="companyWebsite" value={formData.companyWebsite} onChange={handleInputChange} placeholder="https://example.com" className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="city" className={labelClasses}>City</label>
                                    <input type="text" name="city" id="city" value={formData.city} onChange={handleInputChange} className={inputClasses} />
                                </div>

                                <div>
                                    <label htmlFor="industry" className={labelClasses}>Industry</label>
                                    <select id="industry" value={industry} onChange={handleIndustryChange} required className={selectClasses}>
                                        <option value="" disabled>Select Industry</option>
                                        {industryOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="category" className={labelClasses}>Category</label>
                                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} disabled={!industry} required className={selectClasses}>
                                        <option value="" disabled>{industry ? 'Select a category' : 'Select an industry first'}</option>
                                        {availableCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="preferredDemoDate" className={labelClasses}>Preferred Demo Date</label>
                                    <input type="date" name="preferredDemoDate" id="preferredDemoDate" value={formData.preferredDemoDate} onChange={handleInputChange} min={today} className={inputClasses} />
                                </div>
                                
                                <div>
                                    <label htmlFor="preferredDemoTime" className={labelClasses}>Preferred Demo Time</label>
                                    <select name="preferredDemoTime" id="preferredDemoTime" value={formData.preferredDemoTime} onChange={handleInputChange} className={selectClasses}>
                                        <option value="">Select a time</option>
                                        {timeSlots.map(time => <option key={time} value={time}>{time}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="useCaseDescription" className={labelClasses}>How do you plan to use WhatsForm?</label>
                                    <textarea name="useCaseDescription" id="useCaseDescription" value={formData.useCaseDescription} onChange={handleInputChange} rows={3} className={inputClasses}></textarea>
                                </div>
                                
                                <div>
                                    <label htmlFor="notes" className={labelClasses}>Additional Notes</label>
                                    <textarea name="notes" id="notes" value={formData.notes} onChange={handleInputChange} rows={3} className={inputClasses}></textarea>
                                </div>

                                {feedbackMessage && (
                                    <div className={`p-4 text-sm rounded-md ${submissionStatus === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} role="alert">
                                        {feedbackMessage}
                                    </div>
                                )}
                                
                                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Submitting...' : 'Request Demo'}
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

export default BookDemoPage;

export { getStaticProps } from '@/lib/ssr';

