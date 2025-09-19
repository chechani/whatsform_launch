import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { TruckIcon, WrenchScrewdriverIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const AutomotivePage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Automotive Industry",
            subtitle: "Revolutionize your automotive business with intelligent WhatsApp automation. From lead generation to service scheduling, drive more sales and enhance customer satisfaction."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Drive More Sales with Automation",
                subtitle: "Automotive Sales",
                text: "Convert more leads into sales with personalized WhatsApp conversations. Automate follow-ups, schedule test drives, and provide instant vehicle information.",
                features: [
                    "Instant lead capture and qualification from inquiries",
                    "Automated vehicle information, pricing, and availability",
                    "Test drive scheduling and reminder notifications",
                    "Finance and insurance guidance throughout the process"
                ],
                image: "https://images.unsplash.com/photo-1560979022-079ad6df7a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Automotive",
                benefits: [
                    {
                        icon: TruckIcon,
                        title: "Higher Conversion Rates",
                        description: "Convert more inquiries into actual sales with timely, personalized WhatsApp communication and follow-ups."
                    },
                    {
                        icon: WrenchScrewdriverIcon,
                        title: "Streamlined Service",
                        description: "Automate service appointments, maintenance reminders, and warranty communications for better customer retention."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Increased Revenue",
                        description: "Upsell accessories, extended warranties, and service packages through automated campaigns and recommendations."
                    },
                    {
                        icon: ClockIcon,
                        title: "24/7 Availability",
                        description: "Capture leads and provide information around the clock, even when your showroom or service center is closed."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Automotive Customer Journey",
                subtitle: "Sales to Service Excellence",
                text: "Manage every aspect of the customer relationship from initial inquiry to ongoing service and maintenance with intelligent automation.",
                features: [
                    "Pre-sales: Vehicle comparisons, financing options, and appointment booking",
                    "Sales Process: Documentation assistance, delivery scheduling, and onboarding",
                    "After-sales: Service reminders, warranty information, and loyalty programs",
                    "Emergency Support: 24/7 roadside assistance and service coordination"
                ],
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        categories: [
            {
                title: "Car Dealership",
                description: "Convert leads faster with automated follow-ups and test drive scheduling.",
                link: "/categories/automotive/car-dealership",
                icon: "🚗"
            },
            {
                title: "Service & Repair Center",
                description: "Schedule appointments, send service reminders, and provide repair updates.",
                link: "/contact?industry=Automotive&category=Service%20Center",
                icon: "🔧"
            },
            {
                title: "Auto Parts Manufacturing",
                description: "Streamline B2B communications and inventory management.",
                link: "/contact?industry=Automotive&category=Auto%20Parts",
                icon: "⚙️"
            },
            {
                title: "Rental Services",
                description: "Automate booking confirmations, vehicle handover, and return processes.",
                link: "/contact?industry=Automotive&category=Rental%20Services",
                icon: "🔑"
            },
            {
                title: "EV & Charging Infrastructure",
                description: "Manage charging station reservations and user communications.",
                link: "/contact?industry=Automotive&category=EV%20Charging",
                icon: "🔌"
            }
        ],
        closing: {
            title: "Ready to Drive Your Business Forward?",
            subtitle: "Join leading automotive companies using WhatsForm to increase sales, improve customer service, and streamline operations.",
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
                    <ContentSection title="Specialized Solutions by Category" subtitle="Choose your specific automotive segment" />
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

export default AutomotivePage;

export { getStaticProps } from '@/lib/ssr';

