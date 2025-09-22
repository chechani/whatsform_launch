

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const contentCreationData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Content Creators & Influencers",
        subtitle: "Engage your audience, manage brand collaborations, and monetize your following with powerful WhatsApp automation tools.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Build a Direct Line to Your Community",
            subtitle: `Move beyond the algorithms of social media platforms and build a direct, personal connection with your most loyal fans on the platform they use most.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'AUDIENCE ENGAGEMENT',
            title: 'Your Exclusive Fan Club on WhatsApp',
            text: 'Create a VIP community on WhatsApp. Use conversational forms to run exclusive Q&As, polls, and giveaways. Send out early access links to new content and build a highly engaged community that feels truly connected to you.',
            image: 'https://picsum.photos/seed/creator1/500/400',
            features: [
                "Run interactive polls and Q&A sessions",
                "Offer exclusive content to your top fans",
                "Build a community you own and control",
                "Drive traffic directly to your new videos or posts"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'COLLABORATION MANAGEMENT',
            title: 'Streamline Your Brand Partnerships',
            text: 'Use a dedicated WhatsApp number to manage inquiries from brands. An AI bot can handle initial outreach, collect campaign requirements through a form, and provide your media kit automatically, helping you filter and manage collaboration opportunities efficiently.',
            image: 'https://picsum.photos/seed/creator2/500/400',
            reverse: true,
            features: [
                "Automate responses to collaboration inquiries",
                "Use forms to collect campaign briefs",
                "Instantly share your media kit and rate card",
                "Keep all brand communications organized"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Brand",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Deeper Audience Connection",
                    description: "Build a more personal and direct relationship with your followers, increasing loyalty and engagement."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Monetization",
                    description: "Create new revenue streams by offering exclusive content or paid subscriptions through WhatsApp."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Efficiency",
                    description: "Save time by automating the initial stages of brand partnership discussions and community management."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Own Your Audience",
                    description: "Build a valuable, first-party data asset that isn't dependent on the whims of social media algorithms."
                }
            ]
        }
    ],
    relevantForms: [
        'Influencer Collaboration',
        'Fan Club',
        'Sponsorship Inquiry',
        'Event RSVP',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to take your creator business to the next level?",
        subtitle: "Discover how WhatsForm can help you build and monetize your community.",
        cta: "Book a Demo"
    }
};

