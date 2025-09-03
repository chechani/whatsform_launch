
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const traditionalAdvertisingData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Traditional Advertising",
        subtitle: "Bridge the gap between your offline ads and digital engagement. Drive traffic from print, radio, and TV to interactive WhatsApp conversations that convert.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Make Your Offline Ads Actionable",
            subtitle: `Traditional ads build brand awareness, but they often lack a direct call to action. By integrating a WhatsApp QR code or number, you can instantly turn passive viewers into active leads.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'QR CODES & KEYWORDS',
            title: 'The Bridge from Physical to Digital',
            text: 'Place a unique QR code or a simple keyword (e.g., "Text OFFER to...") on your print ads, billboards, or TV commercials. When users engage, they are instantly connected to an AI-powered bot on WhatsApp that can continue the conversation, capture their details, and guide them down the funnel.',
            image: 'https://picsum.photos/seed/trad-ad1/500/400',
            features: [
                "Drive measurable traffic from offline campaigns",
                "Instantly engage interested prospects 24/7",
                "Capture verified phone numbers for follow-up",
                "Track the performance of different ad placements"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'CONTESTS & GIVEAWAYS',
            title: 'Boost Engagement and Capture Data',
            text: 'Run interactive contests or giveaways directly on WhatsApp. Users can enter by completing a simple conversational form, providing valuable marketing data while creating a fun and engaging brand experience.',
            image: 'https://picsum.photos/seed/trad-ad2/500/400',
            reverse: true,
            features: [
                "Increase ad engagement and participation",
                "Build a high-quality marketing database",
                "Run promotions with instant gratification",
                "Go viral with shareable WhatsApp campaigns"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Campaigns",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Measure Offline ROI",
                    description: "Finally, get clear metrics on how your traditional advertising is performing by tracking WhatsApp engagement."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Instant Lead Capture",
                    description: "Convert interest into actionable leads the moment a prospect sees your ad, without any friction."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Engagement",
                    description: "Interactive WhatsApp experiences are far more engaging than simply directing users to a static website."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Build a Subscriber List",
                    description: "Every interaction helps you build a valuable list of opted-in contacts for future marketing."
                }
            ]
        }
    ],
    relevantForms: [
        'Lead Generation Form',
        'Contest Entry Form',
        'Event RSVP',
        'Quotation Request Form',
        'Customer Satisfaction'
    ],
    closing: {
        title: "Ready to connect your traditional ads to the digital world?",
        subtitle: "Discover how WhatsForm can supercharge your offline marketing efforts.",
        cta: "Book a Demo"
    }
};