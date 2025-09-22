import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const omnichannelData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Omnichannel Retail",
        subtitle: "Unify your online and offline customer experience. Create a seamless journey that connects your website, app, and physical stores through WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "One Customer, One Conversation",
            subtitle: `Your customers don't see channels; they see your brand. WhatsForm helps you deliver a consistent, connected, and personalized experience, whether a customer is browsing online or shopping in your store.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLICK & COLLECT / RESERVE IN-STORE',
            title: 'Connect Your Website to Your Stores',
            text: 'Allow customers browsing your website to reserve an item for pickup at their nearest store via WhatsApp. An automated flow can check store inventory, place the hold, and notify the customer when their order is ready for collection, driving online traffic to your physical locations.',
            image: 'https://picsum.photos/seed/omni1/500/400',
            features: [
                "Seamlessly integrate online and in-store inventory",
                "Drive foot traffic to your physical stores",
                "Provide a convenient and modern shopping option",
                "Automate the entire click-and-collect process"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'UNIFIED CUSTOMER SUPPORT',
            title: 'A Single Point of Contact for All Queries',
            text: 'Whether a customer has a question about an online order or an in-store purchase, they can get help through one WhatsApp number. Our AI agent can access data from both your e-commerce platform and store POS system to provide accurate, contextual support.',
            image: 'https://picsum.photos/seed/omni2/500/400',
            reverse: true,
            features: [
                "Unified support for online and offline purchases",
                "AI agent with access to all order data",
                "Consistent service experience across all channels",
                "Reduced customer confusion and frustration"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Omnichannel Strategy",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Sales",
                    description: "By offering convenient options like 'reserve in-store', you convert more browsers into buyers."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Higher Customer LTV",
                    description: "A seamless, consistent experience across all touchpoints builds strong brand loyalty and increases lifetime value."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Operational Efficiency",
                    description: "Automate cross-channel processes and provide a single view of the customer for your support teams."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Deeper Customer Insights",
                    description: "Understand how your customers interact with your brand across both digital and physical channels."
                }
            ]
        }
    ],
    relevantForms: [
        'Place Order',
        'Stock Availability',
        'Retail Loyalty',
        'Customer Feedback',
        'Return Request'
    ],
    closing: {
        title: "Ready to build a truly unified retail experience?",
        subtitle: "Discover how WhatsForm can be the conversational glue that connects your entire omnichannel strategy.",
        cta: "Book an Omnichannel Demo"
    }
};

