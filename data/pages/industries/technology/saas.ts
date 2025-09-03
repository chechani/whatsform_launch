
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const saasData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for SaaS",
        subtitle: `Automate free trial signups, onboard new users with guided tutorials, and provide instant technical support to reduce churn and increase activation.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Build a Frictionless User Journey",
            subtitle: "For SaaS companies, a smooth onboarding and support experience is critical for converting trial users into paying customers. WhatsForm helps you engage users at every stage of the funnel."
        },
        {
            type: 'contentWithImage',
            subtitle: 'LEAD CAPTURE & ONBOARDING',
            title: 'From First Click to Activated User, Faster',
            text: 'Use a conversational WhatsApp form for free trial signups directly from your ads or website. Once a user signs up, enroll them in an automated onboarding drip campaign that shares tips, video tutorials, and best practices to help them get value from your product quickly.',
            image: 'https://picsum.photos/seed/saas1/500/400',
            features: [
                "Frictionless, conversational trial signups",
                "Automated onboarding drip campaigns",
                "Increased user activation rates",
                "Guide users to their 'aha!' moment faster"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'USER SUPPORT & RETENTION',
            title: 'Your 24/7 AI-Powered Support Agent',
            text: 'Provide instant, in-app-like support on WhatsApp. An AI agent trained on your help documentation can answer common questions and troubleshoot issues. For complex problems, it can create a ticket in your helpdesk and escalate to your human support team.',
            image: 'https://picsum.photos/seed/saas2/500/400',
            reverse: true,
            features: [
                "24/7 AI support based on your knowledge base",
                "Reduced user frustration and churn",
                "Lower burden on your technical support team",
                "Collect valuable user feedback for product improvement"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your SaaS Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Higher Conversion Rates",
                    description: "A smooth onboarding experience that quickly demonstrates value is key to converting trial users."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Churn",
                    description: "Responsive, instant support helps retain users who might otherwise leave due to frustration."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Scalable Support",
                    description: "Handle a growing user base efficiently without a linear increase in support headcount."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved User Engagement",
                    description: "Proactive tips and updates sent via WhatsApp keep your users engaged and aware of new features."
                }
            ]
        }
    ],
    relevantForms: [
        'Free trial',
        'Product Demo',
        'Support Ticket',
        'Feature Request',
        'Client Onboarding'
    ],
    closing: {
        title: "Ready to accelerate your user growth and retention?",
        subtitle: "Discover how WhatsForm can help you build a better user journey for your SaaS product.",
        cta: "Book a SaaS Demo"
    }
};