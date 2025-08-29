import { UserPlusIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowTrendingDownIcon } from '../../icons';

export const marketingPageData = {
    hero: {
        title: "Turn Conversations into Revenue with WhatsApp Marketing",
        subtitle: "Capture leads, automate engagement, and drive loyalty. WhatsForm makes WhatsApp Marketing work smarter for your business.",
        cta: "Book Demo"
    },
    sections: [
        {
            type: 'centeredText',
            title: "Growth-focused marketing teams in eCommerce trust WhatsForm to unlock WhatsApp’s full business potential",
            subtitle: "Turn touchpoints from every channel into meaningful WhatsApp conversations"
        },
        {
            type: 'featureList',
            features: [
                { title: "Automatic lead capture", icon: UserPlusIcon },
                { title: "Two-way real-time engagement", icon: ChatBubbleOvalLeftEllipsisIcon },
                { title: "Reduced acquisition costs", icon: ArrowTrendingDownIcon }
            ]
        },
        {
            type: 'stats',
            stats: [
                { value: "85%", label: "Higher Response Rate" },
                { value: "3X", label: "Higher ROI" },
                { value: "4X", label: "Lower Customer Acquisition" }
            ],
            description: "WhatsApp outperforms Email, SMS and other digital channels with…"
        },
        {
            type: 'contentWithImage',
            title: 'Build your audience and drive engagement',
            subtitle: 'ACQUISITION',
            text: 'Cut acquisition costs by eliminating form drop-offs and capture verified phone numbers instead of unreliable form data.',
            image: 'https://picsum.photos/seed/marketing1/500/400',
            features: ['Broadcast Campaigns', 'Click-to-WhatsApp Ads', 'WhatsApp Flows', 'Instagram DM Automation']
        },
        {
            type: 'contentWithImage',
            title: 'Convert followers into contacts with AI',
            text: 'Let AI handle the transition from Instagram DMs to WhatsApp, creating verified contacts from your social media followers.',
            image: 'https://picsum.photos/seed/marketing2/500/400',
            reverse: true,
            badge: 'OFFICIAL GOOGLE PARTNER',
            specialText: 'Coming Soon: Google Click-to-Message integration exclusively available through WhatsForm. WhatsForm gives you first-mover advantage in capturing traffic and high-intent leads directly from Google Search.'
        },
        {
            type: 'contentWithImage',
            title: 'Complete your checkout within WhatsApp',
            subtitle: 'CONVERSION',
            text: 'Drive more sales by letting customers discover, select and buy products without ever leaving their WhatsApp conversation.',
            image: 'https://picsum.photos/seed/marketing3/500/400',
            features: ['WhatsApp Payments', 'Guided Selling Chatbot', 'Smart Retargeting']
        },
        {
            type: 'contentWithImage',
            title: 'Remove checkout friction or drop-offs',
            text: 'Process payments directly within WhatsApp conversations, eliminating the need to switch between apps.',
            image: 'https://picsum.photos/seed/marketing4/500/400',
            reverse: true
        },
        {
            type: 'contentWithImage',
            title: 'Turn one-time buyers into loyal advocates',
            subtitle: 'RETENTION',
            text: 'Create exceptional post-purchase experiences that reduce churn and increase lifetime value.',
            image: 'https://picsum.photos/seed/marketing5/500/400',
            features: ['Re-purchase Automations', 'Shipping Automations', 'Customer Reviews Chatbot', 'AI-powered Support Agent']
        },
        {
            type: 'contentWithImage',
            title: 'Resolve 60% of customer queries automagically',
            text: 'Our AI support agent answers FAQs and closes tickets without human intervention, freeing your team for complex issues.',
            image: 'https://picsum.photos/seed/marketing6/500/400',
            reverse: true
        },
    ],
    closing: {
        title: "Go further than just WhatsApp broadcasts with WhatsForm designed for Marketers.",
        subtitle: "Start driving measurable results across your entire customer journey today!",
        cta: "Book Demo"
    }
};