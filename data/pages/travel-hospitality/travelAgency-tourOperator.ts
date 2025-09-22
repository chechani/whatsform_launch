
import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const travelAgencyTourOperatorData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Travel Agencies & Tour Operators",
        subtitle: `Automate package inquiries, streamline bookings, and send real-time itinerary updates to create unforgettable travel experiences.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Crafting a Seamless Travel Journey",
            subtitle: "For travel agencies, providing personalized service and timely information is key to success. WhatsForm helps you manage the entire client lifecycle on the platform travelers use most."
        },
        {
            type: 'contentWithImage',
            subtitle: 'INQUIRY & LEAD QUALIFICATION',
            title: 'Your 24/7 AI-Powered Travel Consultant',
            text: 'Use an AI bot to handle initial inquiries about travel packages 24/7. The bot can understand traveler preferences (destination, budget, travel dates), provide matching package options, and qualify leads before handing them over to your travel experts.',
            image: 'https://picsum.photos/seed/travel1/500/400',
            features: [
                "24/7 automated lead capture and qualification",
                "AI-powered travel package recommendations",
                "Instantly share brochures and itineraries",
                "Seamless handoff to human travel agents"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'BOOKING & ITINERARY MANAGEMENT',
            title: 'From Dream to Destination, Effortlessly',
            text: 'Simplify the booking process with conversational forms on WhatsApp. Once booked, keep travelers informed with automated itinerary updates, visa reminders, and pre-travel checklists, ensuring they are well-prepared and excited for their trip.',
            image: 'https://picsum.photos/seed/travel2/500/400',
            reverse: true,
            features: [
                "Conversational booking and payment process",
                "Automated itinerary and flight updates",
                "Scheduled pre-travel reminders and tips",
                "Provide support to travelers during their trip"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Agency",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Lead Conversion",
                    description: "Instant, 24/7 engagement and personalized recommendations help you convert more inquiries into bookings."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Traveler Experience",
                    description: "A seamless, proactive communication process from inquiry to post-trip feedback delights your clients."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Agent Productivity",
                    description: "Automate routine inquiries and updates, allowing your travel experts to focus on crafting complex itineraries."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Higher Customer Loyalty",
                    description: "A superior service experience leads to better reviews, more referrals, and repeat business."
                }
            ]
        }
    ],
    relevantForms: [
        'Travel Holidays',
        'Flight booking',
        'Visa01',
        'Feedback Form',
        'Inquiry'
    ],
    closing: {
        title: "Ready to design the future of travel?",
        subtitle: "Discover how WhatsForm can help your agency provide a world-class service to your clients.",
        cta: "Book a Demo"
    }
};

