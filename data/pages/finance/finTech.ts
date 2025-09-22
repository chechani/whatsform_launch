

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const finTechData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for FinTech",
        subtitle: "Automate user onboarding, streamline KYC collection, and provide instant transaction support with scalable and secure WhatsApp solutions.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Build a Frictionless User Experience",
            subtitle: `For FinTech companies, user acquisition and retention depend on a seamless, digital-first experience. WhatsApp provides the ultimate low-friction channel to engage and support your users.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'USER ONBOARDING & KYC',
            title: 'From Sign-Up to First Transaction in Minutes',
            text: 'Guide new users through a fast and intuitive onboarding process on WhatsApp. Use conversational forms to collect information and securely handle KYC document uploads, dramatically reducing drop-off rates compared to traditional app or web-based flows.',
            image: 'https://picsum.photos/seed/fintech1/500/400',
            features: [
                "Conversational onboarding and KYC collection",
                "Secure, in-chat document submission",
                "AI-powered data extraction and validation",
                "Higher user activation and conversion rates"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'INSTANT TRANSACTION SUPPORT',
            title: 'Your 24/7 AI-Powered Support Agent',
            text: 'Provide instant support for common user queries. An AI agent can handle questions about transaction status, failed payments, or account limits. For complex issues, it can create a support ticket and seamlessly escalate to your human team.',
            image: 'https://picsum.photos/seed/fintech2/500/400',
            reverse: true,
            features: [
                "24/7 automated support for transaction queries",
                "Reduced burden on your human support team",
                "Instant answers that improve user satisfaction",
                "Intelligent escalation for complex issues"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your FinTech Platform",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Faster User Growth",
                    description: "A frictionless onboarding process on a familiar platform like WhatsApp significantly boosts user acquisition."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Lower Support Costs",
                    description: "Automate the majority of routine support queries, allowing you to scale your user base without scaling your support team."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased User Trust",
                    description: "Providing instant, reliable support on a secure channel builds trust and encourages platform usage."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Retention",
                    description: "A smooth onboarding and support experience reduces user frustration and churn."
                }
            ]
        }
    ],
    relevantForms: [
        'Customer KYC',
        'Account Opening Request',
        'Service Feedback',
        'Support Ticket',
        'Loan Application'
    ],
    closing: {
        title: "Ready to scale your FinTech platform with conversational automation?",
        subtitle: "Discover how WhatsForm can help you acquire, onboard, and support users more effectively.",
        cta: "Book a FinTech Demo"
    }
};

