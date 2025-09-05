
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const spaSalonData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Spas & Salons",
        subtitle: `Streamline appointment booking, manage client communication, and send promotional offers to keep your appointment book full.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Crafting a Relaxing Client Experience",
            subtitle: "For spas and salons, a seamless booking and communication process is part of the luxury experience. WhatsForm helps you deliver that from the very first touchpoint."
        },
        {
            type: 'contentWithImage',
            subtitle: 'APPOINTMENT BOOKING',
            title: 'Your 24/7 Virtual Receptionist',
            text: 'Allow clients to book their appointments for massages, facials, or haircuts anytime on WhatsApp. An AI bot can show available services and time slots, confirm the booking, and send automated reminders.',
            image: 'https://picsum.photos/seed/spa1/500/400',
            features: [
                "24/7 conversational appointment booking",
                "Automated reminders to reduce no-shows",
                "Easy rescheduling and cancellation",
                "Upsell opportunities for add-on services"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT ENGAGEMENT',
            title: 'Build a Loyal Clientele',
            text: 'Use WhatsApp to send exclusive offers, announce new services, or share wellness tips with your clients. This direct and personal communication channel helps build strong relationships and encourages repeat business.',
            image: 'https://picsum.photos/seed/spa2/500/400',
            reverse: true,
            features: [
                "Broadcast promotional offers and packages",
                "Send personalized birthday and anniversary discounts",
                "Keep your clients engaged between visits",
                "Collect valuable feedback to improve your services"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Business",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Bookings",
                    description: "A simple, convenient booking process encourages more clients to book appointments, filling your schedule."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced No-Shows",
                    description: "Automated reminders on a high-visibility platform like WhatsApp significantly improve attendance."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Staff Efficiency",
                    description: "Automate booking and reminders, freeing up your reception staff to focus on providing excellent in-person service."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Client Retention",
                    description: "Personalized communication and exclusive offers make your clients feel valued and keep them coming back."
                }
            ]
        }
    ],
    relevantForms: [
        'Book Parlour',
        'Service booking',
        'Feedback Form',
        'Appointment booking',
        'Customer Satisfaction'
    ],
    closing: {
        title: "Ready to offer a more seamless and relaxing client experience?",
        subtitle: "Discover how WhatsForm can help you manage your spa or salon more efficiently.",
        cta: "Book a Demo"
    }
};

