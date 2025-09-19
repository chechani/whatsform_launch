import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { BuildingStorefrontIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const RestaurantsPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Restaurants",
            subtitle: "Elevate your restaurant's customer experience with intelligent WhatsApp automation. From table reservations to loyalty programs, deliver exceptional service that matches your culinary excellence."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Streamline Restaurant Operations",
                subtitle: "Restaurant Excellence",
                text: "Automate table bookings, order management, and customer communication to focus on what matters most - creating amazing dining experiences.",
                features: [
                    "Instant table reservation confirmations and management",
                    "Automated order taking and delivery coordination",
                    "Real-time table availability and waitlist management",
                    "Personalized menu recommendations and special offers"
                ],
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Restaurants",
                benefits: [
                    {
                        icon: BuildingStorefrontIcon,
                        title: "Enhanced Dining Experience",
                        description: "Provide personalized service with automated special occasion reminders and dietary preference tracking."
                    },
                    {
                        icon: ClockIcon,
                        title: "Operational Efficiency",
                        description: "Reduce no-shows with automated reminders and streamline reservation and order management processes."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Increased Revenue",
                        description: "Promote daily specials, wine pairings, and events through targeted WhatsApp campaigns and upselling."
                    },
                    {
                        icon: UserGroupIcon,
                        title: "Customer Retention",
                        description: "Build lasting relationships with personalized follow-ups, loyalty rewards, and exclusive member offers."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Restaurant Customer Journey",
                subtitle: "From Inquiry to Loyalty",
                text: "Deliver exceptional service throughout the entire dining experience, from initial inquiry to building long-term customer relationships.",
                features: [
                    "Pre-dining: Menu previews, reservation management, and special arrangements",
                    "During Service: Order modifications, special requests, and real-time communication",
                    "Post-dining: Feedback collection, recipe sharing, and future reservation incentives",
                    "Loyalty Management: Rewards tracking, exclusive access, and personalized offers"
                ],
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        categories: [
            {
                title: "Fine Dining",
                description: "Elevate guest experience with reservation management and personalized service.",
                link: "/categories/restaurants/fine-dining",
                icon: "🍽️"
            },
            {
                title: "Quick Service Restaurant (QSR)",
                description: "Speed up ordering process and manage delivery communications efficiently.",
                link: "/categories/restaurants/qsr",
                icon: "🍔"
            },
            {
                title: "Cafe & Bakery",
                description: "Handle orders, loyalty programs, and seasonal promotions efficiently.",
                link: "/contact?industry=Restaurants&category=Cafe%20Bakery",
                icon: "☕"
            },
            {
                title: "Food Delivery Service",
                description: "Coordinate deliveries, handle customer inquiries, and manage feedback.",
                link: "/contact?industry=Restaurants&category=Food%20Delivery",
                icon: "🚚"
            },
            {
                title: "Catering",
                description: "Manage event bookings, menu planning, and client communications.",
                link: "/contact?industry=Restaurants&category=Catering",
                icon: "🎉"
            }
        ],
        closing: {
            title: "Ready to Serve Better Experiences?",
            subtitle: "Join successful restaurants using WhatsForm to enhance customer experience, increase efficiency, and drive repeat business.",
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
                    <ContentSection title="Specialized Solutions by Category" subtitle="Choose your specific restaurant segment" />
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

export default RestaurantsPage;

export { getServerSideProps } from '@/lib/ssr';

