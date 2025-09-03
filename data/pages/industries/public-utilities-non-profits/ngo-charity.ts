
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const ngoCharityData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for NGOs & Charities",
        subtitle: `Amplify your impact by automating donation collection, managing volunteer registration, and communicating with beneficiaries on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Connect with Your Community, Drive Your Mission",
            subtitle: "For non-profit organizations, building a strong community of donors, volunteers, and beneficiaries is essential. WhatsForm provides an accessible and efficient platform to engage your supporters."
        },
        {
            type: 'contentWithImage',
            subtitle: 'DONATION & FUNDRAISING',
            title: 'Make Giving Easy and Instant',
            text: 'Run fundraising campaigns directly on WhatsApp. Share a link or QR code that launches a conversational donation form. Integrate with payment gateways to accept contributions securely within the chat, making it effortless for your supporters to contribute to your cause.',
            image: 'https://picsum.photos/seed/ngo1/500/400',
            features: [
                "Conversational donation forms",
                "Secure in-chat payment integration",
                "Automated donation receipts and thank you messages",
                "Higher conversion rates for fundraising appeals"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'VOLUNTEER MANAGEMENT',
            title: 'Recruit and Coordinate Your Volunteers',
            text: 'Streamline your volunteer management process. Use WhatsApp forms for new volunteer sign-ups and to collect availability. Send broadcast messages to specific volunteer groups to coordinate for events and drives, ensuring everyone stays informed.',
            image: 'https://picsum.photos/seed/ngo2/500/400',
            reverse: true,
            features: [
                "Simple volunteer registration forms",
                "Broadcasts for event coordination and updates",
                "Segment volunteers into groups based on skills",
                "Improve volunteer engagement and retention"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Organization",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Donations",
                    description: "A simple, frictionless donation process on a trusted platform encourages more people to give."
                },
                {
                    icon: CheckCircleIcon,
                    title: "More Engaged Volunteers",
                    description: "Efficient communication and coordination make for a better, more organized volunteer experience."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Wider Reach",
                    description: "Leverage the massive user base of WhatsApp to spread awareness and reach new potential supporters."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Admin Work",
                    description: "Automate manual tasks like sending receipts and coordinating volunteers, freeing up your team for mission-critical work."
                }
            ]
        }
    ],
    relevantForms: [
        'Signup Volunteer',
        'Donation Form',
        'Event Registration',
        'Feedback Form',
        'Survey'
    ],
    closing: {
        title: "Ready to amplify your social impact?",
        subtitle: "Discover how WhatsForm can help your NGO or charity connect with its community more effectively.",
        cta: "Book a Demo for Non-Profits"
    }
};