
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const onlineTravelAggregatorOTAData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Online Travel Aggregators (OTAs)",
        subtitle: `Automate booking support, manage cancellation requests, and communicate with your partners at scale with powerful WhatsApp workflows.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Scaling Travel Operations with Automation",
            subtitle: "For OTAs handling thousands of bookings and inquiries daily, efficiency and speed are critical. WhatsForm helps you automate your high-volume communications for both customers and partners."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CUSTOMER SUPPORT AUTOMATION',
            title: 'Your 24/7 AI-Powered Support Agent',
            text: 'Handle the most common customer queries with an AI bot on WhatsApp. The bot can assist with booking modifications, answer questions about cancellation policies, and provide itinerary details, deflecting a massive volume of requests from your human support team.',
            image: 'https://picsum.photos/seed/ota1/500/400',
            features: [
                "24/7 automated support for booking inquiries",
                "Conversational flows for cancellations and modifications",
                "Instant answers to frequently asked questions",
                "Seamless escalation to human agents for complex cases"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SUPPLIER & PARTNER COMMUNICATION',
            title: 'A Streamlined Channel for Your Partners',
            text: 'Use WhatsApp to efficiently communicate with your network of hotels, airlines, and other suppliers. Send automated booking notifications, manage availability updates, and handle partner support queries on a dedicated, professional channel.',
            image: 'https://picsum.photos/seed/ota2/500/400',
            reverse: true,
            features: [
                "Automated booking notifications to hotel partners",
                "Streamlined communication for inventory updates",
                "Dedicated support channel for your suppliers",
                "Improve partner relationships and operational efficiency"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your OTA Platform",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Drastically Lower Support Costs",
                    description: "Automate a high percentage of routine customer and partner inquiries, significantly reducing your operational costs."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Satisfaction",
                    description: "Providing instant, 24/7 support on a convenient channel leads to a better experience for your users."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Operational Efficiency",
                    description: "Streamlined partner communication and automated workflows reduce manual work and prevent errors."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Scalability",
                    description: "Handle a growing volume of bookings and inquiries without a linear increase in your support and operations teams."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Cancellation Request',
        'Feedback Form',
        'Support Ticket',
        'Partnership Inquiry'
    ],
    closing: {
        title: "Ready to scale your travel platform with intelligent automation?",
        subtitle: "Discover how WhatsForm can help you manage your high-volume operations more effectively.",
        cta: "Book a Demo"
    }
};

