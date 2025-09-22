import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const hardwareManufacturingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Hardware Manufacturing",
        subtitle: `Streamline product registration, automate warranty support, and manage dealer inquiries to build a loyal customer and partner ecosystem.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Enhance Your Post-Purchase Experience",
            subtitle: "For hardware manufacturers, the customer lifecycle extends far beyond the point of sale. WhatsForm helps you provide exceptional post-purchase support and manage your channel partners effectively."
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRODUCT & WARRANTY REGISTRATION',
            title: 'A Direct Line to Your End Customer',
            text: 'Enable customers to register their products for warranty by simply scanning a QR code on the device or packaging. This frictionless process increases registration rates and provides you with valuable first-party data on your end-users.',
            image: 'https://picsum.photos/seed/hw1/500/400',
            features: [
                "QR-code initiated warranty registration",
                "Capture valuable end-user data",
                "Automate maintenance and service reminders",
                "Build a direct communication channel with customers"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'DEALER & DISTRIBUTOR MANAGEMENT',
            title: 'Empower Your Channel Partners',
            text: 'Use a dedicated WhatsApp number to support your network of dealers and distributors. An AI bot can provide them with real-time stock information, technical specifications, and marketing materials, helping them sell your products more effectively.',
            image: 'https://picsum.photos/seed/hw2/500/400',
            reverse: true,
            features: [
                "24/7 support portal for your dealer network",
                "On-demand access to product info and stock levels",
                "Streamlined ordering and inquiry process",
                "Broadcast new product and training announcements"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Customer Loyalty",
                    description: "A seamless support and warranty experience builds strong brand trust and encourages repeat purchases."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Stronger Partner Relationships",
                    description: "Providing your dealers with powerful, instant support tools helps them succeed and strengthens your partnership."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Reduced Support Costs",
                    description: "Automate common customer and dealer inquiries to improve the efficiency of your support teams."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Valuable Market Insights",
                    description: "Direct data from end-users and channel partners provides crucial insights for product and market strategy."
                }
            ]
        }
    ],
    relevantForms: [
        'Warranty Registration',
        'Support Ticket',
        'Dealer Distributor',
        'Product Inquiry',
        'Bulk Order'
    ],
    closing: {
        title: "Ready to build a more connected hardware ecosystem?",
        subtitle: "Discover how WhatsForm can enhance your customer support and channel partner management.",
        cta: "Book a Demo"
    }
};

