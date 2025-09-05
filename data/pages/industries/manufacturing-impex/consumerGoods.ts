
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const consumerGoodsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Consumer Goods (FMCG/CPG)",
        subtitle: `Automate distributor onboarding, manage bulk orders, and enhance retail partner communication to get your products on shelves faster.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Accelerate Your Route to Market",
            subtitle: `For FMCG and CPG brands, an efficient and responsive distribution network is the key to success. WhatsForm helps you manage your relationship with distributors and retailers at scale.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'DISTRIBUTOR & RETAILER ONBOARDING',
            title: 'Expand Your Network, Effortlessly',
            text: 'Use a conversational WhatsApp form to onboard new distributors, stockists, and retail partners. Collect business details, trade licenses, and other necessary documents securely and efficiently, speeding up your network expansion.',
            image: 'https://picsum.photos/seed/cpg1/500/400',
            features: [
                "Streamlined onboarding for new channel partners",
                "Secure collection of business documents",
                "Automated verification and approval workflows",
                "Faster expansion into new territories"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ORDER MANAGEMENT & COMMUNICATION',
            title: 'Simplify the Ordering Process',
            text: 'Allow your retail partners to place new orders or check stock availability via a simple WhatsApp interface. Broadcast information about new product launches, promotions, and marketing materials to your entire network instantly.',
            image: 'https://picsum.photos/seed/cpg2/500/400',
            reverse: true,
            features: [
                "24/7 automated ordering system for partners",
                "Instant stock availability checks",
                "Broadcast new product and promotion announcements",
                "Improve communication and reduce manual order taking"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Brand",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Network Growth",
                    description: "A simple, digital onboarding process helps you expand your distribution network more quickly."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Sales Velocity",
                    description: "An easy and instant ordering process encourages more frequent and larger orders from your partners."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Partner Engagement",
                    description: "Regular, proactive communication about new products and promotions keeps your brand top-of-mind."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Operational Costs",
                    description: "Automate manual tasks like order taking and onboarding, freeing up your sales team to focus on strategy."
                }
            ]
        }
    ],
    relevantForms: [
        'Dealer Distributor',
        'Bulk Order',
        'Order Inquiry',
        'Product Inquiry',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to optimize your distribution channel?",
        subtitle: "Discover how WhatsForm can enhance your relationship with your retail and distribution partners.",
        cta: "Book a Demo"
    }
};

