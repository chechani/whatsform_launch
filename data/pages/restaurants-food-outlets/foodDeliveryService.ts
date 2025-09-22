import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const foodDeliveryServiceData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Food Delivery Services",
        subtitle: `Automate order support, streamline restaurant partner onboarding, and manage rider communications to optimize your entire delivery ecosystem.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Delivering a Smarter Experience",
            subtitle: "For food delivery platforms, managing the three-sided marketplace of customers, restaurants, and riders requires fast, reliable, and scalable communication. WhatsForm provides the automation to make it happen."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CUSTOMER ORDER SUPPORT',
            title: 'Your 24/7 AI-Powered Support Agent',
            text: 'Handle common customer queries automatically on WhatsApp. An AI bot can provide real-time order status updates, assist with cancellations or modifications, and answer frequently asked questions, reducing the load on your human support team.',
            image: 'https://picsum.photos/seed/delivery1/500/400',
            features: [
                "24/7 automated order status and support",
                "Conversational flows for order issues",
                "Reduced customer support costs",
                "Faster resolution and improved customer satisfaction"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'RESTAURANT PARTNER MANAGEMENT',
            title: 'A Seamless Channel for Your Partners',
            text: 'Streamline your communication with restaurant partners. Use conversational forms for new partner onboarding, and use an AI bot to handle common queries about payments, menu updates, and operational issues.',
            image: 'https://picsum.photos/seed/delivery2/500/400',
            reverse: true,
            features: [
                "Automated onboarding for new restaurant partners",
                "24/7 support for partner inquiries",
                "Broadcast important updates and announcements",
                "Improve partner relationships and efficiency"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Platform",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Operational Efficiency",
                    description: "Automating support for all three sides of your marketplace significantly reduces manual work and costs."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Customer Retention",
                    description: "A fast, reliable, and convenient support experience keeps your customers loyal to your platform."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Partner Onboarding",
                    description: "A streamlined, digital onboarding process helps you grow your restaurant network more quickly."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Scalability",
                    description: "Handle a growing volume of orders and partners without a linear increase in your support and operations teams."
                }
            ]
        }
    ],
    relevantForms: [
        'Food Order',
        'Complaint',
        'Feedback Form',
        'Partner Registration',
        'Support Ticket'
    ],
    closing: {
        title: "Ready to optimize your food delivery operations?",
        subtitle: "Discover how WhatsForm can help you manage your entire ecosystem more effectively.",
        cta: "Book a Demo"
    }
};

