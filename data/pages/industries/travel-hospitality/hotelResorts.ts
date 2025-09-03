
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const hotelResortsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Hotels & Resorts",
        subtitle: `Enhance the guest experience from booking to check-out. Automate reservations, manage guest services, and collect valuable feedback on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Crafting the Perfect Guest Journey",
            subtitle: "In hospitality, a seamless and personal experience is everything. WhatsForm helps you deliver exceptional service on the communication platform your guests prefer."
        },
        {
            type: 'contentWithImage',
            subtitle: 'BOOKING & RESERVATIONS',
            title: 'Your 24/7 AI-Powered Concierge',
            text: 'Allow guests to check room availability, view types, and make reservations directly on WhatsApp. An AI agent can handle the entire booking process, answer questions about amenities, and integrate with your booking engine in real-time.',
            image: 'https://picsum.photos/seed/hotel1/500/400',
            features: [
                "24/7 conversational room booking",
                "Real-time integration with your PMS/booking engine",
                "Automated booking confirmations and reminders",
                "Upsell opportunities for spa services or dining"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'IN-STAY GUEST SERVICES',
            title: 'Enhance Their Stay, Instantly',
            text: 'Provide your guests with a virtual concierge on WhatsApp. They can request room service, book a spa appointment, or ask for fresh towels with a simple message. These requests can be automatically routed to the correct department for swift service.',
            image: 'https://picsum.photos/seed/hotel2/500/400',
            reverse: true,
            features: [
                "On-demand room service and housekeeping requests",
                "Easy booking for spa, dining, and other activities",
                "Instant answers to questions about the property",
                "Improved guest satisfaction and operational efficiency"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Property",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Direct Bookings",
                    description: "A simple, conversational booking process encourages more guests to book directly, reducing OTA commissions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Guest Experience",
                    description: "Providing instant, convenient service on a familiar platform delights guests and leads to better reviews."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Staff Efficiency",
                    description: "Automate routine requests, freeing up your front desk and concierge staff to focus on high-touch guest interactions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Ancillary Revenue",
                    description: "Proactively offer and make it easy to book additional services like spa treatments, tours, and dining."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Feedback Form',
        'Service booking',
        'Inquiry'
    ],
    closing: {
        title: "Ready to redefine hospitality for the modern traveler?",
        subtitle: "Discover how WhatsForm can enhance your guest experience and streamline your operations.",
        cta: "Book a Hospitality Demo"
    }
};