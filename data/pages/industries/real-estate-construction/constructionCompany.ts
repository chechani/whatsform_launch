
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const constructionCompanyData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Construction Companies",
        subtitle: `Manage project inquiries, coordinate with subcontractors, and provide transparent progress updates to clients on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building Stronger Foundations with Better Communication",
            subtitle: "For construction companies, managing complex projects with multiple stakeholders requires clear, timely, and documented communication. WhatsForm streamlines your project workflows."
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROJECT INQUIRY & QUOTATION',
            title: 'From Blueprint to Bid, Seamlessly',
            text: 'Use a conversational WhatsApp form to handle new project inquiries. Collect project specifications, blueprints, and timelines in a structured format, allowing you to generate accurate quotations faster.',
            image: 'https://picsum.photos/seed/construct1/500/400',
            features: [
                "Structured collection of project requirements",
                "Secure submission of plans and documents",
                "Automated qualification of new project leads",
                "Faster and more accurate quotation generation"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT & SUBCONTRACTOR COORDINATION',
            title: 'A Central Hub for Project Communication',
            text: 'Keep all stakeholders in the loop. Send automated progress updates with photos to clients. Coordinate with subcontractors and suppliers via dedicated WhatsApp groups or broadcasts, ensuring everyone is aligned.',
            image: 'https://picsum.photos/seed/construct2/500/400',
            reverse: true,
            features: [
                "Automated project milestone updates for clients",
                "Efficient coordination with subcontractors",
                "Broadcasts for site-wide announcements",
                "Maintain a clear record of all project communications"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Projects",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Client Trust",
                    description: "Transparent, proactive communication builds strong client relationships and confidence in your work."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Project Efficiency",
                    description: "Streamlined communication reduces delays and misunderstandings, keeping your projects on track."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Better Stakeholder Alignment",
                    description: "Ensure clients, subcontractors, and your internal team are all working with the same information."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Administrative Workload",
                    description: "Automate routine updates and data collection, freeing up your project managers for critical tasks."
                }
            ]
        }
    ],
    relevantForms: [
        'Quotation Form',
        'Visit Request',
        'Vendor/Supplier Reg',
        'Project Progress',
        'Complaint'
    ],
    closing: {
        title: "Ready to build a more efficient construction business?",
        subtitle: "Discover how WhatsForm can streamline your project communication from start to finish.",
        cta: "Book a Demo"
    }
};

