

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const streamingServiceData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Streaming Services",
        subtitle: `Automate subscription support, provide personalized content recommendations, and collect user feedback to reduce churn and increase viewership.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Keep Your Audience Streaming",
            subtitle: "For subscription-based streaming services, user retention is the name of the game. WhatsForm helps you provide a seamless support and engagement experience on WhatsApp."
        },
        {
            type: 'contentWithImage',
            subtitle: 'SUBSCRIPTION & ACCOUNT SUPPORT',
            title: 'Your 24/7 AI-Powered Support Agent',
            text: 'Use an AI bot on WhatsApp to handle common subscription and billing inquiries. The bot can help users upgrade their plan, reset their password, or troubleshoot streaming issues, providing instant support and reducing churn.',
            image: 'https://picsum.photos/seed/stream1/500/400',
            features: [
                "24/7 automated support for subscription management",
                "Resolve common technical and billing issues",
                "Reduce the burden on your human support agents",
                "Improve user satisfaction and retention"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PERSONALIZED CONTENT ENGAGEMENT',
            title: 'Drive Discovery and Viewership',
            text: 'Use WhatsApp to send personalized recommendations for new shows or movies based on a user\'s viewing history. Run interactive polls and quizzes about your content to keep your audience engaged and excited about your platform.',
            image: 'https://picsum.photos/seed/stream2/500/400',
            reverse: true,
            features: [
                "Personalized content recommendations",
                "Interactive quizzes and polls to boost engagement",
                "Announce new season releases and movie premieres",
                "Keep your service top-of-mind for your subscribers"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Platform",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Reduced Subscriber Churn",
                    description: "Instant, effective support and engaging content discovery help to keep your subscribers happy and active."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Viewership",
                    description: "Personalized recommendations on a high-visibility channel drive users back to your platform to watch more content."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Lower Support Costs",
                    description: "Automating the most common support queries allows you to scale your subscriber base without scaling your support team."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Valuable Audience Insights",
                    description: "Collect direct feedback on your content and platform features through conversational surveys on WhatsApp."
                }
            ]
        }
    ],
    relevantForms: [
        'Subscription Sign-Up',
        'Support Ticket',
        'Feedback Form',
        'Complaint'
    ],
    closing: {
        title: "Ready to build a more engaging streaming experience?",
        subtitle: "Discover how WhatsForm can help you reduce churn and increase viewership for your service.",
        cta: "Book a Demo"
    }
};

