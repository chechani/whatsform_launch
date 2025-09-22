import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const propertyManagementData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Property Management",
        subtitle: `Automate maintenance requests, send rent reminders, and manage tenant communication efficiently on a single, convenient platform.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Streamlining Landlord and Tenant Communication",
            subtitle: "For property management firms, handling a large portfolio of properties and tenants requires organized and efficient communication. WhatsForm automates your key workflows on WhatsApp."
        },
        {
            type: 'contentWithImage',
            subtitle: 'MAINTENANCE REQUESTS',
            title: 'From Leaky Faucet to Fixed, Faster',
            text: 'Allow tenants to report maintenance issues via a simple conversational form on WhatsApp. They can describe the problem, specify the urgency, and even upload photos, automatically creating a trackable work order for your team.',
            image: 'https://picsum.photos/seed/propmgmt1/500/400',
            features: [
                "Structured maintenance request forms",
                "Allow tenants to upload photos of the issue",
                "Automated work order creation and assignment",
                "Keep tenants updated on the repair status"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'RENT COLLECTION & COMMUNICATION',
            title: 'Simplify Payments and Announcements',
            text: 'Send automated rent reminders to tenants before the due date, complete with a payment link. Use broadcasts to send important building announcements or notices to all tenants instantly.',
            image: 'https://picsum.photos/seed/propmgmt2/500/400',
            reverse: true,
            features: [
                "Automated rent payment reminders",
                "Integration with payment gateways",
                "Broadcast building-wide announcements",
                "Improve on-time rent collection rates"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Firm",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Tenant Satisfaction",
                    description: "A fast, convenient, and responsive process for requests and communication keeps tenants happy."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Operational Efficiency",
                    description: "Automate routine tasks like reminders and request logging, freeing up your property managers."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Maintenance Turnaround",
                    description: "A structured reporting process ensures your maintenance team has the info they need to act quickly."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Better Documentation",
                    description: "Maintain a clear, time-stamped record of all tenant communications and maintenance requests."
                }
            ]
        }
    ],
    relevantForms: [
        'Maintenance Request',
        'Lease Agreement',
        'Property Inquiry',
        'Feedback Form',
        'Complaint'
    ],
    closing: {
        title: "Ready to manage your properties more efficiently?",
        subtitle: "Discover how WhatsForm can streamline your tenant communication and property management workflows.",
        cta: "Book a Demo"
    }
};

