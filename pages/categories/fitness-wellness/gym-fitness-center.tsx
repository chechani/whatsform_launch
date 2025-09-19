import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../../components/PageBuilder';
import { HeartIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const GymFitnessCenterPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Gyms & Fitness Centers",
            subtitle: "Transform your fitness business with intelligent WhatsApp automation. From membership management to class bookings, keep your members engaged and motivated."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Automate Membership Management",
                subtitle: "Fitness Operations",
                text: "Streamline member onboarding, payment reminders, and class bookings through WhatsApp. Keep members engaged with personalized workout tips and progress tracking.",
                features: [
                    "Automated membership renewal reminders",
                    "Class booking confirmations and waitlist management", 
                    "Personal trainer appointment scheduling",
                    "Workout plan delivery and progress tracking"
                ],
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Fitness Centers",
                benefits: [
                    {
                        icon: HeartIcon,
                        title: "Member Engagement",
                        description: "Keep members motivated with personalized workout tips, progress updates, and achievement celebrations."
                    },
                    {
                        icon: ClockIcon,
                        title: "Efficient Scheduling",
                        description: "Automate class bookings, trainer appointments, and facility reservations to reduce administrative work."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Revenue Growth",
                        description: "Promote personal training, supplements, and premium services through targeted WhatsApp campaigns."
                    },
                    {
                        icon: UserGroupIcon,
                        title: "Community Building",
                        description: "Create fitness challenges, group activities, and member support networks through WhatsApp groups."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Fitness Member Journey",
                subtitle: "Member Experience",
                text: "Support members throughout their entire fitness journey, from initial consultation to achieving their goals.",
                features: [
                    "Onboarding: Fitness assessments, goal setting, and program recommendations",
                    "Active Membership: Class reminders, workout tracking, and nutrition tips",
                    "Progress Tracking: Achievement celebrations, milestone rewards, and goal adjustments",
                    "Retention: Re-engagement campaigns, special offers, and community events"
                ],
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        useCases: {
            title: "Popular Use Cases",
            items: [
                {
                    title: "Class Booking System",
                    description: "Allow members to book fitness classes, check availability, and join waitlists via WhatsApp"
                },
                {
                    title: "Workout Plan Delivery", 
                    description: "Send personalized workout routines, exercise videos, and form corrections to members"
                },
                {
                    title: "Payment Reminders",
                    description: "Automate membership fee reminders, payment confirmations, and renewal notifications"
                },
                {
                    title: "Personal Training Coordination",
                    description: "Schedule PT sessions, send preparation tips, and collect feedback on training effectiveness"
                },
                {
                    title: "Nutrition Guidance",
                    description: "Provide meal plans, supplement recommendations, and dietary tips based on fitness goals"
                },
                {
                    title: "Fitness Challenges",
                    description: "Organize monthly challenges, track participation, and reward achievements automatically"
                }
            ]
        },
        closing: {
            title: "Ready to Motivate Your Members?",
            subtitle: "Join leading fitness centers using WhatsForm to increase member engagement and build a thriving fitness community.",
            cta: "Book a Demo"
        }
    };

    return (
        <main>
            <GenericPageHero title={pageData.hero.title} subtitle={pageData.hero.subtitle} />
            
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
                {pageData.sections.map((section, index) => {
                    const bgColors = [
                        "bg-white dark:bg-slate-950",
                        "bg-slate-50 dark:bg-slate-900",
                        "bg-white dark:bg-slate-950"
                    ];
                    const bgColor = bgColors[index % bgColors.length];
                    
                    return (
                        <section key={index} className={`${bgColor} py-16 sm:py-20 lg:py-24`}>
                            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                                {(() => {
                                    switch (section.type) {
                                        case 'contentWithImage':
                                            return <ContentWithImage {...section} />;
                                        case 'benefitsGrid':
                                            return <BenefitsGrid {...section} />;
                                        default:
                                            return null;
                                    }
                                })()}
                            </div>
                        </section>
                    );
                })}
            </div>

            <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={pageData.useCases.title} />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.useCases.items.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-green-50 dark:bg-green-950/30 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title={pageData.closing.title} subtitle={pageData.closing.subtitle}>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book-demo" className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg text-center">
                                {pageData.closing.cta}
                            </Link>
                            <Link href="/contact" className="inline-block bg-transparent border-2 border-green-500 text-green-600 dark:text-green-400 font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-500 hover:text-white transition-all duration-200 shadow-lg text-center">
                                Contact Sales
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </section>
            
            <CTA />
        </main>
    );
};

export default GymFitnessCenterPage;

export { getStaticProps } from '@/lib/ssr';

