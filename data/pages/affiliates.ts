import { CheckCircleIcon, CurrencyDollarIcon, UsersIcon, ChartBarIcon, AcademicCapIcon, BuildingOfficeIcon, MegaphoneIcon } from '../../icons';

export const affiliatesPageData = {
    hero: {
        title: "Become a WhatsForm Affiliate",
        subtitle: "Join our affiliate program and earn recurring commissions by introducing your audience to the future of conversational business.",
        description: "Partner with India's leading WhatsApp automation platform and help businesses transform their customer communication while building a lucrative revenue stream."
    },

    stats: {
        title: "Join a Growing Community",
        stats: [
            { number: "500+", label: "Active Affiliates" },
            { number: "₹1.5L+", label: "Average First Year Earnings" },
            { number: "85%", label: "Affiliate Satisfaction" },
            { number: "20%", label: "First Year Commission" }
        ]
    },

    idealAffiliates: {
        title: "Who Should Become Our Affiliate?",
        subtitle: "Perfect for professionals who work with businesses and understand their communication needs.",
        categories: [
            {
                icon: AcademicCapIcon,
                title: "Chartered Accountants & Tax Professionals",
                description: "CA firms handle multiple clients who need efficient communication systems for follow-ups, document collection, and client updates.",
                benefits: [
                    "Help clients automate invoice reminders",
                    "Streamline document collection processes", 
                    "Improve client communication efficiency",
                    "Generate additional revenue from existing client base"
                ],
                earning: "First year earning: ₹40,000 - ₹1,20,000 + ongoing renewals"
            },
            {
                icon: BuildingOfficeIcon,
                title: "Business Consultants & Advisors",
                description: "Consultants who advise businesses on operations, marketing, and digital transformation.",
                benefits: [
                    "Add value to consulting services",
                    "Help clients improve customer engagement",
                    "Offer modern communication solutions",
                    "Create recurring revenue streams"
                ],
                earning: "First year earning: ₹30,000 - ₹90,000 + ongoing renewals"
            },
            {
                icon: MegaphoneIcon,
                title: "Digital Marketing Agencies",
                description: "Marketing agencies looking to expand their service offerings with WhatsApp automation.",
                benefits: [
                    "Enhance client marketing campaigns",
                    "Offer comprehensive communication solutions",
                    "Increase client retention with new services",
                    "Scale agency revenue with recurring commissions"
                ],
                earning: "First year earning: ₹60,000 - ₹2,00,000 + ongoing renewals"
            },
            {
                icon: CurrencyDollarIcon,
                title: "Software Resellers & IT Consultants",
                description: "Technology professionals who recommend and implement business software solutions.",
                benefits: [
                    "Expand software portfolio",
                    "Meet growing demand for automation",
                    "Provide cutting-edge WhatsApp solutions",
                    "Build long-term client relationships"
                ],
                earning: "First year earning: ₹48,000 - ₹1,60,000 + ongoing renewals"
            }
        ]
    },

    benefits: {
        title: "Why Partner with WhatsForm?",
        subtitle: "Our affiliate program is designed for your success with industry-leading benefits.",
        benefits: [
            {
                icon: CurrencyDollarIcon,
                title: "Competitive Commission Rates",
                description: "Earn 20% commission in the first year and 10% ongoing commission for every renewal with no earning caps."
            },
            {
                icon: ChartBarIcon,
                title: "Real-time Analytics",
                description: "Track your performance with detailed analytics showing clicks, conversions, and earnings."
            },
            {
                icon: UsersIcon,
                title: "Complete Marketing Support",
                description: "Get access to professional marketing materials, training, and dedicated support team."
            },
            {
                icon: CheckCircleIcon,
                title: "Monthly Guaranteed Payouts",
                description: "Receive guaranteed monthly payouts with multiple payment options and no minimum threshold."
            }
        ]
    },

    commissionStructure: {
        title: "Transparent Commission Structure",
        subtitle: "Earn substantial commissions in the first year plus ongoing passive income from renewals.",
        tiers: [
            {
                title: "First Year Commission",
                commission: "20%",
                description: "For all new customer referrals in their first year",
                features: ["High first-year earnings", "Instant tracking", "Marketing materials"]
            },
            {
                title: "Renewal Commission",
                commission: "10%",
                description: "For ongoing customer renewals and subscriptions",
                features: ["Recurring passive income", "Lifetime customer value", "Long-term earnings"],
                popular: true
            },
            {
                title: "Enterprise Deals",
                commission: "15%",
                description: "Special rate for large enterprise client referrals",
                features: ["Higher enterprise rates", "Direct account manager", "Co-branded materials"]
            }
        ]
    },

    howItWorks: {
        title: "Simple 4-Step Process",
        subtitle: "Start earning in just a few easy steps.",
        steps: [
            { 
                title: "Apply & Get Approved", 
                description: "Complete our application form and get approved within 24-48 hours." 
            },
            { 
                title: "Receive Marketing Kit", 
                description: "Get your unique affiliate links and access to our comprehensive marketing resource library." 
            },
            { 
                title: "Promote to Your Network", 
                description: "Share WhatsForm with your clients and audience through your preferred channels." 
            },
            { 
                title: "Earn Recurring Income", 
                description: "Get paid monthly for every active customer you refer, with detailed tracking and reporting." 
            }
        ]
    },

    testimonials: {
        title: "Success Stories from Our Affiliates",
        testimonials: [
            {
                name: "CA Rajesh Kumar",
                title: "Chartered Accountant, Mumbai",
                image: "/images/testimonials/rajesh.jpg",
                quote: "WhatsForm has become an essential part of my client recommendations. My clients love the automated invoice reminders and document collection features. I've earned over ₹60,000 in the first year alone!",
                earnings: "₹60,000+ first year earnings"
            },
            {
                name: "Priya Sharma",
                title: "Digital Marketing Consultant",
                image: "/images/testimonials/priya.jpg",
                quote: "Recommending WhatsForm to my clients has not only improved their customer engagement but also created a substantial revenue stream - 20% in the first year and ongoing 10% renewals.",
                earnings: "₹90,000+ first year earnings"
            }
        ]
    },

    resources: {
        title: "Marketing Resources & Support",
        subtitle: "Everything you need to succeed as a WhatsForm affiliate.",
        resources: [
            {
                title: "Professional Marketing Materials",
                items: ["High-converting landing pages", "Email templates", "Social media graphics", "Product demo videos"]
            },
            {
                title: "Training & Education",
                items: ["Product training webinars", "Sales technique workshops", "Industry-specific guides", "Best practices documentation"]
            },
            {
                title: "Dedicated Support",
                items: ["Personal affiliate manager", "24/7 support team", "Monthly performance reviews", "Success strategy consultations"]
            }
        ]
    },

    closing: {
        title: "Ready to Start Earning with WhatsForm?",
        subtitle: "Join hundreds of successful affiliates who are building recurring revenue streams while helping businesses grow.",
        cta: "Apply for Affiliate Program"
    }
};