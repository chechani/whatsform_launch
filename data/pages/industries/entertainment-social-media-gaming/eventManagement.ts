
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const eventManagementData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Event Management",
        subtitle: `Automate ticket sales, send event updates and reminders, and provide on-the-day attendee support to create flawless event experiences.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Orchestrating the Perfect Event Experience",
            subtitle: "For event management companies, seamless communication with attendees, vendors, and staff is critical. WhatsForm helps you automate your event workflows from promotion to post-event feedback."
        },
        {
            type: 'contentWithImage',
            subtitle: 'TICKETING & REGISTRATION',
            title: 'A Frictionless Path to Attendance',
            text: 'Sell tickets and manage registrations directly on WhatsApp. A conversational form can guide attendees through ticket selection, collect their details, and process payments, delivering the e-ticket instantly to their chat.',
            image: 'https://picsum.photos/seed/event1/500/400',
            features: [
                "Conversational ticket sales and registration",
                "Instant e-ticket delivery with QR code",
                "Automated confirmations and receipts",
                "Higher conversion rates than web-based ticketing"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ATTENDEE COMMUNICATION',
            title: 'Keep Your Attendees Informed and Engaged',
            text: 'Use WhatsApp to send out crucial event information. Broadcast schedule updates, speaker announcements, and venue maps. Send automated reminders before the event to reduce no-shows and build excitement.',
            image: 'https://picsum.photos/seed/event2/500/400',
            reverse: true,
            features: [
                "Broadcast event schedules and updates",
                "Automated reminders to maximize attendance",
                "On-site support bot for attendee questions",
                "Collect post-event feedback to improve future events"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Events",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Ticket Sales",
                    description: "A simple, mobile-first ticketing process removes friction and makes it easier for people to buy."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Attendee Experience",
                    description: "Proactive, convenient communication ensures your attendees have a smooth and enjoyable experience."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Administrative Work",
                    description: "Automate registration, ticketing, and communication, freeing up your team to focus on event execution."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Attendance Rates",
                    description: "Timely reminders on a high-visibility channel like WhatsApp significantly reduce no-show rates."
                }
            ]
        }
    ],
    relevantForms: [
        'Event Registration',
        'Event RSVP',
        'Event Feedback',
        'Event Ticket Booking',
        'Sponsorship Inquiry'
    ],
    closing: {
        title: "Ready to create unforgettable event experiences?",
        subtitle: "Discover how WhatsForm can help you manage your events with more efficiency and engagement.",
        cta: "Book a Demo"
    }
};