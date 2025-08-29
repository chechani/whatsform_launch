


import React, { useState } from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { webinarsPageData } from '../data/pages/webinars';
import { CalendarDaysIcon, CurrencyDollarIcon, UsersIcon, PlayCircleIcon, CloseIcon } from '../icons';
import { countryCodes } from '../data/formData';

interface WebinarsPageProps {
    navigate: (path: string) => void;
}

const RegistrationModal: React.FC<{ onClose: () => void; webinarTitle: string; }> = ({ onClose, webinarTitle }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
    });
    const [countryCode, setCountryCode] = useState('+91');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFeedbackMessage('');
        setSubmissionStatus('idle');

        // Validation
        const requiredFields: (keyof typeof formData)[] = ['fullName', 'email', 'phone', 'companyName'];
        for (const field of requiredFields) {
            if (!formData[field].trim()) {
                const fieldName = field.replace(/([A-Z])/g, ' $1').toLowerCase();
                setFeedbackMessage(`Please fill out the ${fieldName} field.`);
                setSubmissionStatus('error');
                return;
            }
        }

        setIsSubmitting(true);

        const payload = {
            full_name: formData.fullName,
            email: formData.email,
            phone: `${countryCode.replace('+', '')}${formData.phone}`,
            company_name: formData.companyName,
            webinar_title: webinarTitle,
            status: 'Registered'
        };

        try {
            const response = await fetch('https://web.waflow.in/api/resource/Webinar%20Registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.exception || 'Registration failed. Please try again.');
            }

            setSubmissionStatus('success');
            setFeedbackMessage('Thank you for registering! We will send you a confirmation email shortly.');

        } catch (error: any) {
            setSubmissionStatus('error');
            setFeedbackMessage(error.message || 'An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "mt-1 block w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";
    const labelClasses = "block text-sm font-medium text-slate-700 dark:text-slate-300";

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col transform transition-all duration-300 animate-slide-up" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">Register for the Webinar</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"><CloseIcon /></button>
                </div>

                <div className="p-8 overflow-y-auto">
                    {submissionStatus === 'success' ? (
                         <div className="p-6 text-center bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-500/30 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Registration Successful!</h3>
                            <p className="mt-2 text-green-700 dark:text-green-400">{feedbackMessage}</p>
                            <button onClick={onClose} className="mt-6 inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                Close
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                            <div><label htmlFor="fullName" className={labelClasses}>Full Name *</label><input type="text" name="fullName" id="fullName" className={inputClasses} required onChange={handleInputChange} value={formData.fullName} /></div>
                            <div><label htmlFor="email" className={labelClasses}>Email *</label><input type="email" name="email" id="email" className={inputClasses} required onChange={handleInputChange} value={formData.email} /></div>
                            <div><label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                                <div className="mt-1 flex rounded-lg shadow-sm">
                                    <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 max-w-[150px]">{countryCodes.map(c => <option key={`${c.name}-${c.code}`} value={`+${c.code}`}>{c.name} (+{c.code})</option>)}</select>
                                    <input type="tel" name="phone" id="phone" className="flex-1 min-w-0 block w-full px-4 py-3 rounded-none rounded-r-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" required onChange={handleInputChange} value={formData.phone} />
                                </div>
                            </div>
                            <div><label htmlFor="companyName" className={labelClasses}>Company Name *</label><input type="text" name="companyName" id="companyName" className={inputClasses} required onChange={handleInputChange} value={formData.companyName} /></div>
                            
                             {feedbackMessage && submissionStatus === 'error' && (
                                <div className="p-4 text-sm rounded-md bg-red-100 text-red-700" role="alert">{feedbackMessage}</div>
                            )}

                            <div className="pt-2">
                                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

interface CalendarMonthProps {
    year: number;
    month: number; // 0-indexed
    events: { id: string; title: string; date: string; }[];
    onEventClick: (videoId: string) => void;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ year, month, events, onEventClick }) => {
    const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const blanks = Array.from({ length: firstDayOfMonth });
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const eventsByDay = events.reduce((acc, event) => {
        const eventDate = new Date(event.date + 'T00:00:00');
        if (eventDate.getFullYear() === year && eventDate.getMonth() === month) {
            const day = eventDate.getDate();
            if (!acc[day]) acc[day] = [];
            acc[day].push(event);
        }
        return acc;
    }, {} as Record<number, typeof events>);

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4">{monthName} {year}</h3>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day}>{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {blanks.map((_, i) => <div key={`blank-${i}`} />)}
                {days.map(day => {
                    const dayEvents = eventsByDay[day] || [];
                    const isUpcoming = year === 2024 && month === 6 && day === 16;
                    return (
                        <div key={day} className={`aspect-square flex flex-col p-1 rounded-md transition-colors text-sm ${dayEvents.length > 0 ? 'bg-green-50 dark:bg-green-950/50' : ''}`}>
                            <span className={`font-medium ${isUpcoming ? 'text-green-600 dark:text-green-400 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>{day}</span>
                            {dayEvents.map(event => (
                                <button key={event.id} onClick={() => onEventClick(event.id)} className="mt-1 text-left text-xs bg-green-200 dark:bg-green-500/20 text-green-800 dark:text-green-200 p-1 rounded hover:bg-green-300 dark:hover:bg-green-500/40 truncate">
                                    {event.title}
                                </button>
                            ))}
                             {isUpcoming && (
                                 <div className="mt-1 text-left text-xs bg-sky-200 dark:bg-sky-500/20 text-sky-800 dark:text-sky-200 p-1 rounded truncate">
                                    Upcoming
                                </div>
                             )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const WebinarsPage: React.FC<WebinarsPageProps> = ({ navigate }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);

    const openVideoModal = (videoId: string) => {
        setCurrentVideoId(videoId);
        setModalOpen(true);
    };

    const closeVideoModal = () => {
        setModalOpen(false);
        setCurrentVideoId(null);
    };

    const { upcomingWebinar, pastWebinars } = webinarsPageData;

    return (
        <main>
            <GenericPageHero 
                title={webinarsPageData.hero.title} 
                subtitle={webinarsPageData.hero.subtitle} 
            />

            {/* Upcoming Webinar Section */}
            <section className="py-24 lg:py-28 bg-pastel-blue dark:bg-sky-950/30">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-12">Upcoming Webinar</h2>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 p-8 lg:p-12">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 dark:text-white">{upcomingWebinar.title}</h3>
                            <div className="mt-6 flex flex-wrap gap-6 text-slate-600 dark:text-slate-400">
                                <div className="flex items-center space-x-2">
                                    <CalendarDaysIcon className="h-6 w-6 text-green-500" />
                                    <span className="font-semibold">{upcomingWebinar.date}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
                                    <span className="font-semibold">{upcomingWebinar.fee}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span className="font-semibold">{upcomingWebinar.duration}</span>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8">
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Agenda</h4>
                                <dl className="space-y-4">
                                    {upcomingWebinar.agenda.map((item, index) => (
                                        <div key={index} className="flex">
                                            <dt className="w-24 flex-shrink-0 font-semibold text-slate-700 dark:text-slate-300">{item.time}</dt>
                                            <dd className="text-slate-600 dark:text-slate-400">
                                                <p className="font-medium text-slate-800 dark:text-slate-200">{item.topic}</p>
                                                <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                                                    {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                                </ul>
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="lg:w-1/3 bg-slate-50 dark:bg-slate-800/50 p-8 lg:p-12 border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                            <div>
                                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Who Should Attend?</h4>
                                <ul className="space-y-2">
                                    {upcomingWebinar.targetAudience.map(audience => (
                                        <li key={audience} className="flex items-start">
                                            <UsersIcon className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-slate-600 dark:text-slate-400">{audience}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-8">
                                <button onClick={() => setRegistrationModalOpen(true)} className="w-full text-center block bg-green-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg shadow-green-500/30">
                                    Register Now for {upcomingWebinar.fee}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Past Webinars Section */}
            <section className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">{pastWebinars.title}</h2>
                        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{pastWebinars.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <CalendarMonth year={2024} month={5} events={pastWebinars.videos} onEventClick={openVideoModal} />
                        <CalendarMonth year={2024} month={6} events={pastWebinars.videos} onEventClick={openVideoModal} />
                    </div>
                </div>
            </section>

            <CTA navigate={navigate} />

            {modalOpen && currentVideoId && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={closeVideoModal}>
                    <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeVideoModal} className="absolute -top-4 -right-4 h-10 w-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-800 dark:text-white shadow-lg hover:scale-110 transition-transform z-10" aria-label="Close video player">
                            <CloseIcon />
                        </button>
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            {isRegistrationModalOpen && (
                <RegistrationModal 
                    onClose={() => setRegistrationModalOpen(false)}
                    webinarTitle={upcomingWebinar.title}
                />
            )}
        </main>
    );
};

export default WebinarsPage;