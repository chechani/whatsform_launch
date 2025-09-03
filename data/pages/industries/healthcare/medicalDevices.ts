
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const medicalDevicesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Medical Devices",
        subtitle: "Provide on-demand product support, automate sales inquiries, and manage device registrations with secure, conversational workflows.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Connecting with Patients and Providers",
            subtitle: `For medical device companies, providing clear instructions and reliable support is critical for patient safety and satisfaction. WhatsApp offers a direct and accessible channel for engagement.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRODUCT ONBOARDING & SUPPORT',
            title: 'Your 24/7 Virtual Product Specialist',
            text: 'Guide patients and healthcare providers through device setup and usage with interactive tutorials on WhatsApp. An AI agent can answer frequently asked questions, provide troubleshooting steps, and escalate complex issues to a technical support team.',
            image: 'https://picsum.photos/seed/meddevice1/500/400',
            features: [
                "Interactive setup guides and video tutorials",
                "AI-powered troubleshooting for common issues",
                "Seamless handoff to human support with full context",
                "Improved user compliance and satisfaction"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'WARRANTY & DEVICE REGISTRATION',
            title: 'Effortless Registration, Proactive Engagement',
            text: 'Allow users to register their new device and activate its warranty simply by scanning a QR code and completing a short conversational form on WhatsApp. This captures valuable customer data and opens a channel for proactive communication about maintenance and updates.',
            image: 'https://picsum.photos/seed/meddevice2/500/400',
            reverse: true,
            features: [
                "Simple, QR-code initiated warranty registration",
                "Automated maintenance and service reminders",
                "Collection of valuable user feedback",
                "Build a direct relationship with your end-users"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Patient Safety",
                    description: "Clear, on-demand instructions and support improve correct device usage and patient compliance."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Support Costs",
                    description: "AI agents deflect a significant volume of routine support queries, freeing up your specialized technical staff."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Customer Loyalty",
                    description: "A responsive and supportive post-sale experience builds strong brand trust and loyalty."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Valuable Market Insights",
                    description: "Direct user feedback provides invaluable data for future product development and improvements."
                }
            ]
        }
    ],
    relevantForms: [
        'Medical Equipment',
        'Warranty Registration',
        'Inquiry',
        'Feedback & service request',
        'Bulk Order'
    ],
    closing: {
        title: "Ready to enhance your product support and customer engagement?",
        subtitle: "Discover how WhatsForm can create a direct and valuable connection with your users.",
        cta: "Book a Demo"
    }
};