
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const heavyManufacturingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Heavy Manufacturing",
        subtitle: `Streamline B2B inquiries, automate order processing, and enhance supply chain communication with robust WhatsApp workflows.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building Efficiency in Industrial Communication",
            subtitle: `For heavy manufacturing, managing complex B2B sales cycles and coordinating with a vast network of suppliers and distributors is critical. WhatsForm brings speed and structure to your operations.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'B2B LEAD QUALIFICATION',
            title: 'From Inquiry to Qualified Lead, Instantly',
            text: 'Use a conversational AI bot to handle initial inquiries from potential industrial buyers. The bot can gather detailed technical specifications, project scale, and delivery requirements, turning a simple query into a rich, qualified lead for your sales engineers.',
            image: 'https://picsum.photos/seed/hmfg1/500/400',
            features: [
                "24/7 automated lead qualification",
                "Structured collection of technical requirements",
                "Instantly share product catalogs and spec sheets",
                "Seamlessly sync leads to your industrial CRM/ERP"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SUPPLIER & VENDOR MANAGEMENT',
            title: 'A More Connected Supply Chain',
            text: 'Streamline communication with your suppliers. Use WhatsApp forms to receive quotations, confirm purchase orders, and get status updates on raw material delivery, creating a more responsive and transparent supply chain.',
            image: 'https://picsum.photos/seed/hmfg2/500/400',
            reverse: true,
            features: [
                "Automated RFQ and purchase order workflows",
                "Real-time delivery status updates from suppliers",
                "Secure portal for document and invoice exchange",
                "Reduce delays and improve procurement efficiency"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Operations",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Sales Cycles",
                    description: "Automated lead qualification and faster quoting accelerates the entire B2B sales process."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Supply Chain Visibility",
                    description: "Real-time communication with suppliers reduces uncertainty and helps prevent production delays."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Sales Team Productivity",
                    description: "Sales engineers can focus on closing complex deals instead of handling routine initial inquiries."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Partner Relationships",
                    description: "A modern, efficient communication system strengthens relationships with both distributors and suppliers."
                }
            ]
        }
    ],
    relevantForms: [
        'Quotation Form',
        'Vendor/Supplier Reg',
        'Bulk Order',
        'Product Inquiry',
        'Freight Inquiry'
    ],
    closing: {
        title: "Ready to build a more efficient industrial workflow?",
        subtitle: "Discover how WhatsForm can streamline your sales, procurement, and supply chain communication.",
        cta: "Book a Demo"
    }
};

