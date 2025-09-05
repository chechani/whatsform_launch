
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const insuranceData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Insurance",
        subtitle: "Streamline claims processing, automate policy inquiries, and simplify renewals with secure, conversational workflows on WhatsApp.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Making Insurance Simple and Accessible",
            subtitle: `In an industry built on trust and timely support, WhatsApp provides a direct and convenient channel to serve your policyholders better and faster.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLAIMS PROCESSING',
            title: 'Fast, Empathetic Support When It Matters Most',
            text: 'Expedite claims by allowing customers to file their First Notice of Loss (FNOL) via WhatsApp. An AI agent can collect incident details, request photos of damage, and provide a claim ID instantly, reducing anxiety and streamlining the process.',
            image: 'https://picsum.photos/seed/ins1/500/400',
            features: [
                "Guided, conversational claims filing process",
                "In-chat collection of photos and documents",
                "Instant acknowledgement with a claim reference ID",
                "Faster and more efficient claims processing"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'POLICY MANAGEMENT & RENEWALS',
            title: 'Empower Policyholders with Self-Service',
            text: 'Allow customers to manage their policies on WhatsApp. They can download policy documents, check coverage details, or update their contact information. Send automated reminders before a policy is due for renewal, complete with a payment link, to improve retention rates.',
            image: 'https://picsum.photos/seed/ins2/500/400',
            reverse: true,
            features: [
                "24/7 self-service for policy information",
                "Automated premium payment and renewal reminders",
                "Increased policyholder retention",
                "Reduced administrative workload"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Insurance Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Faster Claims Processing",
                    description: "A streamlined FNOL process accelerates the entire claims lifecycle, improving customer satisfaction."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Retention",
                    description: "Proactive renewal reminders and easy payment options significantly increase policyholder retention."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Lower Operational Costs",
                    description: "Automate routine inquiries and processes to reduce the burden on your call centers and administrative staff."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Customer Trust",
                    description: "Provide a modern, responsive, and transparent service that builds long-term trust with your policyholders."
                }
            ]
        }
    ],
    relevantForms: [
        'Policy Inquiry',
        'Customer KYC',
        'Service Feedback',
        'Claim Request',
        'Renewal Reminder'
    ],
    closing: {
        title: "Ready to transform your policyholder experience?",
        subtitle: "Discover how WhatsForm can bring speed, simplicity, and security to your insurance operations.",
        cta: "Book an Insurance Demo"
    }
};

