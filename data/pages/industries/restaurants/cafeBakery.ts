
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const cafeBakeryData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Cafes & Bakeries",
        subtitle: `Manage pre-orders, handle custom cake inquiries, and run engaging loyalty programs to keep your regulars coming back for more.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Brewing a Stronger Customer Connection",
            subtitle: "For cafes and bakeries, building a community of loyal customers is key. WhatsForm helps you engage with your patrons on a personal level, right on their favorite chat app."
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRE-ORDERS & CUSTOM INQUIRIES',
            title: 'Simplify Your Special Orders',
            text: 'Use a conversational WhatsApp form to take pre-orders for your daily specials or to handle inquiries for custom cakes and bulk orders. Collect all the necessary details, from flavor choices to personalized messages, in a structured and efficient way.',
            image: 'https://picsum.photos/seed/cafe1/500/400',
            features: [
                "Conversational forms for pre-orders",
                "Structured inquiries for custom cakes",
                "Reduce phone calls and order-taking errors",
                "Seamlessly manage your production schedule"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'LOYALTY PROGRAMS & PROMOTIONS',
            title: 'Your Digital Stamp Card',
            text: 'Run a simple and effective loyalty program on WhatsApp. Customers can sign up with a QR code in your store, and you can send them exclusive "deal of the day" offers or reward them after a certain number of purchases.',
            image: 'https://picsum.photos/seed/cafe2/500/400',
            reverse: true,
            features: [
                "Frictionless, digital loyalty program",
                "Broadcast daily specials and promotions",
                "Increase customer visit frequency",
                "Build a loyal community around your brand"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Customer Loyalty",
                    description: "Engaging promotions and a personal communication channel turn casual visitors into loyal regulars."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Average Order Value",
                    description: "Promoting pre-orders and custom cakes helps you secure larger, higher-value sales."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Operational Efficiency",
                    description: "Streamline your order-taking process, reduce errors, and better plan your daily production."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Effective Marketing",
                    description: "Reach your customers directly with promotions that have a much higher open rate than email."
                }
            ]
        }
    ],
    relevantForms: [
        'Food Order',
        'Feedback Form',
        'Bulk Order',
        'Loyalty Program Signup'
    ],
    closing: {
        title: "Ready to build a thriving community around your cafe or bakery?",
        subtitle: "Discover how WhatsForm can help you connect with your customers and grow your business.",
        cta: "Book a Demo"
    }
};