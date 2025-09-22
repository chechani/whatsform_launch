import {
    contentCreatorInfluencerData,
    eventManagementData,
    gamingStudioData,
    socialMediaPlatformData,
    streamingServiceData
} from './entertainment/index';

export const entertainmentPageData = {
    hero: {
        title: 'Entertainment, Social Media & Gaming',
        subtitle: 'Engage your audience and build communities with WhatsApp.',
    },
    subCategories: [
        {
            id: 'content-creator-influencer',
            slug: 'ContentCreatorInfluencerPage',
            title: 'Content Creator & Influencer',
            description: 'Build a direct relationship with your followers.',
        },
        {
            id: 'event-management',
            slug: 'EventManagementPage',
            title: 'Event Management',
            description: 'Seamless communication for unforgettable events.',
        },
        {
            id: 'gaming-studio',
            slug: 'GamingStudioPage',
            title: 'Gaming Studio',
            description: 'Engage your players with interactive experiences.',
        },
        {
            id: 'social-media-platform',
            slug: 'SocialMediaPlatformPage',
            title: 'Social Media Platform',
            description: 'Drive engagement and user retention.',
        },
        {
            id: 'streaming-service',
            slug: 'StreamingServicePage',
            title: 'Streaming Service',
            description: 'Personalized content recommendations and updates.',
        },
    ],
    sections: [
        {
            ...contentCreatorInfluencerData.sections[0],
            id: 'content-creator-influencer',
        },
        {
            ...eventManagementData.sections[0],
            id: 'event-management',
        },
        {
            ...gamingStudioData.sections[0],
            id: 'gaming-studio',
        },
        {
            ...socialMediaPlatformData.sections[0],
            id: 'social-media-platform',
        },
        {
            ...streamingServiceData.sections[0],
            id: 'streaming-service',
        },
    ],
    closing: {
        title: 'Transform Your Entertainment Business',
        subtitle: 'Engage your audience, build communities, and drive growth with WhatsForm.',
        cta: 'Get Started for Free',
    },
};
