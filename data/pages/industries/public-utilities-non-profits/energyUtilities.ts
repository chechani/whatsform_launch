
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const energyUtilitiesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Energy & Utilities",
        subtitle: `Automate bill inquiries, manage service requests, and send proactive outage notifications to improve customer communication and operational efficiency.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Powering a Better Customer Experience",
            subtitle: "For utility providers, providing reliable service and clear communication is essential. WhatsForm helps you manage customer interactions at scale, reducing support costs and improving satisfaction."
        },
        {
            type: 'contentWithImage',
            subtitle: 'BILLING & PAYMENTS',
            title: 'Simplify Billing and Encourage On-Time Payments',
            text: 'Send monthly bills and payment reminders directly to customers\' WhatsApp. Include a direct payment link to make it easy for them to pay on time. An AI bot can also handle common billing inquiries, like checking the current outstanding amount.',
            image: 'https://picsum.photos/seed/util1/500/400',
            features: [
                "Automated bill delivery and payment reminders",
                "Integration with payment gateways",
                "AI-powered answers to billing questions",
                "Reduced instances of late payments"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'OUTAGE NOTIFICATIONS & SERVICE REQUESTS',
            title: 'Proactive Communication During Disruptions',
            text: 'When a service outage occurs, proactively notify affected customers on WhatsApp with estimated restoration times. Allow customers to report new issues or request services like new connections through simple conversational forms.',
            image: 'https://picsum.photos/seed/util2/500/400',
            reverse: true,
            features: [
                "Proactive, geo-targeted outage notifications",
                "Conversational forms for reporting issues",
                "Automated service request ticketing",
                "Improved customer trust and satisfaction"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Utility",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Call Center Volume",
                    description: "Automating billing inquiries and outage notifications significantly deflects calls from your support center."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Customer Satisfaction",
                    description: "Proactive, convenient communication on a preferred channel improves the overall customer experience."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Issue Resolution",
                    description: "Structured forms for service requests ensure your technical teams get the right information to act quickly."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased On-Time Payments",
                    description: "Direct reminders and easy payment links help to improve your revenue collection cycle."
                }
            ]
        }
    ],
    relevantForms: [
        'Service booking',
        'Complaint',
        'Feedback Form',
        'Quotation Request Form'
    ],
    closing: {
        title: "Ready to power up your customer communication?",
        subtitle: "Discover how WhatsForm can streamline your operations and improve customer satisfaction.",
        cta: "Book a Demo"
    }
};

