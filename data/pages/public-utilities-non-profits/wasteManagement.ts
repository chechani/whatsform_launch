import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const wasteManagementData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Waste Management",
        subtitle: `Streamline pickup scheduling, manage service inquiries, and resolve complaints efficiently with automated WhatsApp communication.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Cleaner Operations, Happier Communities",
            subtitle: "For waste management services, clear communication with residents and businesses is key to efficient operations. WhatsForm provides a simple and effective channel to manage your services."
        },
        {
            type: 'contentWithImage',
            subtitle: 'SERVICE SCHEDULING & REMINDERS',
            title: 'Never Miss a Collection Day',
            text: 'Allow residents to check their collection schedule by simply sending their address to a WhatsApp bot. Send automated reminders the day before collection to ensure bins are out on time, improving efficiency for your collection crews.',
            image: 'https://picsum.photos/seed/waste1/500/400',
            features: [
                "On-demand collection schedule lookup",
                "Automated pre-collection day reminders",
                "Broadcasts for changes in schedule (e.g., holidays)",
                "Improved collection efficiency and reliability"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SPECIAL PICKUP & COMPLAINT HANDLING',
            title: 'Manage Requests and Resolve Issues, Faster',
            text: 'Use conversational forms on WhatsApp for residents to request special pickups for bulk waste. A structured form can also be used to report missed collections or other issues, automatically creating a ticket for your operations team to resolve.',
            image: 'https://picsum.photos/seed/waste2/500/400',
            reverse: true,
            features: [
                "Conversational forms for special pickup requests",
                "Structured complaint and issue reporting",
                "Automated ticketing for the operations team",
                "Faster resolution and improved community satisfaction"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Service",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Operational Efficiency",
                    description: "Automated reminders and structured requests lead to more efficient routes and fewer missed pickups."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Resident Satisfaction",
                    description: "A convenient, responsive communication channel improves the experience for the community you serve."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Reduced Support Calls",
                    description: "Self-service options for scheduling and issue reporting deflect a high volume of calls to your office."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Better Data and Reporting",
                    description: "Track common issues and service requests to identify areas for operational improvement."
                }
            ]
        }
    ],
    relevantForms: [
        'Service booking',
        'Complaint',
        'Feedback Form',
        'Pickup Request'
    ],
    closing: {
        title: "Ready to streamline your waste management services?",
        subtitle: "Discover how WhatsForm can improve your communication and operational efficiency.",
        cta: "Book a Demo"
    }
};

