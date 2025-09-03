
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const quickServiceRestaurantQSRData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Quick Service Restaurants (QSR)",
        subtitle: `Automate ordering, manage delivery tracking, and run powerful loyalty programs to increase order frequency and customer retention.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Serving Up Speed and Convenience",
            subtitle: "For QSRs, speed and ease of ordering are everything. WhatsForm helps you deliver a frictionless experience on the platform your customers use every day."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CONVERSATIONAL ORDERING',
            title: 'The Fastest Way to Order',
            text: 'Allow customers to place orders for pickup or delivery through a simple, conversational flow on WhatsApp. They can browse the menu, customize their order, and complete payment without ever leaving the chat.',
            image: 'https://picsum.photos/seed/qsr1/500/400',
            features: [
                "Interactive, conversational menu and ordering",
                "Integration with your POS and delivery systems",
                "In-chat payment for a seamless experience",
                "Increase average order value with smart upsells"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'LOYALTY & PROMOTIONS',
            title: 'Keep Your Customers Coming Back',
            text: 'Run targeted promotional campaigns on WhatsApp with coupons and special offers. Use a conversational form to sign customers up for your loyalty program and send them personalized rewards to drive repeat business.',
            image: 'https://picsum.photos/seed/qsr2/500/400',
            reverse: true,
            features: [
                "Broadcast promotional offers and new menu items",
                "Frictionless loyalty program sign-up",
                "Automated, personalized reward notifications",
                "Higher engagement rates than email or SMS"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your QSR",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Order Volume",
                    description: "An easy, fast, and convenient ordering process encourages more customers to order more often."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Customer Retention",
                    description: "Engaging loyalty programs and personalized offers on WhatsApp build a strong, loyal customer base."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Operational Efficiency",
                    description: "Automated ordering reduces pressure on your phone lines and in-store staff during peak hours."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Better Marketing ROI",
                    description: "Leverage the high open and engagement rates of WhatsApp for more effective marketing campaigns."
                }
            ]
        }
    ],
    relevantForms: [
        'Food Order',
        'Feedback Form',
        'Complaint',
        'Meal Subscription'
    ],
    closing: {
        title: "Ready to serve up a better ordering experience?",
        subtitle: "Discover how WhatsForm can help your QSR increase sales and customer loyalty.",
        cta: "Book a Demo"
    }
};