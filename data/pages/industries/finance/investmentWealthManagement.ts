
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const investmentWealthManagementData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Investment & Wealth Management",
        subtitle: "Onboard new clients securely, provide personalized portfolio updates, and schedule advisor meetings on a compliant and confidential channel.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building Trust Through Modern Communication",
            subtitle: `In wealth management, strong client relationships are paramount. WhatsApp offers a personal and convenient channel to deliver the high-touch, proactive service your clients expect.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'SECURE CLIENT ONBOARDING',
            title: 'A Seamless and Compliant First Impression',
            text: 'Streamline your client onboarding and KYC process with a guided conversational form on WhatsApp. Securely collect personal information, risk appetite details, and necessary identity documents in a way that is both professional and convenient for your new clients.',
            image: 'https://picsum.photos/seed/invest1/500/400',
            features: [
                "Conversational KYC and risk profiling",
                "Secure, encrypted document submission",
                "Full audit trail for compliance",
                "Faster and more efficient onboarding"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PROACTIVE PORTFOLIO & MARKET UPDATES',
            title: 'Keep Your Clients Informed and Engaged',
            text: 'Use scheduled broadcasts to send personalized portfolio summaries or important market updates to segmented client groups. An AI bot can also handle on-demand requests for current portfolio value or recent transactions, providing instant service.',
            image: 'https://picsum.photos/seed/invest2/500/400',
            reverse: true,
            features: [
                "Segmented broadcasts for targeted updates",
                "On-demand portfolio information via AI",
                "Proactive communication that builds trust",
                "Share insights and reports securely"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Firm",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Client Relationships",
                    description: "A personal, proactive, and convenient communication channel strengthens client trust and loyalty."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Advisor Efficiency",
                    description: "Automate routine updates and information requests, freeing up advisors to focus on strategic advice."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Streamlined Compliance",
                    description: "Maintain meticulous, auditable records of all client communications to meet regulatory requirements."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Onboarding",
                    description: "A modern, digital onboarding process impresses new clients and gets them invested faster."
                }
            ]
        }
    ],
    relevantForms: [
        'Customer KYC',
        'Account Opening Request',
        'Consultation',
        'Service Feedback'
    ],
    closing: {
        title: "Ready to elevate your client advisory service?",
        subtitle: "Discover how WhatsForm can provide the secure and personal communication your clients deserve.",
        cta: "Book a Demo"
    }
};