
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const autoPartsManufacturingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Auto Parts Manufacturing",
        subtitle: `Streamline distributor inquiries, manage bulk orders, and provide instant product information to your B2B partners on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Driving Efficiency in Your B2B Network",
            subtitle: "For auto parts manufacturers, managing a network of distributors, workshops, and bulk buyers requires fast and accurate communication. WhatsForm helps you automate your key B2B interactions."
        },
        {
            type: 'contentWithImage',
            subtitle: 'DEALER INQUIRIES & ORDERING',
            title: 'Your 24/7 Partner Portal',
            text: 'Use an AI bot on WhatsApp as a first point of contact for your dealers and distributors. The bot can provide real-time stock availability, share product catalogs, and guide partners through a conversational form to place new orders.',
            image: 'https://picsum.photos/seed/parts1/500/400',
            features: [
                "24/7 automated support for your dealer network",
                "On-demand stock and product information",
                "Streamlined, conversational ordering process",
                "Reduce manual order taking and administrative work"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRODUCT SUPPORT & WARRANTY',
            title: 'Provide Instant Technical Information',
            text: 'Enable your partners and their customers to quickly access technical specifications or check warranty status for a specific part by simply sending the part number. This self-service option improves efficiency and satisfaction across your entire supply chain.',
            image: 'https://picsum.photos/seed/parts2/500/400',
            reverse: true,
            features: [
                "Instant access to technical specifications",
                "Automated warranty status checks",
                "Distribute installation guides and manuals",
                "Build a reputation for excellent partner support"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Order Processing",
                    description: "An automated ordering system reduces delays and errors, getting your products to market faster."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Stronger Partner Relationships",
                    description: "Providing your distributors with instant, reliable support tools strengthens their loyalty to your brand."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Sales Team Efficiency",
                    description: "Automate routine inquiries and order taking, allowing your sales team to focus on strategic account growth."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Data Accuracy",
                    description: "Structured forms for orders and inquiries eliminate the risk of manual data entry errors."
                }
            ]
        }
    ],
    relevantForms: [
        'Bulk Order',
        'Product Inquiry',
        'Dealer Distributor',
        'Warranty Registration',
        'Quotation Request'
    ],
    closing: {
        title: "Ready to streamline your auto parts distribution network?",
        subtitle: "Discover how WhatsForm can improve your B2B communication and operational efficiency.",
        cta: "Book a Demo"
    }
};