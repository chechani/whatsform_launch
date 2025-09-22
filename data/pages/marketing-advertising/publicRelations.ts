

import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const publicRelationsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Public Relations",
        subtitle: "Manage media inquiries, distribute press releases, and coordinate events with a streamlined and professional WhatsApp communication platform.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Modernizing PR Communication",
            subtitle: `In the fast-paced world of public relations, timely and organized communication is everything. WhatsForm helps PR professionals manage relationships and disseminate information with unparalleled speed and efficiency.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'MEDIA INQUIRY MANAGEMENT',
            title: 'Your 24/7 Virtual Press Officer',
            text: 'Use a dedicated WhatsApp number as your media hotline. An AI agent can handle initial inquiries from journalists, provide them with press kits and official statements, and route high-priority requests to the appropriate PR manager, ensuring no opportunity is missed.',
            image: 'https://picsum.photos/seed/pr1/500/400',
            features: [
                "Instant, 24/7 handling of media inquiries",
                "Automated distribution of press kits and materials",
                "Intelligent routing of requests to the right person",
                "Maintain a complete log of all media interactions"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'EVENT COORDINATION & INVITATIONS',
            title: 'Seamless Management for Press Events',
            text: 'Manage your press conferences and launch events effortlessly. Send personalized invitations to your media list, collect RSVPs through a conversational form, and send automated reminders and event updates to ensure maximum attendance.',
            image: 'https://picsum.photos/seed/pr2/500/400',
            reverse: true,
            features: [
                "Personalized, trackable event invitations",
                "Conversational RSVP collection",
                "Automated event reminders and updates",
                "Post-event feedback collection and follow-up"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your PR Efforts",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Responsiveness",
                    description: "Provide journalists with the instant information they need, building a reputation as a responsive and reliable source."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Efficiency",
                    description: "Automate routine communication tasks, freeing up your team to focus on strategic relationship-building."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Organization",
                    description: "Keep all media interactions and event logistics organized and tracked in one central platform."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Better Event Attendance",
                    description: "A seamless RSVP process and timely reminders lead to higher and more predictable event turnouts."
                }
            ]
        }
    ],
    relevantForms: [
        'Event RSVP',
        'Media Coverage',
        'Sponsorship Inquiry',
        'Event Registration',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to streamline your public relations workflow?",
        subtitle: "Discover how WhatsForm can help you manage media relations and events more effectively.",
        cta: "Book a Demo"
    }
};

