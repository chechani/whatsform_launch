

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const socialMediaPlatformData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Social Media Platforms",
        subtitle: `Manage user support, handle content moderation reporting, and communicate with your creator community at scale.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building a Safer, More Engaged Community",
            subtitle: "For social media platforms, providing fast and effective user support and content moderation is crucial for trust and safety. WhatsForm helps you manage these high-volume interactions efficiently."
        },
        {
            type: 'contentWithImage',
            subtitle: 'USER SUPPORT & ACCOUNT ISSUES',
            title: 'Your 24/7 AI-Powered Help Center',
            text: 'Use an AI bot on WhatsApp to provide instant support for common user issues like login problems, privacy setting questions, or feature explanations. For complex issues, a structured form can collect all necessary details for your human support team.',
            image: 'https://picsum.photos/seed/social1/500/400',
            features: [
                "24/7 automated support for common user queries",
                "Reduce response times for account issues",
                "Structured forms for bug and issue reporting",
                "Lower the burden on your community support teams"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'CONTENT MODERATION & SAFETY',
            title: 'An Easy and Accessible Reporting Channel',
            text: 'Provide your users with a simple and direct way to report harmful content or policy violations via WhatsApp. A conversational form can guide them through the reporting process, ensuring your safety team gets the clear, actionable information they need.',
            image: 'https://picsum.photos/seed/social2/500/400',
            reverse: true,
            features: [
                "Frictionless channel for reporting policy violations",
                "Structured forms for clear and actionable reports",
                "Automated acknowledgements for user submissions",
                "Help build a safer online environment for your community"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Platform",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved User Trust",
                    description: "A responsive and accessible support and safety reporting system builds user trust in your platform."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Operational Scalability",
                    description: "Automate high-volume, routine inquiries, allowing you to support a growing user base efficiently."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Response Times",
                    description: "Provide instant answers and a streamlined reporting process to resolve user issues more quickly."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Better Community Management",
                    description: "Effectively manage communication with your user and creator communities at scale."
                }
            ]
        }
    ],
    relevantForms: [
        'Support Ticket',
        'Complaint',
        'Feedback Form',
        'Creator Program Signup'
    ],
    closing: {
        title: "Ready to build a stronger and safer online community?",
        subtitle: "Discover how WhatsForm can help you manage your platform's support and safety operations.",
        cta: "Book a Demo"
    }
};

