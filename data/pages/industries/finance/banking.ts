
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const bankingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Banking",
        subtitle: "Deliver secure, instant, and personalized banking services on WhatsApp. Automate inquiries, service requests, and lead generation with conversational AI.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "The Future of Digital Banking is Conversational",
            subtitle: `Meet your customers' expectations for on-demand service by bringing your key banking operations to the world's most popular messaging app.`
        },
        {
            type: 'contentWithImage',
            subtitle: '24/7 CUSTOMER SERVICE',
            title: 'Your Customers\' Personal Banking Assistant',
            text: 'Empower customers with a 24/7 AI agent that can handle queries like balance inquiries, transaction history, and service requests after secure OTP authentication. This reduces wait times, deflects calls from your contact center, and improves customer satisfaction.',
            image: 'https://picsum.photos/seed/bank1/500/400',
            features: [
                "Secure, OTP-authenticated access to account info",
                "Instant answers to common banking FAQs",
                "Automated handling of routine service requests",
                "Reduced wait times and IVR frustration"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'LEAD GENERATION & ONBOARDING',
            title: 'Acquire and Onboard New Customers, Faster',
            text: 'Use WhatsApp to capture leads for new products like loans or credit cards. A conversational form can collect initial details, check eligibility in real-time via API, and guide qualified applicants through the initial stages of onboarding.',
            image: 'https://picsum.photos/seed/bank2/500/400',
            reverse: true,
            features: [
                "Conversational forms for loan and card applications",
                "Real-time eligibility checks with API integration",
                "Instant pre-approval to keep leads engaged",
                "Seamless handoff to agents for final verification"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Bank",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Massive Cost Savings",
                    description: "Dramatically reduce call center volumes by automating the vast majority of common queries and requests."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Experience",
                    description: "Provide instant, 24/7, and convenient service, eliminating call queues and branch visits for routine tasks."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Lead Conversion",
                    description: "Make loan and policy applications frictionless and interactive, leading to higher completion and conversion rates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Security",
                    description: "Utilize OTP verification and secure data handling to maintain trust and compliance."
                }
            ]
        }
    ],
    relevantForms: [
        'Apply Loan',
        'Credit Card Application',
        'Account Opening Request',
        'Customer KYC',
        'Service Feedback'
    ],
    closing: {
        title: "Ready to redefine your digital banking experience?",
        subtitle: "Discover how WhatsForm can provide the secure, efficient, and modern service your customers expect.",
        cta: "Book a Banking Demo"
    }
};

