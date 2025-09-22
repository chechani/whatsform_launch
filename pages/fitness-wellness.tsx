import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { HeartIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const FitnessWellnessPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Fitness & Wellness",
            subtitle: "Transform your fitness business with intelligent WhatsApp automation. From membership management to wellness coaching, keep your clients engaged, motivated, and on track to achieve their goals."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Motivate and Retain Members",
                subtitle: "Fitness Excellence",
                text: "Keep members engaged and motivated with personalized WhatsApp communication. Automate class bookings, workout reminders, and progress tracking to build lasting fitness relationships.",
                features: [
                    "Automated membership renewal reminders and payment processing",
                    "Class booking confirmations and waitlist management",
                    "Personal trainer appointment scheduling and coordination",
                    "Workout plan delivery and progress tracking updates"
                ],
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Fitness & Wellness",
                benefits: [
                    {
                        icon: "HeartIcon",
                        title: "Enhanced Member Engagement",
                        description: "Keep members motivated with personalized workout tips, progress celebrations, and wellness coaching through WhatsApp."
                    },
                    {
                        icon: "ClockIcon",
                        title: "Efficient Operations",
                        description: "Automate class bookings, trainer appointments, and facility reservations to reduce administrative overhead."
                    },
                    {
                        icon: "CurrencyDollarIcon",
                        title: "Revenue Growth",
                        description: "Promote personal training, supplements, and premium services through targeted campaigns and member insights."
                    },
                    {
                        icon: "UserGroupIcon",
                        title: "Community Building",
                        description: "Create fitness challenges, support groups, and member networks that increase retention and referrals."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Wellness Member Journey",
                subtitle: "Holistic Health Support",
                text: "Support members throughout their entire wellness journey, from initial fitness assessment to achieving long-term health and fitness goals.",
                features: [
                    "Onboarding: Fitness assessments, goal setting, and personalized program creation",
                    "Active Membership: Class reminders, workout tracking, and nutrition guidance",
                    "Progress Monitoring: Achievement celebrations, milestone rewards, and goal adjustments",
                    "Retention & Growth: Re-engagement campaigns, referral programs, and community events"
                ],
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        categories: [
            {
                title: "Gym & Fitness Center",
                description: "Automate class bookings, membership management, and workout reminders.",
                link: "/fitness-wellness/gym-fitness-center",
                icon: "🏋️"
            },
            {
                title: "Yoga & Meditation Studio",
                description: "Handle class scheduling, payment reminders, and wellness tips.",
                link: "/fitness-wellness/yoga-meditation-studio",
                icon: "🧘"
            },
            {
                title: "Wellness Retreats",
                description: "Manage bookings, pre-arrival communication, and guest services.",
                link: "/fitness-wellness/wellness-retreats",
                icon: "🌿"
            },
            {
                title: "Nutrition & Dietetics",
                description: "Provide meal planning, appointment scheduling, and progress tracking.",
                link: "/fitness-wellness/nutrition-dietetics",
                icon: "🥗"
            },
            {
                title: "Spa & Salon",
                description: "Automate appointment bookings, service reminders, and promotional offers.",
                link: "/fitness-wellness/spa-salon",
                icon: "💆"
            }
        ],
        closing: {
            title: "Ready to Transform Your Fitness Business?",
            subtitle: "Join leading fitness and wellness businesses using WhatsForm to increase member engagement, improve retention, and build thriving health communities.",
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
                    <ContentSection title="Specialized Solutions by Category" subtitle="Choose your specific fitness & wellness segment" />
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

export default FitnessWellnessPage;

export { getStaticProps } from '@/lib/ssr';

