import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { BuildingOfficeIcon, DevicePhoneMobileIcon, GlobeAltIcon, StarIcon } from '@heroicons/react/24/outline';

const TravelHospitalityPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Travel & Hospitality",
            subtitle: "Transform guest experiences and streamline operations with intelligent WhatsApp automation. From booking confirmations to concierge services, deliver exceptional hospitality at scale."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Elevate Guest Experience",
                subtitle: "Hospitality Excellence",
                text: "Provide seamless, personalized service throughout the entire guest journey with WhatsApp automation.",
                features: [
                    "Instant booking confirmations and pre-arrival communication",
                    "24/7 concierge services and local recommendations",
                    "Real-time updates on bookings, flights, and itineraries",
                    "Automated check-in/check-out processes"
                ],
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Travel & Hospitality",
                benefits: [
                    {
                        icon: BuildingOfficeIcon,
                        title: "Enhanced Guest Satisfaction",
                        description: "Provide instant responses and personalized service that exceeds guest expectations at every touchpoint."
                    },
                    {
                        icon: DevicePhoneMobileIcon,
                        title: "Operational Efficiency",
                        description: "Automate routine tasks like bookings, confirmations, and inquiries to reduce staff workload."
                    },
                    {
                        icon: GlobeAltIcon,
                        title: "Global Communication",
                        description: "Communicate with guests in multiple languages and time zones with AI-powered automation."
                    },
                    {
                        icon: StarIcon,
                        title: "Revenue Growth",
                        description: "Increase bookings and upsell services through personalized recommendations and targeted offers."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Travel & Hospitality Solutions",
                subtitle: "End-to-End Automation",
                text: "From initial inquiry to post-stay follow-up, WhatsForm handles every aspect of guest communication and service delivery.",
                features: [
                    "Pre-booking: Destination info, package customization, and booking assistance",
                    "Booking Process: Confirmation, payment processing, and itinerary delivery",
                    "During Stay: Concierge services, activity booking, and real-time support",
                    "Post-stay: Feedback collection, loyalty programs, and future booking incentives"
                ],
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        categories: [
            {
                title: "Hotels & Resorts",
                description: "Enhance guest experience with automated concierge services and seamless communication.",
                link: "/categories/travel-hospitality/hotels-resorts",
                icon: "🏨"
            },
            {
                title: "Airlines",
                description: "Streamline flight bookings, check-ins, and passenger communication.",
                link: "/categories/travel-hospitality/airlines",
                icon: "✈️"
            },
            {
                title: "Travel Agency/Tour Operator",
                description: "Automate itinerary planning, booking confirmations, and travel updates.",
                link: "/contact?industry=Travel%20%26%20Hospitality&category=Travel%20Agency",
                icon: "🗺️"
            },
            {
                title: "Online Travel Aggregator (OTA)",
                description: "Enhance booking experience and provide 24/7 customer support.",
                link: "/contact?industry=Travel%20%26%20Hospitality&category=OTA",
                icon: "💻"
            },
            {
                title: "Cruise Lines",
                description: "Manage bookings, onboard services, and guest communications efficiently.",
                link: "/contact?industry=Travel%20%26%20Hospitality&category=Cruise%20Lines",
                icon: "🚢"
            }
        ],
        closing: {
            title: "Ready to Transform Your Guest Experience?",
            subtitle: "Join leading travel and hospitality brands using WhatsForm to deliver exceptional service and increase guest satisfaction.",
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

            {/* Categories Section */}
            <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection title="Specialized Solutions by Category" subtitle="Choose your specific travel & hospitality segment" />
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.categories.map((category, index) => (
                            <Link key={index} href={category.link} className="group">
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500">
                                    <div className="text-4xl mb-4">{category.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">{category.description}</p>
                                    <div className="flex items-center text-green-600 dark:text-green-400 font-medium group-hover:translate-x-1 transition-transform">
                                        Learn More 
                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
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

export default TravelHospitalityPage;

export { getStaticProps } from '@/lib/ssr';

