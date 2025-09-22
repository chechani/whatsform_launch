import React from 'react';
import Link from 'next/link';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, BenefitsGrid } from '../components/PageBuilder';
import { PlayIcon, UserGroupIcon, MegaphoneIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const EntertainmentPage: React.FC = () => {
    const pageData = {
        hero: {
            title: "WhatsApp Automation for Entertainment, Social Media & Gaming",
            subtitle: "Engage your audience like never before with intelligent WhatsApp automation. From community management to event coordination, create deeper connections and drive engagement at scale."
        },
        sections: [
            {
                type: 'contentWithImage' as const,
                title: "Build Engaged Communities",
                subtitle: "Audience Engagement",
                text: "Create vibrant communities and maintain meaningful connections with your audience through personalized WhatsApp interactions and automated engagement campaigns.",
                features: [
                    "Automated community management and audience engagement",
                    "Event registration, ticketing, and real-time updates",
                    "Content distribution and subscriber notifications",
                    "Fan interaction, contests, and loyalty programs"
                ],
                image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            },
            {
                type: 'benefitsGrid' as const,
                title: "Key Benefits for Entertainment & Media",
                benefits: [
                    {
                        icon: "PlayIcon",
                        title: "Enhanced Content Distribution",
                        description: "Distribute content, updates, and exclusive releases directly to your audience through personalized WhatsApp channels."
                    },
                    {
                        icon: "UserGroupIcon",
                        title: "Community Management",
                        description: "Build and manage engaged communities with automated moderation, events, and interactive experiences."
                    },
                    {
                        icon: "MegaphoneIcon",
                        title: "Audience Engagement",
                        description: "Drive higher engagement rates with interactive polls, contests, and real-time audience participation."
                    },
                    {
                        icon: "ChartBarIcon",
                        title: "Performance Analytics",
                        description: "Track engagement metrics, audience preferences, and campaign performance to optimize content strategy."
                    }
                ]
            },
            {
                type: 'contentWithImage' as const,
                title: "Complete Audience Journey Management",
                subtitle: "From Discovery to Loyalty",
                text: "Guide your audience from initial discovery to becoming loyal fans and brand advocates through strategic WhatsApp automation.",
                features: [
                    "Discovery: Content previews, trailers, and audience acquisition campaigns",
                    "Engagement: Interactive content, behind-the-scenes access, and community participation",
                    "Retention: Exclusive content, early access, and VIP member benefits",
                    "Advocacy: Referral programs, user-generated content, and brand partnerships"
                ],
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                reverse: true
            }
        ],
        categories: [
            {
                title: "Social Media Platform",
                description: "Enhance user engagement and provide automated customer support.",
                link: "/entertainment/SocialMediaPlatformPage",
                icon: "📱"
            },
            {
                title: "Gaming Studio",
                description: "Manage player communications, updates, and community engagement.",
                link: "/entertainment/GamingStudioPage",
                icon: "🎮"
            },
            {
                title: "Streaming Service",
                description: "Handle subscription management and content recommendations.",
                link: "/entertainment/StreamingServicePage",
                icon: "📺"
            },
            {
                title: "Event Management",
                description: "Coordinate event logistics, attendee communication, and feedback collection.",
                link: "/entertainment/EventManagementPage",
                icon: "🎪"
            },
            {
                title: "Content Creator/Influencer",
                description: "Manage brand partnerships, audience engagement, and campaign coordination.",
                link: "/entertainment/ContentCreatorInfluencerPage",
                icon: "⭐"
            }
        ],
        closing: {
            title: "Ready to Amplify Your Audience Engagement?",
            subtitle: "Join leading entertainment brands, content creators, and gaming studios using WhatsForm to build engaged communities and drive meaningful connections.",
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
                    <ContentSection title="Specialized Solutions by Category" subtitle="Choose your specific entertainment & media segment" />
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

export default EntertainmentPage;

export { getStaticProps } from '@/lib/ssr';

