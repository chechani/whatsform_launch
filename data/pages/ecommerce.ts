import { CheckCircleIcon } from '../../icons';

export const ecommercePageData = {
    hero: {
        title: "Conversational Commerce for Retail & E-commerce",
        subtitle: "Engage customers with a personal shopping assistant on WhatsApp, driving sales from first query to final checkout and beyond.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Your 24/7 Personal Shopping Assistant",
            subtitle: "Transform the shopping experience with intelligent WhatsApp interactions that guide, support, and convert customers at every step of their journey."
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRODUCT INQUIRY & GUIDED SELLING',
            title: 'From Casual Question to Confident Purchase',
            text: "An AI agent acts as a sales clerk, answering product questions, checking stock availability in real-time, and comparing items. It guides customers conversationally towards a purchase, helping them find exactly what they need, anytime.",
            image: 'https://picsum.photos/seed/ecomm1/500/400',
            features: [
                "Real-time inventory checks via SmartyAutomate",
                "AI-powered product recommendations",
                "Seamless transition from inquiry to order",
                "Answers complex queries from a product knowledge base"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ORDER TRACKING & POST-PURCHASE SUPPORT',
            title: 'Build Trust with Proactive, Instant Support',
            text: 'Keep customers informed with real-time order tracking directly in WhatsApp. When issues arise, like a damaged item, the AI can immediately initiate a return or replacement, collecting photos and details in one simple flow, turning a negative experience into a positive one.',
            image: 'https://picsum.photos/seed/ecomm2/500/400',
            reverse: true,
            features: [
                "On-demand order status updates",
                "Automated return and replacement flows",
                "Reduced load on human support agents",
                "Higher customer trust and satisfaction"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'IN-STORE EXPERIENCE EXTENSION',
            title: 'Bridge the Gap Between Offline and Online',
            text: 'Enhance your physical stores with QR codes that launch a WhatsApp assistant. Shoppers can check for other sizes or colors, or even order an out-of-stock item for home delivery without waiting for a salesperson, capturing valuable customer data in the process.',
            image: 'https://picsum.photos/seed/ecomm3/500/400',
            features: [
                "In-store virtual assistant via QR codes",
                "Check stock or order items for home delivery",
                "Capture customer contacts for re-engagement",
                "Merge digital convenience with physical retail"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROMOTIONS & RE-ENGAGEMENT',
            title: 'Interactive Campaigns that Convert',
            text: "Leverage WhatsApp's ~98% open rates with segmented, interactive broadcasts. Instead of a static message, engage users with choices that lead to product carousels and in-chat orders. Nurture leads with automated drip campaigns that turn abandoned carts into sales.",
            image: 'https://picsum.photos/seed/ecomm4/500/400',
            reverse: true,
            features: [
                "Segmented broadcasts for targeted marketing",
                "Interactive, two-way promotional campaigns",
                "Automated abandoned cart recovery flows",
                "Significantly higher engagement than email"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Retail Business",
            subtitle: "Adopting conversational commerce on WhatsApp delivers a powerful return on investment.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Conversion",
                    description: "Personalized, instant assistance boosts conversion rates and average basket sizes."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Engagement",
                    description: "Promotional campaigns see dramatically higher open and interaction rates compared to traditional channels."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Loyalty",
                    description: "A frictionless, supportive post-purchase experience builds trust and encourages repeat business."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Lower Support Costs",
                    description: "AI and automation handle the bulk of routine queries, freeing up your human agents for high-value tasks."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to revolutionize your retail strategy?",
        subtitle: "See how WhatsForm can turn every customer chat into a revenue opportunity.",
        cta: "Book a Demo"
    }
};