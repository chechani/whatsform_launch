
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const itServicesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for IT Services & MSPs",
        subtitle: `Automate support ticket creation, manage client communication, and provide instant updates with a platform built for technical support.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Deliver Smarter, Faster IT Support",
            subtitle: `For IT service providers and Managed Service Providers (MSPs), responsiveness and clear communication are critical. WhatsForm helps you streamline your support workflows and improve client satisfaction.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'AUTOMATED SUPPORT TICKET CREATION',
            title: 'From User Request to Actionable Ticket, Instantly',
            text: 'Allow your clients to report IT issues directly on WhatsApp. A conversational form can gather all necessary details—like the user affected, the device type, and a description of the problem—and automatically create a ticket in your helpdesk system (e.g., Zendesk, Jira).',
            image: 'https://picsum.photos/seed/itserv1/500/400',
            features: [
                "Conversational issue reporting forms",
                "Automated ticket creation in your helpdesk",
                "Provide users with an instant ticket number",
                "Reduce email clutter and unstructured requests"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROACTIVE STATUS UPDATES',
            title: 'Keep Clients Informed, Reduce Follow-Up Calls',
            text: 'Integrate with your ticketing system to provide automated status updates on WhatsApp. When a ticket is updated or resolved, the client can receive an instant notification, improving transparency and reducing the number of "What\'s the status?" calls.',
            image: 'https://picsum.photos/seed/itserv2/500/400',
            reverse: true,
            features: [
                "Automated ticket status notifications",
                "Proactive communication that builds client trust",
                "Allow clients to check ticket status on-demand",
                "Close the feedback loop with post-resolution surveys"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your IT Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Response Times",
                    description: "Structured ticket creation and automated updates lead to faster first response and resolution times."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Client Satisfaction",
                    description: "A convenient, transparent, and responsive support process improves client satisfaction and retention."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Technician Productivity",
                    description: "Technicians receive well-defined tickets, reducing time spent on clarification and manual data entry."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Better SLA Adherence",
                    description: "A more efficient workflow helps you meet and exceed your Service Level Agreement (SLA) commitments."
                }
            ]
        }
    ],
    relevantForms: [
        'Support Ticket',
        'Client Onboarding',
        'Pricing Quotation',
        'Feedback Form',
        'Service booking'
    ],
    closing: {
        title: "Ready to upgrade your IT support experience?",
        subtitle: "Discover how WhatsForm can help you deliver faster, smarter, and more efficient service to your clients.",
        cta: "Book a Demo"
    }
};

