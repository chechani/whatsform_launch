

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const gamingStudioData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Gaming Studios",
        subtitle: `Provide instant player support, announce new game releases and updates, and manage beta testing sign-ups to build a passionate player community.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Level Up Your Player Engagement",
            subtitle: "For gaming studios, a strong connection with your player base is crucial for success. WhatsForm helps you engage your community on the platform they use for daily chats."
        },
        {
            type: 'contentWithImage',
            subtitle: 'PLAYER SUPPORT',
            title: 'Your 24/7 In-Game Support Channel',
            text: 'Integrate WhatsApp as your primary player support channel. An AI bot can handle common technical issues, answer gameplay questions, and for complex problems, collect all necessary details to create a support ticket for your team.',
            image: 'https://picsum.photos/seed/game1/500/400',
            features: [
                "24/7 AI-powered player support",
                "Troubleshoot common technical and gameplay issues",
                "Structured bug reporting forms",
                "Reduce the load on your community managers"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'GAME LAUNCHES & UPDATES',
            title: 'Keep Your Community Hyped and Informed',
            text: 'Use WhatsApp broadcasts to announce new game releases, upcoming updates, or special in-game events. Build excitement and drive engagement by sending exclusive content and countdowns to your opted-in player base.',
            image: 'https://picsum.photos/seed/game2/500/400',
            reverse: true,
            features: [
                "Broadcast new release and update announcements",
                "Run sign-ups for beta tests and early access",
                "Share exclusive trailers and sneak peeks",
                "Drive pre-orders and day-one engagement"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Studio",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Stronger Player Community",
                    description: "Direct, engaging communication on a personal platform builds a loyal and passionate player base."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Player Satisfaction",
                    description: "Instant, effective support resolves player issues quickly, reducing frustration and churn."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Successful Game Launches",
                    description: "Directly reach and mobilize your community for new releases, leading to stronger launch day performance."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Valuable Player Feedback",
                    description: "Use WhatsApp to easily run surveys and collect feedback to inform your game development process."
                }
            ]
        }
    ],
    relevantForms: [
        'Support Ticket',
        'Feedback Form',
        'Beta Test Signup',
        'Event Registration'
    ],
    closing: {
        title: "Ready to build a more engaged player community?",
        subtitle: "Discover how WhatsForm can help your gaming studio connect with players like never before.",
        cta: "Book a Demo"
    }
};

