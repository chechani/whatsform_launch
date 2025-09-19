import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../../../components/PageBuilder';
import { ClockIcon, ShoppingCartIcon, CurrencyDollarIcon, TruckIcon } from '@heroicons/react/24/outline';

const QuickServiceRestaurantPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Quick Service Restaurants (QSR)",
            subtitle: "Speed up your service and enhance customer experience with intelligent WhatsApp automation. From order taking to delivery tracking, serve customers faster and more efficiently."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Streamline Fast Food Operations",
                subtitle: "QSR Excellence",
                text: "Automate ordering, payment processing, and delivery coordination to reduce wait times and increase customer satisfaction in your quick service restaurant.",
                features: [
                    "Instant order taking and menu browsing via WhatsApp",
                    "Automated payment processing and order confirmations",
                    "Real-time order status updates and delivery tracking",
                    "Queue management and pickup time notifications"
                ],
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for QSR",
                benefits: [
                    {
                        icon: ClockIcon,
                        title: "Faster Service",
                        description: "Reduce order processing time and eliminate queues with automated WhatsApp ordering systems."
                    },
                    {
                        icon: ShoppingCartIcon,
                        title: "Easy Ordering",
                        description: "Allow customers to browse menus, customize orders, and pay directly through WhatsApp conversations."
                    },
                    {
                        icon: CurrencyDollarIcon,
                        title: "Increased Sales",
                        description: "Boost revenue with automated upselling suggestions, combo deals, and promotional campaigns."
                    },
                    {
                        icon: TruckIcon,
                        title: "Delivery Coordination",
                        description: "Streamline delivery logistics with automated dispatch, tracking, and customer notifications."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete QSR Customer Experience",
                subtitle: "From Order to Delivery",
                text: "Provide a seamless experience from menu browsing to order completion, ensuring customer satisfaction at every touchpoint.",
                features: [
                    "Menu Browsing: Interactive menu display with images, prices, and customization options",
                    "Order Processing: Quick order capture, modifications, and payment collection",
                    "Preparation Updates: Real-time kitchen updates and estimated completion times",
                    "Delivery & Pickup: Automated notifications, tracking, and feedback collection"
                ],
                image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        useCases: {
            title: "Popular Use Cases",
            items: [
                {
                    title: "Voice Order Integration",
                    description: "Allow customers to place orders using voice messages for faster, hands-free ordering"
                },
                {
                    title: "Combo Deal Suggestions", 
                    description: "Automatically suggest complementary items and value meals to increase average order value"
                },
                {
                    title: "Loyalty Program Management",
                    description: "Track customer orders, points, and rewards automatically through WhatsApp interactions"
                },
                {
                    title: "Peak Hour Management",
                    description: "Manage high-volume periods with automated queue systems and estimated wait times"
                },
                {
                    title: "Nutritional Information",
                    description: "Provide instant access to nutritional facts, allergen information, and dietary options"
                },
                {
                    title: "Feedback Collection",
                    description: "Automatically collect customer feedback and ratings after order completion"
                }
            ]
        },
        closing: {
            title: "Ready to Speed Up Your Service?",
            subtitle: "Join successful QSR brands using WhatsForm to reduce wait times, increase order accuracy, and enhance customer satisfaction.",
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

export default QuickServiceRestaurantPage;

export { getStaticProps } from '@/lib/ssr';

