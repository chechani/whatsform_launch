import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../../components/PageBuilder';
import { BuildingStorefrontIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const FineDiningPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Fine Dining Restaurants",
            subtitle: "Elevate your restaurant's customer experience with intelligent WhatsApp automation. From reservations to loyalty programs, deliver exceptional service that matches your culinary excellence."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Seamless Reservation Management",
                subtitle: "Restaurant Operations",
                text: "Automate table bookings, send confirmation reminders, and manage special requests through WhatsApp. Provide a premium experience from first contact.",
                features: [
                    "Instant table reservation confirmations",
                    "Automated reminder messages and special occasion notes", 
                    "Real-time table availability updates",
                    "Waitlist management and automatic notifications"
                ],
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Fine Dining",
                benefits: [
                    {
                        icon: BuildingStorefrontIcon,
                        title: "Enhanced Guest Experience",
                        description: "Provide personalized service with automated special occasion reminders and dietary preference tracking."
                    },
                    {
                        icon: ClockIcon,
                        title: "Efficient Operations",
                        description: "Reduce no-shows with automated reminders and streamline reservation management."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Increased Revenue",
                        description: "Promote wine pairings, special menus, and events through targeted WhatsApp campaigns."
                    },
                    {
                        icon: UserGroupIcon,
                        title: "Guest Retention",
                        description: "Build lasting relationships with personalized follow-ups and exclusive member offers."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Guest Journey Experience",
                subtitle: "Premium Service",
                text: "Deliver exceptional service throughout the entire dining experience, from initial inquiry to post-meal feedback.",
                features: [
                    "Pre-arrival: Menu previews, wine recommendations, and special arrangements",
                    "During Service: Order modifications, special requests, and sommelier consultations",
                    "Post-dining: Feedback collection, recipe sharing, and future reservation incentives",
                    "VIP Management: Exclusive access to chef's table and special events"
                ],
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        useCases: {
            title: "Popular Use Cases",
            items: [
                {
                    title: "Wine Pairing Recommendations",
                    description: "Send personalized wine suggestions based on chosen menu items and guest preferences"
                },
                {
                    title: "Special Event Promotions", 
                    description: "Promote chef's special dinners, wine tastings, and seasonal menu launches"
                },
                {
                    title: "Anniversary Reminders",
                    description: "Automatically track and celebrate guest anniversaries and special occasions"
                },
                {
                    title: "Dietary Preference Tracking",
                    description: "Remember and accommodate guest dietary restrictions and allergies automatically"
                },
                {
                    title: "VIP Guest Management",
                    description: "Provide exclusive access and personalized service for your most valued guests"
                },
                {
                    title: "Feedback & Reviews",
                    description: "Collect detailed feedback and encourage positive reviews on dining platforms"
                }
            ]
        },
        closing: {
            title: "Ready to Elevate Your Restaurant Experience?",
            subtitle: "Join prestigious fine dining establishments using WhatsForm to deliver exceptional service and build lasting guest relationships.",
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

export default FineDiningPage;
