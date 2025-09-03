
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const cloudHostingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Cloud & Hosting",
        subtitle: `Automate sales inquiries, provide instant technical support, and send proactive service status notifications to ensure uptime and customer trust.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Reliable Communication for a Reliable Service",
            subtitle: "For cloud and hosting providers, reliability and responsiveness are your brand promise. WhatsForm helps you deliver on that promise with instant, automated communication on WhatsApp."
        },
        {
            type: 'contentWithImage',
            subtitle: 'TECHNICAL SUPPORT',
            title: 'Your First Line of Defense for Support',
            text: 'Use an AI-powered bot to handle first-level technical support queries on WhatsApp. The bot can guide users through common troubleshooting steps, check server status, and collect diagnostic information before creating a ticket for your Tier 2 support engineers.',
            image: 'https://picsum.photos/seed/host1/500/400',
            features: [
                "24/7 AI-powered first-level support",
                "Automated troubleshooting for common issues",
                "Structured ticket creation for complex problems",
                "Reduced workload for your support engineers"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SERVICE STATUS & NOTIFICATIONS',
            title: 'Proactive Communication Builds Trust',
            text: 'When planned maintenance or an unexpected service disruption occurs, use WhatsApp broadcasts to proactively notify affected customers. Providing instant, transparent communication helps manage expectations and reduces the flood of support tickets.',
            image: 'https://picsum.photos/seed/host2/500/400',
            reverse: true,
            features: [
                "Proactive notifications for maintenance and downtime",
                "Segmented broadcasts to target specific customer groups",
                "Reduced inbound support volume during incidents",
                "Strengthened customer trust through transparency"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Satisfaction",
                    description: "Instant support and proactive communication lead to a better, more reliable customer experience."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Lower Support Costs",
                    description: "Automating first-level support and incident communication significantly reduces the cost to serve."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Incident Response",
                    description: "Quickly disseminate information to all affected customers, allowing your technical teams to focus on the fix."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Sales Conversion",
                    description: "An AI sales assistant can handle initial inquiries and qualify leads 24/7, ensuring you never miss an opportunity."
                }
            ]
        }
    ],
    relevantForms: [
        'Support Ticket',
        'Pricing Quotation',
        'Client Onboarding',
        'Feedback Form',
        'Service booking'
    ],
    closing: {
        title: "Ready to enhance the reliability of your customer communication?",
        subtitle: "Discover how WhatsForm can help you deliver exceptional service for your cloud and hosting business.",
        cta: "Book a Demo"
    }
};