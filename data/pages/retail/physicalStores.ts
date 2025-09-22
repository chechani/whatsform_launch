import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const physicalStoresData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Physical (Brick & Mortar) Stores",
        subtitle: "Bridge the digital and physical worlds. Enhance the in-store experience, capture customer data, and drive repeat visits with WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Turn Foot Traffic into Loyal Customers",
            subtitle: `Engage shoppers in your store with interactive digital experiences that provide value, capture their contact information, and keep them connected to your brand long after they leave.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'IN-STORE VIRTUAL ASSISTANT',
            title: 'Information and Assistance, On-Demand',
            text: 'Place QR codes around your store that launch a WhatsApp assistant. Shoppers can scan to check for other sizes or colors, learn more about a product, or even call for a sales associate—all without having to search for staff.',
            image: 'https://picsum.photos/seed/retail1/500/400',
            features: [
                "QR-code activated in-store assistant",
                "Instant product information and stock checks",
                "Reduce pressure on in-store staff",
                "Enhance the modern shopping experience"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'DATA CAPTURE & LOYALTY PROGRAMS',
            title: 'Build Your Digital Community',
            text: 'Use WhatsApp to sign customers up for your loyalty program at the point of sale. A simple scan of a QR code can launch a quick registration form, capturing their verified number and opting them in for future promotions and updates.',
            image: 'https://picsum.photos/seed/retail2/500/400',
            reverse: true,
            features: [
                "Frictionless loyalty program sign-up",
                "Capture valuable first-party customer data",
                "Build a list for targeted marketing campaigns",
                "Drive repeat business with exclusive offers"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Store",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced In-Store Experience",
                    description: "Provide a modern, tech-savvy shopping experience that impresses customers and provides instant help."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Customer Data",
                    description: "Turn anonymous shoppers into known contacts, building a valuable database for future marketing."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Drive Repeat Visits",
                    description: "Engage customers after they leave with targeted promotions and updates that bring them back to your store."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Staff Efficiency",
                    description: "The virtual assistant handles common queries, allowing your sales staff to focus on high-value interactions."
                }
            ]
        }
    ],
    relevantForms: [
        'Retail Loyalty',
        'Customer Feedback',
        'Stock Availability',
        'Product Inquiry'
    ],
    closing: {
        title: "Ready to digitize your in-store experience?",
        subtitle: "Discover how WhatsForm can help you connect with your customers in a whole new way.",
        cta: "Book a Retail Demo"
    }
};

