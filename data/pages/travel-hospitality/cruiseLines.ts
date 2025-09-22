
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const cruiseLinesData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Cruise Lines",
        subtitle: `Enhance the passenger experience from booking to disembarkation with automated cruise reservations, on-board services, and shore excursion management.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Voyage of Digital Convenience",
            subtitle: "For cruise lines, creating a memorable and seamless passenger experience is paramount. WhatsForm helps you deliver exceptional service on the app travelers use to stay connected."
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRE-CRUISE ENGAGEMENT',
            title: 'Build Excitement and Prepare Your Guests',
            text: 'Engage guests on WhatsApp from the moment they book. Send automated countdowns, allow them to pre-book shore excursions and dining reservations through conversational forms, and answer common questions with an AI pre-travel assistant.',
            image: 'https://picsum.photos/seed/cruise1/500/400',
            features: [
                "Automated pre-cruise communication drip",
                "Conversational booking for shore excursions",
                "AI assistant for FAQs about the cruise",
                "Increase ancillary revenue before the trip begins"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ON-BOARD GUEST SERVICES',
            title: 'Your Personal Concierge at Sea',
            text: 'Provide a virtual concierge service on WhatsApp for your guests while they are on board. They can view the daily itinerary, make restaurant reservations, or contact guest services with a simple message, enhancing their on-board experience.',
            image: 'https://picsum.photos/seed/cruise2/500/400',
            reverse: true,
            features: [
                "On-demand access to daily schedules and events",
                "In-chat booking for on-board activities",
                "Instant communication with guest services",
                "Improved guest convenience and satisfaction"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Cruise Line",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Passenger Experience",
                    description: "A seamless, convenient communication channel from pre-cruise to post-cruise delights your guests."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased On-Board Revenue",
                    description: "Making it easy to book excursions, dining, and other services before and during the cruise boosts ancillary sales."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Staff Efficiency",
                    description: "Automate routine inquiries and requests, allowing your on-board staff to focus on high-quality guest interactions."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Higher Guest Loyalty",
                    description: "A superior, tech-enabled experience leads to better reviews, referrals, and repeat bookings."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Service booking',
        'Feedback Form',
        'Inquiry',
        'Complaint'
    ],
    closing: {
        title: "Ready to set sail on a new era of guest communication?",
        subtitle: "Discover how WhatsForm can elevate your cruise line's passenger experience.",
        cta: "Book a Demo"
    }
};

