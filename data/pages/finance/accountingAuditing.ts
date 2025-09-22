

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const accountingAuditingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Accounting & Auditing Firms",
        subtitle: "Streamline client communication, automate document collection, and ensure timely compliance with a platform designed for modern CA and accounting practices.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Focus on Advisory, Not Administration",
            subtitle: `Reduce the administrative burden of chasing clients for documents and sending manual reminders. WhatsForm automates your routine workflows so you can focus on high-value advisory services.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'SECURE DOCUMENT COLLECTION',
            title: 'From Email Chaos to WhatsApp Clarity',
            text: 'Replace endless email chains with a secure and structured document collection process on WhatsApp. Clients can simply snap a photo or upload a file, which is then automatically categorized and linked to their record, with a full audit trail.',
            image: 'https://picsum.photos/seed/acc1/500/400',
            features: [
                "Secure, encrypted document submission via chat",
                "Automated reminders for pending documents",
                "Reduced manual effort in sorting and filing",
                "Complete audit trail of all submissions"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'AUTOMATED COMPLIANCE REMINDERS',
            title: 'Never Miss a Filing Deadline Again',
            text: 'Send automated, personalized reminders to clients for upcoming GST, ITR, and other statutory deadlines. This proactive communication improves on-time filing rates and demonstrates your firm\'s value.',
            image: 'https://picsum.photos/seed/acc2/500/400',
            reverse: true,
            features: [
                "Automated, personalized deadline notifications",
                "Segmented broadcasts for different client groups",
                "Significantly improved on-time filing rates",
                "Reduced time spent on manual follow-ups"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Practice",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Productivity",
                    description: "Automate a significant portion of administrative work, allowing staff to handle more clients effectively."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Client Experience",
                    description: "Provide clients with a convenient, modern, and responsive channel for all their compliance needs."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Accuracy",
                    description: "Structured data collection through forms reduced the risk of errors and missing information."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Competitive Advantage",
                    description: "Differentiate your firm as a tech-savvy and client-focused practice in a competitive market."
                }
            ]
        }
    ],
    relevantForms: [
        'Customer KYC',
        'Declaration Form',
        'Tax Compliance',
        'Personal Details',
        'Client Onboarding'
    ],
    closing: {
        title: "Ready to modernize your accounting practice?",
        subtitle: "Discover how WhatsForm can automate your compliance workflows and strengthen client relationships.",
        cta: "Book a Demo for CA Firms"
    }
};

