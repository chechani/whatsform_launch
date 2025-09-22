import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const legalServicesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Legal Services",
        subtitle: `Automate client intake, streamline consultation booking, and manage case updates on a secure and confidential platform.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Modernizing the Legal Practice",
            subtitle: `For law firms and legal professionals, efficiency, accuracy, and confidentiality are non-negotiable. WhatsForm provides the tools to manage client communication and administrative tasks securely.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT INTAKE & CASE ASSESSMENT',
            title: 'A Structured and Confidential First Step',
            text: 'Use a secure, conversational WhatsApp form for new client intake. Guide potential clients through a series of questions to understand their case, collect initial details, and securely upload relevant documents, all before the first consultation.',
            image: 'https://picsum.photos/seed/legal1/500/400',
            features: [
                "Secure, encrypted client intake forms",
                "Guided collection of case details",
                "Confidential document submission",
                "Automated initial case assessment"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'APPOINTMENT SCHEDULING & REMINDERS',
            title: 'Effortless Consultation Booking',
            text: 'Allow clients to book legal consultations directly on WhatsApp. An AI bot can check your calendar availability, schedule the appointment, and send automated reminders to reduce no-shows and ensure timely preparation.',
            image: 'https://picsum.photos/seed/legal2/500/400',
            reverse: true,
            features: [
                "24/7 automated appointment booking",
                "Integration with your firm's calendar",
                "Automated reminders for clients and lawyers",
                "Streamlined scheduling for depositions and meetings"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Firm",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Efficiency",
                    description: "Automate client intake and scheduling, freeing up your paralegals and administrative staff for higher-value work."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Client Experience",
                    description: "Provide a modern, convenient, and confidential communication channel that today's clients expect."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Accuracy",
                    description: "Structured conversational forms reduce the risk of errors and ensure you collect all necessary information upfront."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Strengthened Compliance",
                    description: "Maintain a complete, auditable record of all client communications to support your compliance efforts."
                }
            ]
        }
    ],
    relevantForms: [
        'Case Intake',
        'Consultation',
        'Updating FIR',
        'Agreement Request',
        'Notary Service'
    ],
    closing: {
        title: "Ready to bring new efficiency to your legal practice?",
        subtitle: "Discover how WhatsForm can help you manage your firm more effectively.",
        cta: "Book a Confidential Demo"
    }
};

