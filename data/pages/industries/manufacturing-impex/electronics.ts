
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const electronicsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Electronics Manufacturing",
        subtitle: `Streamline product registration, automate warranty claims, and provide instant technical support to enhance the post-purchase experience.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building a Better Customer Experience",
            subtitle: `For electronics brands, the customer journey continues long after the sale. WhatsForm helps you provide seamless post-purchase support that builds loyalty and brand trust.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'WARRANTY REGISTRATION',
            title: 'Effortless Registration, Lasting Connection',
            text: 'Allow customers to register their new product for warranty by simply scanning a QR code on the packaging. A conversational WhatsApp form collects their details and the product serial number, creating a direct communication channel for future updates and support.',
            image: 'https://picsum.photos/seed/elec1/500/400',
            features: [
                "Simple, QR-code initiated warranty registration",
                "Capture valuable first-party customer data",
                "Automate welcome and onboarding messages",
                "Build a direct relationship with your end-users"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'TECHNICAL SUPPORT & TROUBLESHOOTING',
            title: 'Your 24/7 AI-Powered Support Agent',
            text: 'Provide instant technical support for your products. An AI agent can guide users through common troubleshooting steps, provide links to video tutorials, and, if needed, collect all necessary details to create a support ticket for your technical team.',
            image: 'https://picsum.photos/seed/elec2/500/400',
            reverse: true,
            features: [
                "24/7 AI-powered troubleshooting for common issues",
                "Deflects a high volume of routine support queries",
                "Structured ticket creation for complex problems",
                "Improved customer satisfaction and reduced support costs"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Brand",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Customer Loyalty",
                    description: "A seamless, supportive post-purchase experience turns one-time buyers into loyal brand advocates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Support Costs",
                    description: "Automate the handling of common support queries and warranty registrations to increase operational efficiency."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Valuable Product Insights",
                    description: "Direct feedback and common troubleshooting queries provide invaluable data for product improvement."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Registrations",
                    description: "A frictionless process encourages more customers to register their products, growing your database."
                }
            ]
        }
    ],
    relevantForms: [
        'Warranty Registration',
        'Support Ticket',
        'Product Inquiry',
        'Feedback Form',
        'Bulk Order'
    ],
    closing: {
        title: "Ready to enhance your post-purchase customer journey?",
        subtitle: "Discover how WhatsForm can help you provide exceptional support for your electronics products.",
        cta: "Book a Demo"
    }
};