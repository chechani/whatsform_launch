import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const contentCreatorInfluencerData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Content Creators & Influencers",
        subtitle: `Engage your community, manage brand collaborations, and monetize your influence with powerful automation on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Build a Direct Connection with Your Audience",
            subtitle: "Move beyond the algorithms of social media. WhatsForm helps you build a direct and personal relationship with your most dedicated followers, turning them into a true community."
        },
        {
            type: 'contentWithImage',
            subtitle: 'COMMUNITY ENGAGEMENT',
            title: 'Your Exclusive Fan Channel',
            text: 'Create a VIP community on WhatsApp. Use it to share exclusive behind-the-scenes content, run polls to decide your next video, and host Q&A sessions. This direct line to your fans builds unparalleled loyalty.',
            image: 'https://picsum.photos/seed/influencer1/500/400',
            features: [
                "Share exclusive content with your top supporters",
                "Run interactive polls and Q&A sessions",
                "Build a community that you own and control",
                "Drive traffic directly to your new content"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'BRAND COLLABORATIONS & MONETIZATION',
            title: 'Streamline Your Business Operations',
            text: 'Use a professional WhatsApp number to manage inquiries from brands. An AI bot can provide your media kit and answer initial questions, while conversational forms can be used to sell your own merchandise or digital products directly to your audience.',
            image: 'https://picsum.photos/seed/influencer2/500/400',
            reverse: true,
            features: [
                "Automate initial responses to brand inquiries",
                "Sell merchandise or digital products via chat",
                "Manage sign-ups for paid workshops or courses",
                "Monetize your audience in new and effective ways"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Brand",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Deeper Audience Loyalty",
                    description: "A direct, personal communication channel creates a much stronger bond with your followers than social media alone."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Monetization",
                    description: "Create new, direct-to-fan revenue streams for merchandise, digital products, or exclusive content."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Efficiency",
                    description: "Save time by automating the initial stages of brand partnership discussions and community announcements."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Own Your Community",
                    description: "Build a valuable contact list that isn't dependent on the changing algorithms of social platforms."
                }
            ]
        }
    ],
    relevantForms: [
        'Influencer Collaboration',
        'Fan Club',
        'Sponsorship Inquiry',
        'Merch Order Form',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to level up your creator business?",
        subtitle: "Discover how WhatsForm can help you build, engage, and monetize your community.",
        cta: "Book a Demo"
    }
};

