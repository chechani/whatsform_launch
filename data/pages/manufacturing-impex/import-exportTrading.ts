

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const importExportTradingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Import/Export Trading",
        subtitle: `Manage freight inquiries, provide real-time shipment tracking, and automate documentation to streamline your international trade operations.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Connecting Global Trade",
            subtitle: `For import/export businesses, timely communication and accurate documentation are the lifeblood of your operations. WhatsForm provides a fast, reliable channel to coordinate with clients and partners across the globe.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'INQUIRY & QUOTATION MANAGEMENT',
            title: 'Respond to Global Inquiries, Instantly',
            text: 'Use an AI-powered bot to handle initial inquiries for freight rates and shipping schedules 24/7. The bot can collect all necessary details—like origin, destination, and cargo type—and provide an instant indicative quote or route the inquiry to the right sales agent.',
            image: 'https://picsum.photos/seed/impex1/500/400',
            features: [
                "24/7 automated inquiry handling",
                "Structured collection of shipment details",
                "Instant rate estimations for standard routes",
                "Faster response times for potential clients"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SHIPMENT TRACKING & DOCUMENTATION',
            title: 'Keep Your Clients in the Loop',
            text: 'Provide your clients with on-demand, real-time tracking for their shipments via WhatsApp. Automate the collection and distribution of essential documents like bills of lading, packing lists, and commercial invoices, reducing email clutter and manual work.',
            image: 'https://picsum.photos/seed/impex2/500/400',
            reverse: true,
            features: [
                "On-demand, real-time shipment tracking",
                "Automated alerts for key shipment milestones",
                "Secure submission and distribution of trade documents",
                "Improved transparency and client trust"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Trading Business",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Deal Closure",
                    description: "Instantaneous responses to inquiries and faster quotation turnaround helps you close deals before competitors."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Client Satisfaction",
                    description: "Proactive updates and on-demand tracking provide a superior, transparent service experience."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Reduced Operational Overhead",
                    description: "Automate routine inquiries and document handling, freeing up your team to manage complex shipments."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Accuracy",
                    description: "Structured forms for data collection reduce the risk of errors in critical shipping documentation."
                }
            ]
        }
    ],
    relevantForms: [
        'Freight Inquiry',
        'Quotation Request',
        'Tracking',
        'POD',
        'Feedback Transport'
    ],
    closing: {
        title: "Ready to accelerate your global trade operations?",
        subtitle: "Discover how WhatsForm can bring new speed and efficiency to your import/export business.",
        cta: "Book a Demo"
    }
};

