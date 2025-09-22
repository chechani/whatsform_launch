

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const pharmaceuticalsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Pharmaceuticals",
        subtitle: "Streamline communication with healthcare professionals, manage sample requests, and automate product inquiries in a compliant and efficient manner.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Connecting with Healthcare Professionals (HCPs)",
            subtitle: `In a highly regulated industry, providing timely and accurate information to doctors and distributors is crucial. WhatsApp offers a direct, preferred channel for professional communication.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRODUCT INQUIRIES & INFORMATION',
            title: 'On-Demand Information for HCPs',
            text: 'Enable doctors to get instant information about your products via an AI-powered WhatsApp agent. The bot can provide dosing information, share clinical data sheets, and answer common questions, ensuring HCPs have the data they need at their fingertips.',
            image: 'https://picsum.photos/seed/pharma1/500/400',
            features: [
                "24/7 AI agent for product information",
                "Secure delivery of clinical data and brochures",
                "Compliant, pre-approved messaging",
                "Full audit trail of all interactions"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SAMPLE REQUESTS & DISTRIBUTOR ONBOARDING',
            title: 'Streamline Your Sales & Distribution Network',
            text: 'Automate the process for medical representatives to request samples or for new distributors to apply for partnership. Conversational forms collect all necessary information, which can be routed to the appropriate department for approval and fulfillment.',
            image: 'https://picsum.photos/seed/pharma2/500/400',
            reverse: true,
            features: [
                "Automated sample request forms for Med Reps",
                "Streamlined distributor and stockist registration",
                "Real-time integration with your SCM system",
                "Reduced administrative overhead for sales teams"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Pharma Business",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved HCP Engagement",
                    description: "Provide a convenient and instant channel for doctors to get the information they need, building stronger relationships."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Sales Force Efficiency",
                    description: "Automate routine tasks like sample requests, allowing your medical reps to focus on high-value interactions."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Compliance",
                    description: "Use pre-approved templates and maintain a complete log of all communications to ensure regulatory compliance."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Distribution Onboarding",
                    description: "Accelerate the process of adding new stockists and distributors to your network."
                }
            ]
        }
    ],
    relevantForms: [
        'Inquiry',
        'Bulk Order',
        'Medicine Availability',
        'Distributor Registration',
        'Sample Request',
        'Quotation Request',
        'Pharma Franchise'
    ],
    closing: {
        title: "Ready to modernize your communication with healthcare professionals?",
        subtitle: "Discover how WhatsForm can help you engage HCPs effectively while maintaining compliance.",
        cta: "Book a Demo"
    }
};

