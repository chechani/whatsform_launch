
import { CheckCircleIcon } from '../../../icons';

export const jcafPageData = {
    hero: {
        title: "JCAF: Streamlining Client Compliance with WhatsApp Automation",
        subtitle: "How the forward-thinking CA firm automated document collection and deadline reminders to enhance efficiency and client satisfaction.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Balancing the Books of Communication",
            subtitle: "JCAF, a dynamic accounting firm, faced the universal challenge of managing constant client communication, collecting documents securely, and ensuring timely compliance, all while trying to scale their advisory services."
        },
        {
            type: 'contentWithImage',
            subtitle: 'EFFORTLESS DOCUMENT COLLECTION',
            title: 'From Email Chaos to WhatsApp Clarity',
            text: 'Replacing endless email chains, JCAF now uses WhatsForm to securely request and receive financial documents. Clients can simply snap a photo of a document or upload a PDF directly in WhatsApp, which is then automatically categorized and filed, with a notification sent to the assigned accountant.',
            image: 'https://picsum.photos/seed/jcaf1/500/400',
            features: [
                "Secure, encrypted document submission via chat",
                "Automated reminders for pending documents",
                "Reduced manual effort in sorting and filing",
                "Complete audit trail of all submissions"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROACTIVE COMPLIANCE REMINDERS',
            title: 'Never Miss a Filing Deadline Again',
            text: 'WhatsForm sends automated, personalized reminders to clients for upcoming GST, ITR, and other statutory deadlines. These messages are sent via broadcast and can be segmented based on client type, ensuring relevant and timely communication that clients appreciate.',
            image: 'https://picsum.photos/seed/jcaf2/500/400',
            reverse: true,
            features: [
                "Automated, personalized deadline notifications",
                "Segmented broadcasts for different client groups",
                "Significantly improved on-time filing rates",
                "Reduced time spent on manual follow-ups"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: '24/7 CLIENT SERVICE BOT',
            title: 'Instant Answers, Happier Clients',
            text: 'An AI-powered chatbot handles common client queries 24/7. It can provide updates on filing status, list required documents for a specific service, or answer questions about service fees, all without human intervention. This frees up the JCAF team to focus on high-value advisory work.',
            image: 'https://picsum.photos/seed/jcaf3/500/400',
            features: [
                "Instant responses to frequently asked questions",
                "On-demand filing status checks for clients",
                "Seamless handoff to a human agent for complex queries",
                "Improved client experience and satisfaction"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for JCAF",
            subtitle: "By embracing WhatsApp automation, JCAF transformed its operational efficiency and client relationships.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "95% On-Time Filing",
                    description: "Automated reminders and easy document submission led to a dramatic increase in compliance rates."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Manual Work",
                    description: "Saved hundreds of hours per month on administrative tasks like follow-ups and data entry."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Client Trust",
                    description: "Proactive, secure, and professional communication built stronger, more trusting client relationships."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Scalability",
                    description: "The firm can now handle a larger client base without a proportional increase in administrative staff."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to focus on advisory, not administration?",
        subtitle: "See how WhatsForm can modernize your CA practice and delight your clients.",
        cta: "Book a Personalized Demo"
    }
};
