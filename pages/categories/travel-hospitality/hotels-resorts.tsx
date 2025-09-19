import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../../components/PageBuilder';
import { CheckCircleIcon, BuildingOfficeIcon, DevicePhoneMobileIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/outline';

const HotelsResortsPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Hotels & Resorts",
            subtitle: "Transform your guest experience with intelligent WhatsApp automation. From booking confirmations to concierge services, deliver exceptional hospitality at scale."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Streamline Guest Communications",
                subtitle: "Guest Experience",
                text: "Automate every touchpoint of the guest journey with WhatsApp. Provide seamless communication from booking to checkout.",
                features: [
                    "Automated booking confirmations and pre-arrival communication",
                    "Real-time room service orders and housekeeping requests", 
                    "Instant responses to common guest inquiries",
                    "Seamless check-in/check-out processes via WhatsApp"
                ],
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Hotels & Resorts",
                benefits: [
                    {
                        icon: BuildingOfficeIcon,
                        title: "Enhanced Guest Experience",
                        description: "Provide 24/7 concierge services and instant responses to guest requests through WhatsApp automation."
                    },
                    {
                        icon: DevicePhoneMobileIcon,
                        title: "Streamlined Operations",
                        description: "Reduce front desk workload by automating common inquiries, bookings, and service requests."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Increased Revenue",
                        description: "Upsell spa services, dining, and activities through personalized WhatsApp campaigns."
                    },
                    {
                        icon: StarIcon,
                        title: "Improved Reviews",
                        description: "Proactive communication and quick issue resolution lead to better guest satisfaction and reviews."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Guest Journey Automation",
                subtitle: "End-to-End Solution",
                text: "From booking to checkout, WhatsForm handles every aspect of guest communication and service delivery.",
                features: [
                    "Pre-arrival: Welcome messages, local recommendations, and special offers",
                    "During Stay: Room service, housekeeping requests, and activity bookings",
                    "Post-stay: Feedback collection, loyalty program enrollment, and future booking incentives",
                    "Emergency Support: 24/7 assistance for urgent guest needs"
                ],
                image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        useCases: {
            title: "Popular Use Cases",
            items: [
                {
                    title: "Automated Check-in",
                    description: "Send room keys digitally and provide check-in instructions via WhatsApp"
                },
                {
                    title: "Concierge Services", 
                    description: "AI-powered recommendations for local attractions, dining, and transportation"
                },
                {
                    title: "Room Service Orders",
                    description: "Enable guests to place food and amenity orders directly through WhatsApp"
                },
                {
                    title: "Maintenance Requests",
                    description: "Streamline reporting and resolution of room issues and maintenance needs"
                },
                {
                    title: "Event Coordination",
                    description: "Manage wedding, conference, and special event communications efficiently"
                },
                {
                    title: "Loyalty Program",
                    description: "Automate point tracking, rewards redemption, and exclusive member offers"
                }
            ]
        },
        closing: {
            title: "Ready to Transform Your Guest Experience?",
            subtitle: "Join leading hotels and resorts using WhatsForm to deliver exceptional service and increase guest satisfaction.",
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

export default HotelsResortsPage;

export { getServerSideProps } from '@/lib/ssr';

