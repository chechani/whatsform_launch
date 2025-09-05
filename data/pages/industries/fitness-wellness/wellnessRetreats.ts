
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const wellnessRetreatsData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Wellness Retreats",
        subtitle: `Streamline your booking process, manage guest inquiries, and send pre-arrival information to create a seamless and relaxing retreat experience.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Curating a Journey of Tranquility",
            subtitle: "For wellness retreats, the guest experience should be serene from the very first point of contact. WhatsForm helps you automate your communications so you can focus on creating transformative experiences."
        },
        {
            type: 'contentWithImage',
            subtitle: 'INQUIRY & BOOKING',
            title: 'Your 24/7 Virtual Retreat Coordinator',
            text: 'Use an AI bot on WhatsApp to handle inquiries about your upcoming retreats. The bot can provide details on packages, share itineraries, answer common questions, and guide guests through a conversational booking form.',
            image: 'https://picsum.photos/seed/retreat1/500/400',
            features: [
                "24/7 automated inquiry handling",
                "Share detailed retreat information and itineraries",
                "Conversational booking and payment process",
                "Qualify leads for personalized follow-up"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PRE-ARRIVAL COMMUNICATION',
            title: 'Prepare Your Guests for Their Journey',
            text: 'Once a guest has booked, enroll them in an automated pre-arrival drip campaign. Send them a welcome pack, a packing checklist, travel guidance, and gentle reminders, ensuring they arrive prepared and relaxed.',
            image: 'https://picsum.photos/seed/retreat2/500/400',
            reverse: true,
            features: [
                "Automated pre-arrival information sequence",
                "Collect dietary restrictions and preferences",
                "Build excitement and reduce pre-travel anxiety",
                "Provide a high-touch, personal experience"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Retreats",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Bookings",
                    description: "An instant, informative, and easy booking process converts more interested prospects into guests."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Guest Experience",
                    description: "A seamless, proactive communication process creates a stress-free experience from start to finish."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Operational Efficiency",
                    description: "Automate routine inquiries and pre-arrival communication, freeing up your team to focus on retreat curation."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Guest Satisfaction",
                    description: "A well-prepared guest is a happy guest. Proactive communication leads to better reviews and referrals."
                }
            ]
        }
    ],
    relevantForms: [
        'Booking Form',
        'Inquiry',
        'Feedback Form',
        'Health Assessment',
        'Payment Form'
    ],
    closing: {
        title: "Ready to create a truly seamless wellness journey?",
        subtitle: "Discover how WhatsForm can help you manage your wellness retreats more effectively.",
        cta: "Book a Demo"
    }
};

