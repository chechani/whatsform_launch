
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const coWorkingSpacesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Co-working Spaces",
        subtitle: `Automate membership inquiries, streamline tour bookings, and manage member communications to build a vibrant and efficient workspace community.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Building the Modern Workspace Community",
            subtitle: "For co-working spaces, creating a seamless experience for members—from their first inquiry to their daily needs—is key. WhatsForm helps you manage your community with ease on WhatsApp."
        },
        {
            type: 'contentWithImage',
            subtitle: 'MEMBERSHIP INQUIRIES & TOURS',
            title: 'Your 24/7 Community Manager',
            text: 'Use an AI bot on WhatsApp to handle inquiries about your space. The bot can provide details on membership plans, answer questions about amenities, and guide potential members through a conversational form to book a tour.',
            image: 'https://picsum.photos/seed/cowork1/500/400',
            features: [
                "24/7 automated inquiry handling",
                "Conversational tour booking and scheduling",
                "Qualify leads for different membership types",
                "Reduce the administrative load on your community manager"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'MEMBER COMMUNICATION & SUPPORT',
            title: 'A Central Hub for Your Community',
            text: 'Keep your members informed and engaged. Use WhatsApp broadcasts for community announcements, event invitations, and operational updates. Allow members to book meeting rooms or report issues via simple conversational forms.',
            image: 'https://picsum.photos/seed/cowork2/500/400',
            reverse: true,
            features: [
                "Broadcast community events and announcements",
                "Automated meeting room booking",
                "Simple issue reporting for members (e.g., Wi-Fi)",
                "Build a strong and connected community"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Space",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Membership",
                    description: "A fast, convenient inquiry and tour booking process converts more prospects into members."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Member Experience",
                    description: "Providing instant support and easy access to services makes for a happier, more productive community."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Operational Efficiency",
                    description: "Automate routine tasks like tour scheduling and room booking, freeing up your staff for community-building."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Stronger Community",
                    description: "A central and engaging communication channel helps foster a sense of belonging among your members."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Membership Registration',
        'Feedback Form',
        'Service booking',
        'Event RSVP'
    ],
    closing: {
        title: "Ready to build a smarter, more connected co-working community?",
        subtitle: "Discover how WhatsForm can help you manage your space and engage your members more effectively.",
        cta: "Book a Demo"
    }
};

