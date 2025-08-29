
import { CheckCircleIcon, ChartBarIcon, UsersIcon, SparklesIcon } from '../../icons';

export const marketingAgenciesPageData = {
    hero: {
        title: "Solutions for Marketing Agencies",
        subtitle: "Manage multiple clients, run high-performance campaigns, and provide detailed analytics with a single, powerful WhatsApp platform."
    },
    sections: [
        {
            type: 'centeredText',
            title: "Scale Your Agency with Conversational Marketing",
            subtitle: "Stop juggling multiple tools and platforms. WhatsForm provides a unified, multi-client solution to help you deliver exceptional results on WhatsApp, streamline your operations, and grow your agency."
        },
        {
            type: 'contentWithImage',
            subtitle: 'MULTI-CLIENT MANAGEMENT',
            title: 'A Centralized Hub for All Your Clients',
            text: 'Manage all your client accounts from a single, intuitive dashboard. Securely switch between client workspaces, manage campaigns, and monitor performance without logging in and out of multiple accounts. Maintain brand consistency and streamline your workflow.',
            image: 'https://picsum.photos/seed/agency1/500/400',
            features: [
                "Unified dashboard for all client accounts",
                "Secure, permission-based team access",
                "Centralized template and asset library",
                "Streamlined billing and reporting"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'HIGH-PERFORMANCE CAMPAIGNS',
            title: 'Run Interactive Campaigns that Convert',
            text: 'Leverage the full power of WhatsApp for your clients. Go beyond simple broadcasts with interactive forms, AI-powered quizzes, and personalized drip campaigns that capture leads, nurture them, and drive conversions at scale.',
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
            type: 'pageFeatureGrid',
            title: 'Prove Your ROI with Powerful Analytics',
            subtitle: 'Track every interaction and demonstrate the value you deliver to your clients with our comprehensive analytics suite.',
            features: [
                { icon: ChartBarIcon, title: "Campaign Performance", description: "Monitor open rates, click-through rates, and conversion metrics for every campaign." },
                { icon: UsersIcon, title: "Audience Growth", description: "Track contact list growth and segmentation over time." },
                { icon: SparklesIcon, title: "AI Agent Effectiveness", description: "Analyze AI agent performance, including resolution rates and common queries." },
            ],
            image: 'https://picsum.photos/seed/agency3/500/450'
        },
        {
            type: 'benefitsGrid',
            title: "Key Benefits for Your Agency",
            subtitle: "WhatsForm is built to help you succeed.",
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
    closing: {
        title: "Ready to become a conversational marketing powerhouse?",
        subtitle: "See how WhatsForm can help your agency deliver incredible results for your clients.",
        cta: "Book an Agency Demo"
    }
};