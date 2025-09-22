

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const logisticsSupplyChainData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Logistics & Supply Chain",
        subtitle: `From package tracking to exception handling, keep customers and internal teams perfectly in sync with intelligent automation.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Clarity and Speed in Motion",
            subtitle: `In logistics, timely updates and efficient coordination are paramount. WhatsForm transforms your communication, making operations leaner, more transparent, and highly responsive.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'REAL-TIME PACKAGE TRACKING',
            title: 'Instant Updates, Zero Effort',
            text: 'Allow customers to track their packages simply by sending a tracking number on WhatsApp. Our AI agent integrates with your logistics database via SmartyAutomate to provide instant, concise status updates, and can even handle follow-up questions like rescheduling a delivery.',
            image: 'https://picsum.photos/seed/logistics1/500/400',
            features: [
                "AI-powered tracking number recognition",
                "Real-time status updates from your database",
                "Interactive follow-up actions (e.g., reschedule)",
                "Reduces 'Where is my package?' support queries"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'DELIVERY EXCEPTION HANDLING',
            title: 'Turn Problems into Solutions, Instantly',
            text: 'When a delivery fails, an automated WhatsApp message can instantly notify the customer, offering them self-service options to reschedule, reroute to a pickup point, or connect to support. This proactive approach improves second-attempt success rates and customer satisfaction.',
            image: 'https://picsum.photos/seed/logistics2/500/400',
            reverse: true,
            features: [
                "Automated failed delivery notifications",
                "Customer self-service for rescheduling/rerouting",
                "Reduced load on call centers",
                "Improved first-call resolution"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Operations",
            subtitle: "A responsive, user-centric communication strategy delivers a competitive edge in the logistics industry.",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Boosted Customer Satisfaction",
                    description: "Proactive, real-time updates build trust and reduce customer anxiety, leading to repeat business."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Efficiency",
                    description: "Automate routine tracking queries and exception handling, allowing your team to focus on complex logistical challenges."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Transparency",
                    description: "Close communication gaps between customers, drivers, and internal teams for a more visible supply chain."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Problem Resolution",
                    description: "Issues are reported and handled with less latency, minimizing delays and operational disruptions."
                }
            ]
        }
    ],
    relevantForms: [
        'Freight Inquiry',
        'Book Vehicle',
        'Pickup Request',
        'Tracking',
        'Driver registration',
        'POD'
    ],
    closing: {
        title: "Ready to accelerate your logistics operations?",
        subtitle: "See how WhatsForm can provide the speed and clarity your supply chain needs to thrive.",
        cta: "Request a Demo"
    }
};

