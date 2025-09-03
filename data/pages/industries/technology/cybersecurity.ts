
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const cybersecurityData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Cybersecurity",
        subtitle: `Manage lead generation for security services, provide a secure channel for incident reporting, and communicate critical threat intelligence to your clients.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Secure, Compliant, and Responsive Communication",
            subtitle: "In the world of cybersecurity, trust, speed, and confidentiality are paramount. WhatsForm provides a secure and efficient platform to manage your client and prospect communications."
        },
        {
            type: 'contentWithImage',
            subtitle: 'SECURE INCIDENT REPORTING',
            title: 'A Confidential Channel for Critical Moments',
            text: 'Provide your clients with a secure, end-to-end encrypted channel on WhatsApp to report potential security incidents. A guided conversational form can collect all necessary initial details, automatically creating a high-priority ticket for your SOC team.',
            image: 'https://picsum.photos/seed/cyber1/500/400',
            features: [
                "Secure, end-to-end encrypted communication",
                "Structured incident reporting forms",
                "Automated high-priority ticket creation",
                "Maintain a clear audit trail of all reports"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'THREAT INTELLIGENCE & ADVISORIES',
            title: 'Keep Your Clients Protected and Informed',
            text: 'Use segmented WhatsApp broadcasts to send out urgent security advisories and threat intelligence updates to your clients. This proactive communication helps them stay ahead of threats and demonstrates your value as a security partner.',
            image: 'https://picsum.photos/seed/cyber2/500/400',
            reverse: true,
            features: [
                "Send urgent security alerts via broadcast",
                "Segment clients by service or industry",
                "Position your firm as a proactive security leader",
                "Strengthen client relationships through value-added info"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Security Firm",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Incident Response",
                    description: "A streamlined reporting process ensures your team gets the information they need to act on threats faster."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Client Trust",
                    description: "Providing a secure, responsive communication channel and proactive intelligence builds deep client trust."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Operational Efficiency",
                    description: "Automate lead qualification and initial incident reporting to free up your security analysts for critical tasks."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Stronger Market Position",
                    description: "Differentiate your firm with a modern, tech-forward approach to client communication and service delivery."
                }
            ]
        }
    ],
    relevantForms: [
        'Support Ticket',
        'Compliance Audit',
        'Consultation',
        'Client Onboarding',
        'Quotation Request'
    ],
    closing: {
        title: "Ready to enhance your cybersecurity service delivery?",
        subtitle: "Discover how WhatsForm can provide the secure and efficient communication your clients demand.",
        cta: "Book a Confidential Demo"
    }
};