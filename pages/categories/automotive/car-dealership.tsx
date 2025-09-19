import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../../components/PageBuilder';
import { TruckIcon, WrenchScrewdriverIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const CarDealershipPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Car Dealerships",
            subtitle: "Revolutionize your automotive sales process with intelligent WhatsApp automation. From lead generation to service scheduling, drive more sales and enhance customer satisfaction."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Convert More Leads to Sales",
                subtitle: "Automotive Sales",
                text: "Capture leads instantly and nurture them through personalized WhatsApp conversations. Automate follow-ups and schedule test drives seamlessly.",
                features: [
                    "Instant lead capture from website inquiries",
                    "Automated vehicle information and pricing details", 
                    "Test drive scheduling and reminders",
                    "Finance and insurance options guidance"
                ],
                image: "https://images.unsplash.com/photo-1560979022-079ad6df7a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Car Dealerships",
                benefits: [
                    {
                        icon: TruckIcon,
                        title: "Higher Conversion Rates",
                        description: "Convert more inquiries into actual sales with timely, personalized WhatsApp communication."
                    },
                    {
                        icon: WrenchScrewdriverIcon,
                        title: "Streamlined Service",
                        description: "Automate service appointments, maintenance reminders, and warranty communications."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Increased Revenue",
                        description: "Upsell accessories, extended warranties, and service packages through automated campaigns."
                    },
                    {
                        icon: ClockIcon,
                        title: "24/7 Availability",
                        description: "Capture leads and provide information around the clock, even when your showroom is closed."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Automotive Customer Journey",
                subtitle: "Sales to Service",
                text: "Manage every aspect of the customer relationship from initial inquiry to ongoing service and maintenance.",
                features: [
                    "Pre-sales: Vehicle comparisons, financing options, and appointment booking",
                    "Sales Process: Documentation, delivery scheduling, and onboarding",
                    "After-sales: Service reminders, warranty information, and loyalty programs",
                    "Emergency Support: 24/7 roadside assistance and service coordination"
                ],
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        useCases: {
            title: "Popular Use Cases",
            items: [
                {
                    title: "Lead Qualification",
                    description: "Automatically qualify leads by asking key questions about budget, timeline, and preferences"
                },
                {
                    title: "Inventory Updates", 
                    description: "Send real-time notifications about new arrivals and special offers to interested customers"
                },
                {
                    title: "Service Scheduling",
                    description: "Allow customers to book service appointments and receive maintenance reminders via WhatsApp"
                },
                {
                    title: "Trade-in Valuation",
                    description: "Provide instant trade-in quotes and schedule appraisal appointments"
                },
                {
                    title: "Finance Processing",
                    description: "Guide customers through financing options and collect necessary documentation"
                },
                {
                    title: "Delivery Coordination",
                    description: "Coordinate vehicle delivery logistics and provide real-time updates to customers"
                }
            ]
        },
        closing: {
            title: "Ready to Drive More Sales?",
            subtitle: "Join leading automotive dealerships using WhatsForm to increase sales and improve customer experience.",
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

export default CarDealershipPage;

export { getStaticProps } from '@/lib/ssr';

