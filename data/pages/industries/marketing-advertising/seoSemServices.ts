
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const seoSemServicesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for SEO/SEM Agencies",
        subtitle: "Automate client onboarding, streamline reporting, and manage communications at scale with a platform designed for search marketing experts.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Drive Results, Not Paperwork",
            subtitle: `Your expertise is in driving traffic and conversions, not in chasing clients for information. WhatsForm automates your client-facing workflows so you can focus on what you do best.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT ONBOARDING',
            title: 'A Seamless Start to Every Project',
            text: 'Use a conversational WhatsApp form to onboard new clients. Collect website details, target keywords, ad account access, and campaign goals in a structured, professional way. The data can be instantly pushed to your project management tool, kicking off the project without delay.',
            image: 'https://picsum.photos/seed/seo1/500/400',
            features: [
                "Conversational client onboarding forms",
                "Structured collection of project requirements",
                "Integration with Trello, Asana, or your PM tool",
                "Reduce onboarding time and manual data entry"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'AUTOMATED REPORTING & UPDATES',
            title: 'Keep Clients Informed, Effortlessly',
            text: 'Schedule automated weekly or monthly updates to be sent to your clients on WhatsApp. You can send key performance metrics, a link to their full dashboard, and a brief summary, keeping them informed and demonstrating your value proactively.',
            image: 'https://picsum.photos/seed/seo2/500/400',
            reverse: true,
            features: [
                "Scheduled performance summary broadcasts",
                "Share links to detailed reports or dashboards",
                "Proactive communication that builds client trust",
                "Automate a key part of your client management process"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Agency",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Onboarding",
                    description: "Get projects started faster with a streamlined and professional onboarding process."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Client Retention",
                    description: "Proactive, professional communication and transparent reporting build long-term client loyalty."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Efficiency",
                    description: "Automate routine client communication and data collection, freeing up your team for strategic work."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Scale Your Operations",
                    description: "Handle more clients effectively without a proportional increase in your account management overhead."
                }
            ]
        }
    ],
    relevantForms: [
        'Client Onboarding',
        'Quotation Request Form',
        'Project Progress',
        'Customer Satisfaction'
    ],
    closing: {
        title: "Ready to optimize your agency's workflows?",
        subtitle: "Discover how WhatsForm can help you manage your SEO/SEM clients more efficiently.",
        cta: "Book a Demo for Agencies"
    }
};

