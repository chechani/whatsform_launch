import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const consultingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Consulting Firms",
        subtitle: `Streamline client engagement, automate project updates, and manage expert consultations with a powerful, conversational platform.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Elevate Your Advisory Services",
            subtitle: `For consulting firms, efficient communication and structured data collection are key to delivering value. WhatsForm automates your client-facing workflows, allowing you to focus on strategic insights.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT ONBOARDING & DISCOVERY',
            title: 'A Seamless Start to Every Engagement',
            text: 'Use a conversational WhatsApp form to onboard new clients. Collect project requirements, business challenges, and key stakeholder information in a structured, professional manner. This data can be instantly synced to your project management tools.',
            image: 'https://picsum.photos/seed/consult1/500/400',
            features: [
                "Conversational client discovery forms",
                "Structured collection of project goals",
                "Integration with Asana, Trello, or your PM software",
                "Reduce onboarding time and manual data entry"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROJECT MANAGEMENT & UPDATES',
            title: 'Keep Clients Informed, Effortlessly',
            text: 'Provide clients with on-demand access to project status updates via an AI bot. Schedule automated weekly progress summaries to be sent via broadcast, ensuring your clients are always in the loop and confident in your firm\'s progress.',
            image: 'https://picsum.photos/seed/consult2/500/400',
            reverse: true,
            features: [
                "On-demand project status checks via AI",
                "Scheduled progress report broadcasts",
                "Proactive communication that builds trust",
                "Collect feedback at key project milestones"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Firm",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Client Satisfaction",
                    description: "A modern, responsive, and transparent communication process builds strong, long-term client relationships."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Efficiency",
                    description: "Automate routine data collection and status updates, freeing up your consultants for strategic, billable work."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Project Kick-offs",
                    description: "A streamlined onboarding process allows you to start delivering value to new clients faster."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Scalability",
                    description: "Handle a larger portfolio of clients effectively without a proportional increase in administrative overhead."
                }
            ]
        }
    ],
    relevantForms: [
        'Client Onboarding',
        'Consultation',
        'Project Progress',
        'Feedback Form',
        'Quotation Request Form'
    ],
    closing: {
        title: "Ready to optimize your consulting practice?",
        subtitle: "Discover how WhatsForm can streamline your client communication and project management.",
        cta: "Book a Demo"
    }
};

