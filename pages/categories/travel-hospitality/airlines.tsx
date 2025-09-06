import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../../components/PageBuilder';
import { PaperAirplaneIcon, ClockIcon, ExclamationTriangleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const AirlinesPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Airlines",
            subtitle: "Transform the passenger experience with intelligent WhatsApp automation. From booking confirmations to real-time flight updates, keep passengers informed and satisfied throughout their journey."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Enhance Passenger Communication",
                subtitle: "Aviation Excellence",
                text: "Provide seamless passenger communication with automated booking confirmations, flight updates, and customer service through WhatsApp.",
                features: [
                    "Instant booking confirmations and e-ticket delivery",
                    "Real-time flight status updates and gate changes",
                    "Automated check-in reminders and mobile boarding passes",
                    "Baggage tracking and claim notifications"
                ],
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Airlines",
                benefits: [
                    {
                        icon: PaperAirplaneIcon,
                        title: "Improved Passenger Experience",
                        description: "Keep passengers informed with real-time updates, reducing anxiety and improving overall travel experience."
                    },
                    {
                        icon: ClockIcon,
                        title: "Operational Efficiency",
                        description: "Automate routine communications and reduce call center volume with self-service WhatsApp interactions."
                    },
                    {
                        icon: ExclamationTriangleIcon,
                        title: "Crisis Management",
                        description: "Handle flight disruptions, cancellations, and rebooking efficiently through automated WhatsApp workflows."
                    },
                    {
                        icon: UserGroupIcon,
                        title: "24/7 Customer Service",
                        description: "Provide round-the-clock support for passenger inquiries, changes, and assistance requests."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Passenger Journey Management",
                subtitle: "End-to-End Travel Support",
                text: "Support passengers from booking to arrival with comprehensive automation that handles every aspect of the travel experience.",
                features: [
                    "Pre-flight: Booking assistance, seat selection, and travel document reminders",
                    "Day of Travel: Check-in, security wait times, and boarding notifications",
                    "In-flight: Connection information, meal preferences, and entertainment options",
                    "Post-flight: Baggage claim, ground transportation, and loyalty program updates"
                ],
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        useCases: {
            title: "Popular Use Cases",
            items: [
                {
                    title: "Flight Status Notifications",
                    description: "Automatically notify passengers of delays, gate changes, and boarding announcements"
                },
                {
                    title: "Automated Check-in", 
                    description: "Send check-in reminders and allow passengers to complete check-in via WhatsApp"
                },
                {
                    title: "Baggage Tracking",
                    description: "Provide real-time baggage location updates and delivery notifications"
                },
                {
                    title: "Rebooking Assistance",
                    description: "Help passengers rebook flights during disruptions with automated alternatives"
                },
                {
                    title: "Travel Document Verification",
                    description: "Remind passengers about passport, visa, and health certificate requirements"
                },
                {
                    title: "Loyalty Program Management",
                    description: "Update frequent flyers on miles earned, status changes, and exclusive offers"
                }
            ]
        },
        closing: {
            title: "Ready to Take Off with Better Communication?",
            subtitle: "Join leading airlines using WhatsForm to improve passenger satisfaction, reduce operational costs, and enhance the travel experience.",
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

export default AirlinesPage;
