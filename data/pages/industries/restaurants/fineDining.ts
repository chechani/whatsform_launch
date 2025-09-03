
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const fineDiningData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Fine Dining Restaurants",
        subtitle: `Elevate the guest experience with seamless table reservations, private event inquiries, and an exclusive communication channel for your patrons.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "An Experience of Effortless Elegance",
            subtitle: "For fine dining establishments, the guest experience begins long before they arrive. WhatsForm helps you deliver a sophisticated and seamless service from the very first interaction."
        },
        {
            type: 'contentWithImage',
            subtitle: 'TABLE RESERVATIONS',
            title: 'Your 24/7 AI-Powered Maître d\'',
            text: 'Allow guests to make reservations anytime on WhatsApp. An AI agent can check table availability in real-time, handle special requests, and confirm the booking instantly, all with a touch of elegance.',
            image: 'https://picsum.photos/seed/dine1/500/400',
            features: [
                "24/7 conversational table reservations",
                "Integration with your reservation system",
                "Automated confirmations and reminders",
                "Manage special requests and dietary notes"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRIVATE DINING & EVENTS',
            title: 'Streamline Your Event Bookings',
            text: 'Use a guided conversational form to handle inquiries for private dining and events. Collect details about the occasion, number of guests, and specific requirements, allowing your events team to follow up with a tailored proposal.',
            image: 'https://picsum.photos/seed/dine2/500/400',
            reverse: true,
            features: [
                "Structured inquiry forms for private events",
                "Instantly share event menus and packages",
                "Qualify leads for your events team",
                "Enhance your reputation for professional service"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Restaurant",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Guest Experience",
                    description: "Provide a modern, convenient, and sophisticated booking experience that matches your brand."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Staff Efficiency",
                    description: "Reduce time spent on phone reservations, allowing your staff to focus on in-house guests."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced No-Shows",
                    description: "Automated, personal reminders on WhatsApp are highly effective at ensuring guests honor their reservations."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Increased Private Bookings",
                    description: "A professional and efficient inquiry process helps you convert more high-value event leads."
                }
            ]
        }
    ],
    relevantForms: [
        'Book Table',
        'Group Booking',
        'Special Request',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to elevate your guest service to the next level?",
        subtitle: "Discover how WhatsForm can enhance the fine dining experience for your patrons.",
        cta: "Book a Demo"
    }
};