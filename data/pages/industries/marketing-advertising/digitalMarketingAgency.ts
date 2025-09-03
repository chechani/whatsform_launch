
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const digitalMarketingAgencyData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Digital Marketing Agencies",
        subtitle: "Manage multiple clients, run high-performance campaigns, and prove ROI with a unified WhatsApp platform designed for agencies.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Scale Your Agency with Conversational Marketing",
            subtitle: `Stop juggling multiple tools. WhatsForm provides a multi-client solution to deliver exceptional results on WhatsApp, streamline operations, and grow your agency.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'MULTI-CLIENT MANAGEMENT',
            title: 'A Centralized Hub for All Your Clients',
            text: 'Manage all client accounts from a single dashboard. Securely switch between workspaces, manage campaigns, and monitor performance without logging in and out of multiple accounts.',
            image: 'https://picsum.photos/seed/agency1/500/400',
            features: [
                "Unified dashboard for all client accounts",
                "Secure, permission-based team access",
                "Centralized template and asset library",
                "Streamlined client reporting"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'HIGH-PERFORMANCE CAMPAIGNS',
            title: 'Run Interactive Campaigns that Convert',
            text: 'Go beyond simple broadcasts with interactive forms, AI-powered quizzes, and personalized drip campaigns that capture leads, nurture them, and drive conversions at scale for your clients.',
            image: 'https://picsum.photos/seed/agency2/500/400',
            reverse: true,
            features: [
                "Interactive forms and WhatsApp Flows",
                "Automated, sequential drip campaigns",
                "AI agents for lead qualification",
                "Segmented broadcasts for targeted outreach"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Key Benefits for Your Agency",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improve Client Results",
                    description: "Deliver higher engagement and conversion rates by leveraging the power of conversational marketing."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increase Efficiency",
                    description: "Manage all clients from one platform, reducing administrative overhead and saving valuable time."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Create New Revenue",
                    description: "Offer high-demand WhatsApp marketing and automation services as a new, profitable service line."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Scale Your Operations",
                    description: "Our platform is built to handle your growth, from a handful of clients to a large portfolio."
                }
            ]
        }
    ],
    relevantForms: [
        'Customer Satisfaction',
        'Lead Generation Form',
        'Event Registration',
        'Product Demo',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to become a conversational marketing powerhouse?",
        subtitle: "See how WhatsForm can help your agency deliver incredible results for your clients.",
        cta: "Book an Agency Demo"
    }
};