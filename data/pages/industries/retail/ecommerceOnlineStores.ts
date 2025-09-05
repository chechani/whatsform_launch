
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const eCommerceOnlineStoresData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for eCommerce & Online Stores",
        subtitle: "Boost sales with an AI shopping assistant, recover abandoned carts, and provide instant support—all within the conversational flow of WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "The Future of Retail is Conversational",
            subtitle: `Move beyond the static website and engage customers in a dynamic, two-way conversation that guides them from product discovery to purchase and builds long-term loyalty.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'CONVERSATIONAL COMMERCE',
            title: 'Your 24/7 AI-Powered Sales Assistant',
            text: 'Turn product inquiries into sales. Our AI agent can answer product questions, check stock availability in real-time, provide personalized recommendations, and guide customers to the checkout, all within a single WhatsApp conversation.',
            image: 'https://picsum.photos/seed/ecomm1/500/400',
            features: [
                "AI-powered product recommendations",
                "Real-time inventory checks via API",
                "Guided selling and in-chat checkout",
                "Reduced friction and increased conversion rates"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ABANDONED CART RECOVERY',
            title: 'Win Back Lost Sales, Automatically',
            text: 'Don\'t let potential sales slip away. Trigger automated, personalized reminders to customers who abandon their shopping carts. With WhatsApp\'s high open rates, these timely nudges, often paired with a small discount, are incredibly effective at recovering lost revenue.',
            image: 'https://picsum.photos/seed/ecomm2/500/400',
            reverse: true,
            features: [
                "Automated abandoned cart reminders",
                "Significantly higher recovery rates than email",
                "Personalized offers to encourage completion",
                "Turns a lost opportunity into a sale"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Online Store",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Conversion",
                    description: "Personalized, instant assistance and frictionless checkout processes boost conversion rates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Customer LTV",
                    description: "A seamless, supportive post-purchase experience builds trust and encourages repeat business."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Lower Support Costs",
                    description: "AI and automation handle the bulk of routine queries like order tracking, freeing up your human agents."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Recovered Revenue",
                    description: "Effective abandoned cart recovery campaigns directly contribute to your bottom line."
                }
            ]
        }
    ],
    relevantForms: [
        'Place Order',
        'Order Confirmation',
        'Track Order',
        'Bulk Inquiry',
        'Product Review',
        'Return Request'
    ],
    closing: {
        title: "Ready to revolutionize your retail strategy?",
        subtitle: "See how WhatsForm can turn every customer chat into a revenue opportunity.",
        cta: "Book an eCommerce Demo"
    }
};

